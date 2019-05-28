<?php
ini_set("auto_detect_line_endings", 1);

$settings = [];

// absolute or relative to main.php
$settings["source"] = './csv.csv';

// where to save the output profiles - relative to script's directory
$settings["destination"] = '../docs/csv.json';

// metadata about columns within the csv
$settings['num_columns'] = 27; //total number of columns in csv

// order here must match column order in csv file
$settings["meta_columns"]['OrigRowNum']   = 0;
$settings["meta_columns"]['TableType']    = 1;
$settings["meta_columns"]['Topic']        = 2;
$settings["meta_columns"]['Question']     = 3;
$settings["meta_columns"]['TableSection'] = 4;
$settings["meta_columns"]['SectionOrder'] = 5;
$settings["meta_columns"]['RowType']      = 6; //7th column in csv file

// change working directory to this script's location
chdir( dirname ( __FILE__ ) );

// call main function using vars from included settings.php
read_csv_to_table($settings);

// done, exit
exit();

//******************
//* main function

function read_csv_to_table($settings=[]) {

  $source       = (string) $settings["source"];
  $destination  = (string) $settings["destination"];
  $question_col = (int) $settings["meta_columns"]['Question'];
  $section_col  = (int) $settings["meta_columns"]['TableSection'];
  $rowtype_col  = (int) $settings["meta_columns"]['RowType'];
  
  $data_cols_start = count($settings["meta_columns"]); // index # for first data column
  
  $questions    = [];
  $json_arr     = [];
  $json         = '';
  
  print "Question col is column: " . $question_col . PHP_EOL;
  print "# of meta columns: " . count($settings["meta_columns"]) . PHP_EOL;
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

  // read through the csv data once to build $questions array
  /*
  $cell_question = '';
  $line_number = 0;
  while (($line = fgetcsv($csv_handle)) !== false) {
    $line_number++;
    if ($line_number === 1) {
      continue; // expect a header row
    }
    // cell value for the Question column 
    $cell_question  = isset($line[$question_col]) ? trim($line[$question_col]) : '';
    if ($cell_question === '') {
      continue; // pass if blank
    }
    // set array key
    if (isset($questions[$cell_question])) {
      continue; // pass if already set
    } else {
      $questions[$cell_question] = true; // set to true if keeping in output
    }
  } // end while $line = fgetcsv()
  unset($cell_question, $line_number, $line);
  
  // rewind pointer to start of file
  rewind($csv_handle);
  */

  //$i = 0;

  //foreach ($questions as $question => $keep) {

    //print "Building Question {$question}.\n";
    //continue;

    $line_number = 0;
    while (($line = fgetcsv($csv_handle)) !== false) {

      $line_number++;
      if ($line_number === 1) {
        continue; // expect a header row
      }
      
      // cell value for the Question column 
      $cell_question  = isset($line[$question_col]) ? trim($line[$question_col]) : '';
      // cell value for the Section column 
      $cell_section  = isset($line[$section_col]) ? trim($line[$section_col]) : '';
      // cell value for the RowType column 
      $cell_rowtype  = isset($line[$rowtype_col]) ? trim($line[$rowtype_col]) : '';

      if ($cell_question === '' || $cell_section === '' || $cell_rowtype === '') {
        continue; // pass if any blank
      }

      if ($cell_rowtype === 'Title') {
        $json_arr[$cell_question]['title'] = trim($line[$data_cols_start]); // 1st data col holds titles
        $json_arr[$cell_question]['rows'][] = $json_arr[$cell_question]['title']; //also add to rows array
      }
      if ($cell_rowtype === 'Labels') {
        $json_arr[$cell_question]['labels'] = ['','x','y','z'];
        $json_arr[$cell_question]['rows'][] = $json_arr[$cell_question]['labels']; //also add to rows array
        //TODO: loop through 1st data col plus all additional columns that are not blank to build labels
      }
      if ($cell_rowtype === 'Header') {
        $json_arr[$cell_question]['header'] = trim($line[$data_cols_start]); // 1st data col holds headers
        $json_arr[$cell_question]['rows'][] = $json_arr[$cell_question]['header']; //also add to rows array
      }
      if ($cell_rowtype === 'Data') {
        $json_arr[$cell_question]['rows'][] = (string) $line[$data_cols_start]; // 1st data col holds labels
        //TODO: loop through all possible data columns that are not blank to build rows
      }

    } // end while $line = fgetcsv()

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

    //$json_arr = [1,2,3];
    //$json = 'export const CSV = ';
    $json .= try_json_encode($json_arr);
    //$json .= ';';

    //$json .= print_r($json_arr, true);

    // open or create the output file
    $output_file_handle = fopen($output_path, 'w+');

    // write out the JSON
    fwrite($output_file_handle, $json);

    // close the output file
    fclose($output_file_handle);

    //$i++;

    print "Done!\n";
    
    // rewind pointer to start of file
    //rewind($csv_handle);

  //} // end foreach

  // close the source CSV data file
  fclose($csv_handle);

  //print "\nAll done! Profiles are ready in \"{$destination}\". {$i} profiles created.\n";

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
