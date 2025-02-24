// Expense Tracker variables
let totalDeposit = 0;
let totalWithdraw = 0;
let totalBalance = 0;

// Elements
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');
const amountInput = document.getElementById('amount');
const totalDepositEl = document.getElementById('total-deposit');
const totalWithdrawEl = document.getElementById('total-withdraw');
const totalBalanceEl = document.getElementById('total-balance');

// Deposit functionality
depositBtn.addEventListener('click', () => {
  let amount = parseFloat(amountInput.value);
  if (isNaN(amount) || amount <= 0) {
    alert("Amount must be positive");
    return;
  }
  totalDeposit += amount;
  totalBalance += amount;
  totalDepositEl.textContent = totalDeposit.toFixed(2);
  totalBalanceEl.textContent = totalBalance.toFixed(2);
  amountInput.value = '';
});

// Withdraw functionality
withdrawBtn.addEventListener('click', () => {
  let amount = parseFloat(amountInput.value);
  if (isNaN(amount) || amount <= 0) {
    alert("Amount must be positive");
    return;
  }
  if (amount > totalBalance) {
    alert("Sorry insufficient balance , check your balance");
    return;
  }
  totalWithdraw += amount;
  totalBalance -= amount;
  totalWithdrawEl.textContent = totalWithdraw.toFixed(2);
  totalBalanceEl.textContent = totalBalance.toFixed(2);
  amountInput.value = '';
});

// Assignment Modal logic
const submitAssignmentBtn = document.getElementById('submit-assignment-btn');
const assignmentModal = document.getElementById('assignment-modal');
const closeModal = document.getElementById('close-modal');
const submitAssignmentModalBtn = document.getElementById('submit-assignment-modal-btn');
const repoLinkInput = document.getElementById('repo-link');
const liveLinkInput = document.getElementById('live-link');

submitAssignmentBtn.addEventListener('click', () => {
  assignmentModal.style.display = "block";
});

closeModal.addEventListener('click', () => {
  assignmentModal.style.display = "none";
});

window.addEventListener('click', (event) => {
  if (event.target == assignmentModal) {
    assignmentModal.style.display = "none";
  }
});

submitAssignmentModalBtn.addEventListener('click', () => {
  const repoLink = repoLinkInput.value.trim();
  const liveLink = liveLinkInput.value.trim();
  if (repoLink === "" || liveLink === "") {
    alert("Please provide both links");
    return;
  }
  
  alert("Assignment Submitted Successfully!");
  repoLinkInput.value = "";
  liveLinkInput.value = "";
  assignmentModal.style.display = "none";
});
