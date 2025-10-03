// Lambda que processa evento do S3, lê arquivo e gera metadados
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
  console.log('Event received:', JSON.stringify(event));
  try {
    for (const record of event.Records || []) {
      const bucket = record.s3.bucket.name;
      const key = decodeURIComponent(record.s3.object.key.replace(/\+/g, ' '));
      console.log(`Processing object ${key} from bucket ${bucket}`);

      // Ler objeto
      const getResp = await s3.getObject({ Bucket: bucket, Key: key }).promise();

      // Criar metadados
      const metadata = {
        originalKey: key,
        size: getResp.ContentLength,
        processedAt: new Date().toISOString(),
      };

      const metaKey = key + '.metadata.json';
      await s3.putObject({
        Bucket: bucket,
        Key: metaKey,
        Body: JSON.stringify(metadata, null, 2),
        ContentType: 'application/json',
      }).promise();

      console.log(`Wrote metadata to ${metaKey}`);
    }

    return { statusCode: 200, body: 'OK' };
  } catch (err) {
    console.error('Error processing S3 event', err);
    throw err;
  }
};
