## Documentasi Test Vue.js

### B. API GET

- **Make simple app, and Binding these Api data**

```js
import axios from "axios";

async function getData() {
  const apiUrl =
    "https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth";

  try {
    const response = await axios.get(apiUrl);
    if (!response) {
      throw { name: "CustomError", message: "Response is empty" };
    } else {
      console.log(response.data);
    }
  } catch (error) {
    console.error(error.name, error.message);
  }
}

getData();
```

- **Respon 200k**

```js
[
  {
    id: 1,
    title: 'Marketing Planner',
    createdBy: 'Hawaii benchmark',
    createdDate: '2022-05-17T13:45:07Z',
    lastModifiedBy: 'admin',
    lastModifiedDate: '2022-05-25T04:14:26.779011Z',
    seq: 1,
    isActive: false,
    description: {
      id: 1001,
      txt: '<h5><strong>Job Description :</strong></h5><ul><li>Monitor competition to identify new industry trends and opportunities for innovation</li><li>Develop marketing strategies based on customer preferences, business objectives, and available resources</li><li>Conduct market research to identify potential customers and assess their needs, interests, and preferences</li><li>Work with design teams to develop marketing materials such as brochures, ads, and presentations</li><li>Create an advertising budget that reflects the company’s priorities while remaining within the parameters set by upper management</li><li>Develop an effective communications strategy for each campaign using several different channels, including social media, email, push notification, print ads</li><li>Create a detailed timeline of all marketing activities, including production schedules, deadlines for materials delivery, and event dates and locations</li><li>Provide feedback to superiors regarding the effectiveness of new campaigns and recommend adjustments</li></ul><h5><strong>Skill :</strong></h5><ul><li>Minimum bachelor degree in Marketing Management;</li><li>Minimum 3-5 years experience as Marketing Manager/Director in any marketplace industry;</li><li>Good time management and project management skill;</li><li>Creative communication skill in both verbal and design</li><li>Multi-language abilities in verbal and non-verbal</li></ul>'
    },
    ptJobSkills: [ [Object], [Object], [Object], [Object], [Object] ],
    ptJobApplies: null
  },
  {
    id: 2,
    title: 'UI/UX Content Writer',
    createdBy: 'orchestration protocol virtual',
    createdDate: '2022-05-18T03:56:14Z',
    lastModifiedBy: 'admin',
    lastModifiedDate: '2022-05-25T04:14:46.641821Z',
    seq: 2,
    isActive: false,
    description: {
      id: 1151,
      txt: '<h5><strong>Job Description :</strong></h5><ul><li>Conduct competitive analyses of other websites that operate in the same space</li><li>Prepare customer analysis bs
ed on target demographics and initial transactions</li><li>Participate in creating a content development strategy</li><li>Coordinate with the UI design team on issues like navigation, page routing, product page design, etc.</li><li>Track usability goals and prepare reports for senior management</li><li>Develop mockups for the development and design teams</li><li>Conduct usability tests on each independent type of page on the website and create a report showcasing the findings</li></ul><h5><strong>Skill :</strong></h5><ul><li>Excellent writing and editing skills</li><li>Experience writing content for web/mobile products&nbsp;</li><li>Experience writing emails, landing pages, or editorial content</li><li>Proven ability to collaborate successfully with cross-­functional partners</li><li>Experience writing for social impact products or audiences is a plus</li><li>Solid understanding of email marketing and social channels are a plus</li><li>Multi-language abilities in verbal and non-verbal</li></ul>'
    },
    ptJobSkills: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ],
    ptJobApplies: null
  },
  {
    id: 1451,
    title: 'UI/UX Content Planner',
    createdBy: null,
    createdDate: '1970-01-01T00:00:00Z',
    lastModifiedBy: 'admin',
    lastModifiedDate: '2022-05-25T04:27:54.734139Z',
    seq: 3,
    isActive: false,
    description: {
      id: 1501,
      txt: "<h5><strong>Job Description :</strong></h5><ul><li>Performing exhaustive research to gain in-depth knowledge of all customer personas</li><li>Performing extensive research and analysis on consumer thoughts and trends</li><li>Creating specifications and content appropriate for the brand's customer personas</li><li>Strategizing content pillars
and sub pillars</li><li>Planning the editorial calendar and content proposition</li><li>Collaborating with content management teams, creative teams, and writers to implement the
strategy</li><li>Overseeing writing style and tone for all content</li><li>Developing content governance guidelines for tone, style, and voice of all content, and ensuring they are followed</li><li>Developing editorial strategy, so content is consistent across all e
livery platforms</li><li>Conducting periodic content audits</li><li>Tracking and calculating content ROI</li><li>Ensuring that content strategy meets business objectives</li><li>Strategizing and improving content delivery and promotion</li><li>Analyzing content marketing strategy to evaluate whether it's working or not.</li></ul><h5><strong>Skill :</strong></h5><ul><li>Excellent&nbsp;copywriting skills&nbsp;</li><li>Content presentation skills&nbsp;</li><li>Content delivery skills&nbsp;</li><li>Have experience in handling and strategizing marketing campaigns</li><li>Content monetization skills&nbsp;</li><li>Multitasking and organizational skills</li><li>Editorial competency Good analytical abilities to
spot patterns and trends in content marketing data</li></ul>"
    },
    ptJobSkills: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ],
    ptJobApplies: null
  },
  {
    id: 1452,
    title: 'UI/UX Designer',
    createdBy: null,
    createdDate: '1970-01-01T00:00:00Z',
    lastModifiedBy: 'admin',
    lastModifiedDate: '2022-05-25T04:15:22.711260Z',
    seq: 4,
    isActive: false,
    description: {
      id: 1502,
      txt: '<h5><strong>Job Description :</strong></h5><ul><li>Gather and evaluate user requirements in collaboration with product managers and engineers</li><li>Illustrate design ideas using storyboards, process flows and sitemaps</li><li>Design graphic user interface elements, like menus, tabs and widgets</li><li>Build page navigation buttons and search fields</li><li>Develop UI mockups and prototypes that clearly illustrate how sites function and look like</li><li>Create original graphic designs (e.g. images, sketches and tables)</li><li>Prepare and present rough drafts to internal teams and key stakeholders</li><li>Identify and troubleshoot UX problems (e.g. responsiveness)</li><li>Conduct layout adjustments based on user feedback</li><li>Adhere to style standards on fonts, colors and images</li></ul><h5><strong>Skill :</strong></h5><ul><li>Proven work experience as a UI/UX Designer or similar role</li><li>Portfolio of design projects</li><li>Knowledge of wireframe tools&nbsp;</li><li>Up-to-date knowledge of design software&nbsp;</li><li>Team spirit; strong communication skills to collaborate with various stakeholders</li><li>Good time-management skills</li></ul>'
    },
    ptJobSkills: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
    ptJobApplies: null
  },
  {
    id: 1453,
    title: 'HR/Legal Manager',
    createdBy: null,
    createdDate: '1970-01-01T00:00:00Z',
    lastModifiedBy: 'admin',
    lastModifiedDate: '2022-05-25T04:16:04.202788Z',
    seq: 5,
    isActive: false,
    description: {
      id: 1503,
      txt: "<h5><strong>Job Description :</strong></h5><ul><li>Dealing with complaints and discipline procedures</li><li>assisting in the recruitment of new employees</li><li>working with other managers, improving employees' experiences of the workplace</li><li>keeping employee records</li><li>helping people get training and development</li><li>making sure employees have the right pay and benefits</li><li>arranging employee services such as
welfare and counselling</li><li>promoting equality, and health and safety</li><li>advising on matters like pay negotiations, redundancy and employment law</li><li>developing HR policies and procedures</li><li>recording and analysing confidential information</li><li>writing employee handbooks</li><li>dealing with staff at all levels</li><li>reviewing all
legal and rights to serve company and employees</li><li>representing company to all external-legal needs</li><li>create and review all needed legal documents&nbsp;</li></ul><h5><strong>Skill :</strong></h5><ul><li>Minimum bachelor degree in HR and Legal Management;</li><li>Minimum 3-5 years experience in HR/Legal in any industry (preferably in e-commerce industry)</li><li>Knowledge of HR functions (pay &amp; benefits, recruitment, training&
amp; development, etc)</li><li>Understanding of labor laws and disciplinary procedures</li><li>Outstanding organizational and time-management abilities</li><li>Excellent communc
ation and interpersonal skills</li><li>&nbsp;Problem-solving and decision-making aptitue
</li><li>&nbsp;Strong ethics and reliability</li></ul>"
    },
    ptJobSkills: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    ptJobApplies: null
  },
  {
    id: 3101,
    title: 'Java Spring Boot ',
    createdBy: 'isbandi@bti.id',
    createdDate: '2022-07-25T13:23:31.116Z',
    lastModifiedBy: 'isbandi@bti.id',
    lastModifiedDate: '2022-07-25T15:03:13.989234Z',
    seq: 6,
    isActive: false,
    description: {
      id: 3151,
      txt: '<h5><strong>Job Description :</strong></h5><ul><li>Have a good understanding
in backend app and REST API server development,</li><li>Have a good knowledge in Java Spring Boot, and MVC concept,</li><li>Good understanding in java web application deployment
and configuration,</li><li>Good understanding in database query, experience in schema design, query optimization is a great plus,</li><li>Have an experience in infrastructure like AWS or Azure and Docker or Kubernetes is a plus.</li></ul><h5><strong>Skill :</strong></h5><ul><li>Bash Shell</li><li>Java</li><li>Spring Boot</li><li>Java Spring Boot</li><li>Kubernetes &amp; Docker</li></ul>'
    },
    ptJobSkills: [ [Object], [Object], [Object], [Object], [Object] ],


Microbot@DESKTOP-J2F61B4 MINGW64 /d/vue-projek-test/src
$ node api.js
[
  {
    id: 1,
    title: 'Marketing Planner',
    createdBy: 'Hawaii benchmark',
    createdDate: '2022-05-17T13:45:07Z',
    lastModifiedBy: 'admin',
    lastModifiedDate: '2022-05-25T04:14:26.779011Z',
    seq: 1,
    isActive: false,
    description: {
      id: 1001,
      txt: '<h5><strong>Job Description :</strong></h5><ul><li>Monitor competition to identify new industry trends and opportunities for innovation</li><li>Develop marketing strategies based on customer preferences, business objectives, and available resources</li><li>Conduct market research to identify potential customers and assess their needs, interests, and preferences</li><li>Work with design teams to develop marketing materials such as brochures, ads, and presentations</li><li>Create an advertising budget that reflects the company’s priorities while remaining within the parameters set by upper management</li><li>Develop an effective communications strategy for each campaign using several different channels, including social media, email, push notification, print ads</li><li>Create a detailed timeline of all marketing activities, including production schedules, deadlines for materials delivery, and event dates and locations</li><li>Provide feedback to superiors regarding the effectiveness of new campaigns and recommend adjustments</li></ul><h5><strong>Skill :</strong></h5><ul><li>Minimum bachelor degree in Marketing Management;</li><li>Minimum 3-5 years experience as Marketing Manager/Director in any marketplace industry;</li><li>Good time management and project management skill;</li><li>Creative communication skill in both verbal and design</li><li>Multi-language abilities in verbal and non-verbal</li></ul>'
    },
    ptJobSkills: [ [Object], [Object], [Object], [Object], [Object] ],
    ptJobApplies: null
  },
  {
    id: 2,
    title: 'UI/UX Content Writer',
    createdBy: 'orchestration protocol virtual',
    createdDate: '2022-05-18T03:56:14Z',
    lastModifiedBy: 'admin',
    lastModifiedDate: '2022-05-25T04:14:46.641821Z',
    seq: 2,
    isActive: false,
    description: {
      id: 1151,
      txt: '<h5><strong>Job Description :</strong></h5><ul><li>Conduct competitive analyses of other websites that operate in the same space</li><li>Prepare customer analysis based on target demographics and initial transactions</li><li>Participate in creating a content development strategy</li><li>Coordinate with the UI design team on issues like navigation, page routing, product page design, etc.</li><li>Track usability goals and prepare reports for senior management</li><li>Develop mockups for the development and design teams</li><li>Conduct usability tests on each independent type of page on the website and create a report showcasing the findings</li></ul><h5><strong>Skill :</strong></h5><ul><li>Excellent writing and editing skills</li><li>Experience writing content for web/mobile products&nbsp;</li><li>Experience writing emails, landing pages, or editorial content</li><li>Proven ability to collaborate successfully with cross-­functional partners</li><li>Experience writing for social impact products or audiences is a plus</li><li>Solid understanding of email marketing and social channels are a plus</li><li>Multi-language abilities in verbal and non-verbal</li></ul>'
    },
    ptJobSkills: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ],
    ptJobApplies: null
  },
  {
    id: 1451,
    title: 'UI/UX Content Planner',
    createdBy: null,
    createdDate: '1970-01-01T00:00:00Z',
    lastModifiedBy: 'admin',
    lastModifiedDate: '2022-05-25T04:27:54.734139Z',
    seq: 3,
    isActive: false,
    description: {
      id: 1501,
      txt: "<h5><strong>Job Description :</strong></h5><ul><li>Performing exhaustive research to gain in-depth knowledge of all customer personas</li><li>Performing extensive research and analysis on consumer thoughts and trends</li><li>Creating specifications and content appropriate for the brand's customer personas</li><li>Strategizing content pillars
and sub pillars</li><li>Planning the editorial calendar and content proposition</li><li>Collaborating with content management teams, creative teams, and writers to implement the
strategy</li><li>Overseeing writing style and tone for all content</li><li>Developing content governance guidelines for tone, style, and voice of all content, and ensuring they are followed</li><li>Developing editorial strategy, so content is consistent across all delivery platforms</li><li>Conducting periodic content audits</li><li>Tracking and calculating content ROI</li><li>Ensuring that content strategy meets business objectives</li><li>Strategizing and improving content delivery and promotion</li><li>Analyzing content marketing strategy to evaluate whether it's working or not.</li></ul><h5><strong>Skill :</strong></h5><ul><li>Excellent&nbsp;copywriting skills&nbsp;</li><li>Content presentation skills&nbsp;</li><li>Content delivery skills&nbsp;</li><li>Have experience in handling and strategizing marketing campaigns</li><li>Content monetization skills&nbsp;</li><li>Multits
king and organizational skills</li><li>Editorial competency Good analytical abilities to
spot patterns and trends in content marketing data</li></ul>"
    },
    ptJobSkills: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ],
    ptJobApplies: null
  },
  {
    id: 1452,
    title: 'UI/UX Designer',
    createdBy: null,
    createdDate: '1970-01-01T00:00:00Z',
    lastModifiedBy: 'admin',
    lastModifiedDate: '2022-05-25T04:15:22.711260Z',
    seq: 4,
    isActive: false,
    description: {
      id: 1502,
      txt: '<h5><strong>Job Description :</strong></h5><ul><li>Gather and evaluate user requirements in collaboration with product managers and engineers</li><li>Illustrate design ideas using storyboards, process flows and sitemaps</li><li>Design graphic user interface elements, like menus, tabs and widgets</li><li>Build page navigation buttons and search fields</li><li>Develop UI mockups and prototypes that clearly illustrate how sites fuc
tion and look like</li><li>Create original graphic designs (e.g. images, sketches and tables)</li><li>Prepare and present rough drafts to internal teams and key stakeholders</li><li>Identify and troubleshoot UX problems (e.g. responsiveness)</li><li>Conduct layout adjustments based on user feedback</li><li>Adhere to style standards on fonts, colors and images</li></ul><h5><strong>Skill :</strong></h5><ul><li>Proven work experience as a UI/UX Designer or similar role</li><li>Portfolio of design projects</li><li>Knowledge of wireframe tools&nbsp;</li><li>Up-to-date knowledge of design software&nbsp;</li><li>Team spirit; strong communication skills to collaborate with various stakeholders</li><li>Good time-management skills</li></ul>'
    },
    ptJobSkills: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
    ptJobApplies: null
  },
  {
    id: 1453,
    title: 'HR/Legal Manager',
    createdBy: null,
    createdDate: '1970-01-01T00:00:00Z',
    lastModifiedBy: 'admin',
    lastModifiedDate: '2022-05-25T04:16:04.202788Z',
    seq: 5,
    isActive: false,
    description: {
      id: 1503,
      txt: "<h5><strong>Job Description :</strong></h5><ul><li>Dealing with complaints and discipline procedures</li><li>assisting in the recruitment of new employees</li><li>working with other managers, improving employees' experiences of the workplace</li><li>keeping employee records</li><li>helping people get training and development</li><li>making u
re employees have the right pay and benefits</li><li>arranging employee services such as
welfare and counselling</li><li>promoting equality, and health and safety</li><li>advising on matters like pay negotiations, redundancy and employment law</li><li>developing HR policies and procedures</li><li>recording and analysing confidential information</li><li>writing employee handbooks</li><li>dealing with staff at all levels</li><li>reviewing all
legal and rights to serve company and employees</li><li>representing company to all external-legal needs</li><li>create and review all needed legal documents&nbsp;</li></ul><h5><strong>Skill :</strong></h5><ul><li>Minimum bachelor degree in HR and Legal Management;</li><li>Minimum 3-5 years experience in HR/Legal in any industry (preferably in e-commerce industry)</li><li>Knowledge of HR functions (pay &amp; benefits, recruitment, training &amp; development, etc)</li><li>Understanding of labor laws and disciplinary procedures</li><li>Outstanding organizational and time-management abilities</li><li>Excellent communication and interpersonal skills</li><li>&nbsp;Problem-solving and decision-making aptitude</li><li>&nbsp;Strong ethics and reliability</li></ul>"
    },
    ptJobSkills: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    ptJobApplies: null
  },
  {
    id: 3101,
    title: 'Java Spring Boot ',
    createdBy: 'isbandi@bti.id',
    createdDate: '2022-07-25T13:23:31.116Z',
    lastModifiedBy: 'isbandi@bti.id',
    lastModifiedDate: '2022-07-25T15:03:13.989234Z',
    seq: 6,
    isActive: false,
    description: {
      id: 3151,
      txt: '<h5><strong>Job Description :</strong></h5><ul><li>Have a good understanding
in backend app and REST API server development,</li><li>Have a good knowledge in Java Spring Boot, and MVC concept,</li><li>Good understanding in java web application deployment
and configuration,</li><li>Good understanding in database query, experience in schema design, query optimization is a great plus,</li><li>Have an experience in infrastructure like AWS or Azure and Docker or Kubernetes is a plus.</li></ul><h5><strong>Skill :</strong></h5><ul><li>Bash Shell</li><li>Java</li><li>Spring Boot</li><li>Java Spring Boot</li><li>Kubernetes &amp; Docker</li></ul>'
    },
    ptJobSkills: [ [Object], [Object], [Object], [Object], [Object] ],
    ptJobApplies: null
  }
]
```

