let blogs = [];

// let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember'];

function addBlog(event) {
  event.preventDefault();

  let projectName = document.getElementById('input-blog-project').value;
  let startDate = document.getElementById('input-start-date').value;
  let endDate = document.getElementById('input-end-date').value;
  let description = document.getElementById('input-blog-description').value;
  let skillNodeJs = document.getElementById('nodejs').checked;
  let skillReactJs = document.getElementById('reactjs').checked;
  let skillNextJs = document.getElementById('nextjs').checked;
  let skillTypeScript = document.getElementById('typescript').checked;

  //kondisi checkbox untuk mengambil valuenya
  //jika dicekslit akan menampilkan value
  if (skillNodeJs) {
    skillNodeJs = document.getElementById('nodejs').value;
  } else {
    //==> jika tidak dichecklist akan menampilkan string kosong
    skillNodeJs = '';
  }

  if (skillReactJs) {
    skillReactJs = document.getElementById('reactjs').value;
  } else {
    skillReactJs = '';
  }

  if (skillNextJs) {
    skillNextJs = document.getElementById('nextjs').value;
  } else {
    skillNextJs = '';
  }

  if (skillTypeScript) {
    skillTypeScript = document.getElementById('typescript').value;
  } else {
    skillTypeScript = '';
  }

  let image = document.getElementById('input-blog-image');

  image = URL.createObjectURL(image.files[0]);

  let differenceTime = new Date(endDate) - new Date(startDate);
  let differenceDay = Math.floor(differenceTime / (1000 * 3600 * 23));
  let differenceMonth = Math.floor(differenceDay / 30);

  let blog = {
    differenceTime,
    differenceDay,
    differenceMonth,
    projectName,
    startDate,
    endDate,
    description,
    skillNodeJs,
    skillReactJs,
    skillNextJs,
    skillTypeScript,
    image,
    postedAt: new Date(),
  };

  blogs.push(blog);

  renderBlog();
}

function renderBlog() {
  let blogContainer = document.getElementById('contents-blogs');

  blogContainer.innerHTML = firstBlogContent();

  for (let i = 0; i < blogs.length; i++) {
    blogContainer.innerHTML += `
    <div class="blog-list-item">
    <div class="blog-image">
      <img src="${blogs[i].image}" alt="" />
    </div>
    <div class="blog-content">
      <h3>
        <a href="blog-project-detail.html" target="_blank">${blogs[i].projectName}</a>
      </h3>
      <div class="detail-blog-content">durasi : ${blogs[i].differenceMonth} bulan</div>
      <p>
      ${blogs[i].description}
      </p>
      <div style="margin-top: 15px;">
        <img style="margin-right: 10px;" src="${blogs[i].skillNodeJs}"/>
        <img style="margin-right: 10px;" src="${blogs[i].skillReactJs}"/>
        <img style="margin-right: 10px; width: 30px;" src="${blogs[i].skillNextJs}"/>
        <img src="${blogs[i].skillTypeScript}"/>
      </div>
      <div class="btn-group">
        <a href="#" class="btn-edit">edit</a>
        <a href="#" class="btn-post">delete</a>
      </div>
    </div>
  </div>`;
  }

  function firstBlogContent() {
    return `<div class="blog-list-item">
    <div class="blog-image">
      <img src="assets/blog-img.png" alt="" />
    </div>
    <div class="blog-content">
      <h3>
        <a href="blog-project-detail.html" target="_blank">Dumbways Mobile App - 2021</a>
      </h3>
      <div class="detail-blog-content">durasi : 3 bulan</div>
      <p>
        App that used for dumbways student, it was deployed and can download on playstore.<br>Happy download.
      </p>
      <div style="margin-top: 15px;">
        <img style="margin-right: 10px;" src="https://img.icons8.com/ios-glyphs/30/000000/google-play.png"/>
        <img style="margin-right: 10px;" src="https://img.icons8.com/material-sharp/30/000000/android-os.png"/>
        <img src="https://img.icons8.com/ios-glyphs/30/000000/java-coffee-cup-logo.png"/>
      </div>
      <div class="btn-group">
        <a href="#" class="btn-edit">edit</a>
        <a href="#" class="btn-post">delete</a>
      </div>
    </div>
  </div>`;
  }
}
