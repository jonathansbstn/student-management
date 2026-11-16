import { useState, useEffect } from "react";
import "./App.css";

// Fungsi bantu untuk membuat inisial nama (contoh: "Budi Santoso" -> "BS")
const getInitials = (name) =>
  name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

function App() {
  const [students] = useState([
    { id: 1, nim: "230001", nama: "Budi Santoso", noHp: "081234567890", email: "budi@mail.com", alamat: "Surabaya", prodi: "Teknik Informatika", tahunMasuk: 2023 },
    { id: 2, nim: "230002", nama: "Siti Aminah", noHp: "081234567891", email: "siti@mail.com", alamat: "Sidoarjo", prodi: "Sistem Informasi", tahunMasuk: 2023 },
    { id: 3, nim: "230003", nama: "Andi Wijaya", noHp: "081234567892", email: "andi@mail.com", alamat: "Gresik", prodi: "Teknik Informatika", tahunMasuk: 2022 },
    { id: 4, nim: "230004", nama: "Dewi Lestari", noHp: "081234567893", email: "dewi@mail.com", alamat: "Malang", prodi: "Desain Komunikasi Visual", tahunMasuk: 2024 },
    { id: 5, nim: "230005", nama: "Rizky Pratama", noHp: "081234567894", email: "rizky@mail.com", alamat: "Mojokerto", prodi: "Sistem Informasi", tahunMasuk: 2024 },
  ]);

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page">
      <div className="container">
        {/* Header */}
        <header className="header">
          <h1>Student Management</h1>
          <h2>Daftar Data Mahasiswa</h2>
        </header>

        {/* Informasi jumlah mahasiswa & jam digital */}
        <section className="stats">
          <div className="stat-card">
            <span className="stat-label">Jumlah Mahasiswa</span>
            <span className="stat-value">{students.length}</span>
          </div>

          <div className="stat-card">
            <span className="stat-label">
              {now.toLocaleDateString("id-ID", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="stat-value clock">
              {now.toLocaleTimeString("id-ID")}
            </span>
          </div>
        </section>

        {/* Tabel data mahasiswa */}
        <section className="table-card">
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>NIM</th>
                  <th>Nama Mahasiswa</th>
                  <th>No. Hp</th>
                  <th>Email</th>
                  <th>Alamat</th>
                  <th>Program Studi</th>
                  <th>Tahun Masuk</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td className="nim">{student.nim}</td>
                    <td>
                      <div className="name-cell">
                        <span className="avatar">{getInitials(student.nama)}</span>
                        <span>{student.nama}</span>
                      </div>
                    </td>
                    <td>{student.noHp}</td>
                    <td>{student.email}</td>
                    <td>{student.alamat}</td>
                    <td>
                      <span className="badge">{student.prodi}</span>
                    </td>
                    <td>
                      <span className="year">{student.tahunMasuk}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;