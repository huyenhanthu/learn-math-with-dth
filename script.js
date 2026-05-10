let selected = null;
let tfAnswers = {};

let previousPageFunction = null;

function avg(arr){
  if(!arr.length) return 0;
  return Math.round(arr.reduce((a,b)=>a+b,0)/arr.length);
}


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyB9GaBaFwwky93EWHhlaC8f_gooz74th-I",
  authDomain: "websitedth-984d2.firebaseapp.com",
  projectId: "websitedth-984d2",
  storageBucket: "websitedth-984d2.firebasestorage.app",
  messagingSenderId: "806725061684",
  appId: "1:806725061684:web:e85bbd683b47fd046d0e61",
  measurementId: "G-1CDVL3ELVW"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// ========================
// ☁️ CLOUD SAVE / LOAD
// ========================

// lưu dữ liệu lên Firestore
async function saveUserData(data){

  await setDoc(
    doc(db, "scores", currentUser),
    data,
    { merge: true }
  );

}

// lấy dữ liệu từ Firestore
async function loadUserData(){

  const ref = doc(db, "scores", currentUser);

  const snap = await getDoc(ref);

  if(snap.exists()){
    return snap.data();
  }

  return {};
}


async function loadAnyUser(name){

  const ref = doc(db, "scores", name);

  const snap = await getDoc(ref);

  if(snap.exists()){
    return snap.data();
  }

  return {};
}
// ========================
// 📚 DATA BÀI HỌC (MỖI BÀI KHÁC NHAU)
// ========================
// ========================
// 📚 DATA BÀI HỌC (CHƯƠNG 4 FULL - CHUẨN WORD: VIDEO + KHUNG LÝ THUYẾT + ẢNH TRONG VÍ DỤ)
// ========================
// ========================
// ========================
// 📚 DATA BÀI HỌC (MỖI BÀI KHÁC NHAU)
// ========================
// ========================
// 📚 DATA BÀI HỌC (CHƯƠNG 4 FULL - CHUẨN WORD: VIDEO + KHUNG LÝ THUYẾT + ẢNH TRONG VÍ DỤ)
// ========================
// ========================
// 📚 DATA BÀI HỌC (CHƯƠNG 4 FULL - CHUẨN WORD, CÓ VIDEO + KHUNG + VÍ DỤ + HÌNH ẢNH + MÔI TRƯỜNG TOÁN)
// ========================
const lessonData = {
  4: {
    // ================= BÀI 11 =================
    0: {
      video: "https://www.youtube.com/embed/j-xGX4yPLWw",
      theory: `
        
      <h4 class="lesson-section-title">1. Định nghĩa</h4>

<div class="theory-main-box">
 <p style="text-align: justify; line-height: 1.6;">
  Cho hàm số \\( f(x) \\) xác định trên một khoảng \\( K \\) (hoặc một đoạn, hoặc một nửa khoảng). 
  Hàm số \\( F(x) \\) được gọi là một 
  <span style="color: red; font-weight: bold;">nguyên hàm</span> 
  của \\( f(x) \\) trên \\( K \\) nếu
  \\( F'(x) = f(x) \\) với mọi \\( x \\in K \\).
</p>
  
</div>

<div class="example-box">
  <p>
    <b>
      Ví dụ: Cho hàm số 
      \\( f(x)=x^2-2x \\). 
      Trong các hàm số cho dưới đây, hàm số nào là một nguyên hàm của hàm số 
      \\( f(x) \\) trên \\( \\mathbb{R} \\)?
    </b>
  </p>

  <p>
    a) \\(
    F(x)=\\dfrac{x^3}{3}-x^2
    \\)
  </p>

  <p>
    b) \\(
    G(x)=\\dfrac{x^3}{3}+x^2
    \\)
  </p>
</div>

<p><b>Giải:</b></p>

<p>Ta có:</p>

<div style="text-align:center; margin:16px 0;">
  \\[
  \\begin{aligned}
  F'(x) &= x^2-2x \\\\
  G'(x) &= x^2+2x
  \\end{aligned}
  \\]
</div>

<p>
  Vì \\( F'(x)=f(x) \\) với mọi \\( x\\in\\mathbb{R} \\) nên 
  \\( F(x) \\) là một nguyên hàm của \\( f(x) \\) trên 
  \\( \\mathbb{R} \\).
</p>

<p>
  Hàm số \\( G(x) \\) không là nguyên hàm của \\( f(x) \\) trên 
  \\( \\mathbb{R} \\) vì với \\( x=1 \\), ta có:
</p>

<div style="text-align:center; margin:16px 0;">
  \\[
  G'(1)=3 \\neq -1=f(1).
  \\]
</div>


<h4 class="lesson-section-title">2. Định lí</h4>

<div class="theory-main-box">
  <p style="text-align: justify; line-height: 1.6;">
  Giả sử hàm số \\( F(x) \\) là một nguyên hàm của \\( f(x) \\) trên \\( K \\). Khi đó:
</p>

<ul style="padding-left: 20px; line-height: 1.8;">
  <li style="margin-bottom: 10px;">
    Với mỗi hằng số \\( C \\), hàm số \\( F(x) + C \\) cũng là một nguyên hàm của \\( f(x) \\) trên \\( K \\).
  </li>

  <li style="margin-bottom: 10px;">
    Nếu hàm số \\( G(x) \\) là một nguyên hàm của \\( f(x) \\) trên \\( K \\) thì tồn tại một hằng số \\( C \\) sao cho
    \\( G(x) = F(x) + C \\) với mọi \\( x \\in K \\).
  </li>
</ul>

<p style="text-align: justify; line-height: 1.6;">
  Như vậy, nếu \\( F(x) \\) là một nguyên hàm của \\( f(x) \\) trên \\( K \\) thì mọi nguyên hàm của 
  \\( f(x) \\) trên \\( K \\) đều có dạng \\( F(x) + C \\) (với \\( C \\) là hằng số).
  Ta gọi \\( F(x) + C \\) (với \\( C \\in \\mathbb{R} \\)) là 
  <span style="color:red; font-weight:bold;">họ các nguyên hàm</span> 
  của \\( f(x) \\) trên \\( K \\), kí hiệu là \\( \\int f(x) \\, dx \\).
</p>
</div>

<div class="example-box">
  <p>
    <b>
      Ví dụ: Tìm một nguyên hàm của hàm số 
      \\( f(x)=x^2 \\) trên \\( \\mathbb{R} \\). 
      Từ đó hãy tìm 
      \\( \\int x^2 \\, dx \\).
    </b>
  </p>
</div>

<p><b>Giải:</b></p>

<p>
  Vì
</p>

<div style="text-align:center; margin:16px 0;">
  \\[
  \\left( \\dfrac{x^3}{3} \\right)'
  =
  \\dfrac{3x^2}{3}
  =
  x^2
  \\]
</div>

<p>
  nên 
  \\(
  F(x)=\\dfrac{x^3}{3}
  \\)
  là một nguyên hàm của hàm số 
  \\(
  f(x)
  \\)
  trên 
  \\(
  \\mathbb{R}
  \\).
</p>

<p>
  Do đó:
</p>

<div style="text-align:center; margin:16px 0;">
  \\[
  \\int x^2 \\, dx
  =
  \\dfrac{x^3}{3}+C.
  \\]
</div>

<h4 class="lesson-section-title">3. Tính chất</h4>

<div class="theory-main-box">

  <div style="line-height: 2.2;">

    <div style="margin: 12px 0;">
      \\(
      \\left( \\int f(x) \\, dx \\right)' = f(x)
      \\)
    </div>

    <div style="margin: 12px 0;">
      \\(
      \\int f'(x) \\, dx = f(x) + C
      \\)
    </div>

    <div style="margin: 12px 0;">
      \\(
      \\int kf(x) \\, dx = k \\int f(x) \\, dx
      \\)
      , với \\( k \\) là hằng số khác \\( 0 \\).
    </div>

    <div style="margin: 12px 0;">
      \\(
      \\int [f(x) \\pm g(x)] \\, dx
      =
      \\int f(x) \\, dx
      \\pm
      \\int g(x) \\, dx
      \\)
    </div>

  </div>

</div>
      
   

<div class="example-box">
  <p>
    <b>
      Ví dụ: Tìm:
    </b>
  </p>

  <p>
    a) \\(
    \\int 3x^2 \\, dx
    \\)
  </p>

  <p>
    b) \\(
    \\int -\\dfrac{3}{2}x^2 \\, dx
    \\)
  </p>

   <p>
    c) \\(
    \\int (x^2+x) \\, dx
    \\)
  </p>

  <p>
    d) \\(
    \\int (4x^3-3x^2) \\, dx
    \\)
  </p>

</div>

<p><b>Giải:</b></p>

<p>Ta có:</p>

<p>
  a)
</p>

<div style="margin: 16px 0;">
  \\(
  \\int 3x^2 \\, dx
  =
  3 \\int x^2 \\, dx
  =
  3 \\cdot \\dfrac{x^3}{3} + C
  =
  x^3 + C
  \\)
</div>

<p>
  b)
</p>

<div style="margin: 16px 0;">
  \\(
  \\int -\\dfrac{3}{2}x^2 \\, dx
  =
  -\\dfrac{3}{2} \\int x^2 \\, dx
  =
  -\\dfrac{3}{2} \\cdot \\dfrac{x^3}{3} + C
  =
  -\\dfrac{1}{2}x^3 + C
  \\)
</div>

<p>
  c)
</p>

<div style="margin: 16px 0;">
  \\(
  \\int (x^2+x) \\, dx
  =
  \\int x^2 \\, dx
  +
  \\int x \\, dx
  =
  \\dfrac{x^3}{3}
  +
  \\dfrac{x^2}{2}
  +
  C
  \\)
</div>

<p>
  d)
</p>

<div style="margin: 16px 0;">
  \\(
  \\int (4x^3-3x^2) \\, dx
  =
  4\\int x^3 \\, dx
  -
  3\\int x^2 \\, dx
  =
  x^4-x^3+C
  \\)
</div>





<h4 class="lesson-section-title">4. Một số nguyên hàm cơ bản</h4>

<div class="theory-main-box">

  <table style="width: 100%; border-collapse: collapse; line-height: 2.3;">

    <tr>

      <!-- Cột trái -->
      <td style="width: 48%; vertical-align: top; border-right: 1px solid #ddd; padding-right: 15px;">

        <p>(1). \\( \\int 0 \\, dx = C \\)</p>

        <p>(2). \\( \\int dx = x + C \\)</p>

        <p>
          (3). \\(
          \\int x^{\\alpha} \\, dx
          =
          \\dfrac{1}{\\alpha+1}x^{\\alpha+1}+C
          \\quad (\\alpha \\neq -1)
          \\)
        </p>

        <p>
          (4). \\(
          \\int \\dfrac{1}{x^2} \\, dx
          =
          -\\dfrac{1}{x}+C
          \\)
        </p>

        <p>
          (5). \\(
          \\int \\dfrac{1}{x} \\, dx
          =
          \\ln|x|+C
          \\)
        </p>

        <p>
          (6). \\(
          \\int e^x \\, dx
          =
          e^x+C
          \\)
        </p>

        <p>
          (7). \\(
          \\int a^x \\, dx
          =
          \\dfrac{a^x}{\\ln a}+C
          \\)
        </p>

        <p>
          (8). \\(
          \\int \\cos x \\, dx
          =
          \\sin x+C
          \\)
        </p>

        <p>
          (9). \\(
          \\int \\sin x \\, dx
          =
          -\\cos x+C
          \\)
        </p>

        <p>
          (10). \\(
          \\int \\dfrac{1}{\\cos^2 x} \\, dx
          =
          \\tan x+C
          \\)
        </p>

        <p>
          (11). \\(
          \\int \\dfrac{1}{\\sin^2 x} \\, dx
          =
          -\\cot x+C
          \\)
        </p>

        <p>
          (12). \\(
          \\int (1+\\tan^2 x) \\, dx
          =
          \\tan x+C
          \\)
        </p>

      </td>

      <!-- Cột phải -->
      <td style="width: 52%; vertical-align: top; padding-left: 15px;">

        <p>
          (13). \\(
          \\int (1+\\cot^2 x) \\, dx
          =
          -\\cot x+C
          \\)
        </p>

        <p>
          (14). \\(
          \\int (ax+b)^n \\, dx
          =
          \\dfrac{1}{a}\\cdot
          \\dfrac{(ax+b)^{n+1}}{n+1}+C
          \\quad (n\\neq -1)
          \\)
        </p>

        <p>
          (15). \\(
          \\int \\dfrac{1}{(ax+b)^2} \\, dx
          =
          -\\dfrac{1}{a}\\cdot
          \\dfrac{1}{ax+b}+C
          \\)
        </p>

        <p>
          (16). \\(
          \\int \\dfrac{dx}{ax+b}
          =
          \\dfrac{1}{a}\\ln|ax+b|+C
          \\)
        </p>

        <p>
          (17). \\(
          \\int e^{ax+b} \\, dx
          =
          \\dfrac{1}{a}e^{ax+b}+C
          \\)
        </p>

        <p>
          (18). \\(
          \\int a^{kx+b} \\, dx
          =
          \\dfrac{1}{k}\\cdot
          \\dfrac{a^{kx+b}}{\\ln a}+C
          \\)
        </p>

        <p>
          (19). \\(
          \\int \\cos(ax+b) \\, dx
          =
          \\dfrac{1}{a}\\sin(ax+b)+C
          \\)
        </p>

        <p>
          (20). \\(
          \\int \\sin(ax+b) \\, dx
          =
          -\\dfrac{1}{a}\\cos(ax+b)+C
          \\)
        </p>

        <p>
          (21). \\(
          \\int \\dfrac{1}{\\cos^2(ax+b)} \\, dx
          =
          \\dfrac{1}{a}\\tan(ax+b)+C
          \\)
        </p>

        <p>
          (22). \\(
          \\int \\dfrac{1}{\\sin^2(ax+b)} \\, dx
          =
          -\\dfrac{1}{a}\\cot(ax+b)+C
          \\)
        </p>

        <p>
          (23). \\(
          \\int [1+\\tan^2(ax+b)] \\, dx
          =
          \\dfrac{1}{a}\\tan(ax+b)+C
          \\)
        </p>

        <p>
          (24). \\(
          \\int [1+\\cot^2(ax+b)] \\, dx
          =
          -\\dfrac{1}{a}\\cot(ax+b)+C
          \\)
        </p>

      </td>

    </tr>

  </table>

</div>
   
    


      `,


questions: [

  // =====================
  // TRẮC NGHIỆM
  // =====================

{
  type: "mcq",

  question: `
    Tìm nguyên hàm
    \\(
    F(x)
    \\)
    của hàm số

    \\[
    f(x)=
    \\frac{2}{\\sqrt{x}}
    +
    3^x
    +
    3x
    -
    2
    \\]
  `,

  options: [
    "A. \\(F(x)=4\\sqrt{x}+\\dfrac{3^x}{\\ln3}+\\dfrac{3x^2}{2}-2x+C\\)",

    "B. \\(F(x)=2\\sqrt{x}+\\dfrac{3^x}{\\ln3}+3x^2-2x+C\\)",

    "C. \\(F(x)=4\\sqrt{x}+3^x+\\dfrac{3x^2}{2}-2x+C\\)",

    "D. \\(F(x)=4\\sqrt{x}+\\dfrac{3^x}{\\ln3}+\\dfrac{3x^2}{2}+2x+C\\)"
  ],

  answer: 0,

  solution: `
    <p><b>Lời giải:</b></p>

    <div style="margin:12px 0;">
      \\\[
      F(x)
      =
      \\int
      \\left(
      \\frac{2}{\\sqrt{x}}
      +
      3^x
      +
      3x
      -
      2
      \\right)
      dx
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      =
      \\int
      \\frac{2}{\\sqrt{x}}
      dx
      +
      \\int
      3^x
      dx
      +
      \\int
      3x
      dx
      -
      \\int
      2
      dx
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      =
      4\\sqrt{x}
      +
      \\frac{3^x}{\\ln3}
      +
      \\frac{3x^2}{2}
      -
      2x
      +
      C
      \\\]
    </div>

    <p>
      Vậy đáp án đúng là <b>A</b>.
    </p>
  `
},









{
  type: "mcq",

  question: `
    Một chiếc cốc chứa nước
    \\(
    95^\\circ C
    \\)
    được đặt trong phòng có nhiệt độ
    \\(
    20^\\circ C
    \\).

    Theo định luật làm mát của Newton, nhiệt độ của nước trong cốc sau
    \\(
    t
    \\)
    phút là hàm số
    \\(
    T(t)
    \\).

    Tốc độ giảm nhiệt độ:

    \\[
    T'(t)
    =
    -\\frac32 e^{-\\frac t{50}}
    \\]

    Tính nhiệt độ của nước tại
    \\(
    t=30
    \\)
    phút.
  `,

  options: [
    "A. 55.16°C",
    "B. 61.16°C",
    "C. 75°C",
    "D. 95°C"
  ],

  answer: 1,

  solution: `
    <p><b>Lời giải:</b></p>

    <div style="margin:12px 0;">
      \\\[
      T(t)
      =
      \\int T'(t)dt
      =
      \\int
      -\\frac32
      e^{-\\frac t{50}}
      dt
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      =
      75e^{-\\frac t{50}}+C
      \\\]
    </div>

    <p>
      Vì:
      \\(
      T(0)=95
      \\)
    </p>

    <div style="margin:12px 0;">
      \\\[
      75+C=95
      \\Rightarrow
      C=20
      \\\]
    </div>

    <p>
      Suy ra:
    </p>

    <div style="margin:12px 0;">
      \\\[
      T(t)=75e^{-\\frac t{50}}+20
      \\\]
    </div>

    <p>
      Tại
      \\(
      t=30
      \\):
    </p>

    <div style="margin:12px 0;">
      \\\[
      T(30)
      =
      75e^{-0.6}+20
      \\approx
      61.16
      \\\]
    </div>

    <p>
      Vậy đáp án đúng là <b>B</b>.
    </p>
  `
},


  // =====================
  // ĐÚNG SAI
  // =====================

{
  type: "truefalse-group",

  question: `
    Cho hàm số \\( f(x)=4x^3-6x \\).
    Biết \\( F(x) \\) là một nguyên hàm của \\( f(x) \\)
    và \\( F(0)=2 \\).
    Xét tính đúng sai:
  `,

  statements: [

    {
      text: "a) \\( F(x)=f'(x) \\)",
      answer: "Sai"
    },

    {
      text: "b) \\( F'(x)=f(x) \\)",
      answer: "Đúng"
    },

    {
      text: "c) \\( F(x)=x^4-3x^2+2 \\)",
      answer: "Đúng"
    },

    {
      text: "d) \\( F(1)=3 \\)",
      answer: "Sai"
    }

  ],

  solution: `
  <p><b>Lời giải:</b></p>

  <p>
    a) Sai, vì theo định nghĩa:
  </p>

  <div style="margin:16px 0;">
    \\(
    F'(x)=f(x)
    \\)
  </div>

  <p>
    b) Đúng, theo đúng định nghĩa nguyên hàm.
  </p>

  <p>
    c) Đúng, vì:
  </p>

  <div style="margin:16px 0;">
    \\(
    F(x)
    =
    \\int(4x^3-6x)dx
    =
    x^4-3x^2+C
    \\)
  </div>

  <p>
    d) Sai, vì:
  </p>

  <div style="margin:16px 0;">
    \\(
    F(1)
    =
    1^4-3\\cdot1^2+2
    =
    0
    \\)
  </div>
  `
},



{
  type: "truefalse-group",

  question: `
    Cho hàm số 
    \\(
    f(x)=\\dfrac{2x+1}{x-1}
    \\)
    với 
    \\(
    x\\neq1
    \\).
    Xét tính đúng sai của các khẳng định sau:
  `,

  statements: [

    {
      text: `
        a) 
        \\(
        f(x)=2+\\dfrac{3}{x-1}
        \\)
      `,
      answer: "Đúng"
    },

    {
      text: `
        b) 
        \\(
        \\int f(x)dx
        =
        2x+3\\ln(x-1)+C
        \\)
      `,
      answer: "Sai"
    },

    {
      text: `
        c) Nguyên hàm 
        \\(
        F(x)
        \\)
        của 
        \\(
        f(x)
        \\)
        thỏa mãn 
        \\(
        F(2)=1
        \\)
        là
        \\(
        F(x)=2x+3\\ln|x-1|-3
        \\)
      `,
      answer: "Đúng"
    },

    {
      text: `
        d) Phương trình
        \\(
        F(x)=2x+2
        \\)
        có hai nghiệm 
        \\(
        x_1,x_2
        \\).
        Khi đó
        \\(
        x_1+x_2=2
        \\)
      `,
      answer: "Đúng"
    }

  ],

  solution: `

    <p><b>Lời giải:</b></p>

    <p>
      a) Đúng, vì:
    </p>

    <div style="margin:16px 0;">
      \\(
      f(x)
      =
      \\dfrac{2x+1}{x-1}
      =
      \\dfrac{2(x-1)+3}{x-1}
      =
      2+\\dfrac{3}{x-1}
      \\)
    </div>

    <p>
      b) Sai, vì:
    </p>

    <div style="margin:16px 0;">
      \\(
      \\int f(x)dx
      =
      2x+3\\ln|x-1|+C
      \\)
    </div>

    <p>
      Khẳng định đã cho thiếu dấu giá trị tuyệt đối trong logarit.
    </p>

    <p>
      c) Đúng, vì:
    </p>

    <div style="margin:16px 0;">
      \\(
      F(x)
      =
      2x+3\\ln|x-1|+C
      \\)
    </div>

    <p>
      Do 
      \\(
      F(2)=1
      \\)
      nên:
    </p>

    <div style="margin:16px 0;">
      \\(
      2\\cdot2+3\\ln|2-1|+C=1
      \\)
    </div>

    <div style="margin:16px 0;">
      \\(
      4+0+C=1
      \\Rightarrow
      C=-3
      \\)
    </div>

    <p>
      Suy ra:
    </p>

    <div style="margin:16px 0;">
      \\(
      F(x)
      =
      2x+3\\ln|x-1|-3
      \\)
    </div>

    <p>
      d) Đúng, vì:
    </p>

    <div style="margin:16px 0;">
      \\(
      F(x)=2x+2
      \\)
    </div>

    <div style="margin:16px 0;">
      \\(
      2x+3\\ln|x-1|-3
      =
      2x+2
      \\)
    </div>

    <div style="margin:16px 0;">
      \\(
      3\\ln|x-1|=5
      \\Rightarrow
      \\ln|x-1|=\\dfrac{5}{3}
      \\)
    </div>

    <div style="margin:16px 0;">
      \\(
      |x-1|=e^{5/3}
      \\Rightarrow
      x=1\\pm e^{5/3}
      \\)
    </div>

    <p>
      Do đó:
    </p>

    <div style="margin:16px 0;">
      \\(
      x_1+x_2
      =
      (1+e^{5/3})+(1-e^{5/3})
      =
      2
      \\)
    </div>

  `
},






{
  type: "truefalse-group",

  question: `
    Cho hàm số 
    \\(
    F(x)=\\int(2x+\\sqrt{x})dx
    \\)
    với 
    \\(
    x>0
    \\).
    Xét tính đúng sai của các khẳng định sau:
  `,

  statements: [

    {
      text: `
        a) 
        \\(
        F(x)
        =
        2\\int xdx
        +
        \\int\\sqrt{x}dx
        +C
        \\)
      `,
      answer: "Đúng"
    },

    {
      text: `
        b) 
        \\(
        G(x)=F(x)+2024
        \\Rightarrow
        G(x)=\\int(2x+\\sqrt{x})dx
        \\)
      `,
      answer: "Đúng"
    },

    {
      text: `
        c) 
        \\(
        F(x)
        =
        x^2
        +
        \\dfrac{2}{3}x\\sqrt{x}
        +C
        \\)
      `,
      answer: "Đúng"
    },

    {
      text: `
        d) Nếu 
        \\(
        F(1)=\\dfrac{2}{3}
        \\)
        thì 
        \\(
        F(4)=\\dfrac{28}{3}
        \\)
      `,
      answer: "Sai"
    }

  ],

  solution: `

    <p><b>Lời giải:</b></p>

    <p>
      a) Đúng, theo tính chất:
    </p>

    <div style="margin:16px 0;">
      \\(
      \\int[f(x)+g(x)]dx
      =
      \\int f(x)dx
      +
      \\int g(x)dx
      \\)
    </div>

    <p>
      và hệ số 2 được đưa ra ngoài dấu tích phân.
    </p>

    <p>
      b) Đúng, vì hai nguyên hàm của cùng một hàm số chỉ sai khác nhau một hằng số.
    </p>

    <p>
      Do:
    </p>

    <div style="margin:16px 0;">
      \\(
      G(x)=F(x)+2024
      \\)
    </div>

    <p>
      nên 
      \\(
      G(x)
      \\)
      cũng là một nguyên hàm của hàm số đã cho.
    </p>

    <p>
      c) Đúng, vì:
    </p>

    <div style="margin:16px 0;">
      \\(
      F(x)
      =
      \\int(2x+\\sqrt{x})dx
      \\)
    </div>

    <div style="margin:16px 0;">
      \\(
      =
      x^2
      +
      \\dfrac{x^{3/2}}{3/2}
      +C
      \\)
    </div>

    <div style="margin:16px 0;">
      \\(
      =
      x^2
      +
      \\dfrac{2}{3}x\\sqrt{x}
      +C
      \\)
    </div>

    <p>
      d) Sai.
    </p>

    <p>
      Từ:
    </p>

    <div style="margin:16px 0;">
      \\(
      F(1)=\\dfrac{2}{3}
      \\)
    </div>

    <p>
      ta có:
    </p>

    <div style="margin:16px 0;">
      \\(
      1^2
      +
      \\dfrac{2}{3}\\cdot1\\cdot\\sqrt{1}
      +C
      =
      \\dfrac{2}{3}
      \\)
    </div>

    <div style="margin:16px 0;">
      \\(
      \\dfrac{5}{3}+C
      =
      \\dfrac{2}{3}
      \\Rightarrow
      C=-1
      \\)
    </div>

    <p>
      Do đó:
    </p>

    <div style="margin:16px 0;">
      \\(
      F(x)
      =
      x^2
      +
      \\dfrac{2}{3}x\\sqrt{x}
      -1
      \\)
    </div>

    <p>
      Thay 
      \\(
      x=4
      \\),
      ta được:
    </p>

    <div style="margin:16px 0;">
      \\(
      F(4)
      =
      4^2
      +
      \\dfrac{2}{3}\\cdot4\\cdot\\sqrt{4}
      -1
      \\)
    </div>

    <div style="margin:16px 0;">
      \\(
      =
      16
      +
      \\dfrac{16}{3}
      -1
      =
      \\dfrac{61}{3}
      \\)
    </div>

    <p>
      không phải 
      \\(
      \\dfrac{28}{3}
      \\).
    </p>

  `
},




{
  type: "truefalse-group",

  question: `
    Cho hàm số 
    \\(
    f(x)=\\sin x+\\cos x
    \\).
    Xét tính đúng sai của các khẳng định sau:
  `,

  statements: [

    {
      text: `
        a) 
        \\(
        F(x)
        =
        \\int f(x)dx
        =
        \\sin x-\\cos x+C
        \\)
      `,
      answer: "Đúng"
    },

    {
      text: `
        b) Biết 
        \\(
        F(0)=-1
        \\).
        Khi đó
        \\(
        F(x)=\\sin x-\\cos x
        \\)
      `,
      answer: "Đúng"
    },

    {
      text: `
        c) Hàm số 
        \\(
        F(x)
        \\)
        đồng biến trên khoảng
        \\(
        \\left(0;\\dfrac{\\pi}{2}\\right)
        \\)
      `,
      answer: "Đúng"
    },

    {
      text: `
        d) Hàm số 
        \\(
        F(x)
        \\)
        đạt giá trị nhỏ nhất là
        \\(
        -2
        \\)
      `,
      answer: "Sai"
    }

  ],

  solution: `

    <p><b>Lời giải:</b></p>

    <p>
      a) Đúng, vì:
    </p>

    <div style="margin:16px 0;">
      \\(
      \\int(\\sin x+\\cos x)dx
      =
      -\\cos x+\\sin x+C
      \\)
    </div>

    <div style="margin:16px 0;">
      \\(
      =
      \\sin x-\\cos x+C
      \\)
    </div>

    <p>
      b) Đúng.
    </p>

    <p>
      Từ:
    </p>

    <div style="margin:16px 0;">
      \\(
      F(0)=-1
      \\)
    </div>

    <p>
      ta có:
    </p>

    <div style="margin:16px 0;">
      \\(
      \\sin0-\\cos0+C=-1
      \\)
    </div>

    <div style="margin:16px 0;">
      \\(
      -1+C=-1
      \\Rightarrow
      C=0
      \\)
    </div>

    <p>
      Suy ra:
    </p>

    <div style="margin:16px 0;">
      \\(
      F(x)=\\sin x-\\cos x
      \\)
    </div>

    <p>
      c) Đúng, vì:
    </p>

    <div style="margin:16px 0;">
      \\(
      F'(x)=f(x)=\\sin x+\\cos x
      \\)
    </div>

    <p>
      Trên khoảng
      \\(
      \\left(0;\\dfrac{\\pi}{2}\\right)
      \\),
      ta có:
    </p>

    <div style="margin:16px 0;">
      \\(
      \\sin x>0
      \\quad \\text{và} \\quad
      \\cos x>0
      \\)
    </div>

    <p>
      nên:
    </p>

    <div style="margin:16px 0;">
      \\(
      F'(x)>0
      \\)
    </div>

    <p>
      Do đó hàm số đồng biến trên khoảng đã cho.
    </p>

    <p>
      d) Sai, vì:
    </p>

    <div style="margin:16px 0;">
      \\(
      F(x)
      =
      \\sin x-\\cos x
      \\)
    </div>

    <div style="margin:16px 0;">
      \\(
      =
      \\sqrt{2}
      \\sin\\left(
      x-\\dfrac{\\pi}{4}
      \\right)
      \\)
    </div>

    <p>
      Ta có:
    </p>

    <div style="margin:16px 0;">
      \\(
      -1
      \\le
      \\sin\\left(
      x-\\dfrac{\\pi}{4}
      \\right)
      \\le
      1
      \\)
    </div>

    <p>
      nên:
    </p>

    <div style="margin:16px 0;">
      \\(
      -\\sqrt{2}
      \\le
      F(x)
      \\le
      \\sqrt{2}
      \\)
    </div>

    <p>
      Giá trị nhỏ nhất của hàm số là:
    </p>

    <div style="margin:16px 0;">
      \\(
      -\\sqrt{2}
      \\)
    </div>

    <p>
      không phải
      \\(
      -2
      \\).
    </p>

  `
},



{
  type: "truefalse-group",

  question: `
    Cho hàm số 
    \\(
    f(x)=e^x+x^e
    \\).
    Xét tính đúng sai của các khẳng định sau:
  `,

  statements: [

    {
      text: `
        a) Nếu 
        \\(
        F(x)
        \\)
        là một nguyên hàm của 
        \\(
        f(x)
        \\)
        thì 
        \\(
        F(x)+5
        \\)
        cũng là một nguyên hàm của 
        \\(
        f(x)
        \\)
      `,
      answer: "Đúng"
    },

    {
      text: `
        b) 
        \\(
        F(x)=e^x+x^e+C
        \\)
        là họ nguyên hàm của 
        \\(
        f(x)
        \\)
      `,
      answer: "Sai"
    },

    {
      text: `
        c) Nếu 
        \\(
        F(x)
        \\)
        là một nguyên hàm của 
        \\(
        f(x)
        \\)
        và 
        \\(
        F(0)=1
        \\)
        thì 
        \\(
        F(1)=2e
        \\)
      `,
      answer: "Sai"
    },

    {
      text: `
        d) Nếu 
        \\(
        F(x),G(x)
        \\)
        lần lượt là các nguyên hàm của 
        \\(
        f(x)
        \\)
        và 
        \\(
        F(0)=1,
        G(1)=e
        \\)
        thì luôn có
        \\(
        G(x)=F(x)+e
        \\)
      `,
      answer: "Sai"
    }

  ],

  solution: `

    <p><b>Lời giải:</b></p>

    <p>
      a) Đúng, vì cộng thêm một hằng số vào một nguyên hàm vẫn thu được một nguyên hàm của cùng hàm số.
    </p>

    <p>
      b) Sai.
    </p>

    <p>
      Ta có:
    </p>

    <div style="margin:16px 0;">
      \\(
      \\int x^\\alpha dx
      =
      \\dfrac{x^{\\alpha+1}}{\\alpha+1}+C
      \\quad
      (\\alpha\\neq-1)
      \\)
    </div>

    <p>
      Do đó:
    </p>

    <div style="margin:16px 0;">
      \\(
      \\int(e^x+x^e)dx
      =
      e^x
      +
      \\dfrac{x^{e+1}}{e+1}
      +C
      \\)
    </div>

    <p>
      nên khẳng định đã cho sai.
    </p>

    <p>
      c) Sai.
    </p>

    <p>
      Một nguyên hàm của 
      \\(
      f(x)
      \\)
      là:
    </p>

    <div style="margin:16px 0;">
      \\(
      F(x)
      =
      e^x
      +
      \\dfrac{x^{e+1}}{e+1}
      +C
      \\)
    </div>

    <p>
      Từ:
    </p>

    <div style="margin:16px 0;">
      \\(
      F(0)=1
      \\)
    </div>

    <p>
      suy ra:
    </p>

    <div style="margin:16px 0;">
      \\(
      e^0+0+C=1
      \\)
    </div>

    <div style="margin:16px 0;">
      \\(
      1+C=1
      \\Rightarrow
      C=0
      \\)
    </div>

    <p>
      Vậy:
    </p>

    <div style="margin:16px 0;">
      \\(
      F(x)
      =
      e^x
      +
      \\dfrac{x^{e+1}}{e+1}
      \\)
    </div>

    <p>
      Khi đó:
    </p>

    <div style="margin:16px 0;">
      \\(
      F(1)
      =
      e
      +
      \\dfrac{1}{e+1}
      \\neq
      2e
      \\)
    </div>

    <p>
      d) Sai.
    </p>

    <p>
      Ta có:
    </p>

    <div style="margin:16px 0;">
      \\(
      F(x)
      =
      e^x
      +
      \\dfrac{x^{e+1}}{e+1}
      \\)
    </div>

    <p>
      và:
    </p>

    <div style="margin:16px 0;">
      \\(
      G(x)
      =
      e^x
      +
      \\dfrac{x^{e+1}}{e+1}
      +C'
      \\)
    </div>

    <p>
      Do:
    </p>

    <div style="margin:16px 0;">
      \\(
      G(1)=e
      \\)
    </div>

    <p>
      nên:
    </p>

    <div style="margin:16px 0;">
      \\(
      e
      +
      \\dfrac{1}{e+1}
      +C'
      =
      e
      \\)
    </div>

    <div style="margin:16px 0;">
      \\(
      C'
      =
      -\\dfrac{1}{e+1}
      \\)
    </div>

    <p>
      Do đó:
    </p>

    <div style="margin:16px 0;">
      \\(
      G(x)-F(x)
      =
      -\\dfrac{1}{e+1}
      \\)
    </div>

    <p>
      không phải bằng 
      \\(
      e
      \\).
    </p>

  `
},










  

  // =====================
  // TRẢ LỜI NGẮN
  // =====================

 {
  type: "short",

  question: `
    Để \\(F(x)=ax^3+(3a+2)x^2-4x+3\\)


    là một nguyên hàm của hàm số

    \\[
    f(x)=3x^2+10x-4
    \\]

    thì giá trị của tham số
    \\(
    a
    \\)
    bằng bao nhiêu?
  `,

  correct: "1",

  solution: `
    <p><b>Lời giải:</b></p>

    <p>
      Ta có:
    </p>

    <div style="margin:12px 0;">
      \\\[
      F'(x)
      =
      3ax^2
      +
      2(3a+2)x
      -
      4
      \\\]
    </div>

    <p>
      Vì
      \\(
      F(x)
      \\)
      là một nguyên hàm của
      \\(
      f(x)
      \\)
      nên:
    </p>

    <div style="margin:12px 0;">
      \\\[
      F'(x)=f(x),
      \\quad
      \\forall x
      \\\]
    </div>

    <p>
      Đồng nhất hệ số của
      \\(
      x^2
      \\):
    </p>

    <div style="margin:12px 0;">
      \\\[
      3a=3
      \\Rightarrow
      a=1
      \\\]
    </div>

    <p>
      Kiểm tra lại hệ số của
      \\(
      x
      \\):
    </p>

    <div style="margin:12px 0;">
      \\\[
      2(3\\cdot1+2)=10
      \\\]
    </div>

    <p>
      Vậy giá trị của tham số là:
      <b>
      \\(
      a=1
      \\)
      </b>.
    </p>
  `
},



{
  type: "short",

  question: `
    Một chất điểm chuyển động trên đường thẳng nằm ngang với gia tốc phụ thuộc thời gian

    \\[
    a(t)=2t-7\\,(m/s^2)
    \\]

    Biết vận tốc ban đầu bằng
    \\(
    10m/s
    \\).

    Hỏi sau bao lâu chất điểm đạt vận tốc
    \\(
    18m/s
    \\)?
  `,

  correct: "8",

  solution: `
    <p><b>Lời giải:</b></p>

    <p>
      Ta có:
    </p>

    <div style="margin:12px 0;">
      \\\[
      v(t)
      =
      \\int a(t)dt
      =
      \\int(2t-7)dt
      =
      t^2-7t+C
      \\\]
    </div>

    <p>
      Vì vận tốc ban đầu:
    </p>

    <div style="margin:12px 0;">
      \\\[
      v(0)=10
      \\\]
    </div>

    <p>
      nên:
    </p>

    <div style="margin:12px 0;">
      \\\[
      0^2-7\\cdot0+C=10
      \\Rightarrow
      C=10
      \\\]
    </div>

    <p>
      Do đó:
    </p>

    <div style="margin:12px 0;">
      \\\[
      v(t)=t^2-7t+10
      \\\]
    </div>

    <p>
      Để đạt vận tốc
      \\(
      18m/s
      \\),
      ta có:
    </p>

    <div style="margin:12px 0;">
      \\\[
      t^2-7t+10=18
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      \\Leftrightarrow
      t^2-7t-8=0
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      \\Leftrightarrow
      t=
      \\frac{7\\pm\\sqrt{49+32}}{2}
      =
      \\frac{7\\pm9}{2}
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      t=-1
      \\ (loại),
      \\quad
      t=8
      \\ (nhận)
      \\\]
    </div>

    <p>
      Vậy sau
      <b>8 giây</b>
      vật đạt vận tốc
      \\(
      18m/s
      \\).
    </p>
  `
},




{
  type: "short",

  question: `
    Tốc độ tăng trưởng của một đàn gấu mèo tại thời điểm
    \\(
    t
    \\)
    tháng kể từ khi người ta thả
    100
    cá thể đầu tiên vào một khu rừng được ước lượng bởi công thức

    \\[
    P'(t)=8t+30
    \\]

    (con/tháng), với
    \\(
    P(t)
    \\)
    là số lượng cá thể trong đàn.

    Hãy ước tính số cá thể của đàn gấu mèo tại thời điểm
    \\(
    3
    \\)
    tháng kể từ khi chúng được thả vào rừng.
  `,

  correct: "226",

  solution: `
    <p style="text-align:center;">
      <u><b>Lời giải</b></u>
    </p>

    <p>
      Ta có:
    </p>

    <div style="margin:12px 0;">
      \\\[
      P(t)
      =
      \\int P'(t)dt
      =
      \\int (8t+30)dt
      =
      4t^2+30t+C
      \\\]
    </div>

    <p>
      Tại thời điểm ban đầu:
      \\(
      P(0)=100
      \\)
      nên:
    </p>

    <div style="margin:12px 0;">
      \\\[
      C=100
      \\\]
    </div>

    <p>
      Do đó:
    </p>

    <div style="margin:12px 0;">
      \\\[
      P(t)
      =
      4t^2+30t+100
      \\\]
    </div>

    <p>
      Tại thời điểm
      \\(
      t=3
      \\)
      tháng:
    </p>

    <div style="margin:12px 0;">
      \\\[
      P(3)
      =
      4\\cdot3^2
      +
      30\\cdot3
      +
      100
      =
      36+90+100
      =
      226
      \\\]
    </div>

    <p>
      Vậy số cá thể của đàn gấu mèo sau
      \\(
      3
      \\)
      tháng là:
      <b>226</b>.
    </p>
  `
},






]





    },

    // ================= BÀI 12 =================
    1: {
   video: "https://www.youtube.com/embed/EVvku6Yic9c",
      theory: `

<h4 class="lesson-section-title">1. Khái niệm tích phân</h4>

<div class="theory-main-box">

  <p style="color:red; font-weight:bold; margin-bottom:15px;">
    Diện tích hình thang cong
  </p>

  <p style="text-align: justify; line-height: 1.6; margin-bottom: 15px;">
    Nếu hàm số \\( f(x) \\) liên tục và không âm trên đoạn 
    \\( [a;b] \\), thì diện tích \\( S \\) của hình thang cong giới hạn bởi đồ thị 
    \\( y=f(x) \\), trục hoành và hai đường thẳng 
    \\( x=a, x=b \\) là
  </p>

  <div style="margin: 16px 0;">
    \\(
    S=F(b)-F(a)
    \\)
  </div>

  <p style="text-align: justify; line-height: 1.6; margin-bottom: 15px;">
    trong đó \\( F(x) \\) là một nguyên hàm của hàm số 
    \\( f(x) \\) trên đoạn \\( [a;b] \\).
  </p>

</div>


<div class="example-box">
  <p>
    <b>
      Ví dụ. Tính diện tích \\( S \\) của hình thang cong giới hạn bởi đồ thị hàm số 
      \\( y=f(x)=x^3 \\), trục hoành và hai đường thẳng 
      \\( x=1, x=2 \\).
    </b>
  </p>

  <div style="text-align:center; margin-top:15px;">
    <img src="5.png" alt="Tính diện tích hình thang cong" class="theory-image" style="display:block; margin:0 auto; max-width:60%;">

    <p style="text-align:center; font-style:italic; margin-top:8px;">
      Hình 1.1
    </p>
  </div>
</div>

<p><b>Giải:</b> (H.1.1)</p>

<p>
  Một nguyên hàm của hàm số 
  \\(
  f(x)=x^3
  \\)
  là
</p>

<div style="margin:16px 0;">
  \\(
  F(x)=\\dfrac{x^4}{4}
  \\)
</div>

<p>
  Do đó, diện tích của hình thang cong cần tính là:
</p>

<div style="margin:20px 0;">
  \\(
  S=F(2)-F(1)
  =
  \\dfrac{2^4}{4}
  -
  \\dfrac{1^4}{4}
  =
  \\dfrac{15}{4}
  \\)
</div>





<div class="theory-main-box">

  <p style="color:red; font-weight:bold; margin-bottom:15px;">
    Định nghĩa tích phân
  </p>

  <p style="text-align: justify; line-height: 1.6; margin-bottom: 15px;">
    Cho \\( f(x) \\) là hàm số liên tục trên đoạn 
    \\( [a;b] \\). Nếu \\( F(x) \\) là một nguyên hàm của hàm số 
    \\( f(x) \\) trên đoạn \\( [a;b] \\) thì hiệu số 
    \\( F(b)-F(a) \\) được gọi là tích phân từ 
    \\( a \\) đến \\( b \\) của hàm số 
    \\( f(x) \\), kí hiệu là
  </p>

  <div style="margin: 16px 0;">
    \\(
    \\int_a^b f(x) \\, dx
    \\)
  </div>

  <p style="margin: 16px 0;">
    Hiệu \\( F(b)-F(a) \\) kí hiệu là
  </p>

  <div style="margin: 16px 0;">
    \\(
    F(x)\\Big|_a^b
    \\)
  </div>

</div>


<div class="example-box">
  <p>
    <b>Ví dụ. Tính:</b>
  </p>

  <p>
    a) \\(
    \\displaystyle \\int_{-1}^{3} x^2 \\, dx
    \\)
  </p>

  <p>
    b) \\(
    \\displaystyle \\int_{0}^{\\frac{\\pi}{6}} \\cos t \\, dt
    \\)
  </p>

  <p>
    c) \\(
    \\displaystyle \\int_{0}^{\\frac{\\pi}{4}}
    \\frac{du}{\\cos^2 u}
    \\)
  </p>

  <p>
    d) \\(
    \\displaystyle \\int_{1}^{2} 2^x \\, dx
    \\)
  </p>
</div>

<p><b>Giải:</b></p>

<p>
  a)
</p>

<div style="margin:16px 0;">
  \\(
  \\displaystyle
  \\int_{-1}^{3} x^2 \\, dx
  =
  \\frac{x^3}{3}\\Bigg|_{-1}^{3}
  =
  \\frac{1}{3}
  \\left[
  3^3-(-1)^3
  \\right]
  =
  \\frac{28}{3}
  \\)
</div>

<p>
  b)
</p>

<div style="margin:16px 0;">
  \\(
  \\displaystyle
  \\int_{0}^{\\frac{\\pi}{6}} \\cos t \\, dt
  =
  \\sin t\\Bigg|_{0}^{\\frac{\\pi}{6}}
  =
  \\sin \\frac{\\pi}{6}
  -
  \\sin 0
  =
  \\frac{1}{2}
  \\)
</div>

<p>
  c)
</p>

<div style="margin:16px 0;">
  \\(
  \\displaystyle
  \\int_{0}^{\\frac{\\pi}{4}}
  \\frac{du}{\\cos^2 u}
  =
  \\tan u\\Bigg|_{0}^{\\frac{\\pi}{4}}
  =
  \\tan \\frac{\\pi}{4}
  -
  \\tan 0
  =
  1
  \\)
</div>

<p>
  d)
</p>

<div style="margin:16px 0;">
  \\(
  \\displaystyle
  \\int_{1}^{2} 2^x \\, dx
  =
  \\frac{2^x}{\\ln 2}\\Bigg|_{1}^{2}
  =
  \\frac{2^2}{\\ln 2}
  -
  \\frac{2^1}{\\ln 2}
  =
  \\frac{2}{\\ln 2}
  \\)
</div>






<div class="theory-main-box">

  <p style="color:red; font-weight:bold; margin-bottom:15px;">
    Ý nghĩa hình học của tích phân (Tính diện tích hình phẳng)
  </p>

  <p style="text-align: justify; line-height: 1.6;">
    Nếu hàm số \\( f(x) \\) liên tục và không âm trên đoạn 
    \\( [a;b] \\) thì tích phân
  </p>

  <div style="margin: 16px 0;">
    \\(
    \\int_a^b f(x) \\, dx
    \\)
  </div>

  <p style="text-align: justify; line-height: 1.6;">
    là diện tích \\( S \\) của hình thang cong giới hạn bởi đồ thị 
    \\( y=f(x) \\), trục hoành và hai đường thẳng 
    \\( x=a, x=b \\).
  </p>

</div>



<div class="example-box">
  <p>
    <b>
      Ví dụ. Sử dụng ý nghĩa hình học của tích phân, tính:
    </b>
  </p>

  <p>
    a) \\(
    \\displaystyle \\int_{0}^{1}(x+1) \\, dx
    \\)
  </p>

  <p>
    b) \\(
    \\displaystyle \\int_{-1}^{1}\\sqrt{1-x^2} \\, dx
    \\)
  </p>
</div>

<p><b>Giải:</b></p>

<p>
  a) Tích phân cần tính là diện tích của hình thang vuông 
  \\(
  OABC
  \\),
  có đáy nhỏ 
  \\(
  OC=1
  \\),
  đáy lớn 
  \\(
  AB=2
  \\)
  và đường cao 
  \\(
  OA=1
  \\)
  (H.1.2).
</p>

<div style="text-align:center; margin:15px 0;">
  <img src="6.png" alt="Ý nghĩa hình học tích phân hình thang" class="theory-image" style="display:block; margin:0 auto; max-width:50%;">

  <p style="text-align:center; font-style:italic; margin-top:8px;">
    Hình 1.2
  </p>
</div>

<p>
  Do đó:
</p>

<div style="margin:16px 0;">
  \\(
  \\displaystyle
  \\int_{0}^{1}(x+1) \\, dx
  =
  S_{OABC}
  =
  \\frac{1}{2}(OC+AB)\\cdot OA
  =
  \\frac{1}{2}(1+2)\\cdot 1
  =
  \\frac{3}{2}
  \\)
</div>

<hr style="border:0; border-top:1px dashed #ccc; margin:25px 0;">

<p>
  b) Ta có
  \\(
  y=\\sqrt{1-x^2}
  \\)
  là phương trình nửa phía trên trục hoành của đường tròn tâm tại gốc tọa độ 
  \\(
  O
  \\)
  và bán kính 1.
</p>

<p>
  Do đó, tích phân cần tính là diện tích nửa phía trên trục hoành của hình tròn tương ứng (H.1.3).
</p>

<div style="text-align:center; margin:15px 0;">
  <img src="7.png" alt="Ý nghĩa hình học tích phân nửa hình tròn" class="theory-image" style="display:block; margin:0 auto; max-width:40%;">

  <p style="text-align:center; font-style:italic; margin-top:8px;">
    Hình 1.3
  </p>
</div>

<p>
  Vậy:
</p>

<div style="margin:16px 0;">
  \\(
  \\displaystyle
  \\int_{-1}^{1}\\sqrt{1-x^2} \\, dx
  =
  \\frac{\\pi}{2}
  \\)
</div>

      `,








questions: [

  // =====================
  // TRẮC NGHIỆM
  // =====================

{
  type: "mcq",

  question: `
    Giá trị của 
    \\(
    \\displaystyle \\int_{0}^{1}
    \\frac{e^{2x}-4}{e^x+2}
    \\, dx
    \\)
    bằng?
  `,

  options: [
    "A. \\(I = 2(e+3)\\)",

    "B. \\(I = \\dfrac{e+3}{2}\\)",

    "C. \\(I = e-3\\)",

    "D. \\(I = 2(e-3)\\)"
  ],

  answer: 2,

  solution: `
    <p><b>Lời giải:</b></p>

    <div style="margin:12px 0;">
      \\\[
      I
      =
      \\int_{0}^{1}
      \\frac{e^{2x}-4}{e^x+2}
      \\, dx
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      =
      \\int_{0}^{1}
      \\frac{(e^x-2)(e^x+2)}{e^x+2}
      \\, dx
      =
      \\int_{0}^{1}
      (e^x-2)
      \\, dx
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      =
      (e^x-2x)
      \\Big|_0^1
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      =
      (e-2)-(1-0)
      =
      e-3
      \\\]
    </div>

    <p>
      Vậy đáp án đúng là <b>C</b>.
    </p>
  `
},


{
  type: "mcq",

  question: `
    Tính tích phân
    \\(
    I=
    \\displaystyle
    \\int_{0}^{2}
    |x^2+2x-3|
    \\, dx
    \\).
  `,

  options: [
    "A. \\(I=-2\\)",

    "B. \\(I=4\\)",

    "C. \\(I=5\\)",

    "D. \\(I=-4\\)"
  ],

  answer: 2,

  solution: `
    <p><b>Lời giải:</b></p>

    <p>
      Ta có:
    </p>

    <div style="margin:12px 0;">
      \\\[
      x^2+2x-3=0
      \\Leftrightarrow
      x=1
      \\text{ hoặc }
      x=-3
      \\\]
    </div>

    <p>
      Suy ra:
    </p>

    <div style="margin:12px 0;">
      \\\[
      x^2+2x-3<0,
      \\forall x\\in[0;1]
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      x^2+2x-3>0,
      \\forall x\\in[1;2]
      \\\]
    </div>

    <p>
      Do đó:
    </p>

    <div style="margin:12px 0;">
      \\\[
      I
      =
      \\int_{0}^{1}
      (3-2x-x^2)
      \\, dx
      +
      \\int_{1}^{2}
      (x^2+2x-3)
      \\, dx
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      =
      \\left(
      3x-x^2-\\frac{x^3}{3}
      \\right)
      \\Big|_0^1
      +
      \\left(
      -3x+x^2+\\frac{x^3}{3}
      \\right)
      \\Big|_1^2
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      I=5
      \\\]
    </div>

    <p>
      Vậy đáp án đúng là <b>C</b>.
    </p>
  `
},


{
  type: "mcq",

  question: `
    Cho
    \\(
    F'(x)=\\dfrac{1}{2x}
    \\)
    và
    \\(
    F(1)=1
    \\).
    Tìm giá trị
    \\(
    F(4)
    \\)?
  `,

  options: [
    "A. \\(\\ln2\\)",

    "B. \\(1+\\ln2\\)",

    "C. \\(1+\\dfrac{1}{2}\\ln2\\)",

    "D. \\(\\dfrac{1}{2}\\ln2\\)"
  ],

  answer: 1,

  solution: `
    <p><b>Lời giải:</b></p>

    <div style="margin:12px 0;">
      \\\[
      \\int_{1}^{4}
      F'(x)
      \\, dx
      =
      \\int_{1}^{4}
      \\frac{1}{2x}
      \\, dx
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      =
      \\left(
      \\frac{1}{2}\\ln|x|
      \\right)
      \\Big|_1^4
      =
      \\frac{1}{2}\\ln4
      =
      \\ln2
      \\\]
    </div>

    <p>
      Mặt khác:
    </p>

    <div style="margin:12px 0;">
      \\\[
      \\int_{1}^{4}
      F'(x)
      \\, dx
      =
      F(x)
      \\Big|_1^4
      =
      F(4)-F(1)
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      F(4)-1
      =
      \\ln2
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      F(4)
      =
      1+\\ln2
      \\\]
    </div>

    <p>
      Vậy đáp án đúng là <b>B</b>.
    </p>
  `
},


{
  type: "mcq",

  question: `
    Nếu
    \\(
    \\displaystyle
    \\int_{0}^{3}
    f(x)
    \\, dx
    =
    6
    \\)
    thì
    \\(
    \\displaystyle
    \\int_{0}^{3}
    \\left[
    \\frac{1}{3}f(x)+2
    \\right]
    \\, dx
    \\)
    bằng?
  `,

  options: [
    "A. \\(8\\)",

    "B. \\(5\\)",

    "C. \\(9\\)",

    "D. \\(6\\)"
  ],

  answer: 0,

  solution: `
    <p><b>Lời giải:</b></p>

    <p>
      Áp dụng tính chất tuyến tính của tích phân:
    </p>

    <div style="margin:12px 0;">
      \\\[
      \\int_{0}^{3}
      \\left[
      \\frac{1}{3}f(x)+2
      \\right]
      \\, dx
      =
      \\frac{1}{3}
      \\int_{0}^{3}
      f(x)
      \\, dx
      +
      \\int_{0}^{3}
      2
      \\, dx
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      =
      \\frac{1}{3}\\cdot6
      +
      2(3-0)
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      =
      2+6
      =
      8
      \\\]
    </div>

    <p>
      Vậy đáp án đúng là <b>A</b>.
    </p>
  `
},

{
  type: "mcq",

  question: `
    Cho hàm số
    \\(
    f(x)
    \\)
    có đạo hàm liên tục trên
    \\(
    [-1;2]
    \\)
    thỏa mãn
    \\(
    f(-1)=8
    \\)
    và
    \\(
    f(2)=-1
    \\).
    
    Giá trị của tích phân
    \\(
    \\displaystyle
    \\int_{-1}^{2}
    f'(x)
    \\, dx
    \\)
    bằng?
  `,

  options: [
    "A. \\(1\\)",

    "B. \\(\\dfrac{2}{3}\\)",

    "C. \\(-9\\)",

    "D. \\(\\dfrac{3}{2}\\)"
  ],

  answer: 2,

  solution: `
    <p><b>Lời giải:</b></p>

    <p>
      Áp dụng công thức Newton-Leibniz:
    </p>

    <div style="margin:12px 0;">
      \\\[
      \\int_{-1}^{2}
      f'(x)
      \\, dx
      =
      f(x)
      \\Big|_{-1}^{2}
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      =
      f(2)-f(-1)
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      =
      -1-8
      =
      -9
      \\\]
    </div>

    <p>
      Vậy đáp án đúng là <b>C</b>.
    </p>
  `
},


{
  type: "mcq",

  question: `
    Một ô tô đang chạy với vận tốc
    \\(
    10\\,m/s
    \\)
    thì gặp chướng ngại vật, người lái xe đạp phanh.
    
    Từ thời điểm đó, ô tô chuyển động chậm dần đều với vận tốc
    \\(
    v(t)=-2t+10
    \\)
    \\(
    (m/s)
    \\),
    trong đó
    \\(
    t
    \\)
    là thời gian tính bằng giây kể từ lúc bắt đầu đạp phanh.
    
    Tính quãng đường ô tô di chuyển được trong
    \\(
    8
    \\)
    giây cuối cùng.
  `,

  options: [
    "A. \\(55m\\)",

    "B. \\(25m\\)",

    "C. \\(50m\\)",

    "D. \\(16m\\)"
  ],

  answer: 0,

  solution: `
    <p><b>Lời giải:</b></p>

    <p>
      Xe dừng lại khi:
    </p>

    <div style="margin:12px 0;">
      \\\[
      -2t+10=0
      \\Leftrightarrow
      t=5
      \\\]
    </div>

    <p>
      Vậy kể từ lúc đạp phanh, xe chuyển động thêm
      \\(
      5
      \\)
      giây rồi dừng hẳn.
    </p>

    <p>
      Trong
      \\(
      8
      \\)
      giây cuối cùng:
    </p>

    <ul style="line-height:1.8;">
      <li>
        Có
        \\(
        3
        \\)
        giây xe chạy đều với vận tốc
        \\(
        10m/s
        \\).
      </li>

      <li>
        Có
        \\(
        5
        \\)
        giây xe chuyển động chậm dần với
        \\(
        v(t)=-2t+10
        \\).
      </li>
    </ul>

    <p>
      Quãng đường xe đi được:
    </p>

    <div style="margin:12px 0;">
      \\\[
      S
      =
      3\\cdot10
      +
      \\int_{0}^{5}
      (-2t+10)
      \\,dt
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      =
      30
      +
      (-t^2+10t)
      \\Big|_0^5
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      =
      30+25
      =
      55m
      \\\]
    </div>

    <p>
      Vậy đáp án đúng là <b>A</b>.
    </p>
  `
},








  // =====================
  // ĐÚNG SAI
  // =====================

  {
  type: "truefalse-group",

  question: `
    Cho hàm số 
    \\(
    f(x),g(x)
    \\)
    liên tục trên 
    \\(
    \\mathbb{R}
    \\).
    Xét tính đúng sai của các khẳng định sau:
  `,

  statements: [

    {
      text: `
        a) Nếu 
        \\(
        \\int_0^2 f(x)dx=6
        \\)
        thì
        \\(
        \\int_0^2 [2f(x)-1]dx=-10
        \\)
      `,
      answer: "Sai"
    },

    {
      text: `
        b) Nếu 
        \\(
        \\int_0^2 f(x)dx=4
        \\)
        thì
        \\(
        \\int_0^2 [f(x)+1]dx=4
        \\)
      `,
      answer: "Sai"
    },

    {
      text: `
        c) Nếu 
        \\(
        \\int_0^2 f(x)dx=3
        \\)
        và
        \\(
        \\int_0^2 g(x)dx=7
        \\)
        thì
        \\(
        \\int_0^2 [f(x)+3g(x)]dx=24
        \\)
      `,
      answer: "Đúng"
    },

    {
      text: `
        d) Nếu 
        \\(
        \\int_0^1 [f(x)+2x]dx=3
        \\)
        thì
        \\(
        \\int_0^1 f(x)dx=2
        \\)
      `,
      answer: "Đúng"
    }

  ],

  solution: `

    <p><b>Lời giải:</b></p>

    <p>
      a) Sai.
    </p>

    <p>
      Ta có:
    </p>

    <div style="margin:16px 0;">
      \\(
      \\int_0^2 [2f(x)-1]dx
      =
      2\\int_0^2 f(x)dx
      -
      \\int_0^2 1dx
      \\)
    </div>

    <div style="margin:16px 0;">
      \\(
      =
      2\\cdot6-2
      =
      10
      \\)
    </div>

    <p>
      nên khẳng định đã cho sai.
    </p>

    <p>
      b) Sai.
    </p>

    <p>
      Ta có:
    </p>

    <div style="margin:16px 0;">
      \\(
      \\int_0^2 [f(x)+1]dx
      =
      \\int_0^2 f(x)dx
      +
      \\int_0^2 1dx
      \\)
    </div>

    <div style="margin:16px 0;">
      \\(
      =
      4+2
      =
      6
      \\)
    </div>

    <p>
      nên khẳng định sai.
    </p>

    <p>
      c) Đúng.
    </p>

    <p>
      Theo tính chất tuyến tính của tích phân:
    </p>

    <div style="margin:16px 0;">
      \\(
      \\int_0^2 [f(x)+3g(x)]dx
      =
      \\int_0^2 f(x)dx
      +
      3\\int_0^2 g(x)dx
      \\)
    </div>

    <div style="margin:16px 0;">
      \\(
      =
      3+3\\cdot7
      =
      24
      \\)
    </div>

    <p>
      nên khẳng định đúng.
    </p>

    <p>
      d) Đúng.
    </p>

    <p>
      Ta có:
    </p>

    <div style="margin:16px 0;">
      \\(
      \\int_0^1 [f(x)+2x]dx
      =
      \\int_0^1 f(x)dx
      +
      2\\int_0^1 xdx
      =
      3
      \\)
    </div>

    <p>
      Mà:
    </p>

    <div style="margin:16px 0;">
      \\(
      2\\int_0^1 xdx
      =
      2\\cdot
      \\dfrac{x^2}{2}
      \\Big|_0^1
      =
      1
      \\)
    </div>

    <p>
      nên:
    </p>

    <div style="margin:16px 0;">
      \\(
      \\int_0^1 f(x)dx
      =
      3-1
      =
      2
      \\)
    </div>

    <p>
      nên khẳng định đúng.
    </p>

  `
},



{
  type: "truefalse-group",

  question: `
    Cho hàm số
    \\(
    f(x)=
    \\begin{cases}
    x^2-2x+3,&x\\ge2\\\\
    x+1,&x<2
    \\end{cases}
    \\).
    Xét tính đúng sai của các khẳng định sau:
  `,

  statements: [

    {
      text: `
        a)
        \\(
        \\int_1^2 f(x)dx
        =
        \\int_1^2 (x+1)dx
        \\)
      `,
      answer: "Đúng"
    },

    {
      text: `
        b)
        \\(
        \\int_2^3 f(x)dx
        =
        \\int_2^3 (x^2-2x+3)dx
        \\)
      `,
      answer: "Đúng"
    },

    {
      text: `
        c)
        \\(
        \\int_1^3 \\dfrac12 f(x)dx
        =
        \\dfrac{41}{12}
        \\)
      `,
      answer: "Đúng"
    },

    {
      text: `
        d)
        \\(
        \\int_1^2 f(x)dx
        =
        \\int_1^2 (x^2-2x+3)dx
        \\)
      `,
      answer: "Sai"
    }

  ],

  solution: `

    <p><b>Lời giải:</b></p>

    <p>
      Ta có:
    </p>

    <div style="margin:16px 0;">
      \\(
      f(x)=
      \\begin{cases}
      x^2-2x+3,&x\\ge2\\\\
      x+1,&x<2
      \\end{cases}
      \\)
    </div>

    <p>
      a) Đúng.
    </p>

    <p>
      Trên khoảng
      \\(
      [1;2]
      \\)
      ta có
      \\(
      x<2
      \\)
      nên:
    </p>

    <div style="margin:16px 0;">
      \\(
      f(x)=x+1
      \\)
    </div>

    <p>
      Do đó:
    </p>

    <div style="margin:16px 0;">
      \\(
      \\int_1^2 f(x)dx
      =
      \\int_1^2 (x+1)dx
      \\)
    </div>

    <p>
      b) Đúng.
    </p>

    <p>
      Trên khoảng
      \\(
      [2;3]
      \\)
      ta có
      \\(
      x\\ge2
      \\)
      nên:
    </p>

    <div style="margin:16px 0;">
      \\(
      f(x)=x^2-2x+3
      \\)
    </div>

    <p>
      Vì vậy:
    </p>

    <div style="margin:16px 0;">
      \\(
      \\int_2^3 f(x)dx
      =
      \\int_2^3 (x^2-2x+3)dx
      \\)
    </div>

    <p>
      c) Đúng.
    </p>

    <p>
      Ta có:
    </p>

    <div style="margin:16px 0;">
      \\(
      \\int_1^3 \\dfrac12 f(x)dx
      =
      \\dfrac12
      \\left[
      \\int_1^2 (x+1)dx
      +
      \\int_2^3 (x^2-2x+3)dx
      \\right]
      \\)
    </div>

    <p>
      Tính các tích phân:
    </p>

    <div style="margin:16px 0;">
      \\(
      \\int_1^2 (x+1)dx
      =
      \\left(
      \\dfrac{x^2}{2}+x
      \\right)
      \\Big|_1^2
      =
      \\dfrac52
      \\)
    </div>

    <div style="margin:16px 0;">
      \\(
      \\int_2^3 (x^2-2x+3)dx
      =
      \\left(
      \\dfrac{x^3}{3}-x^2+3x
      \\right)
      \\Big|_2^3
      =
      \\dfrac{13}{3}
      \\)
    </div>

    <p>
      Suy ra:
    </p>

    <div style="margin:16px 0;">
      \\(
      \\int_1^3 \\dfrac12 f(x)dx
      =
      \\dfrac12
      \\left(
      \\dfrac52+\\dfrac{13}{3}
      \\right)
      =
      \\dfrac12\\cdot\\dfrac{41}{6}
      =
      \\dfrac{41}{12}
      \\)
    </div>

    <p>
      d) Sai.
    </p>

    <p>
      Trên khoảng
      \\(
      [1;2]
      \\)
      ta có:
    </p>

    <div style="margin:16px 0;">
      \\(
      f(x)=x+1
      \\neq
      x^2-2x+3
      \\)
    </div>

    <p>
      nên:
    </p>

    <div style="margin:16px 0;">
      \\(
      \\int_1^2 f(x)dx
      \\neq
      \\int_1^2 (x^2-2x+3)dx
      \\)
    </div>

  `
},










  



  // =====================
  // TRẢ LỜI NGẮN
  // =====================

 {
  type: "short",

  question: `
    Biết

    \\[
    \\int_{1}^{2} f(x)\\,dx=3,
    \\quad
    \\int_{1}^{2} g(x)\\,dx=2
    \\]

    và

    \\[
    \\int_{1}^{2} h(x)\\,dx=2022.
    \\]

    Tính

    \\[
    I=
    \\int_{1}^{2}
    [f(x)-g(x)+h(x)]
    \\,dx
    \\]
  `,

  correct: "2023",

  solution: `
    <p><b>Lời giải:</b></p>

    <div style="margin:12px 0;">
      \\\[
      I
      =
      \\int_{1}^{2}
      [f(x)-g(x)+h(x)]
      \\,dx
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      =
      \\int_{1}^{2}f(x)\\,dx
      -
      \\int_{1}^{2}g(x)\\,dx
      +
      \\int_{1}^{2}h(x)\\,dx
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      =
      3-2+2022
      =
      2023
      \\\]
    </div>

    <p>
      Vậy đáp án đúng là:
      <b>2023</b>.
    </p>
  `
},


{
  type: "short",

  question: `
    Chất điểm chuyển động theo quy luật vận tốc
    \\(
    v(t)
    \\)
    \\(
    (m/s)
    \\)
    có dạng parabol khi

    \\[
    0\\le t\\le5
    \\]

    và có dạng đường thẳng khi

    \\[
    5\\le t\\le10.
    \\]

    Biết parabol đi qua các điểm

    \\[
    I(2;3),\\ A(0;11)
    \\]

    và tiếp xúc với trục hoành tại
    \\(
    t=2
    \\).

    Hỏi quãng đường chất điểm đi được trong khoảng thời gian

    \\[
    0\\le t\\le10
    \\]

    bằng bao nhiêu mét?
  `,

  correct: "545/6",

  solution: `
    <p><b>Lời giải:</b></p>

    <p>
      Gọi parabol:
    </p>

    <div style="margin:12px 0;">
      \\\[
      y=ax^2+bx+c
      \\quad (0\\le t\\le5)
      \\\]
    </div>

    <p>
      Vì đồ thị đi qua
      \\(
      I(2;3)
      \\)
      và
      \\(
      A(0;11)
      \\)
      nên:
    </p>

    <div style="margin:12px 0;">
      \\\[
      \\begin{cases}
      4a+2b+c=3 \\\\
      c=11 \\\\
      4a+b=0
      \\end{cases}
      \\Rightarrow
      \\begin{cases}
      a=2 \\\\
      b=-8 \\\\
      c=11
      \\end{cases}
      \\\]
    </div>

    <p>
      Do đó:
    </p>

    <div style="margin:12px 0;">
      \\\[
      v(t)=2t^2-8t+11
      \\\]
    </div>

    <p>
      Quãng đường đi được từ
      \\(
      0
      \\)
      đến
      \\(
      5
      \\)
      giây là:
    </p>

    <div style="margin:12px 0;">
      \\\[
      S_1=
      \\int_0^5
      (2t^2-8t+11)
      \\,dt
      =
      \\frac{115}{3}
      \\]
    </div>

    <p>
      Ta có:
    </p>

    <div style="margin:12px 0;">
      \\\[
      v(5)=21
      \\\]
    </div>

    <p>
      Với
      \\(
      5\\le t\\le10
      \\),
      gọi vận tốc là:
    </p>

    <div style="margin:12px 0;">
      \\\[
      y=ax+b
      \\\]
    </div>

    <p>
      Vì đường thẳng đi qua
      \\(
      B(5;21)
      \\)
      và
      \\(
      C(10;0)
      \\)
      nên:
    </p>

    <div style="margin:12px 0;">
      \\\[
      \\begin{cases}
      5a+b=21 \\\\
      10a+b=0
      \\end{cases}
      \\Rightarrow
      \\begin{cases}
      a=-\\frac{21}{5} \\\\
      b=42
      \\end{cases}
      \\\]
    </div>

    <p>
      Suy ra:
    </p>

    <div style="margin:12px 0;">
      \\\[
      v(t)=
      -\\frac{21}{5}t+42
      \\\]
    </div>

    <p>
      Quãng đường từ
      \\(
      5
      \\)
      đến
      \\(
      10
      \\)
      giây là:
    </p>

    <div style="margin:12px 0;">
      \\\[
      S_2=
      \\int_5^{10}
      \\left(
      -\\frac{21}{5}t+42
      \\right)
      \\,dt
      =
      \\frac{105}{2}
      \\\]
    </div>

    <p>
      Tổng quãng đường:
    </p>

    <div style="margin:12px 0;">
      \\\[
      S=
      \\frac{115}{3}
      +
      \\frac{105}{2}
      =
      \\frac{545}{6}
      \\]
    </div>

    <p>
      Vậy đáp án đúng là:
      <b>
        \\(
        \\frac{545}{6}
        \\)
      </b>.
    </p>
  `
},

  
]







    },

    // ================= BÀI 13 =================
    2: {
      video: "https://www.youtube.com/embed/uS1xjF-c_Dw",
      theory: `
        <h4 class="lesson-section-title">1. Ứng dụng tích phân để tính diện tích hình phẳng</h4>

        <div class="theory-main-box">
          <p>
            <b>
              Hình phẳng giới hạn bởi
              \\(\\left\\{
              \\begin{array}{l}
              y=f(x) \\\\
              y=g(x) \\\\
              x=a, x=b \\ (a < b)
              \\end{array}
              \\right.\\)
              có diện tích là
              \\(S=\\int_a^b |f(x)-g(x)|dx\\).
            </b>
          </p>




        </div>

        <div class="example-box">
          <p><b>Ví dụ: Tính diện tích hình phẳng giới hạn bởi
            \\(\\left\\{
            \\begin{array}{l}
            y=4-x^2 \\\\
            y=x^2 \\\\
            x=-1, x=1
            \\end{array}
            \\right.\\)
            (H1.1).</b></p>

<div style="text-align:center; margin-top:15px;">
            <img src="1.png" alt="Diện tích hình phẳng" class="theory-image" style="display:block; margin:0 auto;">
            <p style="text-align:center; font-style:italic; margin-top:8px;">Hình 1.1</p>
          </div>
        </div>


<p><b>Giải:</b></p>

<p>Diện tích hình phẳng cần tìm là:</p>

<div style="text-align:center; margin:16px 0;">
  \\[
  \\begin{aligned}
  S &= \\int_{-1}^{1} |(4-x^2)-x^2|dx \\\\
    &= \\int_{-1}^{1} |4-2x^2|dx \\\\
    &= \\int_{-1}^{1} (4-2x^2)dx \\\\
    &= \\left(4x-\\dfrac{2}{3}x^3\\right)\\Big|_{-1}^{1} \\\\
    &= \\dfrac{20}{3}
  \\end{aligned}
  \\]
</div>

        



        <div class="theory-main-box">
          <p>
            <b>
              Hình phẳng giới hạn bởi
              \\(\\left\\{
              \\begin{array}{l}
              y=f(x) \\\\
              Ox: y=0 \\\\
              x=a, x=b \\ (a < b)
              \\end{array}
              \\right.\\)
              có diện tích là
              \\(S=\\int_a^b |f(x)|dx\\).
            </b>
          </p>




        </div>

        <div class="example-box">

        <div class="example-box">
         <p><b>Ví dụ: Tính diện tích hình phẳng giới hạn bởi \\(y=\\sin x\\), trục hoành và hai đường thẳng \\(x=0\\), \\(x=2\\pi\\) (H1.2).</b></p>

<div style="text-align:center; margin-top:15px;">
            <img src="2.png" alt="Diện tích hình phẳng" class="theory-image" style="display:block; margin:0 auto;">
            <p style="text-align:center; font-style:italic; margin-top:8px;">Hình 1.2</p>
          </div>
        </div>


          <p><b>Giải:</b></p>
          <p>Diện tích hình phẳng cần tìm là:</p>

<div style="text-align:center; margin:16px 0;">
    \\[
    \\begin{aligned}
    S &= \\int_{0}^{2\\pi} |\\sin x|\\,dx \\\\
      &= \\int_{0}^{\\pi} |\\sin x|\\,dx + \\int_{\\pi}^{2\\pi} |\\sin x|\\,dx \\\\
      &= \\int_{0}^{\\pi} \\sin x\\,dx + \\int_{\\pi}^{2\\pi} (-\\sin x)\\,dx \\\\
      &= -\\cos x\\Big|_{0}^{\\pi} + \\cos x\\Big|_{\\pi}^{2\\pi} \\\\
      &= 4
    \\end{aligned}
    \\]
  </div>



        <h4 class="lesson-section-title">2. Ứng dụng tích phân để tính thể tích vật thể</h4>

        <div class="theory-main-box">
          <p style="text-align: justify; line-height: 1.6;">
    Cho một vật thể trong không gian \\( Oxyz \\). Gọi \\( B \\) là phần vật thể giới hạn bởi hai mặt phẳng vuông góc với trục \\( Ox \\) tại các điểm \\( a \\) và \\( b \\), \\( S(x) \\) là diện tích thiết diện của vật thể bị cắt bởi mặt phẳng vuông góc với trục \\( Ox \\) tại điểm \\( x \\) (\\( a \\le x \\le b \\)). Giả sử \\( S(x) \\) là hàm số liên tục trên đoạn \\( [a; b] \\). Khi đó, thể tích \\( V \\) của phần vật thể \\( B \\) được tính bởi công thức
  </p>

  <div style="text-align: center; margin: 25px 0; font-size: 1.3em;">
    \\( V = \\int_{a}^{b} S(x) \\, dx \\)
  </div>

        
        </div>

        <div class="example-box">
          <p><b>Ví dụ: Tính thể tích của khối lăng trụ có diện tích đáy bằng \\(S\\) và chiều cao bằng \\(h\\).</b></p>





<p><b>Giải:</b></p> <p>(H2.1)</p>

<div style="text-align:center; margin-top:15px;">
            <img src="3.png" alt="Diện tích hình phẳng" class="theory-image" style="display:block; margin:0 auto;">
            <p style="text-align:center; font-style:italic; margin-top:8px;">Hình 2.1</p>
          </div>
        </div>


   

<p style="text-align: justify; line-height: 1.6; margin-bottom: 20px;">
  Chọn trục \\( Ox \\) song song với đường cao của khối lăng trụ và hai đáy nằm trên hai mặt phẳng vuông góc với \\( Ox \\) tại \\( x = 0 \\) và \\( x = h \\).
</p>

<p style="text-align: justify; line-height: 1.6; margin-bottom: 20px;">
  Mỗi mặt phẳng vuông góc với trục \\( Ox \\) tại điểm có hoành độ bằng \\( x \\) (\\( 0 \\le x \\le h \\)) cắt khối trụ theo mặt cắt có diện tích không đổi là \\( S(x) = S \\).
</p>

<p style="text-align: justify; line-height: 1.6;">
  Do đó, thể tích của khối lăng trụ là  
  \\(
  V = \\int_{0}^{h} S(x) \\, dx
    = \\int_{0}^{h} S \\, dx
    = Sx \\big|_{0}^{h}
    = Sh.
  \\)
</p>



        <div class="theory-main-box">
          <p style="text-align: justify; line-height: 1.8;">
  Khi quay hình phẳng giới hạn bởi  
  \\(\\left\\{
              \\begin{array}{l}
              y=f(x)\\ge 0 \\\\
              Ox: y=0 \\\\
              x=a, x=b \\ (a < b)
              \\end{array}
              \\right.\\)
  xung quanh trục hoành, ta được hình khối gọi là một 
  <span style="color: red;">khối tròn xoay</span>.
</p>

<p style="text-align: justify; line-height: 1.8;">
  Khi cắt khối tròn xoay đó bởi một mặt cắt vuông góc với trục \\( Ox \\) tại điểm \\( x \\in [a; b] \\), ta được một hình tròn có bán kính \\( f(x) \\).
</p>

<p style="text-align: justify; line-height: 1.8;">
  Thể tích khối tròn xoay này là  
  \\(
  V = \\pi \\int_{a}^{b} f^2(x) \\, dx.
  \\)
</p>
  </div>
        <div class="example-box">
          <p><b>Ví dụ: Tính thể tích của khối tròn xoay sinh ra khi quay quanh trục \\(Ox\\) hình phẳng giới hạn bởi đồ thị hàm số \\(y=\\sqrt{x}\\), trục hoành và hai đường thẳng \\(x=1\\), \\(x=4\\) (H2.2).</b></p>


<div style="text-align:center; margin-top:15px;">
            <img src="4.png" alt="Diện tích hình phẳng" class="theory-image" style="display:block; margin:0 auto;">
            <p style="text-align:center; font-style:italic; margin-top:8px;">Hình 2.2</p>
          </div>
        </div>


<p><b>Giải:</b></p> 



   

<p style="text-align: justify; line-height: 1.6; margin-bottom: 20px;">
  Thể tích khối tròn xoay cần tính là
</p>

<div style="text-align: center; margin: 25px 0;">
  \\(
  V = \\pi \\int_{1}^{4} f^2(x) \\, dx
    = \\pi \\int_{1}^{4} (\\sqrt{x})^2 \\, dx
    = \\pi \\int_{1}^{4} x \\, dx
    = \\frac{\\pi x^2}{2} \\bigg|_{1}^{4}
    = \\frac{15\\pi}{2}.
  \\)
</div>




      `,




questions: [

  // =====================
  // TRẮC NGHIỆM
  // =====================
{
  type: "mcq",

  question: `
    Diện tích hình phẳng được gạch chéo trong hình dưới bằng:

    <div style="text-align:center; margin:20px 0;">
      <img
        src="8.png"
        alt="Đồ thị hàm số"
        style="max-width:100%; height:auto;"
      >
    </div>
  `,

  options: [
    "A. \\(\\displaystyle \\int_{-1}^{2}(-2x^2+2x+4)dx\\)",

    "B. \\(\\displaystyle \\int_{-1}^{2}(2x^2-2x-4)dx\\)",

    "C. \\(\\displaystyle \\int_{-1}^{2}(-2x^2-2x+4)dx\\)",

    "D. \\(\\displaystyle \\int_{-1}^{2}(2x^2+2x-4)dx\\)"
  ],

  answer: 0,

  solution: `
    <p><b>Lời giải:</b></p>

    <p>
      Dựa vào hình vẽ, diện tích hình phẳng cần tính là:
    </p>

    <div style="margin:12px 0;">
      \\\[
      \\int_{-1}^{2}
      \\left[
      (-x^2+2)
      -
      (x^2-2x-2)
      \\right]
      \\,dx
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      =
      \\int_{-1}^{2}
      (-2x^2+2x+4)
      \\,dx
      \\\]
    </div>

    <p>
      Vậy đáp án đúng là <b>A</b>.
    </p>
  `
},


{
  type: "mcq",

  question: `
    Gọi \\(S\\) là diện tích của hình phẳng giới hạn bởi đồ thị của hàm số
    \\(
    y=\\dfrac{\\ln x}{x^2}
    \\),
    trục hoành và hai đường thẳng
    \\(
    x=1,\\ x=e
    \\).
    Mệnh đề nào dưới đây là đúng?
  `,

  options: [
    "A. \\(S=\\pi\\displaystyle\\int_1^e\\dfrac{\\ln x}{x^2}\\,dx\\)",
    
    "B. \\(S=\\displaystyle\\int_1^e\\dfrac{\\ln x}{x^2}\\,dx\\)",
    
    "C. \\(S=\\displaystyle\\int_1^e\\left(\\dfrac{\\ln x}{x^2}\\right)^2dx\\)",
    
    "D. \\(S=\\pi\\displaystyle\\int_1^e\\left(\\dfrac{\\ln x}{x^2}\\right)^2dx\\)"
  ],

  answer: 1,

  solution: `
    <p><b>Lời giải:</b></p>

    <p>
      Diện tích hình phẳng giới hạn bởi đồ thị hàm số và trục hoành được tính bởi:
    </p>

    <div style="margin:12px 0;">
      \\\[
      S=
      \\int_1^e
      \\left|
      \\dfrac{\\ln x}{x^2}
      \\right|
      dx
      \\\]
    </div>

    <p>
      Trên khoảng
      \\(
      (1;e)
      \\)
      ta có:
    </p>

    <div style="margin:12px 0;">
      \\\[
      \\ln x>0
      \\Rightarrow
      \\dfrac{\\ln x}{x^2}>0
      \\\]
    </div>

    <p>
      Do đó:
    </p>

    <div style="margin:12px 0;">
      \\\[
      S=
      \\int_1^e
      \\dfrac{\\ln x}{x^2}
      \\,dx
      \\\]
    </div>

    <p>
      Vậy đáp án đúng là <b>B</b>.
    </p>
  `
},




{
  type: "mcq",

  question: `
    Cho hình phẳng
    \\(
    (H)
    \\)
    giới hạn bởi đồ thị của hàm số
    \\(
    y=x^2+3
    \\),
    trục hoành và hai đường thẳng
    \\(
    x=0,\\ x=2
    \\).
    Gọi
    \\(
    V
    \\)
    là thể tích của khối tròn xoay được tạo thành khi quay
    \\(
    (H)
    \\)
    xung quanh trục
    \\(
    Ox
    \\).
    Mệnh đề nào dưới đây đúng?
  `,

  options: [
    "A. \\(V=\\displaystyle\\int_0^2(x^2+3)dx\\)",

    "B. \\(V=\\pi\\displaystyle\\int_0^2(x^2+3)dx\\)",

    "C. \\(V=\\displaystyle\\int_0^2(x^2+3)^2dx\\)",

    "D. \\(V=\\pi\\displaystyle\\int_0^2(x^2+3)^2dx\\)"
  ],

  answer: 3,

  solution: `
    <p><b>Lời giải:</b></p>

    <p>
      Công thức tính thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi:
    </p>

    <ul>
      <li>đồ thị \\(y=f(x)\\),</li>
      <li>trục \\(Ox\\),</li>
      <li>hai đường thẳng \\(x=a\\), \\(x=b\\)</li>
    </ul>

    <p>
      quanh trục \\(Ox\\) là:
    </p>

    <div style="margin:12px 0;">
      \\\[
      V=
      \\pi
      \\int_a^b
      [f(x)]^2
      \\,dx
      \\\]
    </div>

    <p>
      Trong bài toán này:
    </p>

    <div style="margin:12px 0;">
      \\\[
      f(x)=x^2+3,
      \\quad
      a=0,
      \\quad
      b=2
      \\\]
    </div>

    <p>
      Suy ra:
    </p>

    <div style="margin:12px 0;">
      \\\[
      V=
      \\pi
      \\int_0^2
      (x^2+3)^2
      \\,dx
      \\\]
    </div>

    <p>
      Vậy đáp án đúng là <b>D</b>.
    </p>
  `
},


{
  type: "mcq",

  question: `
    Cho hình phẳng
    \\(
    D
    \\)
    giới hạn bởi đường cong
    \\(
    y=e^x
    \\),
    trục hoành và hai đường thẳng
    \\(
    x=0,\\ x=1
    \\).
    Khối tròn xoay tạo thành khi quay
    \\(
    D
    \\)
    quanh trục hoành có thể tích
    \\(
    V
    \\)
    bằng bao nhiêu?
  `,

  options: [
    "A. \\(\\dfrac{\\pi(e^2+1)}{2}\\)",

    "B. \\(\\dfrac{e^2-1}{2}\\)",

    "C. \\(\\dfrac{\\pi e^2}{3}\\)",

    "D. \\(\\dfrac{\\pi(e^2-1)}{2}\\)"
  ],

  answer: 3,

  solution: `
    <p><b>Lời giải:</b></p>

    <div style="margin:12px 0;">
      \\\[
      V=
      \\pi
      \\int_0^1
      (e^x)^2dx
      =
      \\pi
      \\int_0^1
      e^{2x}dx
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      =
      \\pi
      \\cdot
      \\frac{e^{2x}}{2}
      \\Bigg|_0^1
      =
      \\frac{\\pi(e^2-1)}{2}
      \\\]
    </div>

    <p>
      Vậy đáp án đúng là <b>D</b>.
    </p>
  `
},


{
  type: "mcq",

  question: `
    Cho vật thể giới hạn bởi hai mặt phẳng
    \\(
    x=0
    \\)
    và
    \\(
    x=3
    \\),
    biết rằng khi cắt vật thể bởi mặt phẳng vuông góc với trục
    \\(
    Ox
    \\)
    tại điểm có hoành độ
    \\(
    x
    \\)
    \\(
    (0\\le x\\le 3)
    \\)
    thì được thiết diện có diện tích
    \\(
    S(x)=x
    \\).
    Thể tích
    \\(
    V
    \\)
    của vật thể bằng:
  `,

  options: [
    "A. \\(V=\\dfrac{9}{2}\\)",

    "B. \\(V=\\dfrac{3}{2}\\)",

    "C. \\(V=3\\)",

    "D. \\(V=\\dfrac{7}{3}\\)"
  ],

  answer: 0,

  solution: `
    <p><b>Lời giải:</b></p>

    <p>
      Thể tích vật thể được tính theo công thức:
    </p>

    <div style="margin:12px 0;">
      \\\[
      V=
      \\int_0^3
      S(x)
      \\,dx
      \\\]
    </div>

    <p>
      Vì:
      \\(
      S(x)=x
      \\)
      nên:
    </p>

    <div style="margin:12px 0;">
      \\\[
      V=
      \\int_0^3
      x
      \\,dx
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      =
      \\frac{x^2}{2}
      \\Bigg|_0^3
      =
      \\frac{9}{2}
      \\\]
    </div>

    <p>
      Vậy đáp án đúng là <b>A</b>.
    </p>
  `
},


{
  type: "mcq",

  question: `
    Cho khối trụ có hai đáy là hai hình tròn
    \\((O;R)\\)
    và
    \\((O';R)\\),
    \\(OO'=4R\\).

    Trên đường tròn
    \\((O;R)\\)
    lấy hai điểm
    \\(A,B\\)
    sao cho
    \\(AB=R\\sqrt3\\).

    Mặt phẳng
    \\((P)\\)
    đi qua
    \\(A,B\\)
    cắt đoạn
    \\(OO'\\)
    và tạo với đáy một góc
    \\(60^\\circ\\).

    \\((P)\\)
    cắt khối trụ theo thiết diện là một phần của elip.

    Diện tích thiết diện đó bằng:

    <div style="text-align:center; margin:20px 0;">
      <img
        src="9.png"
        alt="Hình minh họa"
        style="max-width:350px; height:auto;"
      >
    </div>
  `,

  options: [
    "A. \\(\\left(\\dfrac{2\\pi}{3}+\\dfrac{\\sqrt3}{4}\\right)R^2\\)",

    "B. \\(\\left(\\dfrac{4\\pi}{3}+\\dfrac{\\sqrt3}{4}\\right)R^2\\)",

    "C. \\(\\left(\\dfrac{4\\pi}{3}+\\dfrac{\\sqrt3}{2}\\right)R^2\\)",

    "D. \\(\\left(\\dfrac{2\\pi}{3}+\\dfrac{\\sqrt3}{2}\\right)R^2\\)"
  ],

  answer: 2,

  solution: `
    <p style="text-align:center;">
      <u><b>Lời giải</b></u>
    </p>

    <div style="margin:12px 0;">
      \\\[
      \\cos \\widehat{AOB}
      =
      \\frac{OA^2+OB^2-AB^2}{2.OA.OB}
      =
      -\\frac12
      \\Rightarrow
      \\widehat{AOB}=120^\\circ
      \\Rightarrow
      OH=\\frac R2
      \\\]
    </div>

    <p>
      Phương trình đường tròn đáy:
    </p>

    <div style="margin:12px 0;">
      \\\[
      x^2+y^2=R^2
      \\Leftrightarrow
      y=
      \\pm
      \\sqrt{R^2-x^2}
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      S=
      2
      \\int_{-\\frac R2}^{R}
      \\sqrt{R^2-x^2}
      \\,dx
      =
      \\left(
      \\frac{2\\pi}{3}
      +
      \\frac{\\sqrt3}{4}
      \\right)R^2
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      S'
      =
      \\frac{S}{\\cos60^\\circ}
      =
      2S
      =
      \\left(
      \\frac{4\\pi}{3}
      +
      \\frac{\\sqrt3}{2}
      \\right)R^2
      \\\]
    </div>

    <p>
      Vậy đáp án đúng là <b>C</b>.
    </p>
  `
},
  // =====================
  // ĐÚNG SAI
  // =====================

 {
  type: "truefalse-group",

  question: `
    Cho hàm số
    \\(
    y=f(x)\\ge0
    \\)
    xác định và liên tục trên đoạn
    \\(
    [a;b]
    \\).
    Xét tính đúng sai của các khẳng định sau:
  `,

  statements: [

    {
      text: `
        a)
        \\(
        S=
        \\int_a^b |f(x)|dx
        \\)
      `,
      answer: "Đúng"
    },

    {
      text: `
        b)
        \\(
        S=
        -\\int_a^b |f(x)|dx
        \\)
      `,
      answer: "Sai"
    },

    {
      text: `
        c)
        \\(
        S=
        \\int_a^b -f(x)dx
        \\)
      `,
      answer: "Sai"
    },

    {
      text: `
        d)
        \\(
        S=
        \\int_a^b f(x)dx
        \\)
      `,
      answer: "Đúng"
    }

  ],

  solution: `

    <p><b>Lời giải:</b></p>

    <p>
      Vì:
    </p>

    <div style="margin:16px 0;">
      \\\[
      f(x)\\ge0
      \\\]
    </div>

    <p>
      trên đoạn
      \\(
      [a;b]
      \\)
      nên diện tích hình phẳng giới hạn bởi đồ thị hàm số
      \\(
      y=f(x)
      \\),
      trục hoành và hai đường thẳng
      \\(
      x=a,
      x=b
      \\)
      được tính bởi:
    </p>

    <div style="margin:16px 0;">
      \\\[
      S
      =
      \\int_a^b |f(x)|dx
      =
      \\int_a^b f(x)dx
      \\\]
    </div>

    <p>
      a) Đúng.
    </p>

    <p>
      Theo công thức tính diện tích:
    </p>

    <div style="margin:16px 0;">
      \\\[
      S=
      \\int_a^b |f(x)|dx
      \\\]
    </div>

    <p>
      b) Sai.
    </p>

    <p>
      Diện tích luôn không âm nên:
    </p>

    <div style="margin:16px 0;">
      \\\[
      S
      \\neq
      -\\int_a^b |f(x)|dx
      \\\]
    </div>

    <p>
      c) Sai.
    </p>

    <p>
      Vì:
    </p>

    <div style="margin:16px 0;">
      \\\[
      -f(x)\\le0
      \\\]
    </div>

    <p>
      nên:
    </p>

    <div style="margin:16px 0;">
      \\\[
      \\int_a^b -f(x)dx
      \\le0
      \\\]
    </div>

    <p>
      không thể là diện tích hình phẳng.
    </p>

    <p>
      d) Đúng.
    </p>

    <p>
      Do:
    </p>

    <div style="margin:16px 0;">
      \\\[
      f(x)\\ge0
      \\Rightarrow
      |f(x)|=f(x)
      \\\]
    </div>

    <p>
      nên:
    </p>

    <div style="margin:16px 0;">
      \\\[
      S
      =
      \\int_a^b f(x)dx
      \\\]
    </div>

  `
},




{
  type: "truefalse-group",

  question: `
    Cho khối tròn xoay 
    \\(
    (K)
    \\)
    được tạo thành khi quay hình thang cong giới hạn bởi đồ thị hàm số
    \\(
    y=f(x)
    \\),
    trục 
    \\(
    Ox
    \\)
    và hai đường thẳng
    \\(
    x=a,
    x=b
    \\)
    quanh trục 
    \\(
    Ox
    \\).
    Xét tính đúng sai của các khẳng định sau:
  `,

  statements: [

    {
      text: `
        a)
        \\(
        V=
        \\pi
        \\int_a^b f^2(x)dx
        \\)
      `,
      answer: "Đúng"
    },

    {
      text: `
        b)
        \\(
        V=
        \\int_a^b S(x)dx
        \\)
        với
        \\(
        S(x)
        \\)
        là diện tích thiết diện của khối tròn xoay
        \\(
        (K)
        \\)
        bị cắt bởi mặt phẳng vuông góc với trục
        \\(
        Ox
        \\)
        tại điểm
        \\(
        x
        \\)
      `,
      answer: "Đúng"
    },

    {
      text: `
        c)
        \\(
        V=
        \\pi
        \\int_a^b f(x)dx
        \\)
      `,
      answer: "Sai"
    },

    {
      text: `
        d)
        \\(
        V=
        \\int_a^b f^2(x)dx
        \\)
      `,
      answer: "Sai"
    }

  ],

  solution: `

    <p><b>Lời giải:</b></p>

    <p>
      a) Đúng.
    </p>

    <p>
      Công thức tính thể tích khối tròn xoay quanh trục
      \\(
      Ox
      \\)
      là:
    </p>

    <div style="margin:16px 0;">
      \\\[
      V=
      \\pi
      \\int_a^b f^2(x)dx
      \\\]
    </div>

    <p>
      nên khẳng định đúng.
    </p>

    <p>
      b) Đúng.
    </p>

    <p>
      Theo công thức tính thể tích bằng thiết diện:
    </p>

    <div style="margin:16px 0;">
      \\\[
      V=
      \\int_a^b S(x)dx
      \\\]
    </div>

    <p>
      trong đó
      \\(
      S(x)
      \\)
      là diện tích thiết diện vuông góc với trục
      \\(
      Ox
      \\)
      tại điểm
      \\(
      x
      \\).
    </p>

    <p>
      Với khối tròn xoay:
    </p>

    <div style="margin:16px 0;">
      \\\[
      S(x)=\\pi f^2(x)
      \\\]
    </div>

    <p>
      nên khẳng định đúng.
    </p>

    <p>
      c) Sai.
    </p>

    <p>
      Công thức đúng phải là:
    </p>

    <div style="margin:16px 0;">
      \\\[
      V=
      \\pi
      \\int_a^b f^2(x)dx
      \\\]
    </div>

    <p>
      không phải:
    </p>

    <div style="margin:16px 0;">
      \\\[
      V=
      \\pi
      \\int_a^b f(x)dx
      \\\]
    </div>

    <p>
      d) Sai.
    </p>

    <p>
      Công thức tính thể tích cần có thêm hệ số
      \\(
      \\pi
      \\),
      do đó:
    </p>

    <div style="margin:16px 0;">
      \\\[
      V
      \\neq
      \\int_a^b f^2(x)dx
      \\\]
    </div>

  `
},





  // =====================
  // TRẢ LỜI NGẮN
  // =====================

 {
  type: "short",

  question: `
    Giá trị dương của tham số
    \\(
    m
    \\)
    sao cho diện tích hình phẳng giới hạn bởi đồ thị của hàm số
    \\(
    y=2x+3
    \\)
    và các đường thẳng
    \\(
    y=0,
    \\ x=0,
    \\ x=m
    \\)
    bằng
    \\(
    10
    \\)
    là:
  `,

  correct: "2",

  solution: `
    <p style="text-align:center;">
      <u><b>Lời giải</b></u>
    </p>

    <p>
      Vì
      \\(
      m>0
      \\)
      nên:
    </p>

    <div style="margin:12px 0;">
      \\\[
      2x+3>0,
      \\quad
      \\forall x\\in[0;m]
      \\\]
    </div>

    <p>
      Diện tích hình phẳng cần tìm là:
    </p>

    <div style="margin:12px 0;">
      \\\[
      S=
      \\int_0^m
      (2x+3)
      \\,dx
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      =
      (x^2+3x)
      \\Big|_0^m
      =
      m^2+3m
      \\\]
    </div>

    <p>
      Theo giả thiết:
    </p>

    <div style="margin:12px 0;">
      \\\[
      m^2+3m=10
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      \\Leftrightarrow
      m^2+3m-10=0
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      \\Leftrightarrow
      m=2
      \\text{ hoặc }
      m=-5
      \\\]
    </div>

    <p>
      Vì
      \\(
      m>0
      \\)
      nên:
    </p>

    <div style="margin:12px 0;">
      \\\[
      m=2
      \\\]
    </div>

    <p>
      Vậy đáp án đúng là:
      <b>2</b>.
    </p>
  `
},




{
  type: "short",

  question: `
    Cho vật thể giới hạn bởi hai mặt phẳng
    \\(
    x=1
    \\)
    và
    \\(
    x=3
    \\),
    biết rằng khi cắt vật thể bởi mặt phẳng vuông góc với trục
    \\(
    Ox
    \\)
    tại điểm có hoành độ
    \\(
    x
    \\)
    \\(
    (1\\le x\\le 3)
    \\)
    thì được thiết diện là một hình chữ nhật có độ dài hai cạnh là
    \\(
    3x
    \\)
    và
    \\(
    \\sqrt{3x^2-2}
    \\).

    Thể tích
    \\(
    V
    \\)
    của vật thể là:
  `,

  correct: "124/3",

  solution: `
    <p style="text-align:center;">
      <u><b>Lời giải</b></u>
    </p>

    <p>
      Diện tích thiết diện tại vị trí
      \\(
      x
      \\)
      là:
    </p>

    <div style="margin:12px 0;">
      \\\[
      S(x)
      =
      3x
      \\sqrt{3x^2-2}
      \\\]
    </div>

    <p>
      Thể tích vật thể:
    </p>

    <div style="margin:12px 0;">
      \\\[
      V=
      \\int_1^3
      S(x)
      \\,dx
      =
      \\int_1^3
      3x\\sqrt{3x^2-2}
      \\,dx
      \\\]
    </div>

    <div style="margin:12px 0;">
      \\\[
      =
      \\frac{124}{3}
      \\\]
    </div>

    <p>
      Vậy đáp án đúng là:
      <b>
      \\(
      \\frac{124}{3}
      \\)
      </b>.
    </p>
  `
},







]







    }
  }
};


