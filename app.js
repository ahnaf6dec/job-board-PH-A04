const jobs = [

  {
  id:1,
  companyName:"Google",
  position:"Frontend Developer",
  location:"Remote",
  type:"Full Time",
  salary:"$5000/month",
  description:"Build modern web applications using React and modern UI frameworks.",
  status:"all"
  },
  
  {
  id:2,
  companyName:"Microsoft",
  position:"Backend Developer",
  location:"USA",
  type:"Full Time",
  salary:"$5500/month",
  description:"Develop scalable backend systems and cloud APIs.",
  status:"all"
  },
  
  {
  id:3,
  companyName:"Amazon",
  position:"Software Engineer",
  location:"Germany",
  type:"Full Time",
  salary:"$6000/month",
  description:"Work on distributed systems and cloud infrastructure.",
  status:"all"
  },
  
  {
  id:4,
  companyName:"Netflix",
  position:"UI Engineer",
  location:"Remote",
  type:"Contract",
  salary:"$4500/month",
  description:"Design high performance UI for streaming platform.",
  status:"all"
  },
  
  {
  id:5,
  companyName:"Meta",
  position:"Mobile Developer",
  location:"USA",
  type:"Full Time",
  salary:"$5800/month",
  description:"Develop high quality mobile apps for millions of users.",
  status:"all"
  },
  
  {
  id:6,
  companyName:"Spotify",
  position:"Frontend Engineer",
  location:"Sweden",
  type:"Full Time",
  salary:"$5200/month",
  description:"Create beautiful music platform user interfaces.",
  status:"all"
  },
  
  {
  id:7,
  companyName:"Airbnb",
  position:"Full Stack Developer",
  location:"Remote",
  type:"Full Time",
  salary:"$5700/month",
  description:"Build scalable travel platform features.",
  status:"all"
  },
  
  {
  id:8,
  companyName:"Tesla",
  position:"Software Developer",
  location:"USA",
  type:"Full Time",
  salary:"$6200/month",
  description:"Develop next generation automotive software.",
  status:"all"
  }
  
  ]
  
  let currentTab = "all"
  
  function renderJobs(){
  
  const container = document.getElementById("jobsContainer")
  const empty = document.getElementById("emptyState")
  
  container.innerHTML=""
  
  const filtered = jobs.filter(job =>
  currentTab==="all" || job.status===currentTab
  )
  
  if(filtered.length===0){
  empty.classList.remove("hidden")
  return
  }
  
  empty.classList.add("hidden")
  
  filtered.forEach(job=>{
  
  const card = `
  
  <div class="card bg-base-200 shadow">
  
  <div class="card-body">
  
  <h2 class="card-title">${job.position}</h2>
  
  <p class="text-sm">${job.companyName}</p>
  
  <p class="text-xs text-gray-500">${job.location} • ${job.type}</p>
  
  <p class="text-sm font-semibold">${job.salary}</p>
  
  <p class="text-xs">${job.description}</p>
  
  <div class="flex gap-2 mt-3">
  
  <button
  class="btn btn-success btn-xs"
  onclick="setStatus(${job.id},'interview')">
  
  Interview
  
  </button>
  
  <button
  class="btn btn-error btn-xs"
  onclick="setStatus(${job.id},'rejected')">
  
  Rejected
  
  </button>
  
  <button
  class="btn btn-outline btn-xs"
  onclick="deleteJob(${job.id})">
  
  Delete
  
  </button>
  
  </div>
  
  </div>
  
  </div>
  
  `
  
  container.innerHTML+=card
  
  })
  
  updateCounts()
  
  }
  
  function setStatus(id,status){
  
  const job = jobs.find(j=>j.id===id)
  
  job.status = status
  
  renderJobs()
  
  }
  
  function deleteJob(id){
  
  const index = jobs.findIndex(j=>j.id===id)
  
  jobs.splice(index,1)
  
  renderJobs()
  
  }
  
  function showTab(tab,btn){
  
  currentTab = tab
  
  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("tab-active"))
  
  btn.classList.add("tab-active")
  
  renderJobs()
  
  }
  
  function updateCounts(){
  
  const interview = jobs.filter(j=>j.status==="interview").length
  const rejected = jobs.filter(j=>j.status==="rejected").length
  
  document.getElementById("interviewCount").innerText = interview
  document.getElementById("rejectedCount").innerText = rejected
  
  document.getElementById("jobCount").innerText =
  jobs.length + " Jobs"
  
  }
  
  renderJobs()
