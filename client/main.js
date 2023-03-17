const instance = axios.create({
    baseURL: "http://localhost:8082/api",
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  function htmlizeResponse(res) {
    return `<div class="alert alert-secondary mt-2" role="alert"><pre>` + JSON.stringify(res, null, 2) + "</pre></div>";
  }
  
  async function getAllData() {
    let resultElement = document.getElementById("getResult");
    resultElement.innerHTML = "";
  
    try {
      const res = await instance.get("/waitlistees");
  
      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };
  
      resultElement.innerHTML = htmlizeResponse(result);
    } catch (err) {
      resultElement.innerHTML = htmlizeResponse(err);
    }
  }
  
  async function getDataById() {
    let resultElement = document.getElementById("getResult");
    resultElement.innerHTML = "";
  
    const id = document.getElementById("get-id").value;
  
    if (id) {
      try {
        const res = await instance.get(`/waitlistees/${id}`);
  
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
  
        resultElement.innerHTML = htmlizeResponse(result);
      } catch (err) {
        resultElement.innerHTML = htmlizeResponse(err);
      }
    }
  }
  
  async function getDataByTitle() {
    let resultElement = document.getElementById("getResult");
    resultElement.innerHTML = "";
  
    const name = document.getElementById("get-name").value;
  
    if (name) {
      try {
        // const res = await instance.get(`/tutorials?title=${title}`);
        const res = await instance.get("/waitlistees", {
          params: {
            name: name
          }
        });
  
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
  
        resultElement.innerHTML = htmlizeResponse(result);
      } catch (err) {
        resultElement.innerHTML = htmlizeResponse(err);
      }
    }
  }
  
  async function postData() {
    let resultElement = document.getElementById("postResult");
    resultElement.innerHTML = "";
  
    // const title = document.getElementById("post-title").value;
    // const description = document.getElementById("post-description").value;

    const name = document.getElementById("post-name").value;
    const email = document.getElementById("post-email").value;
    const tag = document.getElementById("post-tag").value;
  
    try {
      const res = await instance.post("/waitlistees", {
        name: name,
        email: email,
        tag: tag
      });
  
      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };
  
      resultElement.innerHTML = htmlizeResponse(result);
    } catch (err) {
      resultElement.innerHTML = htmlizeResponse(err);
    }
  }
  
  async function putData() {
    let resultElement = document.getElementById("putResult");
    resultElement.innerHTML = "";
  
    const id = document.getElementById("put-id").value;
    const name = document.getElementById("put-name").value;
    const email = document.getElementById("put-email").value;

    const tag = document.getElementById("put-tag").value;
    // const published = document.getElementById("put-published").checked;
  
    try {
      const res = await instance.put(`/waitlistees/${id}`, {
        name: name,
        email: email,
        tag: tag
      });
  
      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };
  
      resultElement.innerHTML = htmlizeResponse(result);
    } catch (err) {
      resultElement.innerHTML = htmlizeResponse(err);
    }
  }
  
  async function deleteAllData() {
    let resultElement = document.getElementById("deleteResult");
    resultElement.innerHTML = "";
  
    try {
      const res = await instance.delete("/waitlistees");
  
      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };
  
      resultElement.innerHTML = htmlizeResponse(result);
    } catch (err) {
      resultElement.innerHTML = htmlizeResponse(err);
    }
  }
  
  async function deleteDataById() {
    let resultElement = document.getElementById("deleteResult");
    resultElement.innerHTML = "";
  
    const id = document.getElementById("delete-id").value;
  
    try {
      const res = await instance.delete(`/waitlistees/${id}`);
  
      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };
  
      resultElement.innerHTML = htmlizeResponse(result);
    } catch (err) {
      resultElement.innerHTML = htmlizeResponse(err);
    }
  }
  
  function clearGetOutput() {
    document.getElementById("getResult").innerHTML = "";
  }
  
  function clearPostOutput() {
    document.getElementById("postResult").innerHTML = "";
  }
  
  function clearPutOutput() {
    document.getElementById("putResult").innerHTML = "";
  }
  
  function clearDeleteOutput() {
    document.getElementById("deleteResult").innerHTML = "";
  }