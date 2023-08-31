<?php
// Sample movie data (you can replace this with a database connection)
$movies = [
    ["title" => "Movie 1", "genre" => "Action", "image" => "movie1.jpg"],
    ["title" => "Movie 2", "genre" => "Comedy", "image" => "movie2.jpg"],
    // Add more movies
];

header("Content-Type: application/json");
echo json_encode($movies);
?>
