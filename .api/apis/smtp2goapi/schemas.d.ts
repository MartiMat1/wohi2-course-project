declare const AddASingleSenderEmail: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["email_address"];
        readonly properties: {
            readonly email_address: {
                readonly type: "string";
                readonly description: "The email address that you wish to send emails from";
                readonly default: "send@example.com";
            };
            readonly message: {
                readonly type: "string";
                readonly description: "(Optional) If provided, will add a text only message to the email.";
            };
            readonly subaccount_id: {
                readonly type: "string";
                readonly description: "If you wish to make this API call on behalf of a subaccount then include its unique ID here";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["e023461c-8c86-11e9-b984-408d5cce2644"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AddASuppression: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["email_address"];
        readonly properties: {
            readonly email_address: {
                readonly type: "string";
                readonly description: "The email address or domain you would like to suppress from deliveries";
            };
            readonly block_description: {
                readonly type: "string";
                readonly description: "The description given for suppressing the email or domain from deliveries";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["aa253464-0bd0-467a-b24b-6159dcd7be60"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["block_description", "added", "email_address"];
                    readonly properties: {
                        readonly block_description: {
                            readonly type: "string";
                            readonly examples: readonly ["No longer a customer."];
                        };
                        readonly added: {
                            readonly type: "boolean";
                            readonly default: true;
                            readonly examples: readonly [true];
                        };
                        readonly email_address: {
                            readonly type: "string";
                            readonly examples: readonly ["test@example.com"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AddAllowedSenders: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["allowed_senders"];
        readonly properties: {
            readonly allowed_senders: {
                readonly type: "array";
                readonly description: "Array of email addresses and domain names.";
                readonly default: readonly ["test-person@example.com", "other@example.com"];
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly subaccount_id: {
                readonly type: "string";
                readonly description: "If you wish to make this API call on behalf of a subaccount then include its unique ID here";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["40cbb6f2-935f-11e7-b5be-480fcf01a6f2"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["allowed_senders", "mode"];
                    readonly properties: {
                        readonly allowed_senders: {
                            readonly type: "array";
                            readonly description: "A list of email addresses and domain names";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["test-person@example.com"];
                            };
                        };
                        readonly mode: {
                            readonly type: "string";
                            readonly description: "A string indicating how the list of email address and domain names is interpreted.\n\n`whitelist` `blacklist` `disabled`";
                            readonly enum: readonly ["whitelist", "blacklist", "disabled"];
                            readonly examples: readonly ["whitelist"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AddAnEmailTemplate: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["template_name", "id", "subject", "html_body", "text_body"];
        readonly properties: {
            readonly template_name: {
                readonly type: "string";
                readonly description: "The name of the email template. Min length: 1 Character. Max length: 64 Characters.";
            };
            readonly id: {
                readonly type: "string";
                readonly description: "The case-sensitive ID of the email template. Min length: 5 Character. Max length: 24 Characters.";
            };
            readonly subject: {
                readonly type: "string";
                readonly description: "The subject of the email template.";
            };
            readonly html_body: {
                readonly type: "string";
                readonly description: "The HTML body of the email template.";
            };
            readonly text_body: {
                readonly type: "string";
                readonly description: "The Plain Text body of the email template.";
            };
            readonly template_variables: {
                readonly type: "object";
                readonly description: "The variables to use within this email template in the format `{\"variable1\": \"value1\", \"variable2\": \"value2\"}`";
                readonly additionalProperties: true;
            };
            readonly tags: {
                readonly type: "array";
                readonly description: "The list of Tags to associate to this email template";
                readonly items: {
                    readonly type: "string";
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["f00c0856-dde8-11eb-b4ce-1002b51e60a4"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["id", "subject", "tags"];
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly examples: readonly ["5355878"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "This parameter is only returned in 'search' response";
                            readonly examples: readonly ["Order receipt"];
                        };
                        readonly template_name: {
                            readonly type: "string";
                            readonly description: "This parameter is not present in 'search' response";
                            readonly examples: readonly ["Order receipt"];
                        };
                        readonly subject: {
                            readonly type: "string";
                            readonly examples: readonly ["Order receipt for {{ product_name }}"];
                        };
                        readonly tags: {
                            readonly type: "array";
                            readonly required: readonly ["types", "example"];
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["one"];
                            };
                        };
                        readonly last_updated: {
                            readonly type: "string";
                            readonly description: "A timestamp indicating when this template was last updated";
                            readonly examples: readonly ["2024-01-01 12:00:00"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AddAnSmtpUser: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["username"];
        readonly properties: {
            readonly username: {
                readonly type: "string";
                readonly description: "A username to access the SMTP2go server.  Length = 5 to 100";
            };
            readonly email_password: {
                readonly type: "string";
                readonly description: "A valid SMTP2GO password for your new SMTP User. <br><br>Must have an entropy of at least 64 bits. <a target='_blank' href='https://www.calculator.net/password-generator.html'>Consider using a password generator</a> or leave blank for an auto generated value.";
            };
            readonly description: {
                readonly type: "string";
                readonly description: "A comment or description of your new SMTP User";
            };
            readonly custom_ratelimit: {
                readonly type: "boolean";
                readonly description: "If true, a custom rate limit will be enabled for this user, and defined by the <code>custom_ratelimit_value</code> and <code>custom_ratelimit_period</code>.  Default: false";
            };
            readonly custom_ratelimit_value: {
                readonly type: "integer";
                readonly description: "If passed, defines the limit of emails this user can send in the period specified in <code>custom_ratelimit_period</code>.<br><br><strong>Note:</strong> Only stores this value if <code>custom_ratelimit</code> is true.";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly custom_ratelimit_period: {
                readonly type: "string";
                readonly description: "If passed, defines the period for which this user will be limited to the number of emails specified in <code>custom_ratelimit_value</code>.<br><br><strong>Syntax:</strong> \"\\<n\\> [hour[s]|day[s]|week[s]|month[s]] [hh:mm:ss]\".<br><br><strong>Examples: </strong> \"0:30:00\", \"1 hour\", \"2 days\", \"3 months\", \"4 months 5:00:00\".<br><br><strong>Note:</strong> Only stores this value if <code>custom_ratelimit</code> is true.";
            };
            readonly ip_pool: {
                readonly type: "integer";
                readonly description: "If passed, any emails sent with this SMTP user will use dedicated IP's in this IP Pool, This value can be found on the <code>/v3/dedicated_ips/view</code> endpoint.";
                readonly examples: readonly [1234];
            };
            readonly feedback_enabled: {
                readonly type: "boolean";
                readonly description: "If true, custom feedback via the unsubscribe footer will be enabled and defined by the below settings.  Default: false";
            };
            readonly feedback_domain: {
                readonly type: "string";
                readonly description: "The domain to insert into the custom feedback links via the unsubscribe footer. Default: blank<br><br><strong>Warning:</strong> <ul> <li>In order to use the SMTP2go feedback handling feature, this parameter needs to be set to \"default\"</li><li>Setting this value to anything other than \"default\", disables the ability for SMTP2go to correctly manage the feedback responses and should not normally be set to anything other than \"default\"</li><ul>";
                readonly default: "default";
            };
            readonly feedback_html: {
                readonly type: "string";
                readonly description: "The HTML content to insert into the custom feedback email body via the unsubscribe footer.  Default: blank <br><br><strong>System Variables (Only available here):</strong><ul><li>Unsubscribe URL = %%UNSUBSCRIBE%% </li><li>Email address = %%EMAIL%%</li></ul>";
            };
            readonly feedback_text: {
                readonly type: "string";
                readonly description: "The text content to insert into the custom feedback email body via the unsubscribe footer.  Default: blank<br><br><strong>System Variables (Only available here):</strong><ul><li>Unsubscribe URL = %%UNSUBSCRIBE%% </li><li>Email address = %%EMAIL%%</li></ul>";
            };
            readonly open_tracking_enabled: {
                readonly type: "boolean";
                readonly description: "If true, open tracking will be enabled for this user.  Default: false";
            };
            readonly click_tracking_enabled: {
                readonly type: "boolean";
                readonly description: "If true, click tracking will be enabled for this user.  Default: false";
            };
            readonly archive_enabled: {
                readonly type: "boolean";
                readonly description: "If true, archiving (available on paid plans) will be enabled for this user.  Default: false.";
            };
            readonly audit_email: {
                readonly type: "string";
                readonly description: "If passed, this email will be BCC'd on all emails sent by this SMTP User";
            };
            readonly bounce_notifications: {
                readonly type: "string";
                readonly description: "If passed, will control how bounce notifications are handled. Must be one of [from, drop, or a valid email address]. [from] will return the email to sender, [drop] will discard the event, and the inclusion of an email address will send the event on to this account. Default is [from].";
            };
            readonly status: {
                readonly type: "string";
                readonly description: "The initial status of the SMTP user, one of ['allowed', 'blocked', 'sandbox'], defaults to 'allowed'";
                readonly default: "allowed";
            };
            readonly subaccount_id: {
                readonly type: "string";
                readonly description: "If you wish to make this API call on behalf of a subaccount then include its unique ID here";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["aa253464-0bd0-467a-b24b-6159dcd7be60"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["results"];
                    readonly properties: {
                        readonly results: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly required: readonly ["username", "sending_allowed", "custom_ratelimit"];
                                readonly properties: {
                                    readonly comments: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Comment explaining how amazing this Test person is"];
                                    };
                                    readonly username: {
                                        readonly type: "string";
                                        readonly examples: readonly ["smtpuser@example.com"];
                                    };
                                    readonly email_password: {
                                        readonly type: "string";
                                        readonly examples: readonly ["H#8dkK2djs"];
                                    };
                                    readonly sending_allowed: {
                                        readonly type: "boolean";
                                        readonly default: true;
                                        readonly examples: readonly [true];
                                    };
                                    readonly custom_ratelimit: {
                                        readonly type: "boolean";
                                        readonly default: true;
                                        readonly examples: readonly [true];
                                    };
                                    readonly custom_ratelimit_value: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [100];
                                    };
                                    readonly custom_ratelimit_period: {
                                        readonly type: "string";
                                        readonly examples: readonly ["1 day"];
                                    };
                                    readonly default_ratelimit_value: {
                                        readonly type: "string";
                                        readonly description: "The default limit of emails this SMTP user can send in the period specified in <code>default_ratelimit_period</code>. <strong>Note:</strong> Used if <code>custom_ratelimit</code> is false.";
                                        readonly examples: readonly [123];
                                    };
                                    readonly default_ratelimit_period: {
                                        readonly type: "string";
                                        readonly description: "The default period for which this SMTP user will be limited to the number of emails specified in <code>default_ratelimit_value</code>.<br><br><strong>Syntax:</strong> \"\\<n\\> [hour[s]|day[s]|week[s]|month[s]] [hh:mm:ss]\".<br><br><strong>Examples: </strong> \"0:30:00\", \"1 hour\", \"2 days\", \"3 months\", \"4 months 5:00:00\".<br><br><strong>Note:</strong> Used if <code>custom_ratelimit</code> is false.";
                                        readonly examples: readonly ["unlimited"];
                                    };
                                    readonly ippool: {
                                        readonly type: "integer";
                                        readonly examples: readonly [1234];
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                    };
                                    readonly feedback_enabled: {
                                        readonly type: "boolean";
                                        readonly examples: readonly [true];
                                    };
                                    readonly feedback_domain: {
                                        readonly type: "string";
                                        readonly examples: readonly ["default"];
                                    };
                                    readonly feedback_html: {
                                        readonly type: "string";
                                    };
                                    readonly feedback_text: {
                                        readonly type: "string";
                                    };
                                    readonly archive_enabled: {
                                        readonly type: "boolean";
                                        readonly examples: readonly [true];
                                    };
                                    readonly open_tracking_enabled: {
                                        readonly type: "boolean";
                                        readonly examples: readonly [true];
                                    };
                                    readonly audit_email: {
                                        readonly type: "string";
                                    };
                                    readonly bounce_notifications: {
                                        readonly type: "string";
                                        readonly examples: readonly ["from"];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AddApiKey: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly description: {
                readonly type: "string";
                readonly description: "A comment or description of your new API key";
                readonly examples: readonly ["test api key"];
            };
            readonly custom_ratelimit: {
                readonly type: "boolean";
                readonly description: "If true, a custom rate limit will be enabled for this user, and defined by the <code>custom_ratelimit_value</code> and <code>custom_ratelimit_period</code>.";
            };
            readonly custom_ratelimit_value: {
                readonly type: "integer";
                readonly description: "If passed, defines the limit of emails this user can send in the period specified in <code>custom_ratelimit_period</code>.<br><br><strong>Note:</strong> Only stores this value if <code>custom_ratelimit</code> is true.";
            };
            readonly custom_ratelimit_period: {
                readonly type: "string";
                readonly description: "If passed, defines the period for which this user will be limited to the number of emails specified in <code>custom_ratelimit_value</code>.<br><br><strong>Syntax:</strong> \"\\<n\\> [hour[s]|day[s]|week[s]|month[s]] [hh:mm:ss]\".<br><br><strong>Examples: </strong> \"0:30:00\", \"1 hour\", \"2 days\", \"3 months\", \"4 months 5:00:00\".<br><br><strong>Note:</strong> Only stores this value if <code>custom_ratelimit</code> is true.";
                readonly examples: readonly ["0:30:00"];
            };
            readonly ip_pool: {
                readonly type: "integer";
                readonly description: "If passed, any emails sent with this API key will use dedicated IP's in this IP Pool, This value can be found on the <code>/v3/dedicated_ips/view</code> endpoint.";
                readonly examples: readonly [1234];
            };
            readonly feedback_enabled: {
                readonly type: "boolean";
                readonly description: "If true, custom feedback via the unsubscribe footer will be enabled and defined by the below settings.";
                readonly default: false;
            };
            readonly feedback_html: {
                readonly type: "string";
                readonly description: "The HTML content to insert into the custom feedback email body via the unsubscribe footer.<br><br><strong>System Variables (Only available here):</strong><ul><li>Unsubscribe URL = %%UNSUBSCRIBE%% </li><li>Email address = %%EMAIL%%</li></ul>";
                readonly examples: readonly ["test_html"];
            };
            readonly feedback_text: {
                readonly type: "string";
                readonly description: "The text content to insert into the custom feedback email body via the unsubscribe footer.<br><br><strong>System Variables (Only available here):</strong><ul><li>Unsubscribe URL = %%UNSUBSCRIBE%% </li><li>Email address = %%EMAIL%%</li></ul>";
                readonly examples: readonly ["test_text"];
            };
            readonly open_tracking_enabled: {
                readonly type: "boolean";
                readonly description: "If true, open tracking will be enabled for this API key.";
                readonly default: false;
            };
            readonly click_tracking_enabled: {
                readonly type: "boolean";
                readonly description: "If true, click tracking will be enabled for this API key.";
                readonly default: false;
            };
            readonly archive_enabled: {
                readonly type: "boolean";
                readonly description: "If true, archiving (available on paid plans) will be enabled for this API key.";
                readonly default: false;
            };
            readonly audit_email: {
                readonly type: "string";
                readonly description: "If passed, this email will be BCC'd on all emails sent by this API key.";
            };
            readonly bounce_notifications: {
                readonly type: "string";
                readonly description: "If passed, will control how bounce notifications are handled. Must be one of [from, drop, or a valid email address]. [from] will return the email to sender, [drop] will discard the event, and the inclusion of an email address will send the event on to this account.";
                readonly default: "from";
            };
            readonly status: {
                readonly type: "string";
                readonly description: "The initial status of the API key, one of ['allowed', 'blocked', 'sandbox'].";
                readonly default: "allowed";
            };
            readonly endpoints: {
                readonly type: "array";
                readonly description: "An array of endpoints that this API key will be allowed to use.<br /><br />A full list of endpoints can be found in the app under <code>Sending->API Keys->Permissions</code> or programatically via the API <a target=\"blank\" href=\"https://api.smtp2go.com/v3/api/index\">here</a>.<br /><br />We also accept wildcard patterns, for example to allow access to all email endpoints you can pass <code>[\"/email/*\"]</code>.<br /><br />To allow access to every endpoint simply pass <code>\"endpoints\": [\"*\"]</code>";
                readonly default: readonly ["/email/send"];
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly subaccount_id: {
                readonly type: "string";
                readonly description: "If you wish to make this API call on behalf of a subaccount then include its unique ID here.";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["data", "request_id"];
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly description: "An array of API key results";
                    readonly items: {
                        readonly type: "object";
                        readonly required: readonly ["request_id", "data"];
                        readonly properties: {
                            readonly request_id: {
                                readonly type: "string";
                                readonly examples: readonly ["aa253464-0bd0-467a-b24b-6159dcd7be60"];
                            };
                            readonly data: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly api_key: {
                                        readonly type: "string";
                                        readonly description: "The API key used to query the API.";
                                        readonly examples: readonly ["api-00000000000000000000000000000000"];
                                    };
                                    readonly username: {
                                        readonly type: "string";
                                        readonly description: "A shortened version of the API key which can be used to correlate data with some other API calls that also feature <code>username</code>.";
                                        readonly examples: readonly ["api-000000000000"];
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                        readonly description: "A comment or description of the API key.";
                                    };
                                    readonly custom_rate_limit: {
                                        readonly type: "boolean";
                                        readonly default: false;
                                        readonly description: "If enabled will use the values of <code>custom_ratelimit_value</code> and <code>custom_ratelimit_period</code> for rate limiting.";
                                        readonly examples: readonly [true];
                                    };
                                    readonly custom_ratelimit_value: {
                                        readonly type: "integer";
                                        readonly description: "If passed, defines the limit of emails this API key can send in the period specified in <code>custom_ratelimit_period</code>.";
                                        readonly examples: readonly [123];
                                    };
                                    readonly custom_ratelimit_period: {
                                        readonly type: "string";
                                        readonly description: "If passed, defines the period for which this user will be limited to the number of emails specified in <code>custom_ratelimit_value</code>.<br><br><strong>Syntax:</strong> \"\\<n\\> [hour[s]|day[s]|week[s]|month[s]] [hh:mm:ss]\".<br><br><strong>Examples: </strong> \"0:30:00\", \"1 hour\", \"2 days\", \"3 months\", \"4 months 5:00:00\".<br><br><strong>Note:</strong> Only stores this value if <code>custom_ratelimit</code> is true.";
                                        readonly examples: readonly ["0:30:00"];
                                    };
                                    readonly default_ratelimit_value: {
                                        readonly type: "string";
                                        readonly description: "The default limit of emails this API key can send in the period specified in <code>default_ratelimit_period</code>. <strong>Note:</strong> Used if <code>custom_ratelimit</code> is false.";
                                        readonly examples: readonly [123];
                                    };
                                    readonly default_ratelimit_period: {
                                        readonly type: "string";
                                        readonly description: "The default period for which this API key will be limited to the number of emails specified in <code>default_ratelimit_value</code>.<br><br><strong>Syntax:</strong> \"\\<n\\> [hour[s]|day[s]|week[s]|month[s]] [hh:mm:ss]\".<br><br><strong>Examples: </strong> \"0:30:00\", \"1 hour\", \"2 days\", \"3 months\", \"4 months 5:00:00\".<br><br><strong>Note:</strong> Used if <code>custom_ratelimit</code> is false.";
                                        readonly examples: readonly ["unlimited"];
                                    };
                                    readonly ippool: {
                                        readonly type: "integer";
                                        readonly examples: readonly [1234];
                                    };
                                    readonly feedback_enabled: {
                                        readonly type: "boolean";
                                        readonly description: "If true, custom feedback via the unsubscribe footer will be enabled and defined by the below settings.";
                                        readonly default: false;
                                    };
                                    readonly feedback_html: {
                                        readonly type: "string";
                                        readonly description: "The HTML content to insert into the custom feedback email body via the unsubscribe footer.  Default: blank <br><br><strong>System Variables (Only available here):</strong><ul><li>Unsubscribe URL = %%UNSUBSCRIBE%% </li><li>Email address = %%EMAIL%%</li></ul>";
                                    };
                                    readonly feedback_text: {
                                        readonly type: "string";
                                        readonly description: "The text content to insert into the custom feedback email body via the unsubscribe footer.  Default: blank<br><br><strong>System Variables (Only available here):</strong><ul><li>Unsubscribe URL = %%UNSUBSCRIBE%% </li><li>Email address = %%EMAIL%%</li></ul>";
                                    };
                                    readonly open_tracking_enabled: {
                                        readonly type: "boolean";
                                        readonly description: "If true, open tracking will be enabled for this API key.";
                                        readonly default: false;
                                    };
                                    readonly click_tracking_enabled: {
                                        readonly type: "boolean";
                                        readonly description: "If true, click tracking will be enabled for this API key.";
                                        readonly default: false;
                                    };
                                    readonly archive_enabled: {
                                        readonly type: "boolean";
                                        readonly description: "If true, archiving (available on paid plans) will be enabled for this API key.";
                                        readonly default: false;
                                    };
                                    readonly audit_email: {
                                        readonly type: "string";
                                        readonly description: "If passed, this email will be BCC'd on all emails sent by this API key.";
                                    };
                                    readonly bounce_notifications: {
                                        readonly type: "string";
                                        readonly description: "If passed, will control how bounce notifications are handled. Must be one of [from, drop, or a valid email address]. [from] will return the email to sender, [drop] will discard the event, and the inclusion of an email address will send the event on to this account.";
                                        readonly default: "from";
                                    };
                                    readonly status: {
                                        readonly type: "string";
                                        readonly description: "The initial status of the API key, one of ['allowed', 'blocked', 'sandbox'].";
                                        readonly default: "allowed";
                                    };
                                    readonly endpoints: {
                                        readonly type: "array";
                                        readonly description: "An array of endpoints that this API key will be allowed to use.";
                                        readonly default: readonly ["/email/send"];
                                        readonly items: {};
                                    };
                                };
                            };
                        };
                    };
                };
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["4b661d88-6b2d-11eb-8bb3-f23c92bb31d2"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AddSenderDomain: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["domain"];
        readonly properties: {
            readonly domain: {
                readonly type: "string";
                readonly description: "Domain to add as a sender domain";
            };
            readonly tracking_subdomain: {
                readonly type: "string";
                readonly description: "An optional subdomain used for click or open tracking and unsubscribe links";
            };
            readonly returnpath_subdomain: {
                readonly type: "string";
                readonly description: "An optional subdomain to use as a return-path subdomain";
            };
            readonly auto_verify: {
                readonly type: "boolean";
                readonly description: "If true, verify the domain now removing the need to call the 'domain/verify' endpoint or wait for the periodic verification every 7 minutes.<br> <br> <strong>Note:</strong> In order to successfully complete the verification, the 'tracking_subdomain' and 'returnpath_subdomain' must be configured in the domain DNS and propagated.";
                readonly default: true;
            };
            readonly subaccount_id: {
                readonly type: "string";
                readonly description: "If you wish to make this API call on behalf of a subaccount then include its unique ID here";
            };
            readonly subaccount_access: {
                readonly type: "object";
                readonly description: "Allow subaccounts to send from verified sender domains on the master account";
                readonly properties: {
                    readonly subaccounts: {
                        readonly type: "array";
                        readonly description: "A list of subaccount_ids to be given access. ID's can be found by querying <code>/subaccounts/search</code>";
                        readonly items: {};
                    };
                    readonly future_subaccounts: {
                        readonly type: "boolean";
                        readonly description: "If set to true, will automatically add any new subaccounts to the access list";
                    };
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["e023461c-8c86-11e9-b984-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["domains"];
                    readonly properties: {
                        readonly domains: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly domain: {
                                        readonly type: "object";
                                        readonly required: readonly ["dkim_value", "domain", "suffix", "rpath_status", "rpath_value", "dkim_status", "subdomain", "fulldomain", "dkim_selector"];
                                        readonly properties: {
                                            readonly dkim_value: {
                                                readonly type: "string";
                                                readonly examples: readonly ["dkim.smtp2go.net"];
                                            };
                                            readonly domain: {
                                                readonly type: "string";
                                                readonly examples: readonly ["example"];
                                            };
                                            readonly suffix: {
                                                readonly type: "string";
                                                readonly examples: readonly ["com"];
                                            };
                                            readonly rpath_selector: {
                                                readonly type: "string";
                                                readonly examples: readonly [""];
                                            };
                                            readonly rpath_status: {
                                                readonly type: "string";
                                                readonly examples: readonly [""];
                                            };
                                            readonly rpath_verified: {
                                                readonly type: "boolean";
                                                readonly default: true;
                                                readonly examples: readonly [true];
                                            };
                                            readonly rpath_value: {
                                                readonly type: "string";
                                                readonly examples: readonly ["return.smtp2go.net"];
                                            };
                                            readonly dkim_status: {
                                                readonly type: "string";
                                                readonly examples: readonly [""];
                                            };
                                            readonly dkim_verified: {
                                                readonly type: "boolean";
                                                readonly default: true;
                                                readonly examples: readonly [true];
                                            };
                                            readonly subdomain: {};
                                            readonly fulldomain: {
                                                readonly type: "string";
                                                readonly examples: readonly ["example.com"];
                                            };
                                            readonly dkim_selector: {
                                                readonly type: "string";
                                                readonly examples: readonly ["s123456"];
                                            };
                                        };
                                    };
                                    readonly trackers: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly required: readonly ["cname_value", "cname_status"];
                                            readonly properties: {
                                                readonly cname_value: {
                                                    readonly type: "string";
                                                    readonly examples: readonly [""];
                                                };
                                                readonly cname_status: {
                                                    readonly type: "string";
                                                    readonly examples: readonly [""];
                                                };
                                                readonly cname_verified: {
                                                    readonly type: "boolean";
                                                    readonly default: true;
                                                    readonly examples: readonly [false];
                                                };
                                                readonly domain: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["example"];
                                                };
                                                readonly suffix: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["com"];
                                                };
                                                readonly subdomain: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["link"];
                                                };
                                                readonly enabled: {
                                                    readonly type: "boolean";
                                                    readonly default: true;
                                                    readonly examples: readonly [false];
                                                };
                                                readonly fulldomain: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["link.example.com"];
                                                };
                                            };
                                        };
                                    };
                                    readonly subaccount_access: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly subaccounts: {
                                                readonly type: "array";
                                                readonly description: "A list of subaccount IDs that were given access the sender domain.";
                                                readonly items: {};
                                            };
                                            readonly future_subaccounts: {
                                                readonly type: "boolean";
                                                readonly description: "If true, any new subaccounts added will automatically be given access.";
                                                readonly default: false;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AddSubaccount: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["fullname"];
        readonly properties: {
            readonly fullname: {
                readonly type: "string";
                readonly description: "A full name used for the subaccount";
            };
            readonly limit: {
                readonly type: "integer";
                readonly description: "The number of emails the subaccount is allowed to send per billing cycle. <br><br><strong>Valid values:</strong><br>2000, 5000, 10000, 20000, 40000, 60000, 80000, 100000, 250000, 500000, 1000000, 2000000, 3000000, 5000000, 10000000";
                readonly default: 10000;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly dedicated_ip: {
                readonly type: "boolean";
                readonly description: "Auto assign a dedicated IP to the subaccount (Only available if limit is greater than 100,000)";
                readonly default: false;
            };
            readonly archiving: {
                readonly type: "boolean";
                readonly description: "Choose whether the subaccount is allowed to enable archiving. You still need to turn on archiving for individual senders within the subaccount.";
                readonly default: false;
            };
            readonly enforce_2fa: {
                readonly type: "boolean";
                readonly description: "Enforce team members of this subaccount to use 2FA.";
                readonly default: false;
            };
            readonly enable_sms: {
                readonly type: "boolean";
                readonly description: "Enable SMS messaging for the subaccount. Additional charges apply.";
                readonly default: false;
            };
            readonly sms_limit: {
                readonly type: "integer";
                readonly description: "Your subaccount will be able to send up to this monthly limit of SMS messages. Their sending will also be limited by the master account's overall monthly limit.";
                readonly default: 1000;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["0ef3f48a-2cfb-11eb-aee9-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["name", "id", "plan_size", "plan_used", "plan_remaining", "state", "dedicated_ip", "archiving", "enforce_2fa", "sms_enabled", "sms_limit"];
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Test Person"];
                        };
                        readonly id: {
                            readonly type: "string";
                            readonly examples: readonly ["NDU5OTgw"];
                        };
                        readonly plan_size: {
                            readonly type: "integer";
                            readonly examples: readonly [10000];
                        };
                        readonly plan_used: {
                            readonly type: "integer";
                            readonly examples: readonly [0];
                        };
                        readonly plan_remaining: {
                            readonly type: "integer";
                            readonly examples: readonly [10000];
                        };
                        readonly state: {
                            readonly type: "string";
                            readonly examples: readonly ["Active"];
                        };
                        readonly dedicated_ip: {
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly archiving: {
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly enforce_2fa: {
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly sms_enabled: {
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly sms_limit: {
                            readonly type: "integer";
                            readonly examples: readonly [1000];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AddWebhook: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["url"];
        readonly properties: {
            readonly url: {
                readonly type: "string";
                readonly description: "The URL of the webhook.";
            };
            readonly events: {
                readonly type: "array";
                readonly description: "A list of events the webhook will receive, from this list [<code>delivered</code>,<code>unsubscribe</code>,<code>spam</code>,<code>bounce</code>,<code>processed</code>,<code>reject</code>,<code>click</code>,<code>open</code>].";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly sms_events: {
                readonly type: "array";
                readonly description: "A list of SMS events the webhook will receive, from this list [<code>delivered</code>,<code>failed</code>,<code>rejected</code>,<code>sending</code>,<code>submitted</code>].";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly headers: {
                readonly type: "array";
                readonly description: "Custom headers you would specifically like sent in the event data. The headers must already exist in the emails. Subject and Message-id headers are sent by default.";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly usernames: {
                readonly type: "array";
                readonly description: "Usernames to be included in this webhook. All usernames will be included if none are specified.";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly output_format: {
                readonly type: "string";
                readonly description: "The format of the webhook data. Either <code>form</code> or <code>json</code>.";
                readonly default: "form";
            };
            readonly subaccount_id: {
                readonly type: "string";
                readonly description: "If you wish to make this API call on behalf of a subaccount then include its unique ID here.";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["data", "request_id"];
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly url: {
                            readonly type: "string";
                            readonly description: "The URL of the webhook.";
                            readonly examples: readonly ["https://example.com/test-webhook"];
                        };
                        readonly id: {
                            readonly type: "integer";
                            readonly description: "The ID of the webhook.";
                        };
                        readonly events: {
                            readonly type: "array";
                            readonly description: "A list of events the webhook will receive, from this list [<code>delivered</code>,<code>unsubscribe</code>,<code>spam</code>,<code>bounce</code>,<code>processed</code>,<code>reject</code>,<code>click</code>,<code>open</code>].";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly sms_events: {
                            readonly type: "array";
                            readonly description: "A list of SMS events the webhook will receive, from this list [<code>delivered</code>,<code>failed</code>,<code>rejected</code>,<code>sending</code>,<code>submitted</code>].";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly headers: {
                            readonly type: "array";
                            readonly description: "Custom headers you would specifically like sent in the event data. The headers must already exist in the emails. Subject and Message-id headers are sent by default.";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly usernames: {
                            readonly type: "array";
                            readonly description: "Usernames to be included in this webhook. All usernames will be included if none are specified.";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly output_format: {
                            readonly type: "string";
                            readonly description: "The format of the webhook data. Either <code>form</code> or <code>json</code>.";
                            readonly default: "form";
                        };
                    };
                };
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["4b661d88-6b2d-11eb-8bb3-f23c92bb31d2"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CloseASubaccount: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["id"];
        readonly properties: {
            readonly id: {
                readonly type: "string";
                readonly description: "The id of the subaccount you want to close";
            };
            readonly email: {
                readonly type: "string";
                readonly description: "The email address of the subaccount you want to close";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["d02ce100-2cfd-11eb-ab52-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "string";
                    readonly examples: readonly ["Successfully closed subaccount test@example.com"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const EditAnSmtpUser: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["username"];
        readonly properties: {
            readonly username: {
                readonly type: "string";
                readonly description: "A valid SMTP2GO username of your existing SMTP User that you wish to edit";
            };
            readonly email_password: {
                readonly type: "string";
                readonly description: "A valid SMTP2GO password for your new SMTP User. Must contain at least: 8 characters, 1 digit, symbol, uppercase letter, and lowercase letter. Leave blank for an auto generated value.";
            };
            readonly description: {
                readonly type: "string";
                readonly description: "A comment or description of your new SMTP User";
            };
            readonly custom_ratelimit: {
                readonly type: "boolean";
                readonly description: "If true, a custom rate limit will be enabled for this user, and defined by the <code>custom_ratelimit_value</code> and <code>custom_ratelimit_period</code>.";
                readonly default: false;
            };
            readonly custom_ratelimit_value: {
                readonly type: "integer";
                readonly description: "If passed, defines the maximum number of emails this user can send in the <code>custom_ratelimit_period</code>. Values: 1 to 2147483647";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly custom_ratelimit_period: {
                readonly type: "string";
                readonly description: "If passed, defines the period for which this user will be limited to the number of emails specified in <code>custom_ratelimit_value</code>.  Syntax: \"<n> {hour[s]|day[s]|week[s]|month[s]}[,hh:mm:ss]\".  Examples:  \"1 day\", \"1 week\", \"1 month\", \"2 months 3:00:00\"";
            };
            readonly ip_pool: {
                readonly type: "integer";
                readonly description: "If passed, any emails sent with this SMTP user will use dedicated IP's in this IP Pool, This value can be found on the <code>/v3/dedicated_ips/view</code> endpoint.";
                readonly examples: readonly [1234];
            };
            readonly feedback_enabled: {
                readonly type: "boolean";
                readonly description: "If true, custom feedback via the unsubscribe footer will be enabled and defined by the below settings.  Default: false";
            };
            readonly feedback_domain: {
                readonly type: "string";
                readonly description: "The domain to insert into the custom feedback links via the unsubscribe footer";
            };
            readonly feedback_html: {
                readonly type: "string";
                readonly description: "The HTML content to insert into the custom feedback email body via the unsubscribe footer";
            };
            readonly feedback_text: {
                readonly type: "string";
                readonly description: "The text content to insert into the custom feedback email body via the unsubscribe footer";
            };
            readonly open_tracking_enabled: {
                readonly type: "boolean";
                readonly description: "If true, open tracking will be enabled for this user.  Default: false";
            };
            readonly click_tracking_enabled: {
                readonly type: "boolean";
                readonly description: "If true, click tracking will be enabled for this user.  Default: false";
            };
            readonly archive_enabled: {
                readonly type: "boolean";
                readonly description: "If true, archiving will be enabled for this user.  Default: false";
            };
            readonly audit_email: {
                readonly type: "string";
                readonly description: "If passed, this email will be BCC'd on all emails sent by this SMTP User";
            };
            readonly bounce_notifications: {
                readonly type: "string";
                readonly description: "If passed, will control how bounce notifications are handled. Must be one of [from, drop, or a valid email address]. [from] will return the email to sender, [drop] will discard the event, and the inclusion of an email address will send the event on to this account. Default is [from].";
            };
            readonly status: {
                readonly type: "string";
                readonly description: "If passed will set the status of the SMTP user, one of ['allowed', 'blocked', 'sandbox']";
            };
            readonly subaccount_id: {
                readonly type: "string";
                readonly description: "If you wish to make this API call on behalf of a subaccount then include its unique ID here";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["aa253464-0bd0-467a-b24b-6159dcd7be60"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["results"];
                    readonly properties: {
                        readonly results: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly required: readonly ["username", "sending_allowed", "custom_ratelimit"];
                                readonly properties: {
                                    readonly comments: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Comment explaining how amazing this Test person is"];
                                    };
                                    readonly username: {
                                        readonly type: "string";
                                        readonly examples: readonly ["smtpuser@example.com"];
                                    };
                                    readonly email_password: {
                                        readonly type: "string";
                                        readonly examples: readonly ["H#8dkK2djs"];
                                    };
                                    readonly sending_allowed: {
                                        readonly type: "boolean";
                                        readonly default: true;
                                        readonly examples: readonly [true];
                                    };
                                    readonly custom_ratelimit: {
                                        readonly type: "boolean";
                                        readonly default: true;
                                        readonly examples: readonly [true];
                                    };
                                    readonly custom_ratelimit_value: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [100];
                                    };
                                    readonly custom_ratelimit_period: {
                                        readonly type: "string";
                                        readonly examples: readonly ["1 day"];
                                    };
                                    readonly default_ratelimit_value: {
                                        readonly type: "string";
                                        readonly description: "The default limit of emails this SMTP user can send in the period specified in <code>default_ratelimit_period</code>. <strong>Note:</strong> Used if <code>custom_ratelimit</code> is false.";
                                        readonly examples: readonly [123];
                                    };
                                    readonly default_ratelimit_period: {
                                        readonly type: "string";
                                        readonly description: "The default period for which this SMTP user will be limited to the number of emails specified in <code>default_ratelimit_value</code>.<br><br><strong>Syntax:</strong> \"\\<n\\> [hour[s]|day[s]|week[s]|month[s]] [hh:mm:ss]\".<br><br><strong>Examples: </strong> \"0:30:00\", \"1 hour\", \"2 days\", \"3 months\", \"4 months 5:00:00\".<br><br><strong>Note:</strong> Used if <code>custom_ratelimit</code> is false.";
                                        readonly examples: readonly ["unlimited"];
                                    };
                                    readonly ippool: {
                                        readonly type: "integer";
                                        readonly examples: readonly [1234];
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                    };
                                    readonly feedback_enabled: {
                                        readonly type: "boolean";
                                        readonly examples: readonly [true];
                                    };
                                    readonly feedback_domain: {
                                        readonly type: "string";
                                        readonly examples: readonly ["default"];
                                    };
                                    readonly feedback_html: {
                                        readonly type: "string";
                                    };
                                    readonly feedback_text: {
                                        readonly type: "string";
                                    };
                                    readonly archive_enabled: {
                                        readonly type: "boolean";
                                        readonly examples: readonly [true];
                                    };
                                    readonly open_tracking_enabled: {
                                        readonly type: "boolean";
                                        readonly examples: readonly [true];
                                    };
                                    readonly audit_email: {
                                        readonly type: "string";
                                    };
                                    readonly bounce_notifications: {
                                        readonly type: "string";
                                        readonly examples: readonly ["from"];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const EditApiKey: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["id"];
        readonly properties: {
            readonly id: {
                readonly type: "string";
                readonly description: "The ID of the existing API key you wish to edit.";
                readonly examples: readonly ["api-00000000000000000000000000000000"];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "A comment or description of your new API key";
                readonly examples: readonly ["test api key"];
            };
            readonly custom_ratelimit: {
                readonly type: "boolean";
                readonly description: "If true, a custom rate limit will be enabled for this user, and defined by the <code>custom_ratelimit_value</code> and <code>custom_ratelimit_period</code>.";
            };
            readonly custom_ratelimit_value: {
                readonly type: "integer";
                readonly description: "If passed, defines the limit of emails this user can send in the period specified in <code>custom_ratelimit_period</code>.<br><br><strong>Note:</strong> Only stores this value if <code>custom_ratelimit</code> is true.";
            };
            readonly custom_ratelimit_period: {
                readonly type: "string";
                readonly description: "If passed, defines the period for which this user will be limited to the number of emails specified in <code>custom_ratelimit_value</code>.<br><br><strong>Syntax:</strong> \"\\<n\\> [hour[s]|day[s]|week[s]|month[s]] [hh:mm:ss]\".<br><br><strong>Examples: </strong> \"0:30:00\", \"1 hour\", \"2 days\", \"3 months\", \"4 months 5:00:00\".<br><br><strong>Note:</strong> Only stores this value if <code>custom_ratelimit</code> is true.";
                readonly examples: readonly ["0:30:00"];
            };
            readonly ip_pool: {
                readonly type: "integer";
                readonly description: "If passed, any emails sent with this API key will use dedicated IP's in this IP Pool, This value can be found on the <code>/v3/dedicated_ips/view</code> endpoint.";
                readonly examples: readonly [1234];
            };
            readonly feedback_enabled: {
                readonly type: "boolean";
                readonly description: "If true, custom feedback via the unsubscribe footer will be enabled and defined by the below settings.";
                readonly default: false;
            };
            readonly feedback_html: {
                readonly type: "string";
                readonly description: "The HTML content to insert into the custom feedback email body via the unsubscribe footer.<br><br><strong>System Variables (Only available here):</strong><ul><li>Unsubscribe URL = %%UNSUBSCRIBE%% </li><li>Email address = %%EMAIL%%</li></ul>";
                readonly examples: readonly ["test_html"];
            };
            readonly feedback_text: {
                readonly type: "string";
                readonly description: "The text content to insert into the custom feedback email body via the unsubscribe footer.<br><br><strong>System Variables (Only available here):</strong><ul><li>Unsubscribe URL = %%UNSUBSCRIBE%% </li><li>Email address = %%EMAIL%%</li></ul>";
                readonly examples: readonly ["test_text"];
            };
            readonly open_tracking_enabled: {
                readonly type: "boolean";
                readonly description: "If true, open tracking will be enabled for this API key.";
                readonly default: false;
            };
            readonly click_tracking_enabled: {
                readonly type: "boolean";
                readonly description: "If true, click tracking will be enabled for this API key.";
                readonly default: false;
            };
            readonly archive_enabled: {
                readonly type: "boolean";
                readonly description: "If true, archiving (available on paid plans) will be enabled for this API key.";
                readonly default: false;
            };
            readonly audit_email: {
                readonly type: "string";
                readonly description: "If passed, this email will be BCC'd on all emails sent by this API key.";
            };
            readonly bounce_notifications: {
                readonly type: "string";
                readonly description: "If passed, will control how bounce notifications are handled. Must be one of [from, drop, or a valid email address]. [from] will return the email to sender, [drop] will discard the event, and the inclusion of an email address will send the event on to this account.";
                readonly default: "from";
            };
            readonly status: {
                readonly type: "string";
                readonly description: "The initial status of the API key, one of ['allowed', 'blocked', 'sandbox'].";
                readonly default: "allowed";
            };
            readonly endpoints: {
                readonly type: "array";
                readonly description: "An array of endpoints that this API key will be allowed to use.<br /><br />A full list of endpoints can be found in the app under <code>Sending->API Keys->Permissions</code> or programatically via the API <a target=\"blank\" href=\"https://api.smtp2go.com/v3/api/index\">here</a>.<br /><br />We also accept wildcard patterns, for example to allow access to all email endpoints you can pass <code>[\"/email/*\"]</code>.<br /><br />To allow access to every endpoint simply pass <code>\"endpoints\": [\"*\"]</code>";
                readonly default: readonly ["/email/send"];
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly subaccount_id: {
                readonly type: "string";
                readonly description: "If you wish to make this API call on behalf of a subaccount then include its unique ID here.";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["data", "request_id"];
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly description: "An array of API key results";
                    readonly items: {
                        readonly type: "object";
                        readonly required: readonly ["request_id", "data"];
                        readonly properties: {
                            readonly request_id: {
                                readonly type: "string";
                                readonly examples: readonly ["aa253464-0bd0-467a-b24b-6159dcd7be60"];
                            };
                            readonly data: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly api_key: {
                                        readonly type: "string";
                                        readonly description: "The API key used to query the API.";
                                        readonly examples: readonly ["api-00000000000000000000000000000000"];
                                    };
                                    readonly username: {
                                        readonly type: "string";
                                        readonly description: "A shortened version of the API key which can be used to correlate data with some other API calls that also feature <code>username</code>.";
                                        readonly examples: readonly ["api-000000000000"];
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                        readonly description: "A comment or description of the API key.";
                                    };
                                    readonly custom_rate_limit: {
                                        readonly type: "boolean";
                                        readonly default: false;
                                        readonly description: "If enabled will use the values of <code>custom_ratelimit_value</code> and <code>custom_ratelimit_period</code> for rate limiting.";
                                        readonly examples: readonly [true];
                                    };
                                    readonly custom_ratelimit_value: {
                                        readonly type: "integer";
                                        readonly description: "If passed, defines the limit of emails this API key can send in the period specified in <code>custom_ratelimit_period</code>.";
                                        readonly examples: readonly [123];
                                    };
                                    readonly custom_ratelimit_period: {
                                        readonly type: "string";
                                        readonly description: "If passed, defines the period for which this user will be limited to the number of emails specified in <code>custom_ratelimit_value</code>.<br><br><strong>Syntax:</strong> \"\\<n\\> [hour[s]|day[s]|week[s]|month[s]] [hh:mm:ss]\".<br><br><strong>Examples: </strong> \"0:30:00\", \"1 hour\", \"2 days\", \"3 months\", \"4 months 5:00:00\".<br><br><strong>Note:</strong> Only stores this value if <code>custom_ratelimit</code> is true.";
                                        readonly examples: readonly ["0:30:00"];
                                    };
                                    readonly default_ratelimit_value: {
                                        readonly type: "string";
                                        readonly description: "The default limit of emails this API key can send in the period specified in <code>default_ratelimit_period</code>. <strong>Note:</strong> Used if <code>custom_ratelimit</code> is false.";
                                        readonly examples: readonly [123];
                                    };
                                    readonly default_ratelimit_period: {
                                        readonly type: "string";
                                        readonly description: "The default period for which this API key will be limited to the number of emails specified in <code>default_ratelimit_value</code>.<br><br><strong>Syntax:</strong> \"\\<n\\> [hour[s]|day[s]|week[s]|month[s]] [hh:mm:ss]\".<br><br><strong>Examples: </strong> \"0:30:00\", \"1 hour\", \"2 days\", \"3 months\", \"4 months 5:00:00\".<br><br><strong>Note:</strong> Used if <code>custom_ratelimit</code> is false.";
                                        readonly examples: readonly ["unlimited"];
                                    };
                                    readonly ippool: {
                                        readonly type: "integer";
                                        readonly examples: readonly [1234];
                                    };
                                    readonly feedback_enabled: {
                                        readonly type: "boolean";
                                        readonly description: "If true, custom feedback via the unsubscribe footer will be enabled and defined by the below settings.";
                                        readonly default: false;
                                    };
                                    readonly feedback_html: {
                                        readonly type: "string";
                                        readonly description: "The HTML content to insert into the custom feedback email body via the unsubscribe footer.  Default: blank <br><br><strong>System Variables (Only available here):</strong><ul><li>Unsubscribe URL = %%UNSUBSCRIBE%% </li><li>Email address = %%EMAIL%%</li></ul>";
                                    };
                                    readonly feedback_text: {
                                        readonly type: "string";
                                        readonly description: "The text content to insert into the custom feedback email body via the unsubscribe footer.  Default: blank<br><br><strong>System Variables (Only available here):</strong><ul><li>Unsubscribe URL = %%UNSUBSCRIBE%% </li><li>Email address = %%EMAIL%%</li></ul>";
                                    };
                                    readonly open_tracking_enabled: {
                                        readonly type: "boolean";
                                        readonly description: "If true, open tracking will be enabled for this API key.";
                                        readonly default: false;
                                    };
                                    readonly click_tracking_enabled: {
                                        readonly type: "boolean";
                                        readonly description: "If true, click tracking will be enabled for this API key.";
                                        readonly default: false;
                                    };
                                    readonly archive_enabled: {
                                        readonly type: "boolean";
                                        readonly description: "If true, archiving (available on paid plans) will be enabled for this API key.";
                                        readonly default: false;
                                    };
                                    readonly audit_email: {
                                        readonly type: "string";
                                        readonly description: "If passed, this email will be BCC'd on all emails sent by this API key.";
                                    };
                                    readonly bounce_notifications: {
                                        readonly type: "string";
                                        readonly description: "If passed, will control how bounce notifications are handled. Must be one of [from, drop, or a valid email address]. [from] will return the email to sender, [drop] will discard the event, and the inclusion of an email address will send the event on to this account.";
                                        readonly default: "from";
                                    };
                                    readonly status: {
                                        readonly type: "string";
                                        readonly description: "The initial status of the API key, one of ['allowed', 'blocked', 'sandbox'].";
                                        readonly default: "allowed";
                                    };
                                    readonly endpoints: {
                                        readonly type: "array";
                                        readonly description: "An array of endpoints that this API key will be allowed to use.";
                                        readonly default: readonly ["/email/send"];
                                        readonly items: {};
                                    };
                                };
                            };
                        };
                    };
                };
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["4b661d88-6b2d-11eb-8bb3-f23c92bb31d2"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const EditReturnPathDomain: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["domain", "old_subdomain", "new_subdomain"];
        readonly properties: {
            readonly domain: {
                readonly type: "string";
                readonly description: "The sender domain to edit the return-path subdomain for";
            };
            readonly old_subdomain: {
                readonly type: "string";
                readonly description: "The domains old return-path subdomain";
                readonly default: "returns";
            };
            readonly new_subdomain: {
                readonly type: "string";
                readonly description: "The domains new return-path subdomain";
                readonly default: "return";
            };
            readonly subaccount_id: {
                readonly type: "string";
                readonly description: "If you wish to make this API call on behalf of a subaccount then include its unique ID here";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["e023461c-8c86-11e9-b984-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["domains"];
                    readonly properties: {
                        readonly domains: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly domain: {
                                        readonly type: "object";
                                        readonly required: readonly ["dkim_value", "domain", "suffix", "rpath_status", "rpath_value", "dkim_status", "subdomain", "fulldomain", "dkim_selector"];
                                        readonly properties: {
                                            readonly dkim_value: {
                                                readonly type: "string";
                                                readonly examples: readonly ["dkim.smtp2go.net"];
                                            };
                                            readonly domain: {
                                                readonly type: "string";
                                                readonly examples: readonly ["example"];
                                            };
                                            readonly suffix: {
                                                readonly type: "string";
                                                readonly examples: readonly ["com"];
                                            };
                                            readonly rpath_selector: {
                                                readonly type: "string";
                                                readonly examples: readonly [""];
                                            };
                                            readonly rpath_status: {
                                                readonly type: "string";
                                                readonly examples: readonly [""];
                                            };
                                            readonly rpath_verified: {
                                                readonly type: "boolean";
                                                readonly default: true;
                                                readonly examples: readonly [true];
                                            };
                                            readonly rpath_value: {
                                                readonly type: "string";
                                                readonly examples: readonly ["return.smtp2go.net"];
                                            };
                                            readonly dkim_status: {
                                                readonly type: "string";
                                                readonly examples: readonly [""];
                                            };
                                            readonly dkim_verified: {
                                                readonly type: "boolean";
                                                readonly default: true;
                                                readonly examples: readonly [true];
                                            };
                                            readonly subdomain: {};
                                            readonly fulldomain: {
                                                readonly type: "string";
                                                readonly examples: readonly ["example.com"];
                                            };
                                            readonly dkim_selector: {
                                                readonly type: "string";
                                                readonly examples: readonly ["s123456"];
                                            };
                                        };
                                    };
                                    readonly trackers: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly required: readonly ["cname_value", "cname_status"];
                                            readonly properties: {
                                                readonly cname_value: {
                                                    readonly type: "string";
                                                    readonly examples: readonly [""];
                                                };
                                                readonly cname_status: {
                                                    readonly type: "string";
                                                    readonly examples: readonly [""];
                                                };
                                                readonly cname_verified: {
                                                    readonly type: "boolean";
                                                    readonly default: true;
                                                    readonly examples: readonly [false];
                                                };
                                                readonly domain: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["example"];
                                                };
                                                readonly suffix: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["com"];
                                                };
                                                readonly subdomain: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["link"];
                                                };
                                                readonly enabled: {
                                                    readonly type: "boolean";
                                                    readonly default: true;
                                                    readonly examples: readonly [false];
                                                };
                                                readonly fulldomain: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["link.example.com"];
                                                };
                                            };
                                        };
                                    };
                                    readonly subaccount_access: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly subaccounts: {
                                                readonly type: "array";
                                                readonly description: "A list of subaccount IDs that were given access the sender domain.";
                                                readonly items: {};
                                            };
                                            readonly future_subaccounts: {
                                                readonly type: "boolean";
                                                readonly description: "If true, any new subaccounts added will automatically be given access.";
                                                readonly default: false;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const EditSubaccountAccess: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["domain", "subaccounts"];
        readonly properties: {
            readonly domain: {
                readonly type: "string";
                readonly description: "The sender domain to edit subaccount access for";
            };
            readonly subaccounts: {
                readonly type: "array";
                readonly description: "A list of subaccount_ids to be given access. ID's can be found by querying <code>/subaccounts/search</code>";
                readonly items: {};
            };
            readonly future_subaccounts: {
                readonly type: "boolean";
                readonly description: "If set to true, will automatically add any new subaccounts to the access list";
                readonly default: false;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly domain: {
                    readonly type: "string";
                    readonly description: "The sender domain that was modified.";
                };
                readonly subaccounts: {
                    readonly type: "array";
                    readonly description: "A list of subaccount IDs that were given access the sender domain.";
                    readonly items: {};
                };
                readonly future_subaccounts: {
                    readonly type: "boolean";
                    readonly description: "If true, any new subaccounts added will automatically be given access.";
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const EditTrackingDomain: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["domain", "old_subdomain", "new_subdomain"];
        readonly properties: {
            readonly domain: {
                readonly type: "string";
                readonly description: "The sender domain to edit the tracking subdomain for";
                readonly default: any;
            };
            readonly old_subdomain: {
                readonly type: "string";
                readonly description: "The domains old tracking subdomain";
                readonly default: "track";
            };
            readonly new_subdomain: {
                readonly type: "string";
                readonly description: "The domains new tracking subdomain";
                readonly default: "link";
            };
            readonly subaccount_id: {
                readonly type: "string";
                readonly description: "If you wish to make this API call on behalf of a subaccount then include its unique ID here";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["e023461c-8c86-11e9-b984-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["domains"];
                    readonly properties: {
                        readonly domains: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly domain: {
                                        readonly type: "object";
                                        readonly required: readonly ["dkim_value", "domain", "suffix", "rpath_status", "rpath_value", "dkim_status", "subdomain", "fulldomain", "dkim_selector"];
                                        readonly properties: {
                                            readonly dkim_value: {
                                                readonly type: "string";
                                                readonly examples: readonly ["dkim.smtp2go.net"];
                                            };
                                            readonly domain: {
                                                readonly type: "string";
                                                readonly examples: readonly ["example"];
                                            };
                                            readonly suffix: {
                                                readonly type: "string";
                                                readonly examples: readonly ["com"];
                                            };
                                            readonly rpath_selector: {
                                                readonly type: "string";
                                                readonly examples: readonly [""];
                                            };
                                            readonly rpath_status: {
                                                readonly type: "string";
                                                readonly examples: readonly [""];
                                            };
                                            readonly rpath_verified: {
                                                readonly type: "boolean";
                                                readonly default: true;
                                                readonly examples: readonly [true];
                                            };
                                            readonly rpath_value: {
                                                readonly type: "string";
                                                readonly examples: readonly ["return.smtp2go.net"];
                                            };
                                            readonly dkim_status: {
                                                readonly type: "string";
                                                readonly examples: readonly [""];
                                            };
                                            readonly dkim_verified: {
                                                readonly type: "boolean";
                                                readonly default: true;
                                                readonly examples: readonly [true];
                                            };
                                            readonly subdomain: {};
                                            readonly fulldomain: {
                                                readonly type: "string";
                                                readonly examples: readonly ["example.com"];
                                            };
                                            readonly dkim_selector: {
                                                readonly type: "string";
                                                readonly examples: readonly ["s123456"];
                                            };
                                        };
                                    };
                                    readonly trackers: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly required: readonly ["cname_value", "cname_status"];
                                            readonly properties: {
                                                readonly cname_value: {
                                                    readonly type: "string";
                                                    readonly examples: readonly [""];
                                                };
                                                readonly cname_status: {
                                                    readonly type: "string";
                                                    readonly examples: readonly [""];
                                                };
                                                readonly cname_verified: {
                                                    readonly type: "boolean";
                                                    readonly default: true;
                                                    readonly examples: readonly [false];
                                                };
                                                readonly domain: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["example"];
                                                };
                                                readonly suffix: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["com"];
                                                };
                                                readonly subdomain: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["link"];
                                                };
                                                readonly enabled: {
                                                    readonly type: "boolean";
                                                    readonly default: true;
                                                    readonly examples: readonly [false];
                                                };
                                                readonly fulldomain: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["link.example.com"];
                                                };
                                            };
                                        };
                                    };
                                    readonly subaccount_access: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly subaccounts: {
                                                readonly type: "array";
                                                readonly description: "A list of subaccount IDs that were given access the sender domain.";
                                                readonly items: {};
                                            };
                                            readonly future_subaccounts: {
                                                readonly type: "boolean";
                                                readonly description: "If true, any new subaccounts added will automatically be given access.";
                                                readonly default: false;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const EditWebhook: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["id"];
        readonly properties: {
            readonly id: {
                readonly type: "integer";
                readonly description: "The ID of an existing webhook you want to edit";
            };
            readonly url: {
                readonly type: "string";
                readonly description: "The URL of the webhook.";
            };
            readonly events: {
                readonly type: "array";
                readonly description: "A list of events the webhook will receive, from this list [<code>delivered</code>,<code>unsubscribe</code>,<code>spam</code>,<code>bounce</code>,<code>processed</code>,<code>reject</code>,<code>click</code>,<code>open</code>].";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly sms_events: {
                readonly type: "array";
                readonly description: "A list of SMS events the webhook will receive, from this list [<code>delivered</code>,<code>failed</code>,<code>rejected</code>,<code>sending</code>,<code>submitted</code>].";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly headers: {
                readonly type: "array";
                readonly description: "Custom headers you would specifically like sent in the event data. The headers must already exist in the emails. Subject and Message-id headers are sent by default.";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly usernames: {
                readonly type: "array";
                readonly description: "Usernames to be included in this webhook. All usernames will be included if none are specified.";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly output_format: {
                readonly type: "string";
                readonly description: "The format of the webhook data. Either <code>form</code> or <code>json</code>";
                readonly default: "form";
            };
            readonly subaccount_id: {
                readonly type: "string";
                readonly description: "If you wish to make this API call on behalf of a subaccount then include its unique ID here.";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["data", "request_id"];
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly url: {
                            readonly type: "string";
                            readonly description: "The URL of the webhook.";
                            readonly examples: readonly ["https://example.com/test-webhook"];
                        };
                        readonly id: {
                            readonly type: "integer";
                            readonly description: "The ID of the webhook.";
                        };
                        readonly events: {
                            readonly type: "array";
                            readonly description: "A list of events the webhook will receive, from this list [<code>delivered</code>,<code>unsubscribe</code>,<code>spam</code>,<code>bounce</code>,<code>processed</code>,<code>reject</code>,<code>click</code>,<code>open</code>].";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly sms_events: {
                            readonly type: "array";
                            readonly description: "A list of SMS events the webhook will receive, from this list [<code>delivered</code>,<code>failed</code>,<code>rejected</code>,<code>sending</code>,<code>submitted</code>].";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly headers: {
                            readonly type: "array";
                            readonly description: "Custom headers you would specifically like sent in the event data. The headers must already exist in the emails. Subject and Message-id headers are sent by default.";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly usernames: {
                            readonly type: "array";
                            readonly description: "Usernames to be included in this webhook. All usernames will be included if none are specified.";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly output_format: {
                            readonly type: "string";
                            readonly description: "The format of the webhook data. Either <code>form</code> or <code>json</code>.";
                            readonly default: "form";
                        };
                    };
                };
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["4b661d88-6b2d-11eb-8bb3-f23c92bb31d2"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const EmailBounces: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly [];
        readonly properties: {
            readonly username: {
                readonly type: "string";
                readonly description: "Allows statistics to be returned for a specific user.";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["2917fc07-d685-4fea-b49a-14087058461f"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["emails", "hardbounces", "bounce_percent", "softbounces", "rejects"];
                    readonly properties: {
                        readonly emails: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [159];
                        };
                        readonly hardbounces: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [0];
                        };
                        readonly bounce_percent: {
                            readonly type: "string";
                            readonly examples: readonly ["0.00"];
                        };
                        readonly softbounces: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [0];
                        };
                        readonly rejects: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [0];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const EmailCycle: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["4b84c952-9bca-432f-a68e-585e4c7a969c"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["cycle_end", "cycle_used", "cycle_start", "cycle_max", "cycle_remaining"];
                    readonly properties: {
                        readonly cycle_end: {
                            readonly type: "string";
                            readonly examples: readonly ["2016-08-04 01:49:15.863998"];
                        };
                        readonly cycle_used: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [0];
                        };
                        readonly cycle_start: {
                            readonly type: "string";
                            readonly examples: readonly ["2016-08-01 01:49:15.863998"];
                        };
                        readonly cycle_max: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [1000];
                        };
                        readonly cycle_remaining: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [1000];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const EmailHistory: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly group_by: {
                readonly type: "string";
                readonly description: "One of [<code>email_address</code>, <code>username</code>, <code>domain</code>, <code>subaccount</code>] - controls the grouping of results. Defaults to <code>email_address</code>";
            };
            readonly start_date: {
                readonly type: "string";
                readonly description: "ISO-8601 formatted datetime which defaults to 30 days prior to the current date at midnight. Timezone is UTC";
            };
            readonly end_date: {
                readonly type: "string";
                readonly description: "ISO-8601 formatted datetime which defaults the current time. Timezone is UTC";
            };
            readonly subaccounts: {
                readonly type: "array";
                readonly description: "Pass an optional list of subaccount ids to fetch a summary of only particular subaccounts, ID's can be found by querying <code>/subaccounts/search</code>";
                readonly items: {};
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["f3898083-f5d5-4512-86bd-e02bd1685840"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["count", "history"];
                    readonly properties: {
                        readonly count: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [159];
                        };
                        readonly history: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly required: readonly ["lastip", "used", "bytecount", "avgsize"];
                                readonly properties: {
                                    readonly subaccount: {
                                        readonly type: "string";
                                        readonly description: "Only returned if <code>group_by</code> is set to <code>subaccount</code>";
                                        readonly examples: readonly ["My Subaccount Name"];
                                    };
                                    readonly domain: {
                                        readonly type: "string";
                                        readonly description: "Only returned if <code>group_by</code> is set to <code>domain</code>";
                                        readonly examples: readonly ["test.com"];
                                    };
                                    readonly domain_verified: {
                                        readonly type: "boolean";
                                        readonly description: "Only returned if <code>group_by</code> is set to <code>domain</code>";
                                        readonly examples: readonly [true];
                                    };
                                    readonly lastip: {
                                        readonly type: "string";
                                        readonly examples: readonly ["55.67.22.12"];
                                    };
                                    readonly used: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [123];
                                    };
                                    readonly email_address: {
                                        readonly type: "string";
                                        readonly description: "Only returned if <code>group_by</code> is set to <code>email_address</code>";
                                        readonly examples: readonly ["test3@example.com"];
                                    };
                                    readonly username: {
                                        readonly type: "string";
                                        readonly description: "Only returned if <code>group_by</code> is set to <code>username</code>";
                                        readonly examples: readonly ["my_user"];
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                        readonly description: "A comment or description of the user, Only returned if <code>group_by</code> is set to <code>username</code>";
                                    };
                                    readonly bytecount: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [148113];
                                    };
                                    readonly avgsize: {
                                        readonly type: "number";
                                        readonly default: 0;
                                        readonly examples: readonly [1204.1707317073171];
                                    };
                                    readonly bounces: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [123];
                                    };
                                    readonly clicks: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [123];
                                    };
                                    readonly opens: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [123];
                                    };
                                    readonly rejects: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [123];
                                    };
                                    readonly spam: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [123];
                                    };
                                    readonly unsubscribes: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [123];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const EmailSpam: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly [];
        readonly properties: {
            readonly username: {
                readonly type: "string";
                readonly description: "Allows statistics to be returned for a specific user.";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["0757ba83-9dfc-4584-bb0c-baa06a28a377"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["spam_percent", "emails", "spams", "rejects"];
                    readonly properties: {
                        readonly spam_percent: {
                            readonly type: "string";
                            readonly examples: readonly ["0.00"];
                        };
                        readonly emails: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [159];
                        };
                        readonly spams: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [0];
                        };
                        readonly rejects: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [0];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const EmailSummary: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly username: {
                readonly type: "string";
                readonly description: "Allows statistics to be returned for a specific user";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["72f48187-64d9-4a2f-ba9c-527a2a7911f7"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["cycle_end", "spam_rejects", "bounce_percent", "unsubscribes", "bounce_rejects", "spam_percent", "softbounces", "cycle_max", "spam_emails", "cycle_remaining", "cycle_start", "unsubscribe_percent", "cycle_used", "hardbounces", "email_count", "opens", "clicks", "rejects"];
                    readonly properties: {
                        readonly cycle_end: {
                            readonly type: "string";
                            readonly examples: readonly ["2016-08-04 01:49:15.863998"];
                        };
                        readonly spam_rejects: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly deprecated: true;
                            readonly examples: readonly [1];
                        };
                        readonly bounce_percent: {
                            readonly type: "string";
                            readonly examples: readonly ["7.33"];
                        };
                        readonly unsubscribes: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [32];
                        };
                        readonly bounce_rejects: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly deprecated: true;
                            readonly examples: readonly [11];
                        };
                        readonly spam_percent: {
                            readonly type: "string";
                            readonly examples: readonly ["1.33"];
                        };
                        readonly softbounces: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [6];
                        };
                        readonly cycle_max: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [1000];
                        };
                        readonly spam_emails: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [2];
                        };
                        readonly cycle_remaining: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [850];
                        };
                        readonly cycle_start: {
                            readonly type: "string";
                            readonly examples: readonly ["2016-08-01 01:49:15.863998"];
                        };
                        readonly unsubscribe_percent: {
                            readonly type: "string";
                            readonly examples: readonly ["21.33"];
                        };
                        readonly cycle_used: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [150];
                        };
                        readonly hardbounces: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [5];
                        };
                        readonly email_count: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [150];
                        };
                        readonly opens: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [123];
                        };
                        readonly clicks: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [321];
                        };
                        readonly rejects: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [11];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const EmailUnsubscribes: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly [];
        readonly properties: {
            readonly username: {
                readonly type: "string";
                readonly description: "Allows statistics to be returned for a specific user.";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["e6e94157-90c7-496d-abdf-a5fef899ad54"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["emails", "unsubscribes", "rejects", "unsubscribe_percent"];
                    readonly properties: {
                        readonly emails: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [159];
                        };
                        readonly unsubscribes: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [0];
                        };
                        readonly rejects: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [0];
                        };
                        readonly unsubscribe_percent: {
                            readonly type: "string";
                            readonly examples: readonly ["0.00"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const RemoveASingleSenderEmail: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["email_address"];
        readonly properties: {
            readonly email_address: {
                readonly type: "string";
                readonly description: "The email address to remove from your Single Sender Emails";
                readonly default: "send@example.com";
            };
            readonly subaccount_id: {
                readonly type: "string";
                readonly description: "If you wish to make this API call on behalf of a subaccount then include its unique ID here";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "string";
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const RemoveASuppression: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["email_address", "reasons"];
        readonly properties: {
            readonly email_address: {
                readonly type: "string";
                readonly description: "The email address or domain you would like to remove from your suppression list";
                readonly default: "test@example.com";
            };
            readonly reasons: {
                readonly type: "array";
                readonly description: "A list of block types you would like to remove for the given email or domain";
                readonly default: readonly ["manual", "spam"];
                readonly items: {
                    readonly type: "string";
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["aa253464-0bd0-467a-b24b-6159dcd7be60"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["suppressions"];
                    readonly properties: {
                        readonly suppressions: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly required: readonly ["reason", "email_address", "removed"];
                                readonly properties: {
                                    readonly reason: {
                                        readonly type: "string";
                                        readonly examples: readonly ["manual"];
                                    };
                                    readonly email_address: {
                                        readonly type: "string";
                                        readonly examples: readonly ["test@example.com"];
                                    };
                                    readonly removed: {
                                        readonly type: "boolean";
                                        readonly default: true;
                                        readonly examples: readonly [true];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const RemoveAllowedSenders: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["allowed_senders"];
        readonly properties: {
            readonly allowed_senders: {
                readonly type: "array";
                readonly description: "Array of email addresses and domain names to remove.";
                readonly default: readonly ["test-person@example.com"];
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly subaccount_id: {
                readonly type: "string";
                readonly description: "If you wish to make this API call on behalf of a subaccount then include its unique ID here";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["40cbb6f2-935f-11e7-b5be-480fcf01a6f2"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["allowed_senders", "mode"];
                    readonly properties: {
                        readonly allowed_senders: {
                            readonly type: "array";
                            readonly description: "A list of email addresses and domain names";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["test-person@example.com"];
                            };
                        };
                        readonly mode: {
                            readonly type: "string";
                            readonly description: "A string indicating how the list of email address and domain names is interpreted.\n\n`whitelist` `blacklist` `disabled`";
                            readonly enum: readonly ["whitelist", "blacklist", "disabled"];
                            readonly examples: readonly ["whitelist"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const RemoveAnEmailTemplate: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["id"];
        readonly properties: {
            readonly id: {
                readonly type: "string";
                readonly description: "The case-sensitive ID of the email template that you wish to remove";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "string";
                    readonly examples: readonly ["Successfully deleted template 'example'"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const RemoveAnSmtpUser: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["username"];
        readonly properties: {
            readonly username: {
                readonly type: "string";
                readonly description: "A valid SMTP2GO username of your existing SMTP User that you wish to remove";
            };
            readonly subaccount_id: {
                readonly type: "string";
                readonly description: "If you wish to make this API call on behalf of a subaccount then include its unique ID here";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["aa253464-0bd0-467a-b24b-6159dcd7be60"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["results"];
                    readonly properties: {
                        readonly results: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly required: readonly ["username", "sending_allowed", "custom_ratelimit"];
                                readonly properties: {
                                    readonly comments: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Comment explaining how amazing this Test person is"];
                                    };
                                    readonly username: {
                                        readonly type: "string";
                                        readonly examples: readonly ["smtpuser@example.com"];
                                    };
                                    readonly email_password: {
                                        readonly type: "string";
                                        readonly examples: readonly ["H#8dkK2djs"];
                                    };
                                    readonly sending_allowed: {
                                        readonly type: "boolean";
                                        readonly default: true;
                                        readonly examples: readonly [true];
                                    };
                                    readonly custom_ratelimit: {
                                        readonly type: "boolean";
                                        readonly default: true;
                                        readonly examples: readonly [true];
                                    };
                                    readonly custom_ratelimit_value: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [100];
                                    };
                                    readonly custom_ratelimit_period: {
                                        readonly type: "string";
                                        readonly examples: readonly ["1 day"];
                                    };
                                    readonly default_ratelimit_value: {
                                        readonly type: "string";
                                        readonly description: "The default limit of emails this SMTP user can send in the period specified in <code>default_ratelimit_period</code>. <strong>Note:</strong> Used if <code>custom_ratelimit</code> is false.";
                                        readonly examples: readonly [123];
                                    };
                                    readonly default_ratelimit_period: {
                                        readonly type: "string";
                                        readonly description: "The default period for which this SMTP user will be limited to the number of emails specified in <code>default_ratelimit_value</code>.<br><br><strong>Syntax:</strong> \"\\<n\\> [hour[s]|day[s]|week[s]|month[s]] [hh:mm:ss]\".<br><br><strong>Examples: </strong> \"0:30:00\", \"1 hour\", \"2 days\", \"3 months\", \"4 months 5:00:00\".<br><br><strong>Note:</strong> Used if <code>custom_ratelimit</code> is false.";
                                        readonly examples: readonly ["unlimited"];
                                    };
                                    readonly ippool: {
                                        readonly type: "integer";
                                        readonly examples: readonly [1234];
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                    };
                                    readonly feedback_enabled: {
                                        readonly type: "boolean";
                                        readonly examples: readonly [true];
                                    };
                                    readonly feedback_domain: {
                                        readonly type: "string";
                                        readonly examples: readonly ["default"];
                                    };
                                    readonly feedback_html: {
                                        readonly type: "string";
                                    };
                                    readonly feedback_text: {
                                        readonly type: "string";
                                    };
                                    readonly archive_enabled: {
                                        readonly type: "boolean";
                                        readonly examples: readonly [true];
                                    };
                                    readonly open_tracking_enabled: {
                                        readonly type: "boolean";
                                        readonly examples: readonly [true];
                                    };
                                    readonly audit_email: {
                                        readonly type: "string";
                                    };
                                    readonly bounce_notifications: {
                                        readonly type: "string";
                                        readonly examples: readonly ["from"];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const RemoveApiKey: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["id"];
        readonly properties: {
            readonly id: {
                readonly type: "string";
                readonly description: "The ID of the existing API key you wish to remove.";
                readonly examples: readonly ["api-00000000000000000000000000000000"];
            };
            readonly subaccount_id: {
                readonly type: "string";
                readonly description: "If you wish to make this API call on behalf of a subaccount then include its unique ID here.";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const RemoveScheduledEmail: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["schedule_id"];
        readonly properties: {
            readonly schedule_id: {
                readonly type: "string";
                readonly description: "The schedule_id returned from the <code>/v3/email/batch</code> or [<code>/v3/email/send</code>, <code>/v3/email/mime</code>] (when <code>schedule</code> is passed)";
                readonly examples: readonly ["fe7d54d0-8f06-40c5-a675-d72f183e8ebf"];
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const RemoveSenderDomain: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["domain"];
        readonly properties: {
            readonly domain: {
                readonly type: "string";
                readonly description: "Sender Domain to delete.";
            };
            readonly subaccount_id: {
                readonly type: "string";
                readonly description: "If you wish to make this API call on behalf of a subaccount then include its unique ID here";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["e023461c-8c86-11e9-b984-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["domains"];
                    readonly properties: {
                        readonly domains: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly domain: {
                                        readonly type: "object";
                                        readonly required: readonly ["dkim_value", "domain", "suffix", "rpath_status", "rpath_value", "dkim_status", "subdomain", "fulldomain", "dkim_selector"];
                                        readonly properties: {
                                            readonly dkim_value: {
                                                readonly type: "string";
                                                readonly examples: readonly ["dkim.smtp2go.net"];
                                            };
                                            readonly domain: {
                                                readonly type: "string";
                                                readonly examples: readonly ["example"];
                                            };
                                            readonly suffix: {
                                                readonly type: "string";
                                                readonly examples: readonly ["com"];
                                            };
                                            readonly rpath_selector: {
                                                readonly type: "string";
                                                readonly examples: readonly [""];
                                            };
                                            readonly rpath_status: {
                                                readonly type: "string";
                                                readonly examples: readonly [""];
                                            };
                                            readonly rpath_verified: {
                                                readonly type: "boolean";
                                                readonly default: true;
                                                readonly examples: readonly [true];
                                            };
                                            readonly rpath_value: {
                                                readonly type: "string";
                                                readonly examples: readonly ["return.smtp2go.net"];
                                            };
                                            readonly dkim_status: {
                                                readonly type: "string";
                                                readonly examples: readonly [""];
                                            };
                                            readonly dkim_verified: {
                                                readonly type: "boolean";
                                                readonly default: true;
                                                readonly examples: readonly [true];
                                            };
                                            readonly subdomain: {};
                                            readonly fulldomain: {
                                                readonly type: "string";
                                                readonly examples: readonly ["example.com"];
                                            };
                                            readonly dkim_selector: {
                                                readonly type: "string";
                                                readonly examples: readonly ["s123456"];
                                            };
                                        };
                                    };
                                    readonly trackers: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly required: readonly ["cname_value", "cname_status"];
                                            readonly properties: {
                                                readonly cname_value: {
                                                    readonly type: "string";
                                                    readonly examples: readonly [""];
                                                };
                                                readonly cname_status: {
                                                    readonly type: "string";
                                                    readonly examples: readonly [""];
                                                };
                                                readonly cname_verified: {
                                                    readonly type: "boolean";
                                                    readonly default: true;
                                                    readonly examples: readonly [false];
                                                };
                                                readonly domain: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["example"];
                                                };
                                                readonly suffix: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["com"];
                                                };
                                                readonly subdomain: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["link"];
                                                };
                                                readonly enabled: {
                                                    readonly type: "boolean";
                                                    readonly default: true;
                                                    readonly examples: readonly [false];
                                                };
                                                readonly fulldomain: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["link.example.com"];
                                                };
                                            };
                                        };
                                    };
                                    readonly subaccount_access: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly subaccounts: {
                                                readonly type: "array";
                                                readonly description: "A list of subaccount IDs that were given access the sender domain.";
                                                readonly items: {};
                                            };
                                            readonly future_subaccounts: {
                                                readonly type: "boolean";
                                                readonly description: "If true, any new subaccounts added will automatically be given access.";
                                                readonly default: false;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const RemoveWebhook: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["id"];
        readonly properties: {
            readonly id: {
                readonly type: "integer";
                readonly description: "The ID of an existing webhook you want to remove";
            };
            readonly subaccount_id: {
                readonly type: "string";
                readonly description: "If you wish to make this API call on behalf of a subaccount then include its unique ID here.";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["data", "request_id"];
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly url: {
                            readonly type: "string";
                            readonly description: "The URL of the webhook.";
                            readonly examples: readonly ["https://example.com/test-webhook"];
                        };
                        readonly id: {
                            readonly type: "integer";
                            readonly description: "The ID of the webhook.";
                        };
                        readonly events: {
                            readonly type: "array";
                            readonly description: "A list of events the webhook will receive, from this list [<code>delivered</code>,<code>unsubscribe</code>,<code>spam</code>,<code>bounce</code>,<code>processed</code>,<code>reject</code>,<code>click</code>,<code>open</code>].";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly sms_events: {
                            readonly type: "array";
                            readonly description: "A list of SMS events the webhook will receive, from this list [<code>delivered</code>,<code>failed</code>,<code>rejected</code>,<code>sending</code>,<code>submitted</code>].";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly headers: {
                            readonly type: "array";
                            readonly description: "Custom headers you would specifically like sent in the event data. The headers must already exist in the emails. Subject and Message-id headers are sent by default.";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly usernames: {
                            readonly type: "array";
                            readonly description: "Usernames to be included in this webhook. All usernames will be included if none are specified.";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly output_format: {
                            readonly type: "string";
                            readonly description: "The format of the webhook data. Either <code>form</code> or <code>json</code>.";
                            readonly default: "form";
                        };
                    };
                };
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["4b661d88-6b2d-11eb-8bb3-f23c92bb31d2"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ReopenAClosedSubaccount: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["id"];
        readonly properties: {
            readonly email: {
                readonly type: "string";
                readonly description: "The email address of the subaccount you want to reopen";
            };
            readonly id: {
                readonly type: "string";
                readonly description: "The id of the subaccount you want to reopen";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["0ef3f48a-2cfb-11eb-aee9-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["id"];
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly examples: readonly ["NDU5OTgw"];
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly examples: readonly ["test@example.com"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Test Person"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ResendSubaccountInvitation: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["email"];
        readonly properties: {
            readonly email: {
                readonly type: "string";
                readonly description: "The email address of the subaccount you want to resend the invitation email to";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["0ef3f48a-2cfb-11eb-aee9-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["id"];
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly examples: readonly ["NDU5OTgw"];
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly examples: readonly ["test@example.com"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Test Person"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ScheduleEmailBatch: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["emails"];
        readonly properties: {
            readonly emails: {
                readonly type: "array";
                readonly description: "An array of email objects to schedule";
                readonly items: {
                    readonly type: "object";
                    readonly required: readonly ["id", "sender", "to", "subject"];
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "A unique ID assigned to this email payload, used to correlate the <code>id</code> and <code>schedule_id</code>";
                        };
                        readonly sender: {
                            readonly type: "string";
                            readonly description: "The name and email address to send from, in the format <code>Name &lt;name&#64;example.com&gt;</code>";
                            readonly examples: readonly ["John Smith <john@example.com>"];
                        };
                        readonly to: {
                            readonly type: "array";
                            readonly description: "An array of names and email addresses (up to 100) to send to, in the format <code>Name &lt;name&#64;example.com&gt;</code>";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["Jane Jones <jane@example.com>"];
                            };
                        };
                        readonly cc: {
                            readonly type: "array";
                            readonly description: "An array of names and email addresses (up to 100) to CC, in the format <code>Name &lt;name&#64;example.com&gt;</code>";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly bcc: {
                            readonly type: "array";
                            readonly description: "An array of names and email addresses (up to 100) to BCC, in the format <code>Name &lt;name&#64;example.com&gt;</code>";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly subject: {
                            readonly type: "string";
                            readonly description: "The subject of the email to be sent";
                            readonly examples: readonly ["My Test Email"];
                        };
                        readonly html_body: {
                            readonly type: "string";
                            readonly description: "A HTML encoded email body. Either html_body or text_body is required if template_id is not passed.<br><br> <strong>Warning:</strong><ul><li>To correctly track clicking of URLs you must:  <ul><li>Enable click tracking for the API key</li>  <li>Insert a full anchor HTML element (not just the URL)</li> <li>Include \"https://\" at the start of the HREF property</li> </ul></ul>";
                            readonly examples: readonly ["<h1>Test <img src=\"cid:mypicture.jpg\" /></h1>"];
                        };
                        readonly text_body: {
                            readonly type: "string";
                            readonly description: "A plain text email body. Either html_body or text_body is required if template_id is not passed";
                            readonly examples: readonly ["Test"];
                        };
                        readonly custom_headers: {
                            readonly type: "array";
                            readonly description: "An array of custom header objects to be applied to the email. For example, a <code>Reply-To</code> email can be specified here, with header <code>Reply-To</code> and value <code>name&#64;example.com</code>. For sending purposes the following headers are not allowed <code>Content-Type</code>, <code>Content-Transfer-Encoding</code> and <code>MIME-Version</code>.";
                            readonly items: {
                                readonly properties: {
                                    readonly header: {
                                        readonly type: "string";
                                        readonly description: "Custom header to add to the email";
                                    };
                                    readonly value: {
                                        readonly type: "string";
                                        readonly description: "Custom header value to set";
                                    };
                                };
                                readonly required: readonly ["header", "value"];
                                readonly type: "object";
                            };
                        };
                        readonly attachments: {
                            readonly type: "array";
                            readonly description: "An array of attachment objects to be attached to the email";
                            readonly items: {
                                readonly properties: {
                                    readonly filename: {
                                        readonly type: "string";
                                        readonly description: "The filename to use for this binary data";
                                        readonly examples: readonly ["report.pdf"];
                                    };
                                    readonly fileblob: {
                                        readonly type: "string";
                                        readonly description: "The Base64 encoded binary data of the file. Required if no url is specified.";
                                        readonly examples: readonly ["bm90IGFjdHVhbGx5IGEgcGRm..."];
                                    };
                                    readonly mimetype: {
                                        readonly type: "string";
                                        readonly description: "The mimetype of the binary data";
                                        readonly examples: readonly ["application/pdf"];
                                    };
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "A URL pointing to the attachment data. The data is directly retrieved by our system, and cached for fast re-use for 24 hours. Required if no fileblob is specified";
                                    };
                                };
                                readonly required: readonly ["filename"];
                                readonly type: "object";
                            };
                        };
                        readonly inlines: {
                            readonly type: "array";
                            readonly description: "An array of images to be inlined into the email. Use an image in content as <code>&lt;img src=\"cid:filename\"/&gt;</code>";
                            readonly items: {
                                readonly properties: {
                                    readonly filename: {
                                        readonly type: "string";
                                        readonly description: "The filename to use for this binary data";
                                        readonly examples: readonly ["mypicture.jpg"];
                                    };
                                    readonly fileblob: {
                                        readonly type: "string";
                                        readonly description: "The Base64 encoded binary data of the file. Required if no url is specified.";
                                    };
                                    readonly mimetype: {
                                        readonly type: "string";
                                        readonly description: "The mimetype of the binary data";
                                        readonly examples: readonly ["image/jpeg"];
                                    };
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "A URL pointing to the attachment data. The data is directly retrieved by our system, and cached for fast re-use for 24 hours. Required if no fileblob is specified";
                                        readonly examples: readonly ["https://myserver.com/mypicture.jpg"];
                                    };
                                };
                                readonly required: readonly ["filename"];
                                readonly type: "object";
                            };
                        };
                        readonly template_id: {
                            readonly type: "string";
                            readonly description: "The ID of the template you wish to use";
                        };
                        readonly template_data: {
                            readonly type: "string";
                            readonly description: "When a template_id is provided, include the pass-through values in the format <code>{\"variable1\": \"value1\", \"variable2\": \"value2\"}</code>";
                            readonly format: "json";
                        };
                    };
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["aa253464-0bd0-467a-b24b-6159dcd7be60"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const SearchActivity: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly start_date: {
                readonly type: "string";
                readonly descriiption: "ISO-8601 formatted datetime which defaults to current date at midnight. The range will be inclusive of start_date and exclusive of end_date. Timezone is UTC.Defaults to current date at midnight.<br><br>Valid formats are: <code>2006-01-02</code>, <code>2006-01-02 15:04:05</code>, <code>2006-01-02T15:04:05</code>, <code>2006-01-02T15:04:05.0000000</code>, <code>02 Jan 06 15:04 MST</code>, <code>02 Jan 06 15:04 -0700</code>, <code>2006-01-02T15:04:05Z07:00</code>, <code>2006-01-02T15:04:05.999999999Z07:00</code>, <code>Mon, 02 Jan 2006 15:04:05 MST</code>";
            };
            readonly end_date: {
                readonly type: "string";
                readonly description: "ISO-8601 formatted datetime which defaults to now. Timezone is UTC.Defaults to current date at midnight.<br><br>Valid formats are: <code>2006-01-02</code>, <code>2006-01-02 15:04:05</code>, <code>2006-01-02T15:04:05</code>, <code>2006-01-02T15:04:05.0000000</code>, <code>02 Jan 06 15:04 MST</code>, <code>02 Jan 06 15:04 -0700</code>, <code>2006-01-02T15:04:05Z07:00</code>, <code>2006-01-02T15:04:05.999999999Z07:00</code>, <code>Mon, 02 Jan 2006 15:04:05 MST</code>";
            };
            readonly search: {
                readonly type: "string";
                readonly description: "If passed, will return all events for emails containing this string in any search fields. To return events with one or more text values, separate the text with '|' (e.g. 'text1 | text2')";
            };
            readonly search_email_id: {
                readonly type: "string";
                readonly description: "If passed, will return all events for an email matching this specific id";
            };
            readonly search_subject: {
                readonly type: "string";
                readonly description: "If passed, will return all events for emails containing this string in the email subject";
            };
            readonly search_sender: {
                readonly type: "string";
                readonly description: "If passed, will return all events for emails containing this string in the email sender";
            };
            readonly search_recipient: {
                readonly type: "string";
                readonly description: "If passed, will return all events for emails containing this string in the email recipient";
            };
            readonly search_usernames: {
                readonly type: "array";
                readonly description: "If passed, will return all events for emails sent by this/these username/s";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly subaccounts: {
                readonly type: "array";
                readonly description: "If passed, will return all events for emails sent by this/these subaccount_id/s (as returned from the <code>/subaccount/search</code> endpoint or as shown in the App)";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly limit: {
                readonly type: "integer";
                readonly description: "The maximum number of events to return (Max: 1000)";
                readonly format: "int32";
                readonly default: 100;
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly continue_token: {
                readonly type: "string";
                readonly description: "If passed, will continue the search beyond the current page, using the same search parameters";
            };
            readonly only_latest: {
                readonly type: "boolean";
                readonly description: "If true, will only return the most recent event for each email returned.  Default: false";
            };
            readonly only_latest_by_sent: {
                readonly type: "boolean";
                readonly description: "If true, will only return the most recent event for each email returned ordered by sent date (overrides only_latest field).  Default: false";
            };
            readonly event_types: {
                readonly type: "array";
                readonly description: "If passed, will limit the returned events to the provided event types.<br><br><strong>Values:</strong> 'processed', 'soft-bounced', 'hard-bounced', 'rejected', 'spam', 'delivered', 'unsubscribed', 'resubscribed', 'opened', 'clicked'";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly include_headers: {
                readonly type: "boolean";
                readonly description: "Return the full email headers with the response";
                readonly default: false;
            };
            readonly custom_headers: {
                readonly type: "array";
                readonly description: "A list of header keys to parse out of the raw headers";
                readonly items: {
                    readonly type: "string";
                    readonly examples: readonly ["X-MyCustomID"];
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["data", "request_id"];
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["continue_token", "events", "total_events"];
                    readonly properties: {
                        readonly continue_token: {
                            readonly type: "string";
                            readonly examples: readonly ["..."];
                        };
                        readonly events: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly required: readonly ["from", "recipient", "subaccount_name", "email_id", "date", "event", "recipients", "subject", "username", "reply_to", "sender", "sender_full", "to", "cc", "bcc", "smtp_response", "reason", "host", "error", "email_client", "metadata", "outbound_ip", "byte_size", "headers", "custom_headers"];
                                readonly properties: {
                                    readonly from: {
                                        readonly type: "string";
                                        readonly examples: readonly ["no-reply@example.com"];
                                    };
                                    readonly recipient: {
                                        readonly type: "string";
                                        readonly examples: readonly ["someone@example.com"];
                                    };
                                    readonly subaccount_name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Master account"];
                                    };
                                    readonly email_id: {
                                        readonly type: "string";
                                        readonly description: "The unique ID of the email which generated the event";
                                        readonly examples: readonly ["1u0SwL-B9zBpi9ffUq-JAB2"];
                                    };
                                    readonly date: {
                                        readonly type: "string";
                                        readonly description: "An RFC3339 encoded timestamp with UTC timezone indicating the timestamp of the event";
                                        readonly examples: readonly ["2021-02-09T12:18:53Z"];
                                    };
                                    readonly event: {
                                        readonly type: "string";
                                        readonly description: "A string indicating the type of the event";
                                        readonly examples: readonly ["opened"];
                                    };
                                    readonly recipients: {
                                        readonly type: "array";
                                        readonly description: "The recipients of the email";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                        readonly examples: readonly ["['someone@example.com', 'someoneelse@example.com']"];
                                    };
                                    readonly subject: {
                                        readonly type: "string";
                                        readonly description: "The subject of the email";
                                        readonly examples: readonly ["Booking Confirmation"];
                                    };
                                    readonly username: {
                                        readonly type: "string";
                                        readonly description: "The username used to send the email";
                                        readonly examples: readonly ["smtpuser"];
                                    };
                                    readonly reply_to: {
                                        readonly type: "string";
                                        readonly description: "The value of the Reply-To header if present";
                                        readonly examples: readonly ["reply@example.com"];
                                    };
                                    readonly sender: {
                                        readonly type: "string";
                                        readonly description: "The From header of the email";
                                        readonly examples: readonly ["no-reply@example.com"];
                                    };
                                    readonly sender_full: {
                                        readonly type: "string";
                                        readonly description: "The From header of the email including name part if present";
                                        readonly examples: readonly ["NoReply <no-reply@example.com>"];
                                    };
                                    readonly to: {
                                        readonly type: "string";
                                        readonly description: "The value of the TO header";
                                        readonly examples: readonly ["otherperson@example.com"];
                                    };
                                    readonly cc: {
                                        readonly type: "string";
                                        readonly description: "The value of the CC header";
                                        readonly examples: readonly ["cc@example.com"];
                                    };
                                    readonly bcc: {
                                        readonly type: "string";
                                        readonly description: "The value of the BCC header";
                                        readonly examples: readonly ["bcc@example.com"];
                                    };
                                    readonly smtp_response: {
                                        readonly type: "string";
                                        readonly description: "The SMTP response of the mail server";
                                        readonly examples: readonly ["250 Message received"];
                                    };
                                    readonly reason: {
                                        readonly type: "string";
                                        readonly description: "The reason for an event occurring if present";
                                        readonly examples: readonly ["This was a spam email"];
                                    };
                                    readonly host: {
                                        readonly type: "string";
                                        readonly description: "The IP address of the host associated with the event";
                                        readonly examples: readonly ["127.0.0.1"];
                                    };
                                    readonly error: {
                                        readonly type: "string";
                                        readonly description: "The error message that occurred on certain events";
                                        readonly examples: readonly ["i/o timeout"];
                                    };
                                    readonly email_client: {
                                        readonly type: "object";
                                        readonly description: "Email client information";
                                        readonly additionalProperties: true;
                                    };
                                    readonly metadata: {
                                        readonly type: "object";
                                        readonly description: "Additional metadata for open/click events";
                                        readonly additionalProperties: true;
                                    };
                                    readonly outbound_ip: {
                                        readonly type: "string";
                                        readonly description: "The Outbound IP Address if available";
                                    };
                                    readonly byte_size: {
                                        readonly type: "integer";
                                        readonly description: "The size of the email in bytes";
                                    };
                                    readonly headers: {
                                        readonly type: "string";
                                        readonly description: "The full email headers if requested";
                                    };
                                    readonly custom_headers: {
                                        readonly type: "object";
                                        readonly description: "An dictionary of key/value pairs of custom headers";
                                        readonly additionalProperties: true;
                                    };
                                    readonly delivery_attempts: {
                                        readonly type: "array";
                                        readonly description: "A list of current delivery attempts if available (for processed events only)";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly smtptime: {
                                                    readonly type: "string";
                                                    readonly description: "An RFC3339 encoded timestamp with UTC timezone indicating the timestamp of the delivery attempt";
                                                };
                                                readonly host: {
                                                    readonly type: "string";
                                                    readonly description: "The host that generated the delivery attempt";
                                                };
                                                readonly smtpresponse: {
                                                    readonly type: "string";
                                                    readonly description: "The SMTP response from the target server";
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        readonly total_events: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly description: "The total events available to be returned.<br>The actual number of events returned will depend on the number available and the 'limit' passed.";
                            readonly examples: readonly [23405];
                        };
                    };
                };
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["4b661d88-6b2d-11eb-8bb3-f23c92bb31d2"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const SearchArchivedPages: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly start_date: {
                readonly type: "string";
                readonly description: "ISO-8601 formatted datetime which defaults to current date at midnight. The range will be inclusive of start_date and exclusive of end_date. Timezone is UTC.";
            };
            readonly end_date: {
                readonly type: "string";
                readonly description: "ISO-8601 formatted datetime which defaults to now. Timezone is UTC.";
            };
            readonly limit: {
                readonly type: "integer";
                readonly description: "The maximum number of emails to return (Default: 5,000)";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly username: {
                readonly type: "string";
                readonly description: "If passed, only return email details sent by this user";
            };
            readonly recipient: {
                readonly type: "string";
                readonly description: "If passed, only return emails with this recipient";
            };
            readonly sender: {
                readonly type: "string";
                readonly description: "If passed, only return emails with this sender";
            };
            readonly envelope_from: {
                readonly type: "string";
                readonly description: "If passed, only return emails with this envelope_from";
            };
            readonly subject: {
                readonly type: "string";
                readonly description: "If passed, only return emails with this subject";
            };
            readonly headers: {
                readonly type: "string";
                readonly description: "If passed, only return emails with this substring in the headers";
            };
            readonly continue_token: {
                readonly type: "string";
                readonly description: "If passed, will continue the previous search if too many results were found.";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["data", "request_id"];
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["email_count", "emails"];
                    readonly properties: {
                        readonly email_count: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [1];
                        };
                        readonly emails: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly required: readonly ["attachment_count", "attachments", "byte_count", "email_id", "envelope_from", "headers", "recipient", "sender", "sent", "subject", "to", "url", "username"];
                                readonly properties: {
                                    readonly attachment_count: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [0];
                                    };
                                    readonly attachments: {
                                        readonly type: "array";
                                        readonly items: {};
                                    };
                                    readonly byte_count: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [1422];
                                    };
                                    readonly email_id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["1u0SwL-B9zBpi9ffUq-JAB2"];
                                    };
                                    readonly envelope_from: {
                                        readonly type: "string";
                                        readonly examples: readonly ["test@test.com"];
                                    };
                                    readonly headers: {
                                        readonly type: "string";
                                        readonly examples: readonly ["..."];
                                    };
                                    readonly recipient: {
                                        readonly type: "string";
                                        readonly examples: readonly ["test@test.com"];
                                    };
                                    readonly sender: {
                                        readonly type: "string";
                                        readonly examples: readonly ["test@test.com"];
                                    };
                                    readonly sent: {
                                        readonly type: "string";
                                        readonly examples: readonly ["2021-11-08T18:58:47Z"];
                                    };
                                    readonly subject: {
                                        readonly type: "string";
                                        readonly examples: readonly ["test"];
                                    };
                                    readonly to: {
                                        readonly type: "string";
                                        readonly examples: readonly ["test@test.com"];
                                    };
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "A url that can be used to download the original email";
                                        readonly examples: readonly ["https://api.smtp2go.com/archive-attachment/..."];
                                    };
                                    readonly username: {
                                        readonly type: "string";
                                        readonly examples: readonly ["api-12345678"];
                                    };
                                };
                            };
                        };
                    };
                };
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["6eb05270-40f9-11ec-9649-f23c9216bfca"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const SearchEmailTemplates: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly fuzzy_search: {
                readonly type: "boolean";
                readonly description: "If provided, will determine whether search terms are matched exactly or using wildcards.  Default: false";
            };
            readonly search_terms: {
                readonly type: "array";
                readonly description: "If provided, will return email templates containing any of the strings provided in name, tag, id or subject fields.";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly tags: {
                readonly type: "array";
                readonly description: "If provided, will return email templates containing any of the tags provided";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly sort_direction: {
                readonly type: "string";
                readonly description: "If provided, will sort the returned email templates in ascending or descending order.  Default: asc<br><br><strong>Values:</strong> asc or desc";
            };
            readonly page_size: {
                readonly type: "integer";
                readonly description: "If provided, will limit the number of email templates returned. Default 100";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly continue_token: {
                readonly type: "string";
                readonly description: "If provided, will fetch the next page of results, following on from the previous page of results from which this continue token was returned";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["13ab6f3a-ddea-11eb-b4ce-1002b51e60a4"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly continue_token: {};
                        readonly templates: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly required: readonly ["id", "subject", "tags"];
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["5355878"];
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                        readonly description: "This parameter is only returned in 'search' response";
                                        readonly examples: readonly ["Order receipt"];
                                    };
                                    readonly template_name: {
                                        readonly type: "string";
                                        readonly description: "This parameter is not present in 'search' response";
                                        readonly examples: readonly ["Order receipt"];
                                    };
                                    readonly subject: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Order receipt for {{ product_name }}"];
                                    };
                                    readonly tags: {
                                        readonly type: "array";
                                        readonly required: readonly ["types", "example"];
                                        readonly items: {
                                            readonly type: "string";
                                            readonly examples: readonly ["one"];
                                        };
                                    };
                                    readonly last_updated: {
                                        readonly type: "string";
                                        readonly description: "A timestamp indicating when this template was last updated";
                                        readonly examples: readonly ["2024-01-01 12:00:00"];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const SearchScheduledEmails: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly [];
        readonly properties: {
            readonly search_subject: {
                readonly type: "string";
                readonly description: "The subject of the email you want to search for";
                readonly examples: readonly ["test subject"];
            };
            readonly search_recipient: {
                readonly type: "string";
                readonly description: "The recipient of the email you want to search for";
                readonly examples: readonly ["recipient@example.com"];
            };
            readonly search_sender: {
                readonly type: "string";
                readonly description: "The sender of the email you want to search for";
                readonly examples: readonly ["sender@example.com"];
            };
            readonly limit: {
                readonly type: "integer";
                readonly description: "If passed will limit the search results";
                readonly examples: readonly [100];
            };
            readonly page: {
                readonly type: "integer";
                readonly description: "If passed will return the results of the specific page";
                readonly examples: readonly [2];
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const SearchSubaccounts: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly fuzzy_search: {
                readonly type: "boolean";
                readonly description: "Determines if search terms match complete field values and are case sensitive (false) or partial fields and are case insensitive (true).  Default: true";
                readonly default: true;
            };
            readonly search_terms: {
                readonly type: "array";
                readonly description: "Return subaccounts with one or more of the strings in the following array.<br><br><strong>Note:</strong> See 'fuzzy_search' for impact on case sensitivity";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly states: {
                readonly type: "string";
                readonly description: "Controls which states you will be searched <br><br><strong>Valid values:</strong><br> all, active, closed,  suspended";
                readonly default: "all";
            };
            readonly sort_direction: {
                readonly type: "string";
                readonly description: "Sort direction, sorts either asc or desc by subaccount name";
                readonly default: "asc";
            };
            readonly page_size: {
                readonly type: "integer";
                readonly description: "Number of subaccounts to retrieve per call";
                readonly default: 100;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly continue_token: {
                readonly type: "string";
                readonly description: "A token provided by a prior call to this endpoint, passing this will cause it to fetch the next page of results";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["0ef3f48a-2cfb-11eb-aee9-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["continue_token", "total_count", "subaccounts"];
                    readonly properties: {
                        readonly continue_token: {};
                        readonly total_count: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [1];
                        };
                        readonly subaccounts: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly required: readonly ["email", "state", "plan_size", "plan_remaining", "plan_used", "name"];
                                readonly properties: {
                                    readonly email: {
                                        readonly type: "string";
                                        readonly examples: readonly ["matthew.juanita@gmail.com"];
                                    };
                                    readonly state: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Active"];
                                    };
                                    readonly plan_size: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [10000];
                                    };
                                    readonly plan_remaining: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [10000];
                                    };
                                    readonly plan_used: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [0];
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Matt & Juanita"];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const SendMimeEmail: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["mime_email"];
        readonly properties: {
            readonly mime_email: {
                readonly type: "string";
                readonly description: "A valid MIME-encoded string that has been Base64 encoded";
                readonly examples: readonly ["VG86IHRlc3RAZXhhbXBsZS5jb20KU3ViamVjdDogdGVzdApGcm9tOiBvdGhlckBleGFtcGxlLmNvbQoKdGVzdCBlbWFpbA=="];
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["aa253464-0bd0-467a-b24b-6159dcd7be60"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["failed", "failures", "succeeded", "email_id"];
                    readonly properties: {
                        readonly failed: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly description: "The number of emails that failed to send.<br><br>Note: An email with multiple recipients is classed as 1 email.";
                            readonly examples: readonly [0];
                        };
                        readonly failures: {
                            readonly type: "array";
                            readonly items: {};
                        };
                        readonly succeeded: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly description: "The number of emails that were successfully sent.<br><br>Note: An email with multiple recipients is classed as 1 email.";
                            readonly examples: readonly [1];
                        };
                        readonly email_id: {
                            readonly type: "string";
                            readonly description: "The email ID generated if successfully sent";
                            readonly examples: readonly ["1u0SwL-B9zBpi9ffUq-JAB2"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const SendSms: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["destination", "content"];
        readonly properties: {
            readonly destination: {
                readonly type: "array";
                readonly description: "An array of SMS numbers to send the message to (Maximum: 100 numbers). Numbers should include the country code of the recipient, and can optionally start with a plus symbol (+).";
                readonly items: {
                    readonly type: "string";
                    readonly examples: readonly ["+12025550959"];
                };
            };
            readonly sender: {
                readonly type: "string";
                readonly description: "The message will be sent from this number (must be in e.164 format). Leave empty to use the default sender number. If the source and destination are located in different countries, a shared number in the recipient's country will be used for sending.";
            };
            readonly content: {
                readonly type: "string";
                readonly description: "The content of the SMS. If more than 160 characters, will be sent as multiple units.";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["statuses", "total_sent"];
                    readonly properties: {
                        readonly statuses: {
                            readonly type: "object";
                            readonly required: readonly ["queued"];
                            readonly properties: {
                                readonly queued: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [1];
                                };
                            };
                        };
                        readonly total_sent: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [1];
                        };
                        readonly messages: {
                            readonly type: "array";
                            readonly description: "An array of objects containing the object of each message sent";
                            readonly items: {
                                readonly type: "object";
                                readonly required: readonly ["destination", "message_id", "status"];
                                readonly properties: {
                                    readonly destination: {
                                        readonly type: "string";
                                        readonly examples: readonly ["+12025550959"];
                                    };
                                    readonly message_id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["d6b0e06d-f031-4485-8e92-8141816b3a22"];
                                    };
                                    readonly status: {
                                        readonly type: "string";
                                        readonly enum: readonly ["processing", "enroute", "queued", "submitted", "processed", "delivered", "held", "expired", "cancelled", "failed", "rejected"];
                                        readonly examples: readonly ["queued"];
                                        readonly description: "`processing` `enroute` `queued` `submitted` `processed` `delivered` `held` `expired` `cancelled` `failed` `rejected`";
                                    };
                                };
                            };
                        };
                    };
                };
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["13ab6f3a-ddea-11eb-b4ce-1002b51e60a4"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const SendStandardEmail: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["sender", "to", "subject"];
        readonly properties: {
            readonly sender: {
                readonly type: "string";
                readonly description: "The name and email address to send from, in the format `Name <name@example.com>`";
                readonly examples: readonly ["John Smith <john@example.com>"];
            };
            readonly to: {
                readonly type: "array";
                readonly description: "An array of names and email addresses (up to 100) to send to, in the format `Name <name@example.com>`";
                readonly items: {
                    readonly type: "string";
                    readonly examples: readonly ["Jane Jones <jane@example.com>"];
                };
            };
            readonly cc: {
                readonly type: "array";
                readonly description: "An array of names and email addresses (up to 100) to CC, in the format `Name <name@example.com>`";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly bcc: {
                readonly type: "array";
                readonly description: "An array of names and email addresses (up to 100) to BCC, in the format `Name <name@example.com>`";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly subject: {
                readonly type: "string";
                readonly description: "The subject of the email to be sent";
                readonly examples: readonly ["My Test Email"];
            };
            readonly html_body: {
                readonly type: "string";
                readonly description: "A HTML encoded email body. Either html_body or text_body is required if template_id is not passed.<br><br> <strong>Warning:</strong><ul><li>To correctly track clicking of URLs you must:  <ul><li>Enable click tracking for the API key</li>  <li>Insert a full anchor HTML element (not just the URL)</li> <li>Include \"https://\" at the start of the HREF property</li> </ul></ul>";
                readonly examples: readonly ["<h1>Test <img src=\"cid:mypicture.jpg\" /></h1>"];
            };
            readonly text_body: {
                readonly type: "string";
                readonly description: "A plain text email body. Either html_body or text_body is required if template_id is not passed";
                readonly examples: readonly ["Test"];
            };
            readonly custom_headers: {
                readonly type: "array";
                readonly description: "An array of custom header objects to be applied to the email. For example, a `Reply-To` email can be specified here, with header `Reply-To` and value `name@example.com`. For sending purposes the following headers are not allowed `Content-Type`, `Content-Transfer-Encoding` and `MIME-Version`.";
                readonly items: {
                    readonly properties: {
                        readonly header: {
                            readonly type: "string";
                            readonly description: "Custom header to add to the email";
                        };
                        readonly value: {
                            readonly type: "string";
                            readonly description: "Custom header value to set";
                        };
                    };
                    readonly required: readonly ["header", "value"];
                    readonly type: "object";
                };
            };
            readonly attachments: {
                readonly type: "array";
                readonly description: "An array of attachment objects to be attached to the email";
                readonly items: {
                    readonly properties: {
                        readonly filename: {
                            readonly type: "string";
                            readonly description: "The filename to use for this binary data";
                            readonly examples: readonly ["report.pdf"];
                        };
                        readonly fileblob: {
                            readonly type: "string";
                            readonly description: "The Base64 encoded binary data of the file. Required if no url is specified.";
                            readonly examples: readonly ["bm90IGFjdHVhbGx5IGEgcGRm..."];
                        };
                        readonly mimetype: {
                            readonly type: "string";
                            readonly description: "The mimetype of the binary data";
                            readonly examples: readonly ["application/pdf"];
                        };
                        readonly url: {
                            readonly type: "string";
                            readonly description: "A URL pointing to the attachment data. The data is directly retrieved by our system, and cached for fast re-use for 24 hours. Required if no fileblob is specified";
                        };
                    };
                    readonly required: readonly ["filename"];
                    readonly type: "object";
                };
            };
            readonly inlines: {
                readonly type: "array";
                readonly description: "An array of images to be inlined into the email. Use an image in content as `<img src=\"cid:filename\"/>`";
                readonly items: {
                    readonly properties: {
                        readonly filename: {
                            readonly type: "string";
                            readonly description: "The filename to use for this binary data";
                            readonly examples: readonly ["mypicture.jpg"];
                        };
                        readonly fileblob: {
                            readonly type: "string";
                            readonly description: "The Base64 encoded binary data of the file. Required if no url is specified.";
                        };
                        readonly mimetype: {
                            readonly type: "string";
                            readonly description: "The mimetype of the binary data";
                            readonly examples: readonly ["image/jpeg"];
                        };
                        readonly url: {
                            readonly type: "string";
                            readonly description: "A URL pointing to the attachment data. The data is directly retrieved by our system, and cached for fast re-use for 24 hours. Required if no fileblob is specified";
                            readonly examples: readonly ["https://myserver.com/mypicture.jpg"];
                        };
                    };
                    readonly required: readonly ["filename"];
                    readonly type: "object";
                };
            };
            readonly template_id: {
                readonly type: "string";
                readonly description: "The ID of the template you wish to use";
            };
            readonly template_data: {
                readonly type: "string";
                readonly description: "When a template_id is provided, include the pass-through values in the format `{\"variable1\": \"value1\", \"variable2\": \"value2\"}`";
                readonly format: "json";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["aa253464-0bd0-467a-b24b-6159dcd7be60"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["failed", "failures", "succeeded", "email_id"];
                    readonly properties: {
                        readonly failed: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly description: "The number of emails that failed to send.<br><br>Note: An email with multiple recipients is classed as 1 email.";
                            readonly examples: readonly [0];
                        };
                        readonly failures: {
                            readonly type: "array";
                            readonly items: {};
                        };
                        readonly succeeded: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly description: "The number of emails that were successfully sent.<br><br>Note: An email with multiple recipients is classed as 1 email.";
                            readonly examples: readonly [1];
                        };
                        readonly email_id: {
                            readonly type: "string";
                            readonly description: "The email ID generated if successfully sent";
                            readonly examples: readonly ["1u0SwL-B9zBpi9ffUq-JAB2"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const SmsSummary: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly start_date: {
                readonly type: "string";
                readonly description: "ISO-8601 formatted datetime which defaults to current date at midnight. The range will be inclusive of start_date and exclusive of end_date. Timezone is UTC.";
                readonly format: "date";
            };
            readonly end_date: {
                readonly type: "string";
                readonly description: "ISO-8601 formatted datetime which defaults to now. Timezone is UTC.";
                readonly format: "date";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["data", "request_id"];
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly total_messages: {
                            readonly type: "integer";
                            readonly description: "The total number of SMS messages sent within the passed time range";
                            readonly examples: readonly [123];
                        };
                        readonly total_units: {
                            readonly type: "integer";
                            readonly description: "The total number of SMS units used to send the messages within the passed time range";
                            readonly examples: readonly [156];
                        };
                        readonly total_cost: {
                            readonly type: "number";
                            readonly description: "The total cost of the SMS messages within the passed time range";
                            readonly examples: readonly [10.456];
                        };
                    };
                };
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["4b661d88-6b2d-11eb-8bb3-f23c92bb31d2"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const UpdateASubaccount: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["id"];
        readonly properties: {
            readonly id: {
                readonly type: "string";
                readonly description: "The id of an existing subaccount";
            };
            readonly fullname: {
                readonly type: "string";
                readonly description: "If provided, will set to the new full name for the subaccount";
            };
            readonly limit: {
                readonly type: "integer";
                readonly description: "If provided, will set to the new limit for the subaccount";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly dedicated_ip: {
                readonly type: "boolean";
                readonly description: "If provided, will set to the new dedicated IP address for the subaccount (If limit is greater than 100,000)";
                readonly default: false;
            };
            readonly archiving: {
                readonly type: "boolean";
                readonly description: "Choose whether the subaccount is allowed to enable archiving. You still need to turn on archiving for individual senders within the subaccount.";
                readonly default: false;
            };
            readonly enforce_2fa: {
                readonly type: "boolean";
                readonly description: "Enforce team members of this subaccount to use 2FA.";
                readonly default: false;
            };
            readonly enable_sms: {
                readonly type: "boolean";
                readonly description: "Enable SMS messaging for the subaccount. Additional charges apply.";
                readonly default: false;
            };
            readonly sms_limit: {
                readonly type: "integer";
                readonly description: "Your subaccount will be able to send up to this monthly limit of SMS messages. Their sending will also be limited by the master account's overall monthly limit.";
                readonly default: 1000;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["0ef3f48a-2cfb-11eb-aee9-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["name", "id", "plan_size", "plan_used", "plan_remaining", "state", "dedicated_ip", "archiving", "enforce_2fa", "sms_enabled", "sms_limit"];
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Test Person"];
                        };
                        readonly id: {
                            readonly type: "string";
                            readonly examples: readonly ["NDU5OTgw"];
                        };
                        readonly plan_size: {
                            readonly type: "integer";
                            readonly examples: readonly [10000];
                        };
                        readonly plan_used: {
                            readonly type: "integer";
                            readonly examples: readonly [0];
                        };
                        readonly plan_remaining: {
                            readonly type: "integer";
                            readonly examples: readonly [10000];
                        };
                        readonly state: {
                            readonly type: "string";
                            readonly examples: readonly ["Active"];
                        };
                        readonly dedicated_ip: {
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly archiving: {
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly enforce_2fa: {
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly sms_enabled: {
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly sms_limit: {
                            readonly type: "integer";
                            readonly examples: readonly [1000];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const UpdateAllowedSenders: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["allowed_senders", "mode"];
        readonly properties: {
            readonly allowed_senders: {
                readonly type: "array";
                readonly description: "Array of email addresses and domain names.";
                readonly default: readonly ["test-person@example.com", "other@example.com"];
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly mode: {
                readonly type: "string";
                readonly description: "A string indicating how the list of email address and domain names is interpreted. and should be one of 'whitelist', 'blacklist' or 'disabled'.<br><strong>Warning:</strong> Changing the mode to 'whitelist' or 'blacklist' disables the 'Sender Domains' and 'Single Sender Emails' features.<br>";
                readonly default: "whitelist";
                readonly enum: readonly ["whitelist", "blacklist", "disabled"];
            };
            readonly subaccount_id: {
                readonly type: "string";
                readonly description: "If you wish to make this API call on behalf of a subaccount then include its unique ID here";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["40cbb6f2-935f-11e7-b5be-480fcf01a6f2"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["allowed_senders", "mode"];
                    readonly properties: {
                        readonly allowed_senders: {
                            readonly type: "array";
                            readonly description: "A list of email addresses and domain names";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["test-person@example.com"];
                            };
                        };
                        readonly mode: {
                            readonly type: "string";
                            readonly description: "A string indicating how the list of email address and domain names is interpreted.\n\n`whitelist` `blacklist` `disabled`";
                            readonly enum: readonly ["whitelist", "blacklist", "disabled"];
                            readonly examples: readonly ["whitelist"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const UpdateAnEmailTemplate: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["id"];
        readonly properties: {
            readonly id: {
                readonly type: "string";
                readonly description: "The ID of the email template that you wish to change";
            };
            readonly new_id: {
                readonly type: "string";
                readonly description: "If provided, will update the email template ID";
            };
            readonly template_name: {
                readonly type: "string";
                readonly description: "If provided, will update the email template name";
            };
            readonly subject: {
                readonly type: "string";
                readonly description: "If provided, will update the email template subject";
            };
            readonly html_body: {
                readonly type: "string";
                readonly description: "If provided, will update the email template HTML body";
            };
            readonly text_body: {
                readonly type: "string";
                readonly description: "If provided, will update the email template Plain Text body";
            };
            readonly template_variables: {
                readonly type: "object";
                readonly description: "The pass-through values required by the template in the format `{\"variable1\": \"value1\", \"variable2\": \"value2\"}` (When template_id is provided)";
                readonly additionalProperties: true;
            };
            readonly tags: {
                readonly type: "array";
                readonly description: "If provided, will update the email template tags";
                readonly items: {
                    readonly type: "string";
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["f00c0856-dde8-11eb-b4ce-1002b51e60a4"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["id", "subject", "tags"];
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly examples: readonly ["5355878"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "This parameter is only returned in 'search' response";
                            readonly examples: readonly ["Order receipt"];
                        };
                        readonly template_name: {
                            readonly type: "string";
                            readonly description: "This parameter is not present in 'search' response";
                            readonly examples: readonly ["Order receipt"];
                        };
                        readonly subject: {
                            readonly type: "string";
                            readonly examples: readonly ["Order receipt for {{ product_name }}"];
                        };
                        readonly tags: {
                            readonly type: "array";
                            readonly required: readonly ["types", "example"];
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["one"];
                            };
                        };
                        readonly last_updated: {
                            readonly type: "string";
                            readonly description: "A timestamp indicating when this template was last updated";
                            readonly examples: readonly ["2024-01-01 12:00:00"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const VerifyASenderDomain: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["domain"];
        readonly properties: {
            readonly domain: {
                readonly type: "string";
                readonly description: "Domain to attempt verification for";
            };
            readonly subaccount_id: {
                readonly type: "string";
                readonly description: "If you wish to make this API call on behalf of a subaccount then include its unique ID here";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["e023461c-8c86-11e9-b984-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["domains"];
                    readonly properties: {
                        readonly domains: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly domain: {
                                        readonly type: "object";
                                        readonly required: readonly ["dkim_value", "domain", "suffix", "rpath_status", "rpath_value", "dkim_status", "subdomain", "fulldomain", "dkim_selector"];
                                        readonly properties: {
                                            readonly dkim_value: {
                                                readonly type: "string";
                                                readonly examples: readonly ["dkim.smtp2go.net"];
                                            };
                                            readonly domain: {
                                                readonly type: "string";
                                                readonly examples: readonly ["example"];
                                            };
                                            readonly suffix: {
                                                readonly type: "string";
                                                readonly examples: readonly ["com"];
                                            };
                                            readonly rpath_selector: {
                                                readonly type: "string";
                                                readonly examples: readonly [""];
                                            };
                                            readonly rpath_status: {
                                                readonly type: "string";
                                                readonly examples: readonly [""];
                                            };
                                            readonly rpath_verified: {
                                                readonly type: "boolean";
                                                readonly default: true;
                                                readonly examples: readonly [true];
                                            };
                                            readonly rpath_value: {
                                                readonly type: "string";
                                                readonly examples: readonly ["return.smtp2go.net"];
                                            };
                                            readonly dkim_status: {
                                                readonly type: "string";
                                                readonly examples: readonly [""];
                                            };
                                            readonly dkim_verified: {
                                                readonly type: "boolean";
                                                readonly default: true;
                                                readonly examples: readonly [true];
                                            };
                                            readonly subdomain: {};
                                            readonly fulldomain: {
                                                readonly type: "string";
                                                readonly examples: readonly ["example.com"];
                                            };
                                            readonly dkim_selector: {
                                                readonly type: "string";
                                                readonly examples: readonly ["s123456"];
                                            };
                                        };
                                    };
                                    readonly trackers: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly required: readonly ["cname_value", "cname_status"];
                                            readonly properties: {
                                                readonly cname_value: {
                                                    readonly type: "string";
                                                    readonly examples: readonly [""];
                                                };
                                                readonly cname_status: {
                                                    readonly type: "string";
                                                    readonly examples: readonly [""];
                                                };
                                                readonly cname_verified: {
                                                    readonly type: "boolean";
                                                    readonly default: true;
                                                    readonly examples: readonly [false];
                                                };
                                                readonly domain: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["example"];
                                                };
                                                readonly suffix: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["com"];
                                                };
                                                readonly subdomain: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["link"];
                                                };
                                                readonly enabled: {
                                                    readonly type: "boolean";
                                                    readonly default: true;
                                                    readonly examples: readonly [false];
                                                };
                                                readonly fulldomain: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["link.example.com"];
                                                };
                                            };
                                        };
                                    };
                                    readonly subaccount_access: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly subaccounts: {
                                                readonly type: "array";
                                                readonly description: "A list of subaccount IDs that were given access the sender domain.";
                                                readonly items: {};
                                            };
                                            readonly future_subaccounts: {
                                                readonly type: "boolean";
                                                readonly description: "If true, any new subaccounts added will automatically be given access.";
                                                readonly default: false;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ViewAllSingleSenderEmails: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly email_address: {
                readonly type: "string";
                readonly description: "(Optional) If provided, only return email addresses that match value";
            };
            readonly subaccount_id: {
                readonly type: "string";
                readonly description: "If you wish to make this API call on behalf of a subaccount then include its unique ID here";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["request_id", "senders"];
                    readonly properties: {
                        readonly request_id: {
                            readonly type: "string";
                            readonly examples: readonly ["e023461c-8c86-11e9-b984-408d5cce2644"];
                        };
                        readonly senders: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly required: readonly ["email_address", "verified"];
                                readonly properties: {
                                    readonly email_address: {
                                        readonly type: "string";
                                        readonly examples: readonly ["test@test.com"];
                                    };
                                    readonly verified: {
                                        readonly type: "boolean";
                                        readonly default: true;
                                        readonly examples: readonly [true];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ViewAllowedSenders: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly [];
        readonly properties: {
            readonly subaccount_id: {
                readonly type: "string";
                readonly description: "If you wish to make this API call on behalf of a subaccount then include its unique ID here";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["40cbb6f2-935f-11e7-b5be-480fcf01a6f2"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["allowed_senders", "mode"];
                    readonly properties: {
                        readonly allowed_senders: {
                            readonly type: "array";
                            readonly description: "A list of email addresses and domain names";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["test-person@example.com"];
                            };
                        };
                        readonly mode: {
                            readonly type: "string";
                            readonly description: "A string indicating how the list of email address and domain names is interpreted.\n\n`whitelist` `blacklist` `disabled`";
                            readonly enum: readonly ["whitelist", "blacklist", "disabled"];
                            readonly examples: readonly ["whitelist"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ViewAnArchivedEmail: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["email_id"];
        readonly properties: {
            readonly email_id: {
                readonly type: "string";
                readonly description: "The unique email_id of the archived email you wish to retrieve";
                readonly examples: readonly ["1u0SwL-B9zBpi9ffUq-JAB2"];
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["13dd3376-40fa-11ec-9fc6-f23c9216bf47"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly attachment_count: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [0];
                        };
                        readonly attachments: {
                            readonly type: "array";
                            readonly items: {};
                        };
                        readonly byte_count: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [1428];
                        };
                        readonly email_id: {
                            readonly type: "string";
                            readonly examples: readonly ["1u0SwL-B9zBpi9ffUq-JAB2"];
                        };
                        readonly envelope_from: {
                            readonly type: "string";
                            readonly examples: readonly ["test@test.com"];
                        };
                        readonly headers: {
                            readonly type: "string";
                            readonly examples: readonly ["..."];
                        };
                        readonly recipient: {
                            readonly type: "string";
                            readonly examples: readonly ["test@test.com"];
                        };
                        readonly sender: {
                            readonly type: "string";
                            readonly examples: readonly ["test@test.com"];
                        };
                        readonly sent: {
                            readonly type: "string";
                            readonly examples: readonly ["2021-10-19T21:35:40Z"];
                        };
                        readonly subject: {
                            readonly type: "string";
                            readonly examples: readonly ["test"];
                        };
                        readonly to: {
                            readonly type: "string";
                            readonly examples: readonly ["test@test.com"];
                        };
                        readonly url: {
                            readonly type: "string";
                            readonly examples: readonly ["..."];
                        };
                        readonly username: {
                            readonly type: "string";
                            readonly examples: readonly ["api-12345678"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ViewApiKeys: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly id: {
                readonly type: "string";
                readonly description: "A full API key to retrieve the information for.";
            };
            readonly search: {
                readonly type: "string";
                readonly description: "A search keyword used to refine the results.";
            };
            readonly subaccount_id: {
                readonly type: "string";
                readonly description: "If you wish to make this API call on behalf of a subaccount then include its unique ID here.";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["data", "request_id"];
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly description: "An array of API key results";
                    readonly items: {
                        readonly type: "object";
                        readonly required: readonly ["request_id", "data"];
                        readonly properties: {
                            readonly request_id: {
                                readonly type: "string";
                                readonly examples: readonly ["aa253464-0bd0-467a-b24b-6159dcd7be60"];
                            };
                            readonly data: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly api_key: {
                                        readonly type: "string";
                                        readonly description: "The API key used to query the API.";
                                        readonly examples: readonly ["api-00000000000000000000000000000000"];
                                    };
                                    readonly username: {
                                        readonly type: "string";
                                        readonly description: "A shortened version of the API key which can be used to correlate data with some other API calls that also feature <code>username</code>.";
                                        readonly examples: readonly ["api-000000000000"];
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                        readonly description: "A comment or description of the API key.";
                                    };
                                    readonly custom_rate_limit: {
                                        readonly type: "boolean";
                                        readonly default: false;
                                        readonly description: "If enabled will use the values of <code>custom_ratelimit_value</code> and <code>custom_ratelimit_period</code> for rate limiting.";
                                        readonly examples: readonly [true];
                                    };
                                    readonly custom_ratelimit_value: {
                                        readonly type: "integer";
                                        readonly description: "If passed, defines the limit of emails this API key can send in the period specified in <code>custom_ratelimit_period</code>.";
                                        readonly examples: readonly [123];
                                    };
                                    readonly custom_ratelimit_period: {
                                        readonly type: "string";
                                        readonly description: "If passed, defines the period for which this user will be limited to the number of emails specified in <code>custom_ratelimit_value</code>.<br><br><strong>Syntax:</strong> \"\\<n\\> [hour[s]|day[s]|week[s]|month[s]] [hh:mm:ss]\".<br><br><strong>Examples: </strong> \"0:30:00\", \"1 hour\", \"2 days\", \"3 months\", \"4 months 5:00:00\".<br><br><strong>Note:</strong> Only stores this value if <code>custom_ratelimit</code> is true.";
                                        readonly examples: readonly ["0:30:00"];
                                    };
                                    readonly default_ratelimit_value: {
                                        readonly type: "string";
                                        readonly description: "The default limit of emails this API key can send in the period specified in <code>default_ratelimit_period</code>. <strong>Note:</strong> Used if <code>custom_ratelimit</code> is false.";
                                        readonly examples: readonly [123];
                                    };
                                    readonly default_ratelimit_period: {
                                        readonly type: "string";
                                        readonly description: "The default period for which this API key will be limited to the number of emails specified in <code>default_ratelimit_value</code>.<br><br><strong>Syntax:</strong> \"\\<n\\> [hour[s]|day[s]|week[s]|month[s]] [hh:mm:ss]\".<br><br><strong>Examples: </strong> \"0:30:00\", \"1 hour\", \"2 days\", \"3 months\", \"4 months 5:00:00\".<br><br><strong>Note:</strong> Used if <code>custom_ratelimit</code> is false.";
                                        readonly examples: readonly ["unlimited"];
                                    };
                                    readonly ippool: {
                                        readonly type: "integer";
                                        readonly examples: readonly [1234];
                                    };
                                    readonly feedback_enabled: {
                                        readonly type: "boolean";
                                        readonly description: "If true, custom feedback via the unsubscribe footer will be enabled and defined by the below settings.";
                                        readonly default: false;
                                    };
                                    readonly feedback_html: {
                                        readonly type: "string";
                                        readonly description: "The HTML content to insert into the custom feedback email body via the unsubscribe footer.  Default: blank <br><br><strong>System Variables (Only available here):</strong><ul><li>Unsubscribe URL = %%UNSUBSCRIBE%% </li><li>Email address = %%EMAIL%%</li></ul>";
                                    };
                                    readonly feedback_text: {
                                        readonly type: "string";
                                        readonly description: "The text content to insert into the custom feedback email body via the unsubscribe footer.  Default: blank<br><br><strong>System Variables (Only available here):</strong><ul><li>Unsubscribe URL = %%UNSUBSCRIBE%% </li><li>Email address = %%EMAIL%%</li></ul>";
                                    };
                                    readonly open_tracking_enabled: {
                                        readonly type: "boolean";
                                        readonly description: "If true, open tracking will be enabled for this API key.";
                                        readonly default: false;
                                    };
                                    readonly click_tracking_enabled: {
                                        readonly type: "boolean";
                                        readonly description: "If true, click tracking will be enabled for this API key.";
                                        readonly default: false;
                                    };
                                    readonly archive_enabled: {
                                        readonly type: "boolean";
                                        readonly description: "If true, archiving (available on paid plans) will be enabled for this API key.";
                                        readonly default: false;
                                    };
                                    readonly audit_email: {
                                        readonly type: "string";
                                        readonly description: "If passed, this email will be BCC'd on all emails sent by this API key.";
                                    };
                                    readonly bounce_notifications: {
                                        readonly type: "string";
                                        readonly description: "If passed, will control how bounce notifications are handled. Must be one of [from, drop, or a valid email address]. [from] will return the email to sender, [drop] will discard the event, and the inclusion of an email address will send the event on to this account.";
                                        readonly default: "from";
                                    };
                                    readonly status: {
                                        readonly type: "string";
                                        readonly description: "The initial status of the API key, one of ['allowed', 'blocked', 'sandbox'].";
                                        readonly default: "allowed";
                                    };
                                    readonly endpoints: {
                                        readonly type: "array";
                                        readonly description: "An array of endpoints that this API key will be allowed to use.";
                                        readonly default: readonly ["/email/send"];
                                        readonly items: {};
                                    };
                                };
                            };
                        };
                    };
                };
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["4b661d88-6b2d-11eb-8bb3-f23c92bb31d2"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ViewDedicatedIps: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["data", "request_id"];
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly description: "The id of the pool";
                                readonly examples: readonly ["1234"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the pool";
                                readonly examples: readonly ["Main Pool"];
                            };
                            readonly ip_addresses: {
                                readonly type: "array";
                                readonly description: "A list of dedicated IP addresses assigned to this pool";
                                readonly items: {
                                    readonly description: "A dedicated IP address";
                                };
                            };
                        };
                    };
                };
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["4b661d88-6b2d-11eb-8bb3-f23c92bb31d2"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ViewReceivedSms: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly start_date: {
                readonly type: "string";
                readonly description: "ISO-8601 formatted datetime which defaults to 7 days ago at midnight. The range will be inclusive of start_date and exclusive of end_date. Timezone is UTC.";
                readonly format: "date";
            };
            readonly end_date: {
                readonly type: "string";
                readonly description: "ISO-8601 formatted datetime which defaults to now. Timezone is UTC.";
                readonly format: "date";
            };
            readonly unix_start: {
                readonly type: "integer";
                readonly description: "Deprecated: this is a legacy method of selecting the start of the search period as a unix timestamp. This can be left empty to use the start_date.";
            };
            readonly unix_end: {
                readonly type: "integer";
                readonly description: "Deprecated: this is a legacy method of selecting the end of the search period as a unix timestamp. This can be left empty to use the end_date.";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["messages"];
                    readonly properties: {
                        readonly request_id: {
                            readonly type: "string";
                            readonly examples: readonly ["e023461c-8c86-11e9-b984-408d5cce2644"];
                        };
                        readonly messages: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly required: readonly ["source_address", "destination_address", "timestamp", "content"];
                                readonly properties: {
                                    readonly source_address: {
                                        readonly type: "string";
                                        readonly examples: readonly [15185550120];
                                    };
                                    readonly destination_address: {
                                        readonly type: "string";
                                        readonly examples: readonly [15185550141];
                                    };
                                    readonly timestamp: {
                                        readonly type: "string";
                                        readonly examples: readonly ["2022-09-30T02:02:41Z"];
                                    };
                                    readonly content: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Example content"];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ViewSenderDomains: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly domain: {
                readonly type: "string";
                readonly description: "(Optional) If provided, will only retrieve records for this domain";
            };
            readonly subaccount_id: {
                readonly type: "string";
                readonly description: "If you wish to make this API call on behalf of a subaccount then include its unique ID here";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["e023461c-8c86-11e9-b984-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["domains"];
                    readonly properties: {
                        readonly domains: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly domain: {
                                        readonly type: "object";
                                        readonly required: readonly ["dkim_value", "domain", "suffix", "rpath_status", "rpath_value", "dkim_status", "subdomain", "fulldomain", "dkim_selector"];
                                        readonly properties: {
                                            readonly dkim_value: {
                                                readonly type: "string";
                                                readonly examples: readonly ["dkim.smtp2go.net"];
                                            };
                                            readonly domain: {
                                                readonly type: "string";
                                                readonly examples: readonly ["example"];
                                            };
                                            readonly suffix: {
                                                readonly type: "string";
                                                readonly examples: readonly ["com"];
                                            };
                                            readonly rpath_selector: {
                                                readonly type: "string";
                                                readonly examples: readonly [""];
                                            };
                                            readonly rpath_status: {
                                                readonly type: "string";
                                                readonly examples: readonly [""];
                                            };
                                            readonly rpath_verified: {
                                                readonly type: "boolean";
                                                readonly default: true;
                                                readonly examples: readonly [true];
                                            };
                                            readonly rpath_value: {
                                                readonly type: "string";
                                                readonly examples: readonly ["return.smtp2go.net"];
                                            };
                                            readonly dkim_status: {
                                                readonly type: "string";
                                                readonly examples: readonly [""];
                                            };
                                            readonly dkim_verified: {
                                                readonly type: "boolean";
                                                readonly default: true;
                                                readonly examples: readonly [true];
                                            };
                                            readonly subdomain: {};
                                            readonly fulldomain: {
                                                readonly type: "string";
                                                readonly examples: readonly ["example.com"];
                                            };
                                            readonly dkim_selector: {
                                                readonly type: "string";
                                                readonly examples: readonly ["s123456"];
                                            };
                                        };
                                    };
                                    readonly trackers: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly required: readonly ["cname_value", "cname_status"];
                                            readonly properties: {
                                                readonly cname_value: {
                                                    readonly type: "string";
                                                    readonly examples: readonly [""];
                                                };
                                                readonly cname_status: {
                                                    readonly type: "string";
                                                    readonly examples: readonly [""];
                                                };
                                                readonly cname_verified: {
                                                    readonly type: "boolean";
                                                    readonly default: true;
                                                    readonly examples: readonly [false];
                                                };
                                                readonly domain: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["example"];
                                                };
                                                readonly suffix: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["com"];
                                                };
                                                readonly subdomain: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["link"];
                                                };
                                                readonly enabled: {
                                                    readonly type: "boolean";
                                                    readonly default: true;
                                                    readonly examples: readonly [false];
                                                };
                                                readonly fulldomain: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["link.example.com"];
                                                };
                                            };
                                        };
                                    };
                                    readonly subaccount_access: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly subaccounts: {
                                                readonly type: "array";
                                                readonly description: "A list of subaccount IDs that were given access the sender domain.";
                                                readonly items: {};
                                            };
                                            readonly future_subaccounts: {
                                                readonly type: "boolean";
                                                readonly description: "If true, any new subaccounts added will automatically be given access.";
                                                readonly default: false;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ViewSentEmails: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly start_date: {
                readonly type: "string";
                readonly description: "ISO-8601 formatted datetime. Results will be inclusive of this value. Timezone is UTC. Defaults to current date at midnight.";
            };
            readonly end_date: {
                readonly type: "string";
                readonly description: "ISO-8601 formatted datetime. Results will be inclusive of this value. Timezone is UTC. Defaults to current time.";
            };
            readonly limit: {
                readonly type: "integer";
                readonly description: "The maximum number of emails to return. Enter an integer between 1 and 5,000. Defaults to 5,000.";
                readonly default: 5000;
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly status_counts: {
                readonly type: "boolean";
                readonly description: "If true, will return an object with counts of each unique email status";
                readonly default: false;
            };
            readonly opened_only: {
                readonly type: "boolean";
                readonly description: "If true, will return emails that have been opened by at least one recipient.<br><br><strong>Note:</strong> Only returns information for emails sent from suitable accounts with Open Tracking enabled.  See more info at <a href=\"https://support.smtp2go.com/hc/en-gb/articles/360003124714\">Open Tracking</a>";
                readonly default: false;
            };
            readonly clicked_only: {
                readonly type: "boolean";
                readonly description: "If true, will return emails that have had a link clicked by at least one recipient.<br><br><strong>Note:</strong> Only returns information for emails sent from suitable accounts with Click Tracking enabled.  See more info at <a href=\"https://support.smtp2go.com/hc/en-gb/articles/900002237106-Click-Tracking\">Click Tracking</a>";
                readonly default: false;
            };
            readonly ignore_case: {
                readonly type: "boolean";
                readonly description: "If true, all string searches will be case insensitive";
                readonly default: false;
            };
            readonly filter_query: {
                readonly type: "string";
                readonly description: "If passed, will return results filtered by these search parameters. The query format is documented below";
                readonly default: "null";
            };
            readonly email_id: {
                readonly type: "array";
                readonly description: "If passed, will only return emails with an ID contained within this array";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly username: {
                readonly type: "string";
                readonly description: "If passed, will only return emails sent by this user";
            };
            readonly headers: {
                readonly type: "array";
                readonly description: "If passed, will return the specified email header values";
                readonly default: readonly ["[]"];
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly continue_token: {
                readonly type: "string";
                readonly description: "If passed, the resulting query will paginate from the previous query";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["84fe4a7e-1487-4ddf-92cb-4c6f8e6b2070"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly count: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [1];
                        };
                        readonly emails: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly sender: {
                                        readonly type: "string";
                                        readonly examples: readonly ["test@example.com"];
                                    };
                                    readonly email_id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["1u0SwL-B9zBpi9ffUq-JAB2"];
                                    };
                                    readonly smtpcode: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [250];
                                    };
                                    readonly response: {
                                        readonly type: "string";
                                        readonly examples: readonly ["250 2.0.0 OK 1466989602 87si22895035pfn.73 - gsmtp"];
                                    };
                                    readonly process_status: {
                                        readonly type: "string";
                                        readonly description: "The current status in the deliver process. Can be completed, processing, or rejected.";
                                        readonly examples: readonly ["completed"];
                                    };
                                    readonly host: {
                                        readonly type: "string";
                                        readonly examples: readonly ["gmail-smtp-in.l.google.com [74.125.200.27]"];
                                    };
                                    readonly recipient: {
                                        readonly type: "string";
                                        readonly examples: readonly ["test2@example.com"];
                                    };
                                    readonly delivered_at: {
                                        readonly type: "string";
                                        readonly examples: readonly ["2016-06-27 01:06:42.668336+00:00"];
                                    };
                                    readonly opens: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly user_agent: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["Mozilla/5.0 (iPad; CPU OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36"];
                                                };
                                                readonly opened_at: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["2018-04-02 19:26:53.010729+00:00"];
                                                };
                                                readonly read_secs: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["10"];
                                                };
                                                readonly recipient: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["test2@example.com"];
                                                };
                                                readonly ip_address: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["x.x.x.x"];
                                                };
                                            };
                                        };
                                    };
                                    readonly total_opens: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [1];
                                    };
                                    readonly status: {
                                        readonly type: "string";
                                        readonly description: "The status of the email, can be any of [processed, bounce, delivered, unsubscribed, spam, deferred, opened, refused, cancelled]";
                                        readonly examples: readonly ["delivered"];
                                    };
                                    readonly email_ts: {
                                        readonly type: "string";
                                        readonly examples: readonly ["2016-06-27 01:06:37.039400+00:00"];
                                    };
                                };
                            };
                        };
                        readonly continue_token: {
                            readonly type: "string";
                            readonly examples: readonly ["eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0Njc4NTY4ODEsImRhdCI6eyJvZmYiOjUsInFpZCI6MX0sImlzcyI6ImFwaS5zbXRwMmdvLmNvbSIsImlhdCI6MTQ2Nzg1NjU4MX0.Pgl5rl7hsgFrVIa9TTFDyi7Y8o_mCHDPE227qNINQd3_rZwgfnPAhDRmsyQMGqQDJHfr5NNF_V9cPTpWNkXikUUDFaEHoXnFkbDxAqtb6n40KA3pVjG1D8QDKTjONGBqDs3zOujUSb_CR9oYkQXnnFRfy2K-ZXoJuMpqIB3A1gbg3KdZCLjzKHi0hkvIUBCnkERksq9pdAB15dnAkkDliEUHOB2SpA05brBEHTRF_H7az9NkrVm1STPX7x3hq5Qg6gZPWCuwpNKpdP-MnHhThmq67Y8LVL7kmR4dKkON1uamf4UxDK3BK8hef7fty1x1K9BSa8ils5BeolV_2BU0aw"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ViewSentSms: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly start_date: {
                readonly type: "string";
                readonly description: "ISO-8601 formatted datetime which defaults to 7 days ago at midnight. The range will be inclusive of start_date and exclusive of end_date. Timezone is UTC.";
                readonly format: "date";
            };
            readonly end_date: {
                readonly type: "string";
                readonly description: "ISO-8601 formatted datetime which defaults to now. Timezone is UTC.";
                readonly format: "date";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["messages"];
                    readonly properties: {
                        readonly request_id: {
                            readonly type: "string";
                            readonly examples: readonly ["e023461c-8c86-11e9-b984-408d5cce2644"];
                        };
                        readonly messages: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                        readonly description: "A unique ID associated with the message";
                                        readonly examples: readonly ["a9d6d238-900c-4b9a-9e42-2d55c48785ab"];
                                    };
                                    readonly timestamp: {
                                        readonly type: "string";
                                        readonly description: "A timestamp indicating when the message was sent";
                                        readonly examples: readonly ["2025-06-08T19:05:25.830Z"];
                                    };
                                    readonly username: {
                                        readonly type: "string";
                                        readonly description: "The username used to send the message";
                                        readonly examples: readonly ["username"];
                                    };
                                    readonly sender: {
                                        readonly type: "string";
                                        readonly descriptions: "The sender used to send the message";
                                        readonly examples: readonly ["shared"];
                                    };
                                    readonly sender_email: {
                                        readonly type: "string";
                                        readonly description: "If sent via email this is the sender email";
                                        readonly examples: readonly ["test@example.com"];
                                    };
                                    readonly destination_address: {
                                        readonly type: "string";
                                        readonly description: "The number the message was sent to";
                                        readonly examples: readonly ["+123456789"];
                                    };
                                    readonly destination_address_county: {
                                        readonly type: "string";
                                        readonly description: "The country the destination address resides in";
                                        readonly examples: readonly ["US"];
                                    };
                                    readonly format: {
                                        readonly type: "string";
                                        readonly description: "The format of the sent message";
                                        readonly examples: readonly ["SMS"];
                                    };
                                    readonly status: {
                                        readonly type: "string";
                                        readonly description: "The status of the sent message";
                                        readonly examples: readonly ["Message sent"];
                                    };
                                    readonly content: {
                                        readonly type: "string";
                                        readonly description: "The content of the sent message";
                                        readonly examples: readonly ["test message"];
                                    };
                                    readonly units: {
                                        readonly type: "integer";
                                        readonly examples: readonly ["The number of units used to send the mssage"];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ViewSmtpUsers: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly username: {
                readonly type: "string";
                readonly description: "If passed, a valid SMTP2GO username of your existing SMTP User that you wish to view";
            };
            readonly subaccount_id: {
                readonly type: "string";
                readonly description: "If you wish to make this API call on behalf of a subaccount then include its unique ID here";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["aa253464-0bd0-467a-b24b-6159dcd7be60"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["results"];
                    readonly properties: {
                        readonly results: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly required: readonly ["username", "sending_allowed", "custom_ratelimit"];
                                readonly properties: {
                                    readonly comments: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Comment explaining how amazing this Test person is"];
                                    };
                                    readonly username: {
                                        readonly type: "string";
                                        readonly examples: readonly ["smtpuser@example.com"];
                                    };
                                    readonly email_password: {
                                        readonly type: "string";
                                        readonly examples: readonly ["H#8dkK2djs"];
                                    };
                                    readonly sending_allowed: {
                                        readonly type: "boolean";
                                        readonly default: true;
                                        readonly examples: readonly [true];
                                    };
                                    readonly custom_ratelimit: {
                                        readonly type: "boolean";
                                        readonly default: true;
                                        readonly examples: readonly [true];
                                    };
                                    readonly custom_ratelimit_value: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [100];
                                    };
                                    readonly custom_ratelimit_period: {
                                        readonly type: "string";
                                        readonly examples: readonly ["1 day"];
                                    };
                                    readonly default_ratelimit_value: {
                                        readonly type: "string";
                                        readonly description: "The default limit of emails this SMTP user can send in the period specified in <code>default_ratelimit_period</code>. <strong>Note:</strong> Used if <code>custom_ratelimit</code> is false.";
                                        readonly examples: readonly [123];
                                    };
                                    readonly default_ratelimit_period: {
                                        readonly type: "string";
                                        readonly description: "The default period for which this SMTP user will be limited to the number of emails specified in <code>default_ratelimit_value</code>.<br><br><strong>Syntax:</strong> \"\\<n\\> [hour[s]|day[s]|week[s]|month[s]] [hh:mm:ss]\".<br><br><strong>Examples: </strong> \"0:30:00\", \"1 hour\", \"2 days\", \"3 months\", \"4 months 5:00:00\".<br><br><strong>Note:</strong> Used if <code>custom_ratelimit</code> is false.";
                                        readonly examples: readonly ["unlimited"];
                                    };
                                    readonly ippool: {
                                        readonly type: "integer";
                                        readonly examples: readonly [1234];
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                    };
                                    readonly feedback_enabled: {
                                        readonly type: "boolean";
                                        readonly examples: readonly [true];
                                    };
                                    readonly feedback_domain: {
                                        readonly type: "string";
                                        readonly examples: readonly ["default"];
                                    };
                                    readonly feedback_html: {
                                        readonly type: "string";
                                    };
                                    readonly feedback_text: {
                                        readonly type: "string";
                                    };
                                    readonly archive_enabled: {
                                        readonly type: "boolean";
                                        readonly examples: readonly [true];
                                    };
                                    readonly open_tracking_enabled: {
                                        readonly type: "boolean";
                                        readonly examples: readonly [true];
                                    };
                                    readonly audit_email: {
                                        readonly type: "string";
                                    };
                                    readonly bounce_notifications: {
                                        readonly type: "string";
                                        readonly examples: readonly ["from"];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ViewSuppressions: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly continue_token: {
                readonly type: "string";
                readonly description: "If returned from a request this can be passed to continue paging through the result of the results";
            };
            readonly email_address: {
                readonly type: "string";
                readonly description: "If provided, checks if a specific email address or domain is in the block list";
            };
            readonly end_date: {
                readonly type: "string";
                readonly description: "ISO-8601 formatted datetime which defaults to 30 days prior to the current date at midnight. Timezone is UTC";
            };
            readonly fuzzy: {
                readonly type: "boolean";
                readonly description: "Indicates if the search should use fuzzy matching on recipients & reasons";
            };
            readonly reason: {
                readonly type: "string";
                readonly description: "A reason string to search for";
            };
            readonly reasons: {
                readonly type: "array";
                readonly description: "An array of reason strings to search for";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly recipient: {
                readonly type: "string";
                readonly description: "A recipient string to search for";
            };
            readonly recipients: {
                readonly type: "array";
                readonly description: "An array of recipient strings to search for";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly sort: {
                readonly type: "string";
                readonly description: "The direction to sort the results, either <code>asc</code> or <code>desc</code>";
            };
            readonly start_date: {
                readonly type: "string";
                readonly description: "ISO-8601 formatted datetime which defaults to the current date at midnight. Timezone is UTC";
            };
            readonly suppression_type: {
                readonly type: "string";
                readonly description: "If passed restricts the search to a single suppression type <code>manual</code>, <code>spam</code>, <code>unsubscribe</code>, <code>bounce</code> or <code>compliance</code>";
            };
            readonly suppression_types: {
                readonly type: "array";
                readonly description: "If passed restricts the search to multiple suppression types <code>manual</code>, <code>spam</code>, <code>unsubscribe</code>, <code>bounce</code> or <code>compliance</code>";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly wildcard: {
                readonly type: "string";
                readonly description: "If provided, only suppressions with this wildcard string in name, domain, or email address fields, will be returned";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["request_id", "data"];
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["e61431d0-a532-11e8-a307-f23c91285f72"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["continue_token", "results", "total_results"];
                    readonly properties: {
                        readonly results: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly required: readonly ["complaint", "reason", "block_description", "timestamp", "email_address"];
                                readonly properties: {
                                    readonly complaint: {
                                        readonly type: "string";
                                        readonly examples: readonly [""];
                                    };
                                    readonly reason: {
                                        readonly type: "string";
                                        readonly examples: readonly ["manual"];
                                    };
                                    readonly block_description: {
                                        readonly type: "string";
                                        readonly examples: readonly ["no longer a customer"];
                                    };
                                    readonly timestamp: {
                                        readonly type: "string";
                                        readonly examples: readonly ["2018-08-21 11:10:55.457489+00:00"];
                                    };
                                    readonly email_address: {
                                        readonly type: "string";
                                        readonly examples: readonly ["test@example.com"];
                                    };
                                };
                            };
                        };
                        readonly continue_token: {
                            readonly type: "string";
                        };
                        readonly total_results: {
                            readonly type: "integer";
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ViewTemplateDetails: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["id"];
        readonly properties: {
            readonly id: {
                readonly type: "string";
                readonly description: "The case-sensitive ID of the email template that you wish to view";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["f00c0856-dde8-11eb-b4ce-1002b51e60a4"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["html_body", "id", "subject", "tags", "name", "template_variables", "text_body"];
                    readonly properties: {
                        readonly html_body: {
                            readonly type: "string";
                            readonly examples: readonly ["Shiny HTML body. This is a {{ variable }}"];
                        };
                        readonly id: {
                            readonly type: "string";
                            readonly examples: readonly ["testid"];
                        };
                        readonly subject: {
                            readonly type: "string";
                            readonly examples: readonly ["Shiny new Subject"];
                        };
                        readonly tags: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["tagged"];
                            };
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Shiny new name"];
                        };
                        readonly template_variables: {
                            readonly type: "object";
                            readonly description: "The pass-through values required by the template in the format `{\"variable1\": \"value1\", \"variable2\": \"value2\"}`";
                            readonly additionalProperties: true;
                        };
                        readonly text_body: {
                            readonly type: "string";
                            readonly examples: readonly ["Shiny Text body"];
                        };
                        readonly last_updated: {
                            readonly type: "string";
                            readonly description: "A timestamp indicating when this template was last updated";
                            readonly examples: readonly ["2024-01-01 12:00:00"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ViewWebhook: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["url"];
        readonly properties: {
            readonly subaccount_id: {
                readonly type: "string";
                readonly description: "If you wish to make this API call on behalf of a subaccount then include its unique ID here.";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["data", "request_id"];
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly url: {
                            readonly type: "string";
                            readonly description: "The URL of the webhook.";
                            readonly examples: readonly ["https://example.com/test-webhook"];
                        };
                        readonly id: {
                            readonly type: "integer";
                            readonly description: "The ID of the webhook.";
                        };
                        readonly events: {
                            readonly type: "array";
                            readonly description: "A list of events the webhook will receive, from this list [<code>delivered</code>,<code>unsubscribe</code>,<code>spam</code>,<code>bounce</code>,<code>processed</code>,<code>reject</code>,<code>click</code>,<code>open</code>].";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly sms_events: {
                            readonly type: "array";
                            readonly description: "A list of SMS events the webhook will receive, from this list [<code>delivered</code>,<code>failed</code>,<code>rejected</code>,<code>sending</code>,<code>submitted</code>].";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly headers: {
                            readonly type: "array";
                            readonly description: "Custom headers you would specifically like sent in the event data. The headers must already exist in the emails. Subject and Message-id headers are sent by default.";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly usernames: {
                            readonly type: "array";
                            readonly description: "Usernames to be included in this webhook. All usernames will be included if none are specified.";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly output_format: {
                            readonly type: "string";
                            readonly description: "The format of the webhook data. Either <code>form</code> or <code>json</code>.";
                            readonly default: "form";
                        };
                    };
                };
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["4b661d88-6b2d-11eb-8bb3-f23c92bb31d2"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly request_id: {
                    readonly type: "string";
                    readonly examples: readonly ["22e5acba-43bf-11e6-ae42-408d5cce2644"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["You do not have permission to access this API endpoint"];
                        };
                        readonly error_code: {
                            readonly type: "string";
                            readonly examples: readonly ["E_ApiResponseCodes.ENDPOINT_PERMISSION_DENIED"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
export { AddASingleSenderEmail, AddASuppression, AddAllowedSenders, AddAnEmailTemplate, AddAnSmtpUser, AddApiKey, AddSenderDomain, AddSubaccount, AddWebhook, CloseASubaccount, EditAnSmtpUser, EditApiKey, EditReturnPathDomain, EditSubaccountAccess, EditTrackingDomain, EditWebhook, EmailBounces, EmailCycle, EmailHistory, EmailSpam, EmailSummary, EmailUnsubscribes, RemoveASingleSenderEmail, RemoveASuppression, RemoveAllowedSenders, RemoveAnEmailTemplate, RemoveAnSmtpUser, RemoveApiKey, RemoveScheduledEmail, RemoveSenderDomain, RemoveWebhook, ReopenAClosedSubaccount, ResendSubaccountInvitation, ScheduleEmailBatch, SearchActivity, SearchArchivedPages, SearchEmailTemplates, SearchScheduledEmails, SearchSubaccounts, SendMimeEmail, SendSms, SendStandardEmail, SmsSummary, UpdateASubaccount, UpdateAllowedSenders, UpdateAnEmailTemplate, VerifyASenderDomain, ViewAllSingleSenderEmails, ViewAllowedSenders, ViewAnArchivedEmail, ViewApiKeys, ViewDedicatedIps, ViewReceivedSms, ViewSenderDomains, ViewSentEmails, ViewSentSms, ViewSmtpUsers, ViewSuppressions, ViewTemplateDetails, ViewWebhook };
