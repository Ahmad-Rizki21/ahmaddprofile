import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Perkenalkan nama saya <b>Ahmad Rizki</b> saya lahir di Bekasi pada tanggal 14 Desember 2005 dan saat ini umur saya 17 tahun.
          Saya menaiki jenjang pendidikan di mulai dari SD sampai dengan SMK, pada saat ini saya masih duduk di
          bangku kelas 3 SMK yang berada di SMKN 1 Kota Bekasi, jurusan saya adalah Teknik Komputer dan Jaringan.
          saya suka pelajaran Network atau tentang jaringan dan basis komputer.
        </p>

        <br />

        <p className="text-xl">
          Pengalaman saya pada saat melakukan Praktik Kerja Lapangan secara langsung pada saat 
          saya menaiki kelas 11 atau kelas 2, saat itu saya melakukan PKL di salah satu PT yang bergerak
          di bidang jaringan yaitu PT. Berdikari Prima Mandiri, di sana banyak di ajari tentang perangkat keras dan lunak.
          terjun ke lapangan untuk melakukan pemasangan kabel dan mengatasi masalah pada client.
          hingga saat ini saya mengisi waktu luang saya dengan membuka jasa freelance untuk pembuatan website dan remote server.
        </p>
      </div>
    </div>
  );
};

export default About;
