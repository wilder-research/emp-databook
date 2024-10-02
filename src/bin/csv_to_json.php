<?php
ini_set("auto_detect_line_endings", 1);

$settings = [];

// absolute or relative to main.php
$settings["source"] = './csv-2021.csv';

// where to save the output profiles - relative to script's directory
$settings["destination"] = '../docs/csv-2021.json';

// metadata about columns within the csv
$settings['num_columns'] = 30; //total number of columns in csv

// order here must match column order in csv file
$settings["meta_columns"]['OrigRowNum']   = 0;
$settings["meta_columns"]['TableType']    = 1;
$settings["meta_columns"]['Topic']        = 2;
$settings["meta_columns"]['Question']     = 3;
$settings["meta_columns"]['TableSection'] = 4;
$settings["meta_columns"]['SectionOrder'] = 5;
$settings["meta_columns"]['RowType']      = 6; //6 = the 7th column in csv source file
//$settings["meta_columns"]['Qnum2021']      = 7; // 2024
$settings["meta_columns"]['Question_2021']      = 7; // 2021
$settings["meta_columns"]['Qnum2018']      = 8; // 2021
$settings["meta_columns"]['Topic2018']      = 9; //2021
//$settings["meta_columns"]['Topic2021']      = 8; // 2024
//$settings["meta_columns"]['Qnum2018']      = 9; // 2024
//$settings["meta_columns"]['Topic2018']      = 10; // 2024
// 7 = Qnum2018 (2021 file)
// 8 = Topic2018 (2021 file)
$settings["meta_columns"]['DataColStart'] = 10; //index # for first data column (7 in 2018, 10 in 2021)

// change working directory to this script's location
chdir( dirname ( __FILE__ ) );

// call main function with settings
read_csv_to_table($settings);

// done, exit
exit();

//******************
//* main function

function read_csv_to_table($settings=[]) {

  $source          = (string) $settings["source"];
  $destination     = (string) $settings["destination"];
  $question_col    = (int) $settings["meta_columns"]['Question'];
  $section_col     = (int) $settings["meta_columns"]['TableSection'];
  $rowtype_col     = (int) $settings["meta_columns"]['RowType'];
  $data_cols_start = (int) $settings["meta_columns"]['DataColStart'];
  
  $questions = [];
  $json_arr  = [];
  $json      = '';
  
  print "Question col is column: " . $question_col . PHP_EOL;
  print "Data cols start at: " . $data_cols_start . PHP_EOL;

  $csv_handle = null;
  
  if (file_exists($source) && is_readable($source)) {
    // open the source CSV data file for reading
    $csv_handle = @fopen($source, 'r');
  }
  
  if ($csv_handle) {
    print "Source file read! Starting to process data...\n\n";
  } else {
    exit("Unable to read source file: {$source} \n");
  }

  // for headers, keep track of previous header and question
  $prev_header = '';
  $prev_question = '';

  // keep track of data rows for look-back adding to prev_header / prev_question
  $curr_data_row = 0;
  $data_rows = [];

  $line_number = 0;
  while (($line = fgetcsv($csv_handle)) !== false) {

    $line_number++;
    
    // ignore first line (header)
    if ($line_number === 1) {
      continue;
    }
    
    // cell value for the Question column 
    $cell_question  = isset($line[$question_col]) ? trim($line[$question_col]) : '';
    // cell value for the Section column 
    $cell_section  = isset($line[$section_col]) ? trim($line[$section_col]) : '';
    // cell value for the RowType column 
    $cell_rowtype  = isset($line[$rowtype_col]) ? trim($line[$rowtype_col]) : '';

    // ignore any lines with empty key columns
    if ($cell_question === '' || $cell_section === '' || $cell_rowtype === '') {
      continue;
    }

    // Title row
    if ($cell_rowtype === 'Title') {
      // 1st data col holds title
      $json_arr[$cell_question]['title'] = trim($line[$data_cols_start]);
    }

    // Label row
    if ($cell_rowtype === 'Labels') {
      //add 1st data col plus all non-blank columns to labels
      for ($i=$data_cols_start; $i < count($line); $i++) {
        //stop adding labels if blank cell found past first cell
        if ($i > $data_cols_start && trim($line[$i]) === '') {
          break;
        } else {
          // add to labels array for current question
          $json_arr[$cell_question]['labels'][] = trim($line[$i]);
        }
      }
    }

    // Header row
    if ($cell_rowtype === 'Header') {
      // on each header line, dump any accumulated row data to previous question/header
      if ($data_rows) {
        $json_arr[$prev_question]['data'][$prev_header] = $data_rows;
        //reset curr data rows
        $data_rows = [];
      }
      // set this row as prev header for next lines processed
      $prev_header = trim($line[$data_cols_start]);
      $prev_question = trim($line[$question_col]);
      // reset data rows counter
      $curr_data_row = 0;
    }

    // Data row
    if ($cell_rowtype === 'Data') {
      for ($i=$data_cols_start; $i < count($line); $i++) {
        // stop adding data if blank cell found
        if (trim($line[$i]) === '') {
          break;
        } else {
          // build an array of arrays for data rows specific to preceeding question/header
          $data_rows[$curr_data_row][] = trim($line[$i]);
        }
      }
      $curr_data_row++;
    }

  } // end while $line = fgetcsv()

  // on file end, dump any accumulated row data to previous question/header
  if ($data_rows) {
    $json_arr[$prev_question]['data'][$prev_header] = $data_rows;
  }

  unset($line_number, $line, $cell_question, $cell_section, $cell_rowtype);

  //$slug = slugify($group['name']);
  //$output_path = $destination.$slug.'.php';
  $output_path = $destination;

  if (file_exists($output_path)) {
    if (!is_writable($output_path)) {
      exit("Unable to overwrite output file: {$output_path} \n");
    }
  } else {
    if (!touch($output_path)) {
      exit("Unable to create output file: {$output_path} \n"
            . "Please make sure the specified output directory exists.\n");
    }
  }

  $json .= try_json_encode($json_arr);

  // open or create the output file
  $output_file_handle = fopen($output_path, 'w+');

  // write out the JSON
  fwrite($output_file_handle, $json);

  // close the output file
  fclose($output_file_handle);

  print "Done!\n";

  // close the source CSV data file
  fclose($csv_handle);

}

