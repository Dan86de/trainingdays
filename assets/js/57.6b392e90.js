(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{672:function(t,e,a){t.exports=a.p+"assets/img/architecture-overview.713e498c.png"},812:function(t,e,a){"use strict";a.r(e);var o=a(42),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"day-5-identity-and-architecture"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#day-5-identity-and-architecture"}},[t._v("#")]),t._v(" Day 5 Identity and Architecture")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/day5/challenges/challenge-0.html"}},[t._v("Challenge 0 - Request an ID Token from Azure AD")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/day5/challenges/challenge-1.html"}},[t._v("Challenge 1 - Receive an ID Token in a Fragment URL")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/day5/challenges/challenge-2.html"}},[t._v("Challenge 2 - OAuth2 Implicit Flow")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/day5/challenges/challenge-3.html"}},[t._v("Challenge 3 - Integrate Azure AD into the SCM Contacts API")])],1),t._v(" "),o("li",[t._v("🔸 "),o("em",[o("RouterLink",{attrs:{to:"/day5/challenges/challenge-bo-1.html"}},[t._v("Breakout! - Integrate the sample application into Azure AD")])],1),t._v(" 🔸")])]),t._v(" "),o("blockquote",[o("p",[t._v("Please take a look at the restore checkpoint, if you were unable to complete day4.")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/day5/apps/checkpoint/"}},[t._v("Checkpoint - Restore from day4 to continue the breakout session (optional)")])],1)]),t._v(" "),o("h1",{attrs:{id:"day5-goal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#day5-goal"}},[t._v("#")]),t._v(" Day5 - Goal")]),t._v(" "),o("p",[t._v("You already have deployed the Azure Developer College's sample application to your Azure subscription. Although the application is up and running we can not use different user accounts to create Contacts and VisitReports per user. The current deployed application does not support any user authentication.")]),t._v(" "),o("p",[t._v("Today we we want to integrate Azure Active Directory as an Identity Provider in your application to authenticate and to authorize an Azure AD user to access the sample application.")]),t._v(" "),o("p",[t._v("Azure Active Directory (Azure AD) is Microsoft’s cloud-based identity and access management service, which helps your employees sign in and access resources in:")]),t._v(" "),o("ul",[o("li",[t._v("External resources, such as Microsoft Office 365, the Azure portal, and thousands of other SaaS applications.")]),t._v(" "),o("li",[t._v("Internal resources, such as apps on your corporate network and intranet, along with any cloud apps developed by your own organization.")])]),t._v(" "),o("p",[t._v("To get started with Azure AD the documentation "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/active-directory",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),o("OutboundLink")],1),t._v(" is a good starting point.")]),t._v(" "),o("h2",{attrs:{id:"authentication"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),o("p",[t._v("Authentication is the act of challenging a party for legitimate credentials, providing the basis for creation of a security principal to be used for identity and access control. In simpler terms, it's the process of proving you are who you say you are. Authentication is sometimes shortened to AuthN.")]),t._v(" "),o("h2",{attrs:{id:"authorization"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#authorization"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),o("p",[t._v("Authorization is the act of granting an authenticated security principal permission to do something. It specifies what data you're allowed to access and what you can do with it. Authorization is sometimes shortened to AuthZ.")]),t._v(" "),o("h2",{attrs:{id:"openid-connect-and-oauth-2-0"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#openid-connect-and-oauth-2-0"}},[t._v("#")]),t._v(" OpenID Connect and OAuth 2.0")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://openid.net/specs/openid-connect-core-1_0.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenID Connect"),o("OutboundLink")],1),t._v(" is a simple identity layer built on top of the OAuth 2.0 protocol. OAuth 2.0 defines mechanisms to obtain and use "),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/access-tokens",target:"_blank",rel:"noopener noreferrer"}},[t._v("access tokens"),o("OutboundLink")],1),t._v(" to access protected resources, but they do not define standard methods to provide identity information. OpenID Connect implements authentication as an extension to the OAuth 2.0 authorization process. It provides information about the end user in the form of an "),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/id-tokens",target:"_blank",rel:"noopener noreferrer"}},[t._v("id_token"),o("OutboundLink")],1),t._v(" that verifies the identity of the user and provides basic profile information about the user.")]),t._v(" "),o("h2",{attrs:{id:"protect-apis-with-azure-ad"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#protect-apis-with-azure-ad"}},[t._v("#")]),t._v(" Protect APIs with Azure AD")]),t._v(" "),o("p",[t._v("On Day5 you will learn how you can protect your APIs (microservices) with Azure AD. In addition you will learn how OAuth2 permissions are used to grant access to API's client applications and how a signed-in user can grant access. The sample application defines the following OAuth2 permissions")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("OAuth2 permission")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Contacts.Create")]),t._v(" "),o("td",[t._v("Allows the client app to create contacts for the signed-in user")])]),t._v(" "),o("tr",[o("td",[t._v("Contacts.Read")]),t._v(" "),o("td",[t._v("Allows the client app to read contacts of the signed-in user")])]),t._v(" "),o("tr",[o("td",[t._v("Contacts.Update")]),t._v(" "),o("td",[t._v("Allows the client app to update contacts of the signed-in user")])]),t._v(" "),o("tr",[o("td",[t._v("Contacts.Delete")]),t._v(" "),o("td",[t._v("Allows the client app to delete contacts of the signed-in user")])]),t._v(" "),o("tr",[o("td",[t._v("VisitReports.Create")]),t._v(" "),o("td",[t._v("Allows the client app to create VisitReports for the signed-in user")])]),t._v(" "),o("tr",[o("td",[t._v("VisitReports.Read")]),t._v(" "),o("td",[t._v("Allows the client app to read VisitReports of the signed-in user")])]),t._v(" "),o("tr",[o("td",[t._v("VisitReports.Update")]),t._v(" "),o("td",[t._v("Allows the client app to update VisitReports of the signed-in user")])]),t._v(" "),o("tr",[o("td",[t._v("VisitReports.Delete")]),t._v(" "),o("td",[t._v("Allows the client app to delete VisitReports of the signed-in user")])])])]),t._v(" "),o("h2",{attrs:{id:"sign-in-users"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sign-in-users"}},[t._v("#")]),t._v(" Sign in users")]),t._v(" "),o("p",[t._v("You will see how the sample application's Single Page Application (SPA) uses MSAL to sign in users and how to acquire an access token to access the APIs in the name of the signed-in user. Once an access token is acquired it is forwarded with each request to the APIs and the APIs can use the token to get needed information about the signed-in user.")]),t._v(" "),o("h2",{attrs:{id:"microsoft-authentication-library"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#microsoft-authentication-library"}},[t._v("#")]),t._v(" Microsoft Authentication Library")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://docs.microsoft.com/azure/active-directory/develop/msal-overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft Authentication Library (MSAL)"),o("OutboundLink")],1),t._v(" enables developers to acquire tokens from the Microsoft identity platform endpoint in order to access secured Web APIs. These Web APIs can be the Microsoft Graph, other Microsoft APIS, third-party Web APIs, or your own Web API. MSAL is available for .NET, JavaScript, Android, and iOS, which support many different application architectures and platforms.")]),t._v(" "),o("h2",{attrs:{id:"architecure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#architecure"}},[t._v("#")]),t._v(" Architecure")]),t._v(" "),o("p",[t._v("At the end of the day we will have integrated the sample application into Azure AD:")]),t._v(" "),o("p",[o("img",{attrs:{src:a(672),alt:"Architecture Overview"}})])])}),[],!1,null,null,null);e.default=r.exports}}]);