### C. SQL TEST

- **Table User**
- **Table Asset**
- **Query User & Asset**

#### Table User

**SQL Table:**

```sql
CREATE DATABASE /*!32312 IF NOT EXISTS*/`sqltest` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `sqltest`;

-- Table structure for table `user`
DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(100) DEFAULT NULL,
  `age` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

INSERT INTO `user`(`id`,`user_id`,`age`) VALUES (1,'wildan','27'),(2,'zaki','25');
```

#### Table Asset

**SQL Table:**

```sql
CREATE DATABASE /*!32312 IF NOT EXISTS*/`sqltest` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `sqltest`;

/*Table structure for table `asset` */

DROP TABLE IF EXISTS `asset`;

CREATE TABLE `asset` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item` varchar(100) DEFAULT NULL,
  `user_id` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `asset` */

insert  into `asset`(`id`,`item`,`user_id`) values (1,'notebook','wildan'),(2,'bag','wildan'),(3,'notebook','zaki'),(4,'bag','zaki'),(5,'mobile phone','zaki');
```

- **Query User & Asset**

```sql
const query1 = `SELECT DISTINCT item FROM asset`

const query2 = `
SELECT
  u.user_id,
  GROUP_CONCAT(a.item) AS asset
FROM USER u
JOIN asset a ON u.user_id = a.user_id
GROUP BY u.user_id;
`
```

### E. ERD TEST

- **No 1**

```js
function generatePattern(n) {
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= n + 1; j++) {
      pattern += j < i ? j : "*";
    }
    console.log(pattern);
  }
}

