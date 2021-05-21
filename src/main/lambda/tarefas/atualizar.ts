export async function handler(event:any, context:any, callback:any) {
    console.log("Testado com sucesso");
  
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Go Serverless v1.0! Your function executed successfully'
      }),
    };

    return response;
  }