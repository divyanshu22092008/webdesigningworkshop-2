
const LS_KEY = "employees.v1";

const $ = (sel) => document.querySelector(sel);
const statusEl = $("#status");
const results = $("#results");


let employees = (() => {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY)) ?? [];
  } catch {
    return [];
  }
})();

const saveEmployees = () => {
  localStorage.setItem(LS_KEY, JSON.stringify(employees));
};


const toMoney = (num) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 2 }).format(num);

const setStatus = (msg, ok = true) => {
  statusEl.textContent = msg;
  statusEl.style.color = ok ? "#475569" : "#b91c1c";
};

const clearResults = () => (results.innerHTML = "");

function renderEmployees(list, caption = "Employees") {
  clearResults();

  if (!list.length) {
    results.innerHTML = `<div class="table-wrap"><table><caption style="caption-side:top;padding:10px 12px;text-align:left;color:#6b7280;">${caption}</caption><tbody><tr><td style="padding:12px;">No records found.</td></tr></tbody></table></div>`;
    return;
  }

  const rows = list
    .map(
      (e, i) => `
      <tr>
        <td>${i + 1}</td>
        <td>${e.name}</td>
        <td><span class="badge">${e.id}</span></td>
        <td>${toMoney(e.salary)}</td>
        <td>${e.department}</td>
      </tr>`
    )
    .join("");

  results.innerHTML = `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Employee Name</th>
            <th>Employee ID</th>
            <th>Salary</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function renderSummary(chips = []) {
  const div = document.createElement("div");
  div.className = "summary";
  div.innerHTML = chips.map((c) => `<span class="chip">${c}</span>`).join("");
  results.appendChild(div);
}

$("#empForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = $("#empName").value.trim();
  const id = $("#empId").value.trim();
  const salary = parseFloat($("#empSalary").value);
  const department = $("#empDept").value.trim();

  if (!name || !id || !department || isNaN(salary)) {
    setStatus("Please fill all fields with valid values.", false);
    return;
  }
  if (salary < 0) {
    setStatus("Salary cannot be negative.", false);
    return;
  }
  if (employees.some((emp) => emp.id.toLowerCase() === id.toLowerCase())) {
    setStatus("Employee ID already exists. Use a unique ID.", false);
    return;
  }

  const emp = { name, id, salary, department };
  employees.push(emp);
  saveEmployees();

  renderEmployees(employees, "All Employees");
  setStatus(`Employee added: ${name} (${id})`);

  e.target.reset();
  $("#empName").focus();
});
$("#btnShowAll").addEventListener("click", () => {
  renderEmployees(employees, "All Employees");
  setStatus(`Showing ${employees.length} employee(s).`);
});

$("#btnSalaryGT").addEventListener("click", () => {
  const filtered = employees.filter((e) => e.salary > 50000);
  renderEmployees(filtered, "Employees with Salary > 50,000");
  setStatus(`Found ${filtered.length} employee(s) with salary > 50,000.`);
});

$("#btnTotal").addEventListener("click", () => {
  const total = employees.reduce((sum, e) => sum + e.salary, 0);
  clearResults();
  results.innerHTML = `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Metric</th><th>Value</th></tr></thead>
        <tbody><tr><td>Total Salary (All Employees)</td><td>${toMoney(total)}</td></tr></tbody>
      </table>
    </div>
  `;
  setStatus("Calculated total salary.");
});

$("#btnAverage").addEventListener("click", () => {
  const avg = employees.length ? employees.reduce((s, e) => s + e.salary, 0) / employees.length : 0;
  clearResults();
  results.innerHTML = `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Metric</th><th>Value</th></tr></thead>
        <tbody><tr><td>Average Salary</td><td>${toMoney(avg)}</td></tr></tbody>
      </table>
    </div>
  `;
  setStatus("Calculated average salary.");
});

$("#btnCountDept").addEventListener("click", () => {
  const map = new Map();
  employees.forEach((e) => map.set(e.department, (map.get(e.department) ?? 0) + 1));

  clearResults();
  const rows = [...map.entries()]
    .map(([dept, count], i) => `<tr><td>${i + 1}</td><td>${dept}</td><td>${count}</td></tr>`)
    .join("");

  results.innerHTML = `
    <div class="table-wrap">
      <table>
        <thead><tr><th>#</th><th>Department</th><th>Count</th></tr></thead>
        <tbody>${rows || `<tr><td colspan="3">No data.</td></tr>`}</tbody>
      </table>
    </div>
  `;

  renderSummary([`Total Departments: ${map.size}`, `Total Employees: ${employees.length}`]);
  setStatus("Calculated count by department.");
});

$("#btnClear").addEventListener("click", () => {
  if (!employees.length) return setStatus("No data to clear.");
  if (confirm("This will delete all saved employees. Continue?")) {
    employees = [];
    saveEmployees();
    clearResults();
    setStatus("All employee data cleared.");
  }
});

if (employees.length) {
  renderEmployees(employees, "All Employees");
  setStatus(`Loaded ${employees.length} saved employee(s).`);
} else {
  setStatus("Add employees to get started.");
}