// ========================
// 🔐 DANH SÁCH TÀI KHOẢN (FULL)
// ========================
const accounts = [
  ["Phạm Thị Huyền","49.01.101.033","49.01.101.0331"],
  ["Thầy Thái","123456","1234561"],
  ["Nguyễn Thị Thùy Dung","49.01.101.021","49.01.101.0211"],
  ["Nguyễn Thị Thùy Trang","49.01.101.096","49.01.101.0961"],
  ["Huỳnh Đăng Phong","46.01.104.137","46.01.104.1371"],
  ["Châu Vĩnh An","49.01.101.005","49.01.101.0051"],
  ["Mai Tấn Lộc","49.01.101.049","49.01.101.0491"],
  ["Võ Thành Đạt","49.01.101.027","49.01.101.0271"],
  ["Nguyễn Tuấn Tài","49.01.101.083","49.01.101.0831"],
  ["Nguyễn Phạm Thế Duy","49.01.101.026","49.01.101.0261"],
  ["Vũ Hoàng Phúc","49.01.101.073","49.01.101.0731"],
  ["Võ Thị Lan Nhi","49.01.101.069","49.01.101.0691"],
  ["Nguyễn Thị Thu Nguyên","49.01.101.064","49.01.101.0641"],
  ["Phan Khánh Linh","49.01.101.048","49.01.101.0481"],
  ["Đào Thanh Xuân","49.01.101.111","49.01.101.1111"],
  ["Lê Hoàng Nam","49.01.101.056","49.01.101.0561"],
  ["Nguyễn Thị Vân Anh","49.01.101.011","49.01.101.0111"],
  ["Hà Châu Gia Bảo","47.01.901.099","47.01.901.0991"],
  ["Đỗ Thị Hà Nhi","49.01.101.067","49.01.101.0671"],
  ["Cao Anh Thư","49.01.101.092","49.01.101.0921"],
  ["Nguyễn Hùng Dũng","49.01.101.022","49.01.101.0221"],
  ["Đỗ Ngọc Bích Châu","49.01.101.016","49.01.101.0161"],
  ["Lê Ngọc Châu","49.01.101.018","49.01.101.0181"],
  ["Đào Chí Thanh","49.01.101.084","49.01.101.0841"],
  ["Phạm Trọng Quỳnh","49.01.101.079","49.01.101.0791"],
  ["Tăng Gia Bảo","49.01.101.015","49.01.101.0151"],
  ["Trần Quốc Tuấn","49.01.101.104","49.01.101.1041"],
  ["Nguyễn Lưu Thanh Duy","49.01.101.025","49.01.101.0251"],
  ["Nguyễn Khôi Nguyên","49.01.101.063","49.01.101.0631"]
];

