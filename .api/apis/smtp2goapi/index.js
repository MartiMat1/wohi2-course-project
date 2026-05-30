"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'smtp2goapi/3.0.2 (api/6.1.3)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Add a sender domain to your account. Note that you must own any domains you wish to
     * include in this list, as you will be required to verify and authenticate the emails sent
     * via that domain. Find full details in the Sender Domains Guide.
     *
     * @summary Add a sender domain
     * @throws FetchError<400, types.AddSenderDomainResponse400> 400
     */
    SDK.prototype.addSenderDomain = function (body) {
        return this.core.fetch('/domain/add', 'post', body);
    };
    /**
     * A Tracking Subdomain is used to monitor your email opens and clicks. This endpoint
     * allows you to edit a tracking subdomain for a particular sender domain. Full details can
     * be found in the Sender Domain Guide.
     *
     * @summary Edit the tracking subdomain
     * @throws FetchError<400, types.EditTrackingDomainResponse400> 400
     */
    SDK.prototype.editTrackingDomain = function (body) {
        return this.core.fetch('/domain/tracking', 'post', body);
    };
    /**
     * A Return Path Subdomain is used to instruct the server where to return emails that are
     * not deliverable (ie. Bounces).  This endpoint allows you to edit a Return Path Subdomain
     * for a particular sender domain. Full details can be found in the Sender Domain Guide.
     *
     * @summary Edit the return-path subdomain
     * @throws FetchError<400, types.EditReturnPathDomainResponse400> 400
     */
    SDK.prototype.editReturnPathDomain = function (body) {
        return this.core.fetch('/domain/returnpath', 'post', body);
    };
    /**
     * Allow subaccounts to send from verified sender domains on the master account.
     *
     * @summary Edit subaccount access
     * @throws FetchError<400, types.EditSubaccountAccessResponse400> 400
     */
    SDK.prototype.editSubaccountAccess = function (body) {
        return this.core.fetch('/domain/subaccount_access', 'post', body);
    };
    /**
     * Verify a sender domain on your account removing the need to wait for the periodic
     * verification every 7 minutes.
     *
     * @summary Verify a sender domain
     * @throws FetchError<400, types.VerifyASenderDomainResponse400> 400
     */
    SDK.prototype.verifyASenderDomain = function (body) {
        return this.core.fetch('/domain/verify', 'post', body);
    };
    /**
     * Returns a list of sender domains on your account
     *
     * @summary View sender domains
     * @throws FetchError<400, types.ViewSenderDomainsResponse400> 400
     */
    SDK.prototype.viewSenderDomains = function (body) {
        return this.core.fetch('/domain/view', 'post', body);
    };
    /**
     * Remove a sender domain from your account
     *
     * @summary Remove a sender domain
     * @throws FetchError<400, types.RemoveSenderDomainResponse400> 400
     */
    SDK.prototype.removeSenderDomain = function (body) {
        return this.core.fetch('/domain/remove', 'post', body);
    };
    /**
     * Use the API to add a single sender email address to your account, to use from which to
     * send mail. If the email address has previously been added and not yet verified, this
     * action will simply resend the verification email.
     *
     * @summary Add a single sender email
     * @throws FetchError<400, types.AddASingleSenderEmailResponse400> 400
     */
    SDK.prototype.addASingleSenderEmail = function (body) {
        return this.core.fetch('/single_sender_emails/add', 'post', body);
    };
    /**
     * Returns a list of single sender email addresses on your account, along with their
     * verification status. If you include a email_address, the response will only include
     * items matching this search.
     *
     * @summary View single sender emails
     * @throws FetchError<400, types.ViewAllSingleSenderEmailsResponse400> 400
     */
    SDK.prototype.viewAllSingleSenderEmails = function (body) {
        return this.core.fetch('/single_sender_emails/view', 'post', body);
    };
    /**
     * Remove a single sender email address from your account. Include the address to remove as
     * the email_address parameter.
     *
     * @summary Remove a single sender email
     * @throws FetchError<400, types.RemoveASingleSenderEmailResponse400> 400
     */
    SDK.prototype.removeASingleSenderEmail = function (body) {
        return this.core.fetch('/single_sender_emails/remove', 'post', body);
    };
    /**
     * Add a new SMTP user to your account. Full details of the available options for new user
     * accounts can be found in the SMTP User Guide.
     *
     * @summary Add an SMTP user
     * @throws FetchError<400, types.AddAnSmtpUserResponse400> 400
     */
    SDK.prototype.addAnSmtpUser = function (body) {
        return this.core.fetch('/users/smtp/add', 'post', body);
    };
    /**
     * Update an SMTP user's details with the parameters passed. Full details of the available
     * options for SMTP user accounts is found in the SMTP User Guide.
     *
     * @summary Edit SMTP user details
     * @throws FetchError<400, types.EditAnSmtpUserResponse400> 400
     */
    SDK.prototype.editAnSmtpUser = function (body) {
        return this.core.fetch('/users/smtp/edit', 'post', body);
    };
    /**
     * Remove an SMTP user from your account
     *
     * @summary Remove an SMTP user
     * @throws FetchError<400, types.RemoveAnSmtpUserResponse400> 400
     */
    SDK.prototype.removeAnSmtpUser = function (body) {
        return this.core.fetch('/users/smtp/remove', 'post', body);
    };
    /**
     * Returns a list of all SMTP users that are managed by this account, or details of a
     * specific user, when you include the [username] in your request. If no users are
     * available, this will return an empty list.
     *
     * @summary View SMTP users
     * @throws FetchError<400, types.ViewSmtpUsersResponse400> 400
     */
    SDK.prototype.viewSmtpUsers = function (body) {
        return this.core.fetch('/users/smtp/view', 'post', body);
    };
    /**
     * Add one or more email addresses and domain names to your Allowed or Restricted Senders
     * List. How this list of email addresses and domain names are used is shown by the current
     * 'mode' value; if the Restrict Senders setting is on, they will form either a whitelist
     * or blacklist. If the setting is off, the list will be disabled. Further details of the
     * associated setting are found in the SMTP2GO Guides. Details of how this mode can be set
     * via the update end-point, are given further in the documentation. A post to this
     * endpoint will return a success, even if the Restrict Senders setting is not in use.
     *
     * @summary Add allowed senders
     * @throws FetchError<400, types.AddAllowedSendersResponse400> 400
     */
    SDK.prototype.addAllowedSenders = function (body) {
        return this.core.fetch('/allowed_senders/add', 'post', body);
    };
    /**
     * Replace the email addresses and domain names on your Allowed or Restricted Senders List
     * using this endpoint. How the email addresses and domain names are used is defined in the
     * current 'mode' value - further details of these modes are found in the SMPT2GO Guides.
     * Note that a post to this endpoint will return a success, even if the setting is not in
     * use.
     *
     * @summary Update allowed senders
     * @throws FetchError<400, types.UpdateAllowedSendersResponse400> 400
     */
    SDK.prototype.updateAllowedSenders = function (body) {
        return this.core.fetch('/allowed_senders/update', 'post', body);
    };
    /**
     * Returns the email addresses and domain names on your Allowed or Restricted Senders list,
     * as well as the Restrict Senders setting, which dictates how they are interpreted.
     *
     * @summary View allowed senders
     * @throws FetchError<400, types.ViewAllowedSendersResponse400> 400
     */
    SDK.prototype.viewAllowedSenders = function (body) {
        return this.core.fetch('/allowed_senders/view', 'post', body);
    };
    /**
     * Remove one or more emails addresses or domain names stored in your Allowed or Restricted
     * Senders List. <strong>Note: In the event that any of the email addresses or domains do
     * not feature in the list, no error will be raised.</strong>
     *
     * @summary Remove allowed senders
     * @throws FetchError<400, types.RemoveAllowedSendersResponse400> 400
     */
    SDK.prototype.removeAllowedSenders = function (body) {
        return this.core.fetch('/allowed_senders/remove', 'post', body);
    };
    /**
     * Removes a scheduled email by ID
     *
     * @summary Remove a scheduled email
     * @throws FetchError<400, types.RemoveScheduledEmailResponse400> 400
     */
    SDK.prototype.removeScheduledEmail = function (body) {
        return this.core.fetch('/email/scheduled/remove', 'post', body);
    };
    /**
     * Allows searching of scheduled emails
     *
     * @summary Search schedule emails
     * @throws FetchError<400, types.SearchScheduledEmailsResponse400> 400
     */
    SDK.prototype.searchScheduledEmails = function (body) {
        return this.core.fetch('/email/scheduled/search', 'post', body);
    };
    /**
     * Send an email by passing a JSON email object
     *
     * @summary Send a standard email
     * @throws FetchError<400, types.SendStandardEmailResponse400> 400
     */
    SDK.prototype.sendStandardEmail = function (body) {
        return this.core.fetch('/email/send', 'post', body);
    };
    /**
     * Schedule a batch of emails
     *
     * @summary Schedule a batch of emails
     * @throws FetchError<400, types.ScheduleEmailBatchResponse400> 400
     */
    SDK.prototype.scheduleEmailBatch = function (body) {
        return this.core.fetch('/email/batch', 'post', body);
    };
    /**
     * Send an email by supplying a pre-encoded MIME string
     *
     * @summary Send a MIME email
     * @throws FetchError<400, types.SendMimeEmailResponse400> 400
     */
    SDK.prototype.sendMimeEmail = function (body) {
        return this.core.fetch('/email/mime', 'post', body);
    };
    /**
     * Retrieve a list of up to 5,000 sent emails matching the supplied parameters.<br><br>The
     * filter_query field can be used to create complex filters to make your searching more
     * efficient. Find full details in the Email and Email Archive
     * Guide.<br><br><strong>Note:<strong> Allow around two minutes after delivery for recently
     * sent emails to be included in a search result.<br /><br />This endpoint is deprecated
     * and will not be accessible in future API versions. Please use the <a
     * href='https://developers.smtp2go.com/reference/search-activity-1'>Activity Search</a>
     * endpoint instead.<i>This endpoint is rate-limited to 20 requests per minute.</i>
     *
     * @summary View and search sent emails
     * @throws FetchError<400, types.ViewSentEmailsResponse400> 400
     */
    SDK.prototype.viewSentEmails = function (body) {
        return this.core.fetch('/email/search', 'post', body);
    };
    /**
     * Retrieve a list of up to 5,000 archived emails matching the supplied parameters.
     *
     * @summary Search archived content
     * @throws FetchError<400, types.SearchArchivedPagesResponse400> 400
     */
    SDK.prototype.searchArchivedPages = function (body) {
        return this.core.fetch('/archive/search', 'post', body);
    };
    /**
     * Fetch an archived email using the email_id
     *
     * @summary View an archived email
     * @throws FetchError<400, types.ViewAnArchivedEmailResponse400> 400
     */
    SDK.prototype.viewAnArchivedEmail = function (body) {
        return this.core.fetch('/archive/email', 'post', body);
    };
    /**
     * Retrieve a summary of bounces and rejects, for the last 30 days.
     *
     * @summary Email bounces
     * @throws FetchError<400, types.EmailBouncesResponse400> 400
     */
    SDK.prototype.emailBounces = function (body) {
        return this.core.fetch('/stats/email_bounces', 'post', body);
    };
    /**
     * Retrieve a summary of your Account activity, including the start and end date of your
     * monthly plan, the number of emails sent this cycle, the number of emails remaining and
     * the number of emails in your monthly allowance.
     *
     * @summary Email cycle
     * @throws FetchError<400, types.EmailCycleResponse400> 400
     */
    SDK.prototype.emailCycle = function () {
        return this.core.fetch('/stats/email_cycle', 'post');
    };
    /**
     * Retrieve a summary of activity from a specified date range (defaults to last 30 days),
     * per sender email address, SMTP username, domain or subaccount.
     *
     * @summary Email history
     * @throws FetchError<400, types.EmailHistoryResponse400> 400
     */
    SDK.prototype.emailHistory = function (body) {
        return this.core.fetch('/stats/email_history', 'post', body);
    };
    /**
     * Retrieve a summary of spam complaints and rejects, for the last 30 days.
     *
     * @summary Email spam
     * @throws FetchError<400, types.EmailSpamResponse400> 400
     */
    SDK.prototype.emailSpam = function (body) {
        return this.core.fetch('/stats/email_spam', 'post', body);
    };
    /**
     * Retrieve a combination of the email_bounces, email_cycle, email_spam, and email_unsubs
     * calls in one report. Note this call may take longer to complete.
     *
     * @summary Email summary
     * @throws FetchError<400, types.EmailSummaryResponse400> 400
     */
    SDK.prototype.emailSummary = function (body) {
        return this.core.fetch('/stats/email_summary', 'post', body);
    };
    /**
     * Retrieve a summary of unsubscribes and rejects, for the last 30 days.
     *
     * @summary Email unsubscribes
     * @throws FetchError<400, types.EmailUnsubscribesResponse400> 400
     */
    SDK.prototype.emailUnsubscribes = function (body) {
        return this.core.fetch('/stats/email_unsubs', 'post', body);
    };
    /**
     * Suppresses the specified email address or domain
     *
     * @summary Add a suppression
     * @throws FetchError<400, types.AddASuppressionResponse400> 400
     */
    SDK.prototype.addASuppression = function (body) {
        return this.core.fetch('/suppression/add', 'post', body);
    };
    /**
     * Returns your suppressed email addresses and domains
     *
     * @summary View suppressions
     * @throws FetchError<400, types.ViewSuppressionsResponse400> 400
     */
    SDK.prototype.viewSuppressions = function (body) {
        return this.core.fetch('/suppression/view', 'post', body);
    };
    /**
     * Removes the suppression on the specified email address or domain
     *
     * @summary Remove a suppression
     * @throws FetchError<400, types.RemoveASuppressionResponse400> 400
     */
    SDK.prototype.removeASuppression = function (body) {
        return this.core.fetch('/suppression/remove', 'post', body);
    };
    /**
     * Adds a new subaccount on your master account.<strong> Note:</strong> This end-point is
     * rate limited to 10 calls per hour.
     *
     * @summary Add a subaccount
     * @throws FetchError<400, types.AddSubaccountResponse400> 400
     */
    SDK.prototype.addSubaccount = function (body) {
        return this.core.fetch('/subaccount/add', 'post', body);
    };
    /**
     * Changes the details on an existing subaccount
     *
     * @summary Update a subaccount
     * @throws FetchError<400, types.UpdateASubaccountResponse400> 400
     */
    SDK.prototype.updateASubaccount = function (body) {
        return this.core.fetch('/subaccount/edit', 'post', body);
    };
    /**
     * Returns any subaccounts that match search criteria
     *
     * @summary View subaccounts
     * @throws FetchError<400, types.SearchSubaccountsResponse400> 400
     */
    SDK.prototype.searchSubaccounts = function (body) {
        return this.core.fetch('/subaccounts/search', 'post', body);
    };
    /**
     * Changes the status of an Active subaccount to Closed
     *
     * @summary Close a subaccount
     * @throws FetchError<400, types.CloseASubaccountResponse400> 400
     */
    SDK.prototype.closeASubaccount = function (body) {
        return this.core.fetch('/subaccount/close', 'post', body);
    };
    /**
     * Changes the status of a Closed subaccount back to Active
     *
     * @summary Reopen a closed subaccount
     * @throws FetchError<400, types.ReopenAClosedSubaccountResponse400> 400
     */
    SDK.prototype.reopenAClosedSubaccount = function (body) {
        return this.core.fetch('/subaccount/reopen', 'post', body);
    };
    /**
     * In the event that a subaccount didn't receive the invite you can resend it
     *
     * @summary Resend subaccount invitation
     * @throws FetchError<400, types.ResendSubaccountInvitationResponse400> 400
     */
    SDK.prototype.resendSubaccountInvitation = function (body) {
        return this.core.fetch('/subaccount/reinvite', 'post', body);
    };
    /**
     * Returns events (such as opens, unsubscribes) which match the filters passed. A count of
     * events matching the filter is also included, as this may surpass the maximum of 1,000
     * items included within the response.<br /><i>This endpoint is rate-limited to 60 requests
     * per minute.</i>
     *
     * @summary Search activity
     * @throws FetchError<400, types.SearchActivityResponse400> 400
     */
    SDK.prototype.searchActivity = function (body) {
        return this.core.fetch('/activity/search', 'post', body);
    };
    /**
     * Adds a new email template that you can use to format your emails.
     *
     * @summary Add an email template
     * @throws FetchError<400, types.AddAnEmailTemplateResponse400> 400
     */
    SDK.prototype.addAnEmailTemplate = function (body) {
        return this.core.fetch('/template/add', 'post', body);
    };
    /**
     * Changes details of an existing email template.
     *
     * @summary Update an email template
     * @throws FetchError<400, types.UpdateAnEmailTemplateResponse400> 400
     */
    SDK.prototype.updateAnEmailTemplate = function (body) {
        return this.core.fetch('/template/edit', 'post', body);
    };
    /**
     * Deletes the specified email template.
     *
     * @summary Remove an email template
     * @throws FetchError<400, types.RemoveAnEmailTemplateResponse400> 400
     */
    SDK.prototype.removeAnEmailTemplate = function (body) {
        return this.core.fetch('/template/delete', 'post', body);
    };
    /**
     * Search your collection of email templates. Returns any templates that match your search
     * criteria.
     *
     * @summary View email templates
     * @throws FetchError<400, types.SearchEmailTemplatesResponse400> 400
     */
    SDK.prototype.searchEmailTemplates = function (body) {
        return this.core.fetch('/template/search', 'post', body);
    };
    /**
     * Returns details of the email template with the specified ID.
     *
     * @summary View template details
     * @throws FetchError<400, types.ViewTemplateDetailsResponse400> 400
     */
    SDK.prototype.viewTemplateDetails = function (body) {
        return this.core.fetch('/template/view', 'post', body);
    };
    /**
     * Send an SMS message to one or more numbers, up to a maximum of 100 numbers.
     *
     * @summary Send SMS
     * @throws FetchError<400, types.SendSmsResponse400> 400
     */
    SDK.prototype.sendSms = function (body) {
        return this.core.fetch('/sms/send', 'post', body);
    };
    /**
     * View received SMS messages.
     *
     * @summary View received SMS
     * @throws FetchError<400, types.ViewReceivedSmsResponse400> 400
     */
    SDK.prototype.viewReceivedSms = function (body) {
        return this.core.fetch('/sms/view-received', 'post', body);
    };
    /**
     * View sent SMS messages.
     *
     * @summary View sent SMS
     * @throws FetchError<400, types.ViewSentSmsResponse400> 400
     */
    SDK.prototype.viewSentSms = function (body) {
        return this.core.fetch('/sms/view-sent', 'post', body);
    };
    /**
     * Retrieve a summary of SMS messages within a certain time range.
     *
     * @summary SMS Summary
     * @throws FetchError<400, types.SmsSummaryResponse400> 400
     */
    SDK.prototype.smsSummary = function (body) {
        return this.core.fetch('/sms/summary', 'post', body);
    };
    /**
     * Returns information for configured webhooks.
     *
     * @summary View Webhooks
     * @throws FetchError<400, types.ViewWebhookResponse400> 400
     */
    SDK.prototype.viewWebhook = function (body) {
        return this.core.fetch('/webhook/view', 'post', body);
    };
    /**
     * Add a new webhook with the given configuration. Setup of webhooks can be done on the
     * Settings > Webhooks page in your SMTP2GO control panel.
     *
     * @summary Add a new Webhook
     * @throws FetchError<400, types.AddWebhookResponse400> 400
     */
    SDK.prototype.addWebhook = function (body) {
        return this.core.fetch('/webhook/add', 'post', body);
    };
    /**
     * Make changes to a specific webhook using its unique ID.
     *
     * @summary Edit a specified Webhook
     * @throws FetchError<400, types.EditWebhookResponse400> 400
     */
    SDK.prototype.editWebhook = function (body) {
        return this.core.fetch('/webhook/edit', 'post', body);
    };
    /**
     * Remove a specific webhook using its unique ID.
     *
     * @summary Remove a specified Webhook
     * @throws FetchError<400, types.RemoveWebhookResponse400> 400
     */
    SDK.prototype.removeWebhook = function (body) {
        return this.core.fetch('/webhook/remove', 'post', body);
    };
    /**
     * Retrieve a list of Dedicated IP addresses on this account
     *
     * @summary View Dedicated IP Addresses
     * @throws FetchError<400, types.ViewDedicatedIpsResponse400> 400
     */
    SDK.prototype.viewDedicatedIps = function () {
        return this.core.fetch('/dedicated_ips/view', 'post');
    };
    /**
     * Retrieve a list of API keys on this account
     *
     * @summary View API Keys
     * @throws FetchError<400, types.ViewApiKeysResponse400> 400
     */
    SDK.prototype.viewApiKeys = function (body) {
        return this.core.fetch('/api_keys/view', 'post', body);
    };
    /**
     * Add a new API key to your account<br /><i>This endpoint is rate-limited to 5 requests
     * per minute.</i>
     *
     * @summary Add a new API key
     * @throws FetchError<400, types.AddApiKeyResponse400> 400
     */
    SDK.prototype.addApiKey = function (body) {
        return this.core.fetch('/api_keys/add', 'post', body);
    };
    /**
     * Edit an existing API key
     *
     * @summary Edit an API key
     * @throws FetchError<400, types.EditApiKeyResponse400> 400
     */
    SDK.prototype.editApiKey = function (body) {
        return this.core.fetch('/api_keys/edit', 'post', body);
    };
    /**
     * Remove an existing API key
     *
     * @summary Remove an API key
     * @throws FetchError<400, types.RemoveApiKeyResponse400> 400
     */
    SDK.prototype.removeApiKey = function (body) {
        return this.core.fetch('/api_keys/remove', 'post', body);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
