
async function getData() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");    
    return resp.json();
}

const Learndatafetching = async() => {
    let data = await getData();
    // const filteredData = data.filter((item) => {
    //    return  item.id < 10
    // });

    // console.log("filter data", filteredData);

    // console.log("data", data);

  return (
      <div>Learn data fetching
          
          {
              data.map((post, id) => (
                  
                  <div> 
                  <h1 key={id}>
                        {post.title}
                  </h1>
                  <h1>
                     {post.body}             
                      </h1>
                      <hr  style={{marginBottom:"20px",marginTop:"10px"}}/>
                  </div>
              
              ))
          }
    </div>
  )
}

export default Learndatafetching;