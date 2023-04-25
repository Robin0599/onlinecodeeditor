<?php

$curl = curl_init();

curl_setopt_array($curl, [
	CURLOPT_URL => "https://judge0-ce.p.rapidapi.com/about",
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_FOLLOWLOCATION => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "GET",
	CURLOPT_HTTPHEADER => [
		"X-RapidAPI-Host: judge0-ce.p.rapidapi.com",
		"X-RapidAPI-Key: 0d0f566039mshee6e31c4c54f9bdp165319jsn6bb00175a62a"
	],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
	echo "cURL Error #:" . $err;
} else {
	echo $response;
}