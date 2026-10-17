# Privacy Policy for Calorify

Last Updated: October 17, 2026

## Introduction

Calorify ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App"). Please read this privacy policy carefully.

## Information We Collect

### Information You Provide to Us

#### Account Information

- **Email address**: Used for account creation and authentication
- **Name**: Used for personalization and display purposes
- **Profile information**: Date of birth, sex (optional), height, weight and activity level for personalized calorie calculations

#### Health and Fitness Data

- **Nutrition data**: Food logs, calorie intake, macronutrient information
- **Health metrics**: Weight changes, BMI calculations (with your explicit consent via HealthKit)
- **Fitness data**: Activity levels, calorie burn estimates (with your explicit consent via HealthKit)

#### User-Generated Content

- **Food photos**: Images of meals, sent to our servers and to OpenAI for AI-powered nutrition analysis
- **Voice recordings**: Temporary audio for voice-to-text meal logging, transcribed via OpenAI and not stored by us
- **Meal descriptions**: Text entries about your food consumption

### Information Collected Automatically

#### Usage Data

- **App interactions**: Features used, buttons clicked, screens viewed
- **Session information**: App launch times, usage duration
- **Performance data**: Crash reports, error logs (anonymized)

#### Device Information

- **Device type**: iPhone/iPad model for app optimization
- **Operating system**: iOS version for compatibility
- **App version**: For support and update purposes

## How We Use Your Information

### Primary Purposes

- **Provide Core Functionality**: Calculate calories, track nutrition, analyze food
- **Personalization**: Customize calorie goals, meal recommendations
- **Account Management**: Authentication, profile management, data sync
- **Health Insights**: Generate nutrition reports, track progress

### Secondary Purposes

- **App Improvement**: Fix bugs, optimize performance, develop new features
- **Customer Support**: Respond to inquiries, provide assistance
- **Safety and Security**: Detect fraud, enforce terms of service

## Data Storage and Security

### Where We Store Data

- **Primary Storage**: Supabase cloud infrastructure (encrypted at rest)
- **Local Storage**: iOS Keychain for sensitive authentication tokens
- **Temporary Storage**: Device cache for offline functionality

### Security Measures

- **Encryption**: All data transmitted using TLS 1.3 or higher
- **Authentication**: Secure token-based authentication via Supabase Auth
- **Access Controls**: Row-level security policies on all database tables
- **Regular Updates**: Security patches applied promptly

## Data Sharing and Disclosure

### We DO NOT:

- Sell your personal information
- Share your health or nutrition data with advertisers
- Use your health data for marketing

### Advertising Attribution:

