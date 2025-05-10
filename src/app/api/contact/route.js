import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: '📩 New Contact',
      text: `ชื่อ: ${name}\nอีเมล: ${email}\nเบอร์โทร: ${phone}\nข้อความ: ${message}`,
    });

    return new Response(JSON.stringify({ message: 'ส่งข้อความเรียบร้อย' }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'ส่งไม่สำเร็จ' }), {
      status: 500,
    });
  }
}