generatePattern(5);
generatePattern(4);
```

- **Hasil Didapat Angka 5**

```text
******
1*****
12****
123***
1234**
```

- **Hasil Didapat Angka 4**

```text
*****
1****
12***
123**
```

- **No 2**

```js
function findMaxDifference(arr) {
  let maxDifference = 0;
  let minValue = arr[0];

  for (let i = 0; i < arr.length; i++) {
    maxDifference = Math.max(maxDifference, arr[i] - minValue);
    minValue = Math.min(minValue, arr[i]);
  }

  return maxDifference;
}

const harga = [10, 7, 5, 8, 11, 9, 1];
const result = findMaxDifference(harga);
console.log(result);
```

- **Hasil Didapat**

```text
6
```

### F. Jelaskan istilah dibawah dengan bahasa sendiri

```text
1. Cypress:
Cypress adalah sebuah alat pengujian end-to-end (E2E) dan kerangka pengujian fungsional untuk aplikasi web modern. Cypress menyediakan alat untuk mengotomatiskan pengujian, memahami dan berinteraksi dengan aplikasi web seperti pengguna manusia.

2. Kubernetes:
Kubernetes (biasanya disingkat sebagai K8s) adalah platform sumber terbuka untuk mengelola, menyusun, dan mendeploy aplikasi kontainer. Kubernetes memungkinkan orkestrasi otomatis untuk kontainer, memungkinkan aplikasi dijalankan dan skalabilitas di lingkungan produksi.

