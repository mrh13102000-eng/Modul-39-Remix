import "./style.css";

export default function Home() {
  return (
    <div className="kartu">
      <h1 className="judul">Biografi Saya</h1>

      <h2 className="subjudul">Nama</h2>
      <p>Ridho Husaeni</p>

      <h2 className="subjudul">Perkenalan Singkat</h2>
      <p>Saya seorang pelajar yang sedang belajar tentang remix.</p>

      <h2 className="subjudul">Hobby</h2>
      <ul>
        <li>Membaca</li>
        <li>Bermain game</li>
        <li>Menonton anime</li>
      </ul>
    </div>
  );
}
