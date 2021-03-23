# AWS SNS Integration utilzing NestJS Javscript Framework

## Setup

### Dependency Installation

```bash
npm install
```

### Environmental Setup

#### Properties (.env)

- Below are some example values for the Local environment file `.env.local`
- `AWS_REGION` the location of your VPC
- Anything starting `SNS*` are values that the AWS SDK outline
- `DEV_ADDR` is only used when attempting to configure the SNS and points the AWS Service to the System being developed. This won't work for localhost for the public AWS without some port forwarding and DNS exposure to the internet.
- `SVC_PORT` is the port that this application will listen on
- `NODE_ENV` sets the node environment to something. If not set to `development` there are logic blocks that will no engage.

```properties
AWS_REGION=us-east-1
SNS_CONNECT_TIMEOUT=50000
SNS_TIMEOUT=120000
SNS_MAX_RETRIES=2
SNS_API_VERSION=2010-03-31
DEV_ADDR=locahost
SVC_PORT=3000
NODE_ENV=development
```

#### Credentials

- The AWS SDK will be looking for credentials. These can be set at a system level of .aws/credentials in the user folder, configured by an Environment variable or can be pointed at via the code
  - Code File configuration needs to be done in `src/aws/sns-provider/SnsProviderService`

```credentials
[sns_profile]
aws_access_key_id = 123
aws_secret_access_key = 1@3%$
region = us-west-1
```

## Developing

### Lessons Learned

- In order to properly handle SNS Notifications, the NestJS server needs to be able to parse `text/plain` MIME types into objects. This is accomplished by setting up an `app.use(text())` from the `body-parser` module

### sns-listener

- Contains all of the required components to receive and subscribe to the SNS Topic

#### handlers

- Generic Notification Handler Factory
- Confirmation Request Handler which will deal with the SNS Subscription confirm request and confirm
- Notification Request Handler which will deal with all other types of SNS Topic Notifications received.
  - Plans to expand this into specific message types based on the API contract of the messages

### sns-provider

- WIP: Contains all of the required components to transmit SNS Messages to a Topic

### sns-publisher

- Contains the core SNS service producer that allows authentication and instantiation of the local SNS reference. Limited to a single SNS instance.
  - Expected to be expanded to include a topic ID to instance map eventually

## Running the app

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
