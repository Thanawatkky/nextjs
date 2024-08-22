import { Container } from "@mui/material";
import Link from "next/link";

export default function Page() {
  return (
    <Container>
        <div style={{border: "1px solid lightgray", width: "500px", height: "100%", boxShadow: "1px 1px 1px gray", display: "block" ,margin: "10rem auto"}}>
            <h1 style={{textAlign: "center", padding: "2rem"}}>ประวัติส่วนตัว</h1>
            <p style={{padding: "0 0 0 2rem"}}>ชื่อ-นามสกุล: นาย ธนวัฒน์ เชื้อหนองปรง</p>
            <p style={{padding: "0 0 0 2rem"}}>อายุ: 19 ปี</p>
            <p style={{padding: "0 0 0 2rem"}}>การศึกษา: กำลังศึกษา ระดับปวส. สาขาเทคโนโลยีสารสนเทศ</p>
            <p style={{padding: "0 0 0 2rem"}}>สถานศึกษา: วิทยาลัยเทคนิคสุพรรณบุรี</p>
            <p style={{padding: "0 0 0 2rem"}}>รหัสนักศึกษา: 6731901001</p>
            <Link style={{margin: "0 2rem 0 0 "}} href={"/"}>Home Page</Link>
            {"    "}
            <Link href={"/about"}>About</Link>
        </div>
    </Container>
  );
}