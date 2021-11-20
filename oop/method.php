<?php

# membuat class Person
class Person
{
  # membuat property (variable)
  public $nama;
  public $alamat;
  public $jurusan;

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
$yahya = new Person();
$yahya->setNama("Hilman Yahya Muhaimin");
echo $yahya->getNama() . "<br>";
$yahya->setAlamat(("Cimanggis"));
echo $yahya->getAlamat() . "<br>";
$yahya->setJurusan("Teknik Informatika");
echo $yahya->getJurusan() . "<br>";

# membuat object Yahyamu dari class Person
$Yahyamu = new Person();
$Yahyamu->setNama("Yahyamu");
echo $Yahyamu->getNama() . "<br>";
$Yahyamu->setAlamat("Depok");
echo $Yahyamu->getAlamat() . "<br>";
$Yahyamu->setJurusan("Sistem Informasi");
echo $Yahyamu->getJurusan() . "<br>";
