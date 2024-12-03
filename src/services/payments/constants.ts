export const STRIPE_CONFIG = {
  // PUBLIC_KEY: 'pk_live_51QReI8CkS8uFBvgAzWsHXXc0NQOY0E9dGLOs0vkcB3BWDNKf4HiB76Xa5axws6sNvkiixtoiSRQyOYaZ3nBiQPh900beTLLflw',
  PUBLIC_KEY: 'pk_test_51QReI8CkS8uFBvgAdt5xamaSXCSKAlaOqOIC0r9xiqSwu4WTY73fEONhP48oifnUefdfd5ZHzAH0MajNFmQhskev009lLocI85',
  // PAYMENT_LINK: 'https://buy.stripe.com/eVaaIB6OP0WFdigaEE',
  PAYMENT_LINK: 'https://buy.stripe.com/test_28o4gLfwt690czSaEE',
  SUCCESS_PATH: '/chat',
  PENDING_KEY: 'payment_pending',
  SUCCESS_KEY: 'payment_success',
  CHECK_INTERVAL: 1000, // 1 second
  MAX_CHECK_DURATION: 300000, // 5 minutes
};
