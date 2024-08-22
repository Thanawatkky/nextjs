import Link from "next/link";
import { Button, Typography } from "@mui/material";
export default function Page() {
  return (
    <main>
      <Typography variant="h5" sx={{color: 'white', bgcolor: 'blue '}}>เกี่ยวกับเรา</Typography>
      <br />
      <div>
        <Button component={Link} href="/content/resume" replace={true} variant="contained" color="primary">ไปหน้าข้อมูลส่วนตัว</Button>
       {"                "}
        <Button component={Link} href="/" replace={true} variant="contained" color="success">กลับหน้าแรก</Button>
      </div>
    </main>
  );
}