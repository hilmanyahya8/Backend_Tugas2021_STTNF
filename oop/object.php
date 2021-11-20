<?php

# membuat class Person
class Person
{
  # membuat property (variable)
  public $nama;
  public $alamat;
  public $jurusan;
}

# membuat object yahya dari class Person
$yahya = new Person();
# mengakses property nama
echo $yahya->nama;
# memberikan nilai baru ke property nama
$yahya->nama = "Hilman Yahya Muhaimin";
echo "$yahya->nama <br>";

# membuat object yahyamu dari class Person
$yahyamu = new Person();
echo $yahyamu->nama;
$yahyamu->nama = "yahyamuhai";
echo "$yahyamu->nama <br>";
