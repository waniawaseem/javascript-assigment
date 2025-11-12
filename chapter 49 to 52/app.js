// question no 01
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  document.getElementById("result").innerHTML = `
    <h3>Submitted Data:</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Password:</b> ${password}</p>
  `;
});
// question no 02
function toggleReadMore() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("moreText");
  const btn = document.getElementById("readMoreBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    btn.innerHTML = "Read more";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    btn.innerHTML = "Read less";
  }
}
// question no 03
let students = [];
let editIndex = null;

document.getElementById("studentForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const cls = document.getElementById("class").value;

  students.push({ name, class: cls });
  displayStudents();
  this.reset();
});

function displayStudents() {
  const table = document.getElementById("studentTable");
  table.innerHTML = `
    <tr>
      <th>Index</th><th>Name</th><th>Class</th><th>Actions</th>
    </tr>
  `;

  students.forEach((student, index) => {
    const row = `
      <tr>
        <td>${index}</td>
        <td>${student.name}</td>
        <td>${student.class}</td>
        <td>
          <button onclick="editStudent(${index})">Edit</button>
          <button onclick="deleteStudent(${index})">Delete</button>
        </td>
      </tr>
    `;
    table.innerHTML += row;
  });
}

function deleteStudent(index) {
  students.splice(index, 1);
  displayStudents();
}

function editStudent(index) {
  editIndex = index;
  document.getElementById("editName").value = students[index].name;
  document.getElementById("editClass").value = students[index].class;
  document.getElementById("editForm").style.display = "block";
}

function updateStudent() {
  const name = document.getElementById("editName").value;
  const cls = document.getElementById("editClass").value;
  students[editIndex] = { name, class: cls };
  document.getElementById("editForm").style.display = "none";
  displayStudents();
}