//******************
//* helper functions

//try if json_encode works or errors
function try_json_encode($json_arr) {
  $json = json_encode($json_arr, JSON_INVALID_UTF8_SUBSTITUTE);
  switch (json_last_error()) {
      case JSON_ERROR_NONE:
          print ' - No errors' . PHP_EOL;
      break;
      case JSON_ERROR_DEPTH:
          print ' - Maximum stack depth exceeded' . PHP_EOL;
      break;
      case JSON_ERROR_STATE_MISMATCH:
          print ' - Underflow or the modes mismatch' . PHP_EOL;
      break;
      case JSON_ERROR_CTRL_CHAR:
          print ' - Unexpected control character found' . PHP_EOL;
      break;
      case JSON_ERROR_SYNTAX:
          print ' - Syntax error, malformed JSON' . PHP_EOL;
      break;
      case JSON_ERROR_UTF8:
          print ' - Malformed UTF-8 characters, possibly incorrectly encoded' . PHP_EOL;
      break;
      default:
          print ' - Unknown error' . PHP_EOL;
      break;
  }
  return $json;
}

//filter a string for output in HTML
function f( $str, $strip=false ) {
  if( $strip ) {
    return htmlspecialchars(strip_tags(trim($str)), ENT_QUOTES, 'UTF-8', false);
  }
  return htmlspecialchars(trim($str), ENT_QUOTES, 'UTF-8', false);
}

function is_label($str) {
  $str = strtolower(trim($str));
  return ($str === 'suppressed') ? true : false;
}

function get_currency($str='') {
  $str = trim((string) $str);
  return ($str !== '' && $str[0] === '$') ? $str[0] : '';
}

function clean_num_str($str='') {
  $str = str_replace(',', '', $str);
  $str = str_replace('%', '', $str);
  $str = str_replace('±', '', $str);
  $str = str_replace('$', '', $str);
  return $str;
}

function format_num($str='', $decimals=0) {
  if (is_label($str)) { return $str; }
  $currency = get_currency($str);
  $val = floatval(clean_num_str($str));
  return ($val !== 0.0) ? $currency.number_format($val, $decimals) : '';
}

function format_pct($str='', $decimals=1) {
  if (is_label($str)) { return $str; }
  $val = floatval(clean_num_str($str));
  return ($val !== 0.0) ? number_format($val, $decimals).'%' : '';
}

function format_num_moe($str='') {
  if (is_label($str)) { return $str; }
  return ($str !== '') ? '±'.format_num($str) : '';
}

function format_pct_moe($str='') {
  if (is_label($str)) { return $str; }
  return ($str !== '') ? '±'.format_pct($str) : '';
}

function slugify($s) {
  $s = strtolower($s);
  $s = preg_replace('/\(.*\)/', '', $s);
  $s = preg_replace('/ /', '-', $s);
  $s = preg_replace('/&/', 'and', $s);
  $s = trim($s, ' -');
  return $s;
}
