<?php

# membuat class Person
class Person
{
  # membuat property (variable)
  public $nama;
  public $alamat;
  public $jurusan;

  # method constructor
  public function __construct($nama, $alamat, $jurusan)
  {
    $this->nama = $nama;
    $this->alamat = $alamat;
    $this->jurusan = $jurusan;
  }

  # membuat method
  public function setNama($data)
  {
    $this->nama = $data;
  }
  public function getNama()
  {
    return $this->nama;
  }
  public function setAlamat($data)
  {
    $this->alamat = $data;
  }
  public function getAlamat()
  {
    return $this->alamat;
  }
  public function setJurusan($data)
  {
    $this->jurusan = $data;
  }
  public function getJurusan()
  {
    return $this->jurusan;
  }
}

# membuat object yahya dari class Person
$yahya = new Person("Hilman Yahya Muhaimin ", "Cimanggis", "Teknik Informatika");
echo $yahya->getNama() . "<br>";
echo $yahya->getAlamat() . "<br>";
echo $yahya->getJurusan() . "<br>";

# membuat object ismail dari class Person
$yahyamu = new Person("yahyamuhai", "Depok", "Sistem Informasi");
echo $yahyamu->getNama() . "<br>";
echo $yahya->getAlamat() . "<br>";
echo $yahyamu->getJurusan() . "<br>";