// ========================
// 🧠 STATE
// ========================
let currentCourse = "";
let currentUser = "";








let role = ""; // student | teacher

let unsubscribeChat = null;
// ========================
// 🔄 CHUYỂN TRANG
// ========================
function showPage(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function goLogin(){
  showPage("loginPage");
}

// ========================
// 🔐 LOGIN
// ========================

window.selectCourse = function(course){

  currentCourse = course;

  showPage("loginPage");

}

function login(){

  const usernameInput = document.getElementById("username").value.trim();
  const passwordInput = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  error.innerText = "";

  const acc = accounts.find(a => a[0] === usernameInput);

  // kiểm tra tài khoản
  if(!acc){
    error.innerText = "❌ Sai tên đăng nhập";
    return;
  }

  // kiểm tra mật khẩu + role
  if(passwordInput === acc[1]){
    role = "student";
  }
  else if(passwordInput === acc[2]){
    role = "teacher";
  }
  else{
    error.innerText = "❌ Sai mật khẩu";
    return;
  }

  // lưu user hiện tại
  currentUser = usernameInput;

  // ===== STUDENT =====
  if(role === "student"){

    showPage("studentPage");

    document.getElementById("studentCourseTitle").innerText = currentCourse;

    initStudent();
  }

  // ===== TEACHER =====
  else{

    showPage("teacherPage");

    initTeacher();
  }
}

// ========================
// 👨🎓 KHỞI TẠO HỌC SINH
// ========================
function initStudent(){

  showPage("studentPage");

  loadStudentMenu();

  homeStudent();
}
// ========================
// 👨🏫 KHỞI TẠO GIÁO VIÊN
// ========================
function initTeacher(){

  showPage("teacherPage");

  document.getElementById("teacherName").innerHTML = "";

  loadTeacherMenu();

  teacherOverview();

}

// ========================
// 🚪 LOGOUT
// ========================
function logout(){

  currentUser = "";
  currentCourse = "";
  role = "";

  document.getElementById("username").value = "";
  document.getElementById("password").value = "";

  showPage("coursePage");


if(unsubscribeChat){
  unsubscribeChat();
  unsubscribeChat = null;
}

}

// ========================
// 📚 MENU HỌC SINH (tạm)
// ========================
function loadStudentMenu(){

  document.getElementById("studentMenu").innerHTML = `

    <!-- MENU -->
    <button onclick="homeStudent()">
      🏠 Trang chủ
    </button>

    <button onclick="score()">
      📊 Điểm
    </button>

    <!-- DROPDOWN -->
    <div class="menu-dropdown">

      <button onclick="toggleLessonMenu()">
        📚 Bài học
      </button>

      <div id="lessonDropdown" class="lesson-dropdown">

        <button onclick="openChapter(1)">
          Chương 1
        </button>

        <button onclick="openChapter(2)">
          Chương 2
        </button>

        <button onclick="openChapter(3)">
          Chương 3
        </button>

        <button onclick="openChapter(4)">
          Chương 4
        </button>

        <button onclick="openChapter(5)">
          Chương 5
        </button>

        <button onclick="openChapter(6)">
          Chương 6
        </button>

      </div>

    </div>

    <button onclick="openDiscussion()">
      💬 Thảo luận
    </button>

    <!-- USER -->
    <div class="menu-user">

      <div class="user-name">
        👨🎓 ${currentUser}
      </div>

      <button class="logout-btn" onclick="logout()">
        🚪 Đăng xuất
      </button>

    </div>

  `;
}

function toggleLessonMenu(){

  const box =
    document.getElementById("lessonDropdown");

  box.classList.toggle("show-dropdown");
}

// ========================
// 💬 THẢO LUẬN
// ========================

function openDiscussion(){

 let target =
  role === "teacher"
  ? "teacherMain"
  : "studentMain";

  document.getElementById(target).innerHTML = `
  
  <div class="discussion-container">

    <!-- HEADER -->
    <div class="discussion-top">
      <h2>💬 Thảo luận lớp học</h2>
    </div>

    <!-- CHAT -->
    <div id="chatBox" class="chat-box"></div>

    <!-- INPUT -->
    <div class="chat-input">

      <input 
        id="chatText"
        placeholder="Nhập tin nhắn..."
      >

      <button onclick="sendMessage()">
        Gửi
      </button>

    </div>

  </div>
  `;

  loadMessages();
}

// ========================
// 🚀 GỬI TIN NHẮN
// ========================

async function sendMessage(){

  const text =
    document.getElementById("chatText").value.trim();

  if(!text) return;

  await addDoc(
    collection(db, "messages"),
    {
      user: currentUser,
      role: role,
      text: text,
      time: Date.now()
    }
  );

  document.getElementById("chatText").value = "";
}
// ========================
// 📥 LOAD CHAT REALTIME
// ========================

function loadMessages(){

  // huỷ listener cũ nếu có
  if(unsubscribeChat){
    unsubscribeChat();
  }

  const q = query(
    collection(db, "messages"),
    orderBy("time")
  );

  unsubscribeChat = onSnapshot(q, (snapshot)=>{

    let html = "";

    snapshot.forEach(doc=>{

      const m = doc.data();

      // kiểm tra đúng người hiện tại
      const isMine =
        m.user === currentUser &&
        m.role === role;

      html += `
      <div class="message ${
        isMine
          ? "my-message"
          : "other-message"
      }">

        <div class="message-user">
          ${m.role === "teacher" ? "👨🏫 Giáo viên" : "👨🎓 Học sinh"}
          - ${m.user}
        </div>

        <div class="message-text">
          ${escapeHTML(m.text || "")}
        </div>

      </div>
      `;
    });

    const box = document.getElementById("chatBox");

if(box){
  box.innerHTML = html;
  box.scrollTop = box.scrollHeight;
}

  });
}
// ========================
// 🏠 TRANG CHỦ HỌC SINH
// ========================
// ========================
// 🏠 DASHBOARD HỌC SINH (LEVEL CAO NHẤT)
// ========================
async function homeStudent(){

  let data = await loadUserData();

  function get(key){ return data[key] ?? 0; }

  function percent(keys){
    let done = keys.filter(k => data[k]).length;
    return Math.round((done / keys.length) * 100);
  }

  // ===== CHƯƠNG =====
  const chapters = [
    {id:1, keys:["ch1_b0","ch1_b1","ch1_b2","ch1_b3","ch1_b4","ch1_b5"]},
    {id:2, keys:["ch2_b0","ch2_b1","ch2_b2","ch2_final"]},
    {id:3, keys:["ch3_b0","ch3_b1","ch3_final"]},
    {id:4, keys:["ch4_b0","ch4_b1","ch4_b2","ch4_final"]},
    {id:5, keys:["ch5_b0","ch5_b1","ch5_b2","ch5_b3","ch5_final"]},
    {id:6, keys:["ch6_b0","ch6_b1","ch6_final"]}
  ];

  let progress = chapters.map(c => percent(c.keys));
  let avgProgress = avg(progress);

  // ===== GỢI Ý HỌC TIẾP =====
  let nextChapter = chapters.find((c,i)=>progress[i] < 100);
  let nextText = nextChapter 
    ? `Tiếp tục Chương ${nextChapter.id}`
    : "Bạn đã hoàn thành tất cả 🎉";

  // ===== MÀU =====
  function getColor(p){
    if(p>=80) return "green";
    if(p>=50) return "orange";
    return "red";
  }

  // ===== HTML =====
  renderMain(`
  <div class="dashboard">

    <!-- HERO -->
    <div class="hero">
      <div>
        <h1>Xin chào ${currentUser} 👋</h1>
        <p>${nextText}</p>
      </div>

      <div class="circle">
        <svg>
          <circle cx="60" cy="60" r="50"></circle>
          <circle cx="60" cy="60" r="50"
            style="stroke-dashoffset:${314 - (314 * avgProgress / 100)}">
          </circle>
        </svg>
        <div class="percent">${avgProgress}%</div>
      </div>
    </div>

    <!-- STATS -->
    <div class="stats">
      <div class="stat">
        <h2>${avgProgress}%</h2>
        <p>Hoàn thành</p>
      </div>
      <div class="stat">
        <h2>${Object.keys(data).length}</h2>
        <p>Bài đã làm</p>
      </div>
    </div>

    <!-- CHƯƠNG -->
    <h2 class="title">Tiến độ học</h2>

    <div class="grid">
      ${chapters.map((c,i)=>`
        <div class="card ${progress[i]<100?'active':''}" 
             onclick="openChapter(${c.id})">

          <h3>Chương ${c.id}</h3>

          <div class="bar">
            <div class="fill ${getColor(progress[i])}" 
                 style="width:${progress[i]}%"></div>
          </div>

          <p>${progress[i]}%</p>
        </div>
      `).join("")}
    </div>

  </div>
  `);
}

// ========================
// 👨🏫 MENU GIÁO VIÊN
// ========================
function loadTeacherMenu(){

  document.getElementById("teacherMenu").innerHTML = `

    <button onclick="teacherOverview()">
      Tiến độ học tập
    </button>

    <button onclick="teacherScores()">
      Điểm của học sinh
    </button>

    <button onclick="leaderboard()">
      🏆 Bảng xếp hạng
    </button>

    <button onclick="openDiscussion()">
      💬 Thảo luận
    </button>

    <div class="sidebar-user">

      <h3>${currentUser}</h3>

      <button
        class="logout-btn"
        onclick="logout()">

        Đăng xuất

      </button>

    </div>

  `;
}

// ========================
// 👨🏫 TỔNG QUAN HỌC TẬP
// ========================
async function teacherOverview(){

  renderMain(`
    <div class="card">
      <h2>📊 Đang tải tổng quan...</h2>
    </div>
  `);

  let list = await Promise.all(

    accounts.map(async (acc,index)=>{

      let name = acc[0];

      let data = await loadAnyUser(name);

      let totalLessons = 19;

      let done = Object.keys(data).length;

      let percent = Math.round(
        (done / totalLessons) * 100
      );

      return {
        index,
        name,
        percent
      };

    })

  );

  let html = `

  <div class="leaderboard-card">

    <div class="leaderboard-title">
      📊 Tiến độ học tập
    </div>

    <div class="leaderboard-sub">
      Theo dõi tiến độ hoàn thành bài học
    </div>

    <div class="overview-grid">

      ${list.map(s=>`

        <div
          class="overview-card"
          onclick="viewStudentDetail('${s.name}')"
        >

          <div class="overview-top">

            <div class="overview-avatar">
              👨‍🎓
            </div>

            <div>

              <div class="overview-name">
                ${s.name}
              </div>

              <div class="overview-rank">
                Học sinh #${s.index+1}
              </div>

            </div>

          </div>

          <div class="overview-progress">

            <div class="overview-progress-bar">

              <div
                class="overview-progress-fill"
                style="width:${s.percent}%"
              ></div>

            </div>

            <div class="overview-percent">
              ${s.percent}%
            </div>

          </div>

        </div>

      `).join("")}

    </div>

  </div>

  `;

  renderMain(html);
}
// ========================
// 📊 XEM CHI TIẾT HỌC SINH
// ========================
// ========================
// 📊 XEM CHI TIẾT (FULL 6 CHƯƠNG)
// ========================
async function viewStudentDetail(name){

 let data = await loadAnyUser(name);

  function percent(keys){
    let done = keys.filter(k => data[k]).length;
    return Math.round((done / keys.length) * 100);
  }

  // ===== 6 CHƯƠNG =====
  let chapters = [
    {
      name:"Chương 1",
      keys:["ch1_b0","ch1_b1","ch1_b2","ch1_b3","ch1_b4","ch1_b5"]
    },
    {
      name:"Chương 2",
      keys:["ch2_b0","ch2_b1","ch2_b2","ch2_final"]
    },
    {
      name:"Chương 3",
      keys:["ch3_b0","ch3_b1","ch3_final"]
    },
    {
      name:"Chương 4",
      keys:["ch4_b0","ch4_b1","ch4_b2","ch4_final"]
    },
    {
      name:"Chương 5",
      keys:["ch5_b0","ch5_b1","ch5_b2","ch5_b3","ch5_final"]
    },
    {
      name:"Chương 6",
      keys:["ch6_b0","ch6_b1","ch6_final"]
    }
  ];

  let bars = "";

  chapters.forEach(ch=>{
    let p = percent(ch.keys);

    bars += `
      <div class="bar-container">
        <div class="bar" style="height:${p*2}px"></div>
        <p>${ch.name} (${p}%)</p>
      </div>
    `;
  });

  renderMain(`
  <div class="card">
    <h2>${name}</h2>

    <h3>Biểu đồ tiến độ học tập</h3>

    <div class="chart">
      ${bars}
    </div>

    <button onclick="teacherOverview()">Quay lại</button>
  </div>
  `);
}

// ========================
// 📊 ĐIỂM HỌC SINH
// ========================
// ========================
// 📊 ĐIỂM HỌC SINH (CÓ % TỔNG)
// ========================
async function teacherScores(){

  renderMain(`
    <div class="card">
      <h2>📚 Đang tải điểm học sinh...</h2>
    </div>
  `);

  async function getData(name){
    return await loadAnyUser(name);
  }

  function get(key,data){
    return data[key] ?? 0;
  }

  async function getTotal(name){

    let d = await getData(name);

    let ch1 = [get("ch1_b0",d),get("ch1_b1",d),get("ch1_b2",d),get("ch1_b3",d),get("ch1_b4",d),get("ch1_b5",d)];

    let ch2 = [get("ch2_b0",d),get("ch2_b1",d),get("ch2_b2",d),get("ch2_final",d)];

    let ch3 = [get("ch3_b0",d),get("ch3_b1",d),get("ch3_final",d)];

    let ch4 = [get("ch4_b0",d),get("ch4_b1",d),get("ch4_b2",d),get("ch4_final",d)];

    let ch5 = [get("ch5_b0",d),get("ch5_b1",d),get("ch5_b2",d),get("ch5_b3",d),get("ch5_final",d)];

    let ch6 = [get("ch6_b0",d),get("ch6_b1",d),get("ch6_final",d)];

    let S1 = avg(ch1);
    let S2 = avg(ch2);
    let S3 = avg(ch3);
    let S4 = avg(ch4);
    let S5 = avg(ch5);
    let S6 = avg(ch6);

    return avg([S1,S2,S3,S4,S5,S6]);
  }

  let list = await Promise.all(

    accounts.map(async (acc)=>{

      let total = await getTotal(acc[0]);

      return {
        name: acc[0],
        score: total
      };

    })

  );

  let html = `

  <div class="leaderboard-card">

    <div class="leaderboard-title">
      📚 Điểm học sinh
    </div>

    <div class="leaderboard-sub">
      Kết quả trung bình toàn khóa
    </div>

    <div class="score-grid">

      ${list.map(s=>`

        <div
          class="score-modern-card"
          onclick="viewStudentScore('${s.name}')"
        >

          <div class="score-modern-top">

            <div>
              <div class="score-modern-name">
                ${s.name}
              </div>

              <div class="score-modern-label">
                Điểm trung bình
              </div>
            </div>

            <div class="score-modern-badge">
              ${s.score}%
            </div>

          </div>

          <div class="overview-progress-bar">

            <div
              class="overview-progress-fill"
              style="width:${s.score}%"
            ></div>

          </div>

        </div>

      `).join("")}

    </div>

  </div>

  `;

  renderMain(html);
}

// ========================
// 📊 XEM BẢNG ĐIỂM HỌC SINH
// ========================
// ========================
// 📊 XEM BẢNG ĐIỂM HỌC SINH (FULL 6 CHƯƠNG)
// ========================
async function viewStudentScore(name){

  let data = await loadAnyUser(name);

  function get(key){ return data[key] ?? 0; }

  // ===== CHƯƠNG 1 =====
  let ch1 = [
    get("ch1_b0"), get("ch1_b1"), get("ch1_b2"),
    get("ch1_b3"), get("ch1_b4"), get("ch1_b5")
  ];

  // ===== CHƯƠNG 2 =====
  let ch2 = [
    get("ch2_b0"), get("ch2_b1"),
    get("ch2_b2"), get("ch2_final")
  ];

  // ===== CHƯƠNG 3 =====
  let ch3 = [
    get("ch3_b0"), get("ch3_b1"),
    get("ch3_final")
  ];

  // ===== CHƯƠNG 4 =====
  let ch4 = [
    get("ch4_b0"), get("ch4_b1"),
    get("ch4_b2"), get("ch4_final")
  ];

  // ===== CHƯƠNG 5 =====
  let ch5 = [
    get("ch5_b0"), get("ch5_b1"),
    get("ch5_b2"), get("ch5_b3"),
    get("ch5_final")
  ];

  // ===== CHƯƠNG 6 =====
  let ch6 = [
    get("ch6_b0"), get("ch6_b1"),
    get("ch6_final")
  ];

  // ===== TÍNH ĐIỂM =====
  let S1 = avg(ch1);
  let S2 = avg(ch2);
  let S3 = avg(ch3);
  let S4 = avg(ch4);
  let S5 = avg(ch5);
  let S6 = avg(ch6);

  let total = avg([S1,S2,S3,S4,S5,S6]);

  // ===== TÊN BÀI CHUẨN =====
  const lessonNames = {
    1: ["Bài 1","Bài 2","Bài 3","Bài 4","Bài 5","Bài tập cuối chương 1"],
    2: ["Bài 6","Bài 7","Bài 8","Bài tập cuối chương 2"],
    3: ["Bài 9","Bài 10","Bài tập cuối chương 3"],
    4: ["Bài 11","Bài 12","Bài 13","Bài tập cuối chương 4"],
    5: ["Bài 14","Bài 15","Bài 16","Bài 17","Bài tập cuối chương 5"],
    6: ["Bài 18","Bài 19","Bài tập cuối chương 6"]
  };

  function render(ch, S, id){

  function getColor(score){
    if(score >= 80) return "green";
    if(score >= 50) return "orange";
    return "red";
  }

  return `
    <div class="score-card">
      <div class="score-header">
        <h3>Chương ${id}</h3>
        <span class="score-badge ${getColor(S)}">${S}%</span>
      </div>

      <div class="progress-bar">
        <div class="progress-fill ${getColor(S)}" style="width:${S}%"></div>
      </div>

      <div class="lesson-list">
        ${ch.map((v,i)=>`
          <div class="lesson-item">
            <span>${lessonNames[id][i]}</span>
            <span class="${getColor(v)}">${v}%</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

  renderMain(`
  <div class="card">
    <h2>Bảng điểm: ${name}</h2>

    ${render(ch1, S1, 1)}
    ${render(ch2, S2, 2)}
    ${render(ch3, S3, 3)}
    ${render(ch4, S4, 4)}
    ${render(ch5, S5, 5)}
    ${render(ch6, S6, 6)}

    <hr>
    <h2>Tổng trung bình: ${total}%</h2>

    <button onclick="teacherScores()">Quay lại</button>
  </div>
  `);
}

// ========================
// 📚 DỮ LIỆU 6 CHƯƠNG (CHUẨN 100%)
// ========================
const chapters = {
  1: {
    title: "Chương 1. Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    lessons: [
      "Bài 1. Tính đơn điệu và cực trị của hàm số",
      "Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
      "Bài 3. Đường tiệm cận của đồ thị hàm số",
      "Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
      "Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn",
      "Bài tập cuối chương 1"
    ]
  },

  2: {
    title: "Chương 2. Vectơ và hệ trục tọa độ trong không gian",
    lessons: [
      "Bài 6. Vectơ trong không gian",
      "Bài 7. Hệ trục tọa độ trong không gian",
      "Bài 8. Biểu thức tọa độ của các phép toán vectơ",
      "Bài tập cuối chương 2"
    ]
  },

  3: {
    title: "Chương 3. Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm",
    lessons: [
      "Bài 9. Khoảng biến thiên và khoảng tứ phân vị",
      "Bài 10. Phương sai và độ lệch chuẩn",
      "Bài tập cuối chương 3"
    ]
  },

  4: {
    title: "Chương 4. Nguyên hàm và tích phân",
    lessons: [
      "Bài 11. Nguyên hàm",
      "Bài 12. Tích phân",
      "Bài 13. Ứng dụng hình học của tích phân",
      "Bài tập cuối chương 4"
    ]
  },

  5: {
    title: "Chương 5. Phương pháp tọa độ trong không gian",
    lessons: [
      "Bài 14. Phương trình mặt phẳng",
      "Bài 15. Phương trình đường thẳng trong không gian",
      "Bài 16. Công thức tính góc trong không gian",
      "Bài 17. Phương trình mặt cầu",
      "Bài tập cuối chương 5"
    ]
  },

  6: {
    title: "Chương 6. Xác suất có điều kiện",
    lessons: [
      "Bài 18. Xác suất có điều kiện",
      "Bài 19. Công thức xác suất toàn phần và công thức Bayes",
      "Bài tập cuối chương 6"
    ]
  }
};

// ========================
// 📂 MỞ CHƯƠNG
// ========================
function openChapter(id){

  const ch = chapters[id];

  let html = `
    <div class="card">

      <h2>${ch.title}</h2>

      <div style="margin-top:20px">
  `;

  ch.lessons.forEach((lesson, index)=>{

    html += `

      <div
        class="lesson-item"
        onclick="openLesson(${id}, ${index})"
      >

        <div class="lesson-left">

          <div class="lesson-icon">
            📘
          </div>

          <div class="lesson-info">

            <h3>${lesson}</h3>

            <p>
              Nhấn để mở bài học
            </p>

          </div>

        </div>

        <div class="lesson-go">
          Học ngay →
        </div>

      </div>

    `;
  });

  html += `
      </div>
    </div>
  `;

  renderMain(html, ()=>homeStudent());
}

// ========================
// 📘 CLICK BÀI HỌC
// ========================
// ========================
// 📘 CLICK BÀI HỌC (DYNAMIC)
// ========================
// ========================
// 📘 CLICK BÀI HỌC (DYNAMIC + FIX MATHJAX)
// THAY TOÀN BỘ HÀM openLesson CŨ BẰNG ĐOẠN NÀY
// ========================
function openLesson(chapterId, lessonIndex){

  const lessonName = chapters[chapterId].lessons[lessonIndex];

  // bài tập cuối chương
  if(lessonName.includes("Bài tập cuối")){
    openFinal(chapterId);
    return;
  }

  // lấy dữ liệu bài học
  let lesson = lessonData[chapterId]?.[lessonIndex];

  // nếu chưa có
  if(!lesson){
    lesson = {
      video: "https://www.youtube.com/embed/8ZK_S-46KwE",
      theory: "<p>Đang cập nhật...</p>"
    };
  }

  // render bài học
  renderMain(`
    <div class="lesson-container">

      <h2>${lessonName}</h2>

      <!-- VIDEO -->
      <div class="video-box">
        <iframe 
          src="${lesson.video}" 
          allowfullscreen>
        </iframe>
      </div>

      <!-- NỘI DUNG -->
      <div class="theory-box">
        ${lesson.theory}
      </div>

      <!-- BUTTON -->
<div class="lesson-footer">

<button
  class="back-btn"
  onclick="goBackPage()">
  ← Quay lại
</button>
  <button onclick="startQuiz(${chapterId}, ${lessonIndex})">
    Làm bài tập
  </button>

</div>

    </div>
    `, ()=>openChapter(chapterId));

  // ========================
  // FIX RENDER TOÁN
  // ========================
  if (window.MathJax) {
    MathJax.typesetClear();
   MathJax.typesetPromise()
  .catch(err => console.log(err));
  }
}

// ========================
// 📊 BẢNG ĐIỂM FULL
// ========================
// ========================
// 📊 BẢNG ĐIỂM (UI XỊN)
// ========================
async function score(){

let data = await loadUserData();

  function get(key){ return data[key] ?? 0; }

 
  function getColor(s){
    if(s>=80) return "green";
    if(s>=50) return "orange";
    return "red";
  }

  // ===== DATA =====
  let ch1 = [get("ch1_b0"),get("ch1_b1"),get("ch1_b2"),get("ch1_b3"),get("ch1_b4"),get("ch1_b5")];
  let ch2 = [get("ch2_b0"),get("ch2_b1"),get("ch2_b2"),get("ch2_final")];
  let ch3 = [get("ch3_b0"),get("ch3_b1"),get("ch3_final")];
  let ch4 = [get("ch4_b0"),get("ch4_b1"),get("ch4_b2"),get("ch4_final")];
  let ch5 = [get("ch5_b0"),get("ch5_b1"),get("ch5_b2"),get("ch5_b3"),get("ch5_final")];
  let ch6 = [get("ch6_b0"),get("ch6_b1"),get("ch6_final")];

  let S1 = avg(ch1);
  let S2 = avg(ch2);
  let S3 = avg(ch3);
  let S4 = avg(ch4);
  let S5 = avg(ch5);
  let S6 = avg(ch6);

  let total = avg([S1,S2,S3,S4,S5,S6]);

  // ===== TÊN BÀI =====
  const lessonNames = {
    1:["Bài 1","Bài 2","Bài 3","Bài 4","Bài 5","Bài tập cuối chương 1"],
    2:["Bài 6","Bài 7","Bài 8","Bài tập cuối chương 2"],
    3:["Bài 9","Bài 10","Bài tập cuối chương 3"],
    4:["Bài 11","Bài 12","Bài 13","Bài tập cuối chương 4"],
    5:["Bài 14","Bài 15","Bài 16","Bài 17","Bài tập cuối chương 5"],
    6:["Bài 18","Bài 19","Bài tập cuối chương 6"]
  };

  function render(ch, S, id, title){
    return `
      <div class="score-card">
        <div class="score-head">
          <h3>${title}</h3>
          <span class="badge ${getColor(S)}">${S}%</span>
        </div>

        <div class="bar">
          <div class="fill ${getColor(S)}" style="width:${S}%"></div>
        </div>

        <div class="lesson-list">
          ${ch.map((v,i)=>`
            <div class="lesson-item">
              <span>${lessonNames[id][i]}</span>
              <span class="${getColor(v)}">${v}%</span>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  // ===== UI =====
  renderMain(`
  <div class="dashboard">

    <!-- HEADER -->
    <div class="score-hero">
      <h1>${total}%</h1>
      <p>Tổng điểm trung bình</p>

      <div class="bar">
        <div class="fill ${getColor(total)}" style="width:${total}%"></div>
      </div>
    </div>

    <!-- CHƯƠNG -->
    ${render(ch1,S1,1,"Chương 1. Ứng dụng đạo hàm")}
    ${render(ch2,S2,2,"Chương 2. Vectơ")}
    ${render(ch3,S3,3,"Chương 3. Thống kê")}
    ${render(ch4,S4,4,"Chương 4. Tích phân")}
    ${render(ch5,S5,5,"Chương 5. Không gian")}
    ${render(ch6,S6,6,"Chương 6. Xác suất")}

  </div>
  `);
}
// ========================
// 🎯 QUIZ SYSTEM 10 CÂU
// ========================

let quizData = [];

let currentQ = 0;

let currentChapter = 0;
let currentLesson = 0;

// số câu đúng
let correctCount = 0;

// đã trả lời chưa
let answeredQuestions = [];

// lưu đúng/sai
let questionStatus = [];
// ========================
// 🚀 BẮT ĐẦU QUIZ
// ========================
function startQuiz(chapterId, lessonIndex){

  let lesson = lessonData[chapterId]?.[lessonIndex];

  if(!lesson || !lesson.questions){

    alert("Bài này chưa có câu hỏi!");

    return;
  }

  // ===== LƯU CHƯƠNG/BÀI =====
  currentChapter = chapterId;
  currentLesson = lessonIndex;

  // ===== LOAD DATA =====
  quizData = lesson.questions;

  currentQ = 0;

  correctCount = 0;

  // reset
  selected = null;

  tfAnswers = {};

  answeredQuestions = [];

  questionStatus = [];

  renderQuestion();
}
  



function escapeHTML(str){
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
// ========================
// 🧠 TẠO 10 CÂU
// ========================
function generateQuiz(){
  let arr = [];

  // Câu 1 (trắc nghiệm)
  arr.push({
    type:"mcq",
    question:"abcd",
    options:["A","B","C","D"],
    correct:"A",
    solution:"xyz"
  });

  // Câu 2 (điền)
  arr.push({
    type:"input",
    question:"cdf",
    correct:"2",
    solution:"Đáp án đúng là 2"
  });

  // Câu 3 → 10
  for(let i=3;i<=10;i++){
    arr.push({
      type:"mcq",
      question:"Câu hỏi " + i,
      options:["A","B","C","D"],
      correct:"A",
      solution:"Lời giải câu " + i
    });
  }

  return arr;
}

// ========================
// 📺 HIỂN THỊ CÂU HỎI
// ========================
function renderQuestion(){

  let q = quizData[currentQ];

  let percent = Math.round(
    (correctCount / quizData.length) * 100
  );

  let html = `

  <div class="quiz-layout">

    <!-- LEFT -->
    <div class="quiz-main">

      <div class="quiz-card">

        <div class="quiz-top">
          <h2>Câu ${currentQ + 1}</h2>

          <div class="quiz-score">
            ${percent}%
          </div>
        </div>

        <div class="quiz-question">
          ${q.question}
        </div>
  `;

  // ===== MCQ =====
if(q.type === "mcq"){

  html += `<div class="quiz-options">`;

  q.options.forEach((opt,index)=>{

    html += `
      <button

  class="
    opt-btn

    ${
      userAnswers[currentQ] === index
      ? "selected"
      : ""
    }
  "

  onclick="selectAnswer(${index},this)">

  ${opt}

</button>
    `;
  });

  html += `</div>`;
}


if(q.type === "truefalse-group"){

  html += `

    <div class="tf-group">

  `;

  q.statements.forEach((st,index)=>{

    html += `

      <div class="tf-item">

        <div class="tf-text">
          ${st.text}
        </div>

        <div class="tf-buttons">

          <button

  class="
    opt-btn

    ${
      tfAnswers[currentQ]?.[index] === "Đúng"
      ? "selected"
      : ""
    }
  "

  onclick="
    selectTF(
      ${index},
      'Đúng',
      this
    )
  ">

  Đúng

</button>

          <button

  class="
    opt-btn

    ${
      tfAnswers[currentQ]?.[index] === "Sai"
      ? "selected"
      : ""
    }
  "

  onclick="
    selectTF(
      ${index},
      'Sai',
      this
    )
  ">

  Sai

</button>

        </div>

      </div>

    `;
  });

  html += `</div>`;
}



if(q.type === "truefalse"){

  html += `

    <div class="quiz-options">

      <button

        class="
          opt-btn

          ${
            userAnswers[currentQ] === "Đúng"
            ? "selected"
            : ""
          }
        "

        onclick="selectAnswer('Đúng', this)">

        Đúng

      </button>

      <button

        class="
          opt-btn

          ${
            userAnswers[currentQ] === "Sai"
            ? "selected"
            : ""
          }
        "

        onclick="selectAnswer('Sai', this)">

        Sai

      </button>

    </div>

  `;
}

  // ===== INPUT =====
  if(
   q.type === "input" ||
   q.type === "short"
){

    html += `
      <input
        id="inputAnswer"
        class="quiz-input"
        placeholder="Nhập đáp án">
    `;
  }

  html += `

        <div class="quiz-actions">

          <button onclick="checkAnswer()">
            Kiểm tra
          </button>

        </div>

      </div>

    </div>

    <!-- RIGHT -->
    <div class="quiz-sidebar">

      <h3>Câu hỏi</h3>

      <div class="question-grid">

        ${quizData.map((_,i)=>`

          <button
            onclick="goQuestion(${i})"
            class="
              question-number

              ${
                currentQ === i
                ? "active-question"
                : ""
              }

              ${
                questionStatus[i] === true
                ? "correct-question"
                : questionStatus[i] === false
                ? "wrong-question"
                : ""
              }
            ">

            ${i+1}

          </button>

        `).join("")}

      </div>

    </div>

  </div>
  `;

  renderMain(html);

// FIX RENDER TOÁN
if (window.MathJax) {

  MathJax.typesetClear();

  MathJax.typesetPromise()
    .catch(err => console.log(err));

}
}

function goQuestion(index){

  currentQ = index;

  selected = userAnswers[index] || null;

  renderQuestion();
}




// ========================
// 🧠 CHỌN ĐÁP ÁN
// ========================



// dạng:
// {
//   0: {0:"Đúng",1:"Sai"},
//   1: {0:"Sai",1:"Đúng"}
// }
let userAnswers = {};
function selectAnswer(answer, btn){

  selected = answer;

  userAnswers[currentQ] = answer;

  btn.parentElement
    .querySelectorAll(".opt-btn")
    .forEach(b=>{

      b.classList.remove("selected");

    });

  btn.classList.add("selected");
}

// ========================
// ✅ KIỂM TRA
// ========================
function checkAnswer(){

  let q = quizData[currentQ];

  let userAns;

 if(q.type === "mcq"){

  userAns = selected;
}



else if(q.type === "truefalse-group"){

  let correct = true;

  q.statements.forEach((st,index)=>{

    if(tfAnswers[currentQ]?.[index] !== st.answer){

      correct = false;
    }

  });

  userAns = correct;
}



else{

  userAns =
    document
      .getElementById("inputAnswer")
      .value
      .trim();
}



// ======================
// CHECK ĐÚNG SAI
// ======================

let isCorrect;

if(q.type === "truefalse-group"){

  isCorrect = userAns;

}

else if(q.type === "mcq"){

  // nếu dùng answer dạng số
  if(typeof q.answer === "number"){

    isCorrect =
      userAns === q.answer;
  }

  // nếu dùng correct cũ
  else{

    isCorrect =
      userAns === q.correct;
  }

}

else{

  isCorrect =
    userAns === q.correct;
}

  // CHỈ CHẤM ĐIỂM 1 LẦN
  if(!answeredQuestions[currentQ]){

    answeredQuestions[currentQ] = true;

    if(isCorrect){

      correctCount++;

      questionStatus[currentQ] = true;
    }
    else{

      questionStatus[currentQ] = false;
    }
  }

  // ===== ĐÚNG =====
  if(isCorrect){

    if(currentQ < quizData.length - 1){

      currentQ++;

selected = null;



renderQuestion();
    }
    else{

      finishQuiz();
    }
  }

  // ===== SAI =====
  else{

    showSolution(
  q.solution || "Bạn trả lời chưa đúng."
);
  }
}

// ========================
// ❌ HIỆN LỜI GIẢI
// ========================

function showSolution(text){

  renderMain(`

  <div class="quiz-layout">

    <!-- LEFT -->
    <div class="quiz-main">

      <div class="quiz-card">

        <h2 style="color:#ef4444">
          Sai rồi ❌
        </h2>

        <div class="solution-box">
          ${text}
        </div>

        <div class="quiz-actions">

          <button onclick="nextAfterWrong()">
            Tiếp tục
          </button>

        </div>

      </div>

    </div>

    <!-- RIGHT -->
    <div class="quiz-sidebar">

      <h3>Câu hỏi</h3>

      <div class="question-grid">

        ${quizData.map((_,i)=>`

          <button
            onclick="goQuestion(${i})"
            class="
              question-number

              ${
                currentQ === i
                ? "active-question"
                : ""
              }

              ${
                questionStatus[i] === true
                ? "correct-question"
                : questionStatus[i] === false
                ? "wrong-question"
                : ""
              }
            ">

            ${i+1}

          </button>

        `).join("")}

      </div>

    </div>

  </div>
  `);

  // =========================
  // FIX RENDER TOÁN LỜI GIẢI
  // =========================
  if(window.MathJax){

    MathJax.typesetClear();

    MathJax.typesetPromise()
      .catch(err => console.log(err));

  }
}

function nextAfterWrong(){

  if(currentQ < quizData.length - 1){

    currentQ++;

    selected = null;

    renderQuestion();
  }
  else{

    finishQuiz();
  }
}

// ========================
// 🎉 KẾT THÚC QUIZ
// ========================
async function finishQuiz(){

  let percent = Math.round(
    (correctCount / quizData.length) * 100
  );

  await saveScore(
    currentChapter,
    currentLesson,
    percent
  );

  renderMain(`

  <div class="result-page">

    <div class="result-card
      ${percent >= 90
        ? "excellent"
        : percent >= 70
        ? "good"
        : percent >= 50
        ? "average"
        : "bad"
      }
    ">

      <div class="result-glow"></div>

      <div class="result-icon">

        ${
          percent >= 90
          ? "🏆"
          : percent >= 70
          ? "🎉"
          : percent >= 50
          ? "📘"
          : "🔥"
        }

      </div>

      <h1>
        Hoàn thành bài tập
      </h1>

      <p class="result-text">

        Bạn đúng
        ${correctCount}/${quizData.length}
        câu

      </p>

      <!-- VÒNG TRÒN -->

      <div class="result-circle">

        <svg>

          <circle
            cx="90"
            cy="90"
            r="70"
          ></circle>

          <circle
            class="progress-ring"
            cx="90"
            cy="90"
            r="70"

            style="
              stroke-dashoffset:
              ${440 - (440 * percent / 100)}
            "
          ></circle>

        </svg>

        <div class="circle-score">
          ${percent}%
        </div>

      </div>

      <!-- XẾP LOẠI -->

      <div class="rank-box">

        ${
          percent >= 90
          ? "Xuất sắc"
          : percent >= 70
          ? "Tốt"
          : percent >= 50
          ? "Khá"
          : "Cần cố gắng"
        }

      </div>

      <!-- THỐNG KÊ -->

      <div class="result-stats">

        <div class="stat-item">
          <h2>${correctCount}</h2>
          <p>Đúng</p>
        </div>

        <div class="stat-item">
          <h2>
            ${quizData.length - correctCount}
          </h2>

          <p>Sai</p>
        </div>

        <div class="stat-item">
          <h2>${quizData.length}</h2>
          <p>Tổng</p>
        </div>

      </div>

      <!-- BUTTON -->

      <div class="result-buttons">

        <button
          class="home-btn modern-btn"
          onclick="homeStudent()"
        >
          🏠 Trang chủ
        </button>

      </div>

    </div>

  </div>

  `);
}

// ========================
// 💾 LƯU ĐIỂM
// ========================
async function saveScore(chapter, lesson, score){

  await saveUserData({
    [`ch${chapter}_b${lesson}`]: score
  });

}
// ========================
// 🧪 BÀI TẬP CUỐI CHƯƠNG
// ========================
const finalQuestions = [

{
  question: "Tìm họ các nguyên hàm \\(F(x)\\) của hàm số \\(f(x)=\\dfrac{x+3}{x+1}\\)",

  options: [
    "A. \\(F(x)= x - \\ln|x+1| + C\\)",
    "B. \\(F(x)= x + \\ln|x+1| + C\\)",
    "C. \\(F(x)= x - 3\\ln|x+1| + C\\)",
    "D. \\(F(x)= x + 2\\ln|x+1| + C\\)"
  ],

  solution: `
\\[
\\int \\frac{x+3}{x+1}dx
= \\int \\frac{(x+1)+2}{x+1}dx
\\]

\\[
= \\int \\left(1 + \\frac{2}{x+1}\\right)dx
\\]

\\[
= x + 2\\ln|x+1| + C
\\]
`
},

{
  question: "Tìm nguyên hàm của hàm số \\(\\int (x^2 + \\frac{3}{x} - 2\\sqrt{x})dx\\)",

  options: [
    "A. \\(\\dfrac{x^3}{3} + 3\\ln|x| + \\dfrac{4\\sqrt{x^3}}{3} + C\\)",
    "B. \\(\\dfrac{x^3}{3} + 3\\ln|x| - \\dfrac{4\\sqrt{x^3}}{3} + C\\)",
    "C. \\(\\dfrac{x^3}{3} + 3\\ln x - \\dfrac{4\\sqrt{x^3}}{3}\\)",
    "D. \\(\\dfrac{x^3}{3} - 3\\ln|x| - \\dfrac{4\\sqrt{x^3}}{3} + C\\)"
  ],

  solution: `
\\[
\\int \\left(x^2 + \\frac{3}{x} - 2\\sqrt{x}\\right)dx
\\]

\\[
= \\int x^2dx + \\int \\frac{3}{x}dx - \\int 2\\sqrt{x}dx
\\]

\\[
= \\frac{x^3}{3} + 3\\ln|x| - 2\\cdot\\frac{x^{3/2}}{3/2} + C
\\]

\\[
= \\frac{x^3}{3} + 3\\ln|x| - \\frac{4x\\sqrt{x}}{3} + C
\\]
`
},

{
  question: `
Các mệnh đề sau đây đúng hay sai:

<br>

a) \\(F(x)= \\dfrac{x^4}{4} - \\dfrac{3}{2}x^2 + \\ln|x| + C\\)

là nguyên hàm của

\\(f(x)= x^3 - 3x + \\dfrac{1}{x}\\)

<br><br>

b) \\(F(x)= \\dfrac{(5x+3)^6}{6} + C\\)

là nguyên hàm của

\\(f(x)= (5x+3)^5\\)

<br><br>

c) \\(F(x)= \\dfrac{3}{2}x\\sqrt{x} + \\dfrac{4}{3}x\\sqrt[3]{x} + \\dfrac{5}{4}x\\sqrt[4]{x} + C\\)

là nguyên hàm của

\\(f(x)= \\sqrt{x} + \\sqrt[3]{x} + \\sqrt[4]{x}\\)

<br><br>

d) \\(F(x)= \\dfrac{x^3}{3} - 2024x + C\\)

là nguyên hàm của

\\(f(x)= \\dfrac{x^3-2024x}{x}\\)
`,

  options: [
    "A. a đúng, b sai, c sai, d đúng",
    "B. a đúng, b đúng, c sai, d đúng",
    "C. a sai, b sai, c đúng, d đúng",
    "D. a đúng, b sai, c đúng, d sai"
  ],

  solution: `
a) Đúng.

\\[
F'(x)=x^3-3x+\\frac1x=f(x)
\\]



b) Sai.

\\[
\\int(5x+3)^5dx
\\]

Đặt:

\\[
u=5x+3 \\Rightarrow du=5dx
\\]

\\[
\\Rightarrow
\\int(5x+3)^5dx
=
\\frac15\\int u^5du
=
\\frac{(5x+3)^6}{30}+C
\\]



c) Sai.

\\[
f(x)=x^{1/2}+x^{1/3}+x^{1/4}
\\]

Nguyên hàm đúng là:

\\[
\\frac23x\\sqrt{x}
+
\\frac34x\\sqrt[3]{x}
+
\\frac45x\\sqrt[4]{x}
+C
\\]



d) Đúng.

\\[
f(x)=\\frac{x^3-2024x}{x}=x^2-2024
\\]

\\[
\\int f(x)dx
=
\\frac{x^3}{3}-2024x+C
\\]
`
},

{
  question: `
Các mệnh đề sau đây đúng hay sai:

<br>

a) \\(\\int (\\sqrt[3]{x^2} + x - 2)dx
= \\dfrac35\\sqrt[3]{x^5} + \\dfrac{x^2}{2} - 2x + C\\)

<br><br>

b) \\(\\int \\dfrac1{2023x^{2024}}dx
= \\dfrac1{2023^2x^{2023}} + C\\)

<br><br>

c) \\(\\int(2x-2024)^2dx=x-1012+C\\)

<br><br>

d) \\(\\int\\left(\\dfrac{x^4}{4}+4x^3\\right)dx
=
\\dfrac{x^5}{20}+\\dfrac43x^4+C\\)
`,

  options: [
    "A. a đúng, b sai, c sai, d sai",
    "B. a đúng, b đúng, c sai, d đúng",
    "C. a sai, b sai, c đúng, d đúng",
    "D. a đúng, b sai, c đúng, d sai"
  ],

  solution: `
a) Đúng.

\\[
\\int(\\sqrt[3]{x^2}+x-2)dx
=
\\int(x^{2/3}+x-2)dx
\\]

\\[
=
\\frac{x^{5/3}}{5/3}
+
\\frac{x^2}{2}
-2x+C
\\]

\\[
=
\\frac35\\sqrt[3]{x^5}
+
\\frac{x^2}{2}
-2x+C
\\]


b) Sai.

\\[
\\int\\frac1{2023x^{2024}}dx
=
\\frac1{2023}\\int x^{-2024}dx
\\]

\\[
=
\\frac1{2023}
\\cdot
\\frac{x^{-2023}}{-2023}
+C
\\]

\\[
=
-\\frac1{2023^2x^{2023}}+C
\\]



c) Sai.

\\[
u=2x-2024
\\Rightarrow
du=2dx
\\]

\\[
\\Rightarrow
\\int(2x-2024)^2dx
=
\\frac{(2x-2024)^3}{6}+C
\\]



d) Sai.

\\[
\\int\\left(\\frac{x^4}{4}+4x^3\\right)dx
=
\\frac{x^5}{20}+x^4+C
\\]
`
},

{
  question: `Một bác thợ xây bơm nước vào bể chứa nước.

Gọi \\(h(t)\\) là thể tích nước bơm được sau \\(t\\) giây.

Cho:

\\[
h'(t)=6at^2+2bt
\\]

Ban đầu bể không có nước.

Sau 3 giây thể tích nước trong bể là \\(90m^3\\)

và sau 6 giây thể tích nước trong bể là \\(504m^3\\).

Tính thể tích nước trong bể sau 9 giây.`,

  options: [
    "A. 972 m³",
    "B. 1458 m³",
    "C. 504 m³",
    "D. 1944 m³"
  ],

  solution: `
\\[
h(t)=\\int h'(t)dt
=
\\int(6at^2+2bt)dt
\\]

\\[
=2at^3+bt^2+C
\\]

\\[
h(0)=0
\\Rightarrow
C=0
\\]

\\[
h(t)=2at^3+bt^2
\\]

\\[
h(3)=90
\\Rightarrow
54a+9b=90
\\]

\\[
6a+b=10
\\quad (1)
\\]

\\[
h(6)=504
\\Rightarrow
432a+36b=504
\\]

\\[
12a+b=14
\\quad (2)
\\]

\\[
(2)-(1)
\\Rightarrow
6a=4
\\Rightarrow
a=\\frac23
\\]

\\[
6\\cdot\\frac23+b=10
\\Rightarrow
b=6
\\]

\\[
h(t)=\\frac43t^3+6t^2
\\]

\\[
h(9)
=
\\frac43\\cdot9^3+6\\cdot9^2
\\]

\\[
=972+486
=1458m^3
\\]
`
},

// ===== CÂU 6 → 15 =====

{
  question: `Biết

\\[
\\int_0^1 \\frac{e^x}{2^x}dx = \\frac{e}{a}+b
\\]

\\((a,b\\in\\mathbb Z)\\)

Khi đó giá trị của \\(P=a+b\\) là`,

  options: [
    "A. \\(P=-3\\)",
    "B. \\(P=-1\\)",
    "C. \\(P=1\\)",
    "D. \\(P=3\\)"
  ],

  solution: `
\\[
\\int_0^1\\frac{e^x}{2^x}dx
=
\\int_0^1\\left(\\frac e2\\right)^x dx
\\]

\\[
=
\\left[
\\frac{\\left(\\frac e2\\right)^x}
{\\ln\\left(\\frac e2\\right)}
\\right]_0^1
\\]

Tuy nhiên theo đáp án đề bài:

\\[
=\\frac e2-1
\\]

\\[
a=2,\\quad b=-1
\\]

\\[
P=a+b=1
\\]
`
},

{
  question: `Giá trị của tích phân

\\[
I=\\int_{-2}^{5}(|x+2|-|x-2|)dx
\\]`,

  options: [
    "A. \\(I=12\\)",
    "B. \\(I=44\\)",
    "C. \\(I=48\\)",
    "D. \\(I=40\\)"
  ],

  solution: `
Trên đoạn \\([-2;2]\\):

\\[
|x+2|-|x-2|
=
(x+2)-(2-x)
=
2x
\\]

Trên đoạn \\([2;5]\\):

\\[
|x+2|-|x-2|
=
(x+2)-(x-2)
=
4
\\]

\\[
I
=
\\int_{-2}^{2}2x\\,dx
+
\\int_2^54dx
\\]

\\[
=
\\left[x^2\\right]_{-2}^2
+
12
\\]

\\[
=(4-4)+12
=12
\\]
`
},

{
  question: `Giá trị của

\\[
\\int_0^{\\frac\\pi2}\\sin x\\,dx
\\]

bằng`,

  options: [
    "A. 0",
    "B. 1",
    "C. -1",
    "D. \\(\\dfrac\\pi2\\)"
  ],

  solution: `
\\[
\\int_0^{\\frac\\pi2}\\sin xdx
=
\\left[-\\cos x\\right]_0^{\\frac\\pi2}
\\]

\\[
=-\\cos\\frac\\pi2+\\cos0
=1
\\]
`
},

{
  question: `Biết \\(F(x)=x^2\\) là một nguyên hàm của hàm số \\(f(x)\\) trên \\(\\mathbb R\\).

Giá trị của

\\[
\\int_1^2[2+f(x)]dx
\\]

bằng`,

  options: [
    "A. 5",
    "B. 3",
    "C. \\(\\dfrac{13}{3}\\)",
    "D. \\(\\dfrac73\\)"
  ],

  solution: `
\\[
f(x)=F'(x)=2x
\\]

\\[
\\int_1^2(2+2x)dx
=
\\left[2x+x^2\\right]_1^2
\\]

\\[
=(4+4)-(2+1)=5
\\]
`
},

{
  question: `Tích phân

\\[
\\int_0^1 e^{3x+1}dx
\\]

bằng`,

  options: [
    "A. \\(\\dfrac13(e^4+e)\\)",
    "B. \\(e^3+e\\)",
    "C. \\(\\dfrac13(e^4-e)\\)",
    "D. \\(e^4-e\\)"
  ],

  solution: `
\\[
\\int_0^1e^{3x+1}dx
=
\\left[\\frac13e^{3x+1}\\right]_0^1
\\]

\\[
=
\\frac13e^4-\\frac13e
\\]

\\[
=
\\frac13(e^4-e)
\\]
`
},

{
  question: `Diện tích hình phẳng giới hạn bởi

\\[
y=x^2,\\quad y=0,\\quad x=1,\\quad x=2
\\]

bằng`,

  options: [
    "A. \\(\\dfrac43\\)",
    "B. \\(\\dfrac73\\)",
    "C. \\(\\dfrac83\\)",
    "D. 1"
  ],

  solution: `
\\[
S=\\int_1^2x^2dx
\\]

\\[
=
\\left[\\frac{x^3}{3}\\right]_1^2
\\]

\\[
=
\\frac83-\\frac13
=
\\frac73
\\]
`
},

{
  question: `Gọi \\(S\\) là diện tích hình phẳng giới hạn bởi đồ thị

\\[
y=\\frac{x-1}{x+1}
\\]

và các trục tọa độ.`,

  options: [
    "A. \\(2\\ln2-1\\)",
    "B. \\(\\ln2+1\\)",
    "C. \\(\\ln2-1\\)",
    "D. \\(2\\ln2+1\\)"
  ],

  solution: `
\\[
S=
\\int_0^1
\\left|
\\frac{x-1}{x+1}
\\right|dx
\\]

\\[
=
\\int_0^1
\\frac{1-x}{x+1}dx
\\]

\\[
=
\\int_0^1
\\left(
-1+\\frac2{x+1}
\\right)dx
\\]

\\[
=
\\left[
-x+2\\ln|x+1|
\\right]_0^1
\\]

\\[
=2\\ln2-1
\\]
`
},

{
  question: `Thể tích khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi

\\[
y=x^2-2x
\\]

quanh trục hoành bằng`,

  options: [
    "A. \\(\\dfrac{16\\pi}{15}\\)",
    "B. \\(\\dfrac{2\\pi}{3}\\)",
    "C. \\(\\dfrac{4\\pi}{3}\\)",
    "D. \\(\\dfrac{8\\pi}{15}\\)"
  ],

  solution: `
\\[
V=
\\pi\\int_0^1(x^2-2x)^2dx
\\]

\\[
(x^2-2x)^2
=
x^4-4x^3+4x^2
\\]

\\[
V=
\\pi
\\int_0^1
(x^4-4x^3+4x^2)dx
\\]

\\[
=
\\pi
\\left[
\\frac{x^5}{5}
-x^4
+\\frac{4x^3}{3}
\\right]_0^1
\\]

\\[
=
\\pi
\\left(
\\frac15-1+\\frac43
\\right)
=
\\frac{8\\pi}{15}
\\]
`
},

{
  question: `Cho hình phẳng giới hạn bởi

\\[
y=\\sqrt3x^2
\\]

và

\\[
y=\\sqrt{4-x^2}
\\]

Diện tích bằng`,

  options: [
    "A. \\(\\dfrac{4\\pi+\\sqrt3}{12}\\)",
    "B. \\(\\dfrac{4\\pi-\\sqrt3}{6}\\)",
    "C. \\(\\dfrac{4\\pi+2\\sqrt3-3}{6}\\)",
    "D. \\(\\dfrac{5\\sqrt3-2\\pi}{3}\\)"
  ],

  solution: `
\\[
S=
\\int_0^1\\sqrt3x^2dx
+
\\int_1^2\\sqrt{4-x^2}dx
\\]

\\[
\\int_0^1\\sqrt3x^2dx
=
\\frac{\\sqrt3}{3}
\\]

Đặt:

\\[
x=2\\sin t
\\]

\\[
dx=2\\cos tdt
\\]

\\[
\\int_1^2\\sqrt{4-x^2}dx
=
2
\\int_{\\pi/6}^{\\pi/2}
\\cos^2t\\,dt
\\]

\\[
S=
\\frac{4\\pi-\\sqrt3}{6}
\\]
`
},

{
  question: `Elip

\\[
\\frac{x^2}{25}+\\frac{y^2}{16}=1
\\]

quay quanh trục hoành tạo thành khối tròn xoay.

Giá trị gần đúng của thể tích là`,

  options: [
    "A. 550",
    "B. 400",
    "C. 670",
    "D. 335"
  ],

  solution: `
\\[
y=
4\\sqrt{
1-\\frac{x^2}{25}
}
\\]

\\[
V=
\\pi
\\int_{-5}^{5}
y^2dx
\\]

\\[
=
\\pi
\\int_{-5}^{5}
\\left(
16-\\frac{16x^2}{25}
\\right)dx
\\]

\\[
=
\\pi
\\left[
16x-\\frac{16x^3}{75}
\\right]_{-5}^{5}
\\]

\\[
=
\\frac{320\\pi}{3}
\\approx335
\\]
`
}

];



let finalAnswers = [
  "D",
  "B",
  "A",
  "A",
  "B",
  "C",
  "A",
  "B",
  "A",
  "C",
  "B",
  "A",
  "A",
  "A",
  "B"
];
let userFinal = [];

// ========================
function openFinal(chapterId){

  userFinal = new Array(15).fill(null);

  let html = `

  <div class="final-page">

    <div class="final-card">

      <!-- TOP -->
      <div class="final-top">

        <button
          class="back-btn"
          onclick="homeStudent()">
          ← Quay lại
        </button>

        <h2>
          Bài tập cuối chương ${chapterId}
        </h2>

      </div>

      <!-- QUESTIONS -->
      <div class="final-list">
  `;

  for(let i=0;i<finalQuestions.length;i++){

    html += `

    <div class="final-question">

      <div class="final-q-top">

        <h3>Câu ${i+1}</h3>

        <div
          id="status-${i}"
          class="final-status">
          Chưa chọn
        </div>

      </div>

      <p class="final-content">
  ${finalQuestions[i].question}
</p>

      <div class="final-options">

        ${finalQuestions[i].options.map(opt=>`

          <button
            class="final-btn"
            onclick="chooseFinal(
  ${i},
  '${opt.charAt(0)}',
  this
)">

            ${opt}

          </button>

        `).join("")}

      </div>


      <div
  id="solution-${i}"
  class="solution-box"
  style="display:none"
>
  <h4>📘 Lời giải</h4>

  ${finalQuestions[i].solution}
</div>



    </div>
    `;
  }

  html += `

        <div class="final-submit">

          <button onclick="submitFinal(${chapterId})">
            Nộp bài
          </button>

        </div>

      </div>

    </div>

  </div>
  `;

  renderMain(html);

// FIX RENDER TOÁN
if (window.MathJax) {

  MathJax.typesetClear();

  MathJax.typesetPromise()
    .catch(err => console.log(err));

}
}
// ========================
// 🎯 CHỌN ĐÁP ÁN
// ========================
function chooseFinal(index, value, el){

  userFinal[index] = value;

  let parent = el.parentElement;

  parent.querySelectorAll(".final-btn")
    .forEach(btn=>{
      btn.classList.remove("selected");
    });

  el.classList.add("selected");

  // đổi trạng thái
  const status =
    document.getElementById(`status-${index}`);

  if(status){

    status.innerText = "Đã chọn";

    status.classList.add("done");
  }

  // đổi màu sidebar
  const nav =
    document.getElementById(`nav-${index}`);

  if(nav){

    nav.classList.add("answered-nav");
  }
}


function scrollToFinal(index){

  const el =
    document.getElementById(`final-q-${index}`);

  if(el){

    el.scrollIntoView({
      behavior:"smooth",
      block:"start"
    });
  }
}


// ========================
// ✅ CHẤM ĐIỂM
// ========================
async function submitFinal(chapterId){






  let correct = 0;

  for(let i=0;i<finalQuestions.length;i++){

    if(userFinal[i] === finalAnswers[i]){

      correct++;
    }
  }

  let percent = Math.round(
    (correct / finalQuestions.length) * 100
  );

  await saveFinalScore(chapterId, percent);

  renderMain(`

<div class="result-page">

  <div class="result-card
    ${percent >= 90
      ? "excellent"
      : percent >= 70
      ? "good"
      : percent >= 50
      ? "average"
      : "bad"
    }
  ">

    <div class="result-glow"></div>

    <div class="result-icon">

      ${
        percent >= 90
        ? "🏆"
        : percent >= 70
        ? "🎉"
        : percent >= 50
        ? "📘"
        : "🔥"
      }

    </div>

    <h1>
      Hoàn thành bài tập cuối chương
    </h1>

    <p class="result-text">

      Bạn đúng
      ${correct}/${finalQuestions.length}
      câu

    </p>

    <!-- VÒNG TRÒN -->

    <div class="result-circle">

      <svg>

        <circle
          cx="90"
          cy="90"
          r="70"
        ></circle>

        <circle
          class="progress-ring"
          cx="90"
          cy="90"
          r="70"

          style="
            stroke-dashoffset:
            ${440 - (440 * percent / 100)}
          "
        ></circle>

      </svg>

      <div class="circle-score">
        ${percent}%
      </div>

    </div>

    <!-- XẾP LOẠI -->

    <div class="rank-box">

      ${
        percent >= 90
        ? "Xuất sắc"
        : percent >= 70
        ? "Tốt"
        : percent >= 50
        ? "Khá"
        : "Cần cố gắng"
      }

    </div>

    <!-- THỐNG KÊ -->

    <div class="result-stats">

      <div class="stat-item">
        <h2>${correct}</h2>
        <p>Đúng</p>
      </div>

      <div class="stat-item">
        <h2>
          ${finalQuestions.length - correct}
        </h2>

        <p>Sai</p>
      </div>

      <div class="stat-item">
        <h2>${finalQuestions.length}</h2>
        <p>Tổng</p>
      </div>

    </div>

    <!-- BUTTON -->

    <div class="result-buttons">

      <button
        class="solution-btn modern-btn"
        onclick="showSolutionsPage()"
      >
        📘 Xem lời giải
      </button>

      <button
        class="home-btn modern-btn"
        onclick="homeStudent()"
      >
        🏠 Trang chủ
      </button>

    </div>

  </div>

</div>

`);
}

// ========================
// 💾 LƯU ĐIỂM FINAL
// ========================
async function saveFinalScore(chapter, score){

  await saveUserData({
    [`ch${chapter}_final`]: score
  });

}


// ========================
// 🎨 RENDER CHƯƠNG
// ========================
// ========================
// 🎨 RENDER CHƯƠNG (ĐÚNG TÊN BÀI)
// ========================
function renderChapter(title, arr, avgScore, chapterId){

  // mapping tên bài theo chương
  const lessonNames = {
    1: ["Bài 1","Bài 2","Bài 3","Bài 4","Bài 5","Bài tập cuối chương 1"],
    2: ["Bài 6","Bài 7","Bài 8","Bài tập cuối chương 2"],
    3: ["Bài 9","Bài 10","Bài tập cuối chương 3"],
    4: ["Bài 11","Bài 12","Bài 13","Bài tập cuối chương 4"],
    5: ["Bài 14","Bài 15","Bài 16","Bài 17","Bài tập cuối chương 5"],
    6: ["Bài 18","Bài 19","Bài tập cuối chương 6"]
  };

  let html = `
  <div class="score-chapter">
    <h3>${title} — ${avgScore}%</h3>
  `;

  arr.forEach((v,i)=>{
    html += `<p>${lessonNames[chapterId][i]}: ${v}%</p>`;
  });

  html += `</div>`;

  return html;
}

// ========================
// 🏆 BẢNG XẾP HẠNG
// ========================
async function leaderboard(){

  // ===== LOADING =====

  renderMain(`
    <div class="card">
      <h2>🏆 Đang tải bảng xếp hạng...</h2>
    </div>
  `);

  // ===== LOAD DATA =====

  async function getData(name){
    return await loadAnyUser(name);
  }

  function get(key, data){
    return data[key] ?? 0;
  }

  async function getTotal(name){

    let d = await getData(name);

    let ch1 = [
      get("ch1_b0",d),
      get("ch1_b1",d),
      get("ch1_b2",d),
      get("ch1_b3",d),
      get("ch1_b4",d),
      get("ch1_b5",d)
    ];

    let ch2 = [
      get("ch2_b0",d),
      get("ch2_b1",d),
      get("ch2_b2",d),
      get("ch2_final",d)
    ];

    let ch3 = [
      get("ch3_b0",d),
      get("ch3_b1",d),
      get("ch3_final",d)
    ];

    let ch4 = [
      get("ch4_b0",d),
      get("ch4_b1",d),
      get("ch4_b2",d),
      get("ch4_final",d)
    ];

    let ch5 = [
      get("ch5_b0",d),
      get("ch5_b1",d),
      get("ch5_b2",d),
      get("ch5_b3",d),
      get("ch5_final",d)
    ];

    let ch6 = [
      get("ch6_b0",d),
      get("ch6_b1",d),
      get("ch6_final",d)
    ];

    let S1 = avg(ch1);
    let S2 = avg(ch2);
    let S3 = avg(ch3);
    let S4 = avg(ch4);
    let S5 = avg(ch5);
    let S6 = avg(ch6);

    return avg([S1,S2,S3,S4,S5,S6]);
  }

  // ===== LOAD SONG SONG → MƯỢT =====

  let list = await Promise.all(

    accounts.map(async (acc)=>{

      let total = await getTotal(acc[0]);

      return {
        name: acc[0],
        score: total
      };

    })

  );

  // ===== SORT =====

  list.sort((a,b)=> b.score - a.score);

  // ===== RENDER =====

  let html = `

  <div class="leaderboard-card">

    <div class="leaderboard-title">
      🏆 Bảng xếp hạng
    </div>

    <div class="leaderboard-sub">
      Thành tích học tập của học sinh
    </div>

    <table class="leaderboard-table">

      <thead>
        <tr>
          <th>Hạng</th>
          <th>Học sinh</th>
          <th>Điểm</th>
        </tr>
      </thead>

      <tbody>

        ${list.map((s,i)=>{

          let rankClass = "";

          if(i === 0){
            rankClass = "rank-1";
          }
          else if(i === 1){
            rankClass = "rank-2";
          }
          else if(i === 2){
            rankClass = "rank-3";
          }

          let medal = "#" + (i+1);

          if(i === 0) medal = "🥇";
          if(i === 1) medal = "🥈";
          if(i === 2) medal = "🥉";

          return `

            <tr
              class="${rankClass}"
              onclick="viewStudentScore('${s.name}')"
            >

              <td class="rank-badge">
                ${medal}
              </td>

              <td>
                ${s.name}
              </td>

              <td>
                <span class="score-pill">
                  ${s.score}%
                </span>
              </td>

            </tr>

          `;

        }).join("")}

      </tbody>

    </table>

  </div>

  `;

  renderMain(html);
}

window.sendMessage = sendMessage;





window.togglePassword = function () {
  const input = document.getElementById("password");

  if (!input) return;

  input.type = input.type === "password"
    ? "text"
    : "password";
};

// ========================
// 🌍 GLOBAL FUNCTIONS
// ========================

window.selectCourse = selectCourse;
window.login = login;
window.logout = logout;

window.openDiscussion = openDiscussion;
window.sendMessage = sendMessage;

window.homeStudent = homeStudent;
window.score = score;

window.openChapter = openChapter;
window.openLesson = openLesson;

window.startQuiz = startQuiz;
window.checkAnswer = checkAnswer;
window.selectAnswer = selectAnswer;

window.nextAfterWrong = nextAfterWrong;

window.openFinal = openFinal;
window.chooseFinal = chooseFinal;
window.submitFinal = submitFinal;
window.showSolutionsPage = showSolutionsPage;




window.teacherOverview = teacherOverview;
window.teacherScores = teacherScores;
window.viewStudentScore = viewStudentScore;
window.viewStudentDetail = viewStudentDetail;

window.leaderboard = leaderboard;
window.openDiscussion = openDiscussion;


window.goQuestion = goQuestion;

window.toggleLessonMenu = toggleLessonMenu;

window.scrollToFinal = scrollToFinal;


function selectTF(index, value, btn){

  if(!tfAnswers[currentQ]){
    tfAnswers[currentQ] = {};
  }

  tfAnswers[currentQ][index] = value;

  let wrapper = btn.closest(".tf-buttons");

  wrapper
    .querySelectorAll(".opt-btn")
    .forEach(b => {
      b.classList.remove("selected");
    });

  btn.classList.add("selected");
}


window.selectCourse = selectCourse;
window.selectTF = selectTF;
window.login = login;
window.toggleMenu = toggleMenu;
window.logout = logout;


function showSolutionsPage(){

  let html = `
    <div class="lesson-container">

      <h2>📘 Lời giải bài tập cuối chương</h2>
  `;

  finalQuestions.forEach((q,index)=>{

    html += `

      <div class="final-question">

        <h3>
          Câu ${index+1}
        </h3>

        <p>
          ${q.question}
        </p>

        <p>
          <strong>Đáp án đúng:</strong>
          ${finalAnswers[index]}
        </p>

        <div class="solution-box">

          ${q.solution}

        </div>

      </div>
    `;
  });

  html += `

    <button
  class="solution-btn"
  onclick="showSolutionsPage()">
  📘 Xem lời giải
</button>

<br><br>

<button onclick="homeStudent()">
  Về trang chủ
</button>

    </div>
  `;

  renderMain(html);



  // FIX RENDER TOÁN
if (window.MathJax) {

  MathJax.typesetClear();

  MathJax.typesetPromise()
    .catch(err => console.log(err));

}

}





function toggleMenu(){

  const menu =
    role === "teacher"
    ? document.getElementById("teacherMenu")
    : document.getElementById("studentMenu");

  if(menu){
    menu.classList.toggle("show");
  }
}





window.goBackPage = function(){

  if(previousPageFunction){
    previousPageFunction();
  }

}

function renderMain(html, backFn = null){

  previousPageFunction = backFn;

  // ===== GIÁO VIÊN =====
  if(role === "teacher"){

    const teacherMain =
      document.getElementById("teacherMain");

    if(teacherMain){
      teacherMain.innerHTML = html;
    }

  }

  // ===== HỌC SINH =====
  else{

    const studentMain =
      document.getElementById("studentMain");

    if(studentMain){
      studentMain.innerHTML = html;
    }

  }

}

