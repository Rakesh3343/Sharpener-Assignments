const dateInput = document.getElementById('datePicker');
const area = document.getElementById('attendanceArea');
const reportArea = document.getElementById('reportArea');

async function loadStudents() {
  const date = dateInput.value;
  if (!date) return alert('Select a date.');

  const res = await fetch(`/api/attendance/students?date=${date}`);
  const students = await res.json();

  const marked = students.every(s => s.status !== null);
  area.innerHTML = students.map(s => `
    <div>
      <label>${s.name}</label>
      ${marked
        ? `<span style="margin-left: 10px;">${s.status}</span>`
        : `
        <input type="radio" name="s${s.id}" value="present"> Present
        <input type="radio" name="s${s.id}" value="absent"> Absent
      `}
    </div>
  `).join('');

  if (!marked) {
    const btn = document.createElement('button');
    btn.textContent = 'Mark Attendance';
    btn.onclick = () => markAttendance(date, students);
    area.appendChild(btn);
  }
}

async function markAttendance(date, students) {
  const attendance = students.map(s => {
    const choice = document.querySelector(`input[name="s${s.id}"]:checked`);
    return { id: s.id, status: choice?.value };
  });

  if (attendance.some(a => !a.status)) return alert('Mark everyone.');

  const res = await fetch('/api/attendance/mark', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ date, attendance })
  });

  const data = await res.json();
  alert(data.message);
  loadStudents();
}

async function fetchReport() {
  const res = await fetch('/api/attendance/report');
  const report = await res.json();

  reportArea.innerHTML = '<h3>Attendance Report</h3>' + report.map(r =>
    `<p>${r.name}: ${r.present}/${r.total} (${r.percentage}%)</p>`
  ).join('');
}