3. ORM (Object-Relational Mapping):
ORM adalah teknik pemetaan objek terhadap struktur data relasional dalam basis data. Dengan ORM, pemrogram dapat berinteraksi dengan basis data menggunakan objek dan metode pemrograman objek, mengabstraksi detail koneksi basis data.

4. Class:
Dalam pemrograman berorientasi objek, sebuah class adalah cetak biru atau blueprint untuk menciptakan objek. Class mendefinisikan atribut dan metode yang dimiliki oleh objek tersebut. Objek yang dibuat berdasarkan class disebut instance.

5. Function:
Fungsi adalah blok kode yang dirancang untuk melakukan tugas tertentu. Dalam pemrograman, fungsi membantu mengorganisir dan memecah kode menjadi bagian-bagian yang dapat digunakan kembali. Fungsi dapat menerima input, melakukan operasi, dan mengembalikan output.

6. DevOps:
DevOps (penggabungan Development dan Operations) adalah pendekatan metodologi dan praktik yang bertujuan untuk menggabungkan pengembangan perangkat lunak (Development) dan operasi TI (Operations) untuk meningkatkan kolaborasi dan efisiensi di seluruh siklus pengembangan perangkat lunak.

7. Docker:
Docker adalah platform perangkat lunak yang memungkinkan pengembang untuk mengemas dan mendistribusikan aplikasi bersama dengan semua dependensinya ke dalam kontainer. Kontainer Docker dapat dijalankan di berbagai lingkungan tanpa memperhatikan perbedaan lingkungan tersebut.
```

### G. Berikan 3 Architecture Application di era sekarang, tentukan teknologi yang menurut Anda terbaik, dan berikan alasannya?

```text
1. Monolitik Architecture:
    Teknologi Terbaik: Spring Boot (Java), Django (Python), Ruby on Rails (Ruby)

2. Microservices Architecture:
    Teknologi Terbaik: Spring Boot (Java), Node.js (JavaScript/TypeScript), Flask (Python)

3. Serverless Architecture:
    Teknologi Terbaik: AWS Lambda, Azure Functions, Google Cloud Functions
```
