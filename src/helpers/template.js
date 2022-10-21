/* eslint-disable max-len */

const styles = `
<style>
    html,
    body {
    font-family: "poppins", sans-serif;
    color: #003232;
    }
    header {
        padding: 8% 0;
    }
    #header-image {
        display:block;
        max-width: 300px;
        width: 55%;
        margin: auto;
    }
    #thanks-image {
        display:block;
        width: 100%;
        margin: auto;
    }
        
    main {
        background-color: white;
        width: 90%;
        margin:auto;
        border-radius: 2%;
        padding: 2% 6%;
    }
    h2 {
        font-size: 2.2em;
        letter-spacing: 0.1em;
    }
    #welcome-image {
        width: 100%;
    }
    p {
        font-size: 1.2em;
    }
    .code {
        font-weight: 600;
        font-size: 1.8em;
        letter-spacing: 0.1em;
        margin-top:2em;
    }
</style>
`;

const header = `
<head>
    <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200&display=swap"
    rel="stylesheet"
    />
    <title>Wait List </title>
    ${styles}
</head>
`;

export const WaitListMail = () => `
<html>
${header}
<body>
<header>
     <img id="header-image" src="http://cdn.mcauto-images-production.sendgrid.net/fb566858f49e1346/23c77b75-e0ea-4769-a0a6-c30b3aebf8c2/1193x1193.JPG" />
</header>
   
<main>
    <p><strong>Thank you for joining our wait list!</strong></p>
    <br/>
    <p>We are glad to have you with us as we embark this journey to be the foremost provider of service worldwide.</p>

    <p>We will keep you updated on our progress. As a result of signing up on our wait list, you'll have an opportunity to be a early user when we launch and receive a one-time 10% discount on your first print.</p>
    <br />
  <p>Thank you,
  <br/>
  Node Clean Team
  </p>

  <div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" style="color:#444444; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:Center;" data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5">
  </div>
  </main>
</body>
</html>

`;

const list = (print) => `<li>
         <div>
           <p>Service: ${print.name} </p>
           <p>Image Attached: ${print.image}</p>
           <p>Size: ${print.size}</p>
           <p>Type: ${print.type}</p>
           <p>Quantity : ${print.quantity}</p>
         </div>
       </li>`;

export const orderMail = ({ prints, delivery_details: { name, country, state, city, address } }) => `
<html>
${header}
<body>
<header>
     <img id="header-image" src="http://cdn.mcauto-images-production.sendgrid.net/fb566858f49e1346/23c77b75-e0ea-4769-a0a6-c30b3aebf8c2/1193x1193.JPG" />
</header>
   
<main>
    <h4 style="text-decoration: underline">Order Details</h4>
    <ul>
     ${prints.map((print) => list(print))}
    </ul>

    <h4 style="text-decoration: underline">Delivery Details</h4>
    <p>Name: ${name}</p>
    <p>Country: ${country}</p>
    <p>State/Province: ${state}</p>
    <p>City: ${city}</p>
    <p>Address: ${address}</p>
    <br />
  <p>Thank you,
  <br/>
  Node Clean Team
  </p>

  <div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" style="color:#444444; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:Center;" data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5">
  </div>
  </main>
</body>
</html>

`;