With your consent (via App Tracking Transparency), we share limited device identifiers and app events (such as app installs and launches, onboarding steps, in-app purchases and free-trial starts) with Meta for advertising measurement purposes. Purchase and free-trial events are logged automatically by the Meta SDK. We never share your food logs, health data, or nutrition information with advertisers. See the [Third-Party Services](#third-party) section for full details. If you installed Calorify from an Apple Ads ad, we also receive campaign-level attribution for that install from Apple, without any advertising identifier; see [Apple Ads Attribution](#apple-ads-attribution).

### We MAY Share Data:

- **With Your Consent**: When you explicitly authorize sharing
- **Service Providers**: Supabase for backend services (under strict data processing agreements)
- **Legal Requirements**: If required by law or valid legal process
- **Safety**: To protect rights, property, or safety of users

## Third-Party Services

### Supabase

We use Supabase for:

- Authentication services
- Database storage
- Data synchronization across your devices

Supabase's privacy policy: [https://supabase.com/privacy](https://supabase.com/privacy)

### OpenAI

Food photos, meal descriptions and voice recordings you choose to analyze are sent from our servers to OpenAI to estimate foods and nutrition values. When you generate insights in Reports, a summary of your logged days for the selected period (daily averages, meal times, the names of your most-logged foods, water intake and your goals) is sent to OpenAI to write them. This analysis runs only when you use these features. OpenAI processes this content to return the result to you; under its API terms it is not used to train OpenAI's models.

OpenAI's privacy policy: [https://openai.com/policies/privacy-policy](https://openai.com/policies/privacy-policy)

### Resend

We use Resend to send transactional emails such as password reset and verification codes. Resend receives your email address and the content of these emails.

Resend's privacy policy: [https://resend.com/legal/privacy-policy](https://resend.com/legal/privacy-policy)

### Apple Ads Attribution

Once after you sign in, the app asks Apple's AdServices framework for an attribution token and sends it to our servers. Our servers exchange the token with Apple for campaign-level information about your install: whether it came from an Apple Ads ad on the App Store and, if it did, the ad's campaign, ad group, keyword, country or region, and the date of the ad interaction. If the install didn't come from an ad, we only store that answer. We store this with your account to measure which campaigns bring people who keep using the app. It contains no advertising identifier (IDFA), and Apple does not treat it as tracking, so no App Tracking Transparency permission is needed. We don't share it with anyone else, and it is deleted with your account.

Apple's privacy policy: [https://www.apple.com/legal/privacy/](https://www.apple.com/legal/privacy/)

### Meta/Facebook SDK & SKAdNetwork

We use Meta's SDK and Apple's SKAdNetwork framework to measure the effectiveness of our advertising campaigns. SKAdNetwork is Apple's privacy-preserving attribution system that reports aggregate install data without exposing individual user information. This includes:

#### Data Collected:

- App installs and launches, logged automatically by the Meta SDK
- Onboarding progress events (event names only; never your goals or other health data)
- In-app purchase and free-trial events, logged automatically by the Meta SDK (automatic App Events), including the product and its price
- Device identifiers (IDFA when authorized via App Tracking Transparency)

#### Purpose:

- Advertising campaign optimization
- Analytics and performance measurement
- Fraud prevention
- Product improvement

#### Data Sharing:

This data is shared with Meta (Facebook, Instagram) for advertising attribution and campaign optimization.

#### User Control:

You can control tracking permissions through:

- iOS Settings → Privacy & Security → Tracking
- Grant or deny permission when prompted by the app

**More Information:**

- Meta Privacy Policy: [https://www.facebook.com/privacy/policy/](https://www.facebook.com/privacy/policy/)
- Facebook Business Tools: [https://www.facebook.com/business/tools](https://www.facebook.com/business/tools)

### Apple Services

- **HealthKit**: Optional integration for health data (you control what data is shared)
- **StoreKit**: For premium subscription processing (Apple handles payment data)

## Your Rights and Choices

### Data Control

- **Access**: View all your data within the app
- **Export**: Request a copy of your data by email (see Contact Us)
- **Deletion**: Delete your account and all associated data
- **Correction**: Update incorrect information
- **Portability**: Receive your data in a portable format on request

### Privacy Controls

- **Permission Management**: Control camera, microphone, health data access in iOS Settings
- **Data Minimization**: Only provide required information
- **Opt-out of tracking**: Deny or withdraw tracking permission in iOS Settings → Privacy & Security → Tracking

## Data Retention

- **Active Accounts**: Data retained while account is active
- **Deleted Accounts**: Data deleted within 30 days of account deletion
- **Backups**: Backup data deleted within 90 days
- **Free trial abuse prevention**: When a free scan trial is granted, we keep a one-way keyed hash of your sign-in identity (your Apple or Google account identifier, or your verified email address) and the date. It is kept after account deletion, only to prevent the same identity from receiving another free trial, and cannot be used to recover your identity or contact you.
- **Verification email logs**: Records of verification emails sent (with a hashed IP address and no link to your account) are deleted after 30 days
- **Legal Holds**: Data may be retained longer if legally required

## Children's Privacy

Calorify is not intended for children under 13. We do not knowingly collect data from children under 13. If you believe we have collected data from a child, please contact us immediately.

## International Data Transfers

Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.

## California Privacy Rights (CCPA)

California residents have additional rights:

- Right to know what personal information is collected
- Right to know if personal information is sold or disclosed
- Right to opt-out of sale (we do not sell personal information)
- Right to non-discrimination for exercising privacy rights

## European Privacy Rights (GDPR)

EU residents have additional rights:

- Right to be informed about data processing
- Right of access to personal data
- Right to rectification of inaccurate data
- Right to erasure ("right to be forgotten")
- Right to restrict processing
- Right to data portability
- Right to object to processing
- Rights related to automated decision-making

## Changes to This Policy

We may update this Privacy Policy periodically. We will notify you of any material changes via:

- In-app notifications
- Email to your registered address
- Update notice on first app launch

## Contact Us

For privacy-related questions or concerns:

**Email**: lkmcelik@hotmail.com

## Legal Basis for Processing (GDPR)

We process your data based on:

- **Consent**: For health data and optional features
- **Contract**: To provide services you've requested
- **Legitimate Interests**: For app improvement and security
- **Legal Obligation**: When required by law

## Privacy by Design

Calorify implements privacy by design principles:

- **Data Minimization**: Collect only necessary data
- **Purpose Limitation**: Use data only for stated purposes
- **Default Privacy**: Privacy-protective defaults
- **Transparency**: Clear information about data practices
- **User Control**: Easy-to-use privacy controls
- **Security First**: Built-in security measures

This privacy policy is effective as of the date listed above and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
