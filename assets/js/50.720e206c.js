(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{691:function(e,t,a){e.exports=a.p+"assets/img/oidc-id-token-flow.bb7a4207.png"},692:function(e,t,a){e.exports=a.p+"assets/img/aad_app_registration.602f9d9f.png"},817:function(e,t,a){"use strict";a.r(t);var r=a(42),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"challenge-0-request-an-id-token-from-azure-ad"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#challenge-0-request-an-id-token-from-azure-ad"}},[e._v("#")]),e._v(" Challenge-0: Request an ID Token from Azure AD")]),e._v(" "),r("h2",{attrs:{id:"here-is-what-you-will-learn"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn"}},[e._v("#")]),e._v(" Here is what you will learn")]),e._v(" "),r("ul",[r("li",[e._v("How to register an application in Azure AD")]),e._v(" "),r("li",[e._v("How to use the OpenIDConnect protocol to authenticate users")]),e._v(" "),r("li",[e._v("How to receive an "),r("strong",[e._v("id_token")]),e._v(" with basic profile information of the authenticated user")])]),e._v(" "),r("p",[e._v("Here is an high-level overview of the authentication process:\n"),r("img",{attrs:{src:a(691),alt:"Flow"}})]),e._v(" "),r("p",[e._v("In short:")]),e._v(" "),r("ol",[r("li",[e._v("We show the user a sign-in button")]),e._v(" "),r("li",[e._v("The sign-in button forwards to the "),r("code",[e._v(".../oauth2/v2.0/authorize")]),e._v(" URL, including the ID of our application and the ID of our AAD tenant")]),e._v(" "),r("li",[e._v("The user logs in and consents to letting us access his or her profile")]),e._v(" "),r("li",[e._v("Our AAD tenants forwards us to the callback URL and includes an "),r("code",[e._v("id_token")]),e._v(", which contains basic profile information of the user in form of a JWT (JSON Web Token)")]),e._v(" "),r("li",[e._v("Lastly, we could validate the returned "),r("code",[e._v("id_token")]),e._v(" using its signature (not shown here, most libraries do this for us)")])]),e._v(" "),r("h2",{attrs:{id:"create-an-azure-ad-application"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-an-azure-ad-application"}},[e._v("#")]),e._v(" Create an Azure AD application")]),e._v(" "),r("p",[e._v("Before we can authenticate a user we have to register an application in our Azure AD tenant.")]),e._v(" "),r("h3",{attrs:{id:"azure-cli"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#azure-cli"}},[e._v("#")]),e._v(" Azure CLI")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[e._v("az ad app create --display-name challengeidtokencli --reply-urls http://localhost:5001/api/tokenecho --identifier-uris https://challengeidtoken\n")])])]),r("p",[r("strong",[e._v("Note:")]),e._v(" The "),r("code",[e._v("IdentifierUri")]),e._v(" needs to be unique within an instance of AAD.")]),e._v(" "),r("p",[e._v("Retrieve the ID of your current Azure AD tenant via:")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[e._v("az account show \n")])])]),r("h3",{attrs:{id:"viewing-your-applicationid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#viewing-your-applicationid"}},[e._v("#")]),e._v(" Viewing your ApplicationId")]),e._v(" "),r("p",[e._v("Note down the "),r("code",[e._v("appId")]),e._v(" value in the response - this is the id under which your AAD application has been registered. In the Azure Portal, we can see your new app registration under "),r("code",[e._v("AAD --\x3e App Registrations --\x3e Owned applications")]),e._v(":")]),e._v(" "),r("p",[r("img",{attrs:{src:a(692),alt:"alt-text"}})]),e._v(" "),r("h2",{attrs:{id:"run-the-token-echo-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#run-the-token-echo-server"}},[e._v("#")]),e._v(" Run the Token Echo Server")]),e._v(" "),r("p",[e._v("Open another shell and run the Token Echo Server from "),r("a",{attrs:{href:"../apps/token-echo-server"}},[r("code",[e._v("day5/apps/token-echo-server")])]),e._v(' in this repository. This helper ASP.NET Core tool is used to echo the token issued by your AAD and "simulates" our website or server backend that would receive the '),r("code",[e._v("id_token")]),e._v(".")]),e._v(" "),r("p",[e._v("The tool is listening on port 5001 on your local machine. Tokens are accepted on the route "),r("code",[e._v("http://localhost:5001/api/tokenecho")]),e._v(". This is why we initially registered an AAD application with a reply url pointing to "),r("code",[e._v("http://localhost:5001/api/tokenecho")]),e._v(".")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("dotnet run\n")])])]),r("h2",{attrs:{id:"create-an-authentication-request"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-an-authentication-request"}},[e._v("#")]),e._v(" Create an authentication request")]),e._v(" "),r("p",[e._v("Replace "),r("code",[e._v("TENANT_ID")]),e._v(" with your AAD Tenant Id and "),r("code",[e._v("APPLICATION_ID")]),e._v(" with your Application Id. Open a browser and paste the modified request.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("https://login.microsoftonline.com/TENANT_ID/oauth2/v2.0/authorize?\nclient_id=APPLICATION_ID\n&response_type=id_token\n&redirect_uri=http%3A%2F%2Flocalhost%3A5001%2Fapi%2Ftokenecho\n&response_mode=form_post\n&scope=openid%20profile\n&nonce=1234\n")])])]),r("p",[e._v("For explanation, "),r("code",[e._v("openid")]),e._v(" scope allows the user to sign in, and "),r("code",[e._v("profile")]),e._v(" scope allows us to read the basic profile information of the user.")]),e._v(" "),r("p",[e._v("Copy the "),r("code",[e._v("id_token")]),e._v(" value from your browser output, go to "),r("a",{attrs:{href:"https://jwt.ms",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://jwt.ms"),r("OutboundLink")],1),e._v(" and paste the token. Take a minute and have a look at the decoded token.")]),e._v(" "),r("p",[e._v("If you need further information about the issued claims take a look "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/id-tokens#header-claims",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"cleanup-resources"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cleanup-resources"}},[e._v("#")]),e._v(" Cleanup resources")]),e._v(" "),r("h3",{attrs:{id:"azure-cli-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#azure-cli-2"}},[e._v("#")]),e._v(" Azure CLI")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[e._v("az ad app delete --id "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("applicationid"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),r("h2",{attrs:{id:"summary"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),r("p",[e._v("This challenge showed how to create a new application in AAD and how user can be authenticated using the Open ID Connect protocol. The full process is described "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-protocols-oidc",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);