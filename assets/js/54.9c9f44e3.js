(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{309:function(e,t,r){e.exports=r.p+"assets/img/architecture_day2.697228e8.png"},789:function(e,t,r){"use strict";r.r(t);var a=r(42),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"break-out-3-create-the-infrastructure-for-our-sample-app-with-arm-templates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#break-out-3-create-the-infrastructure-for-our-sample-app-with-arm-templates"}},[e._v("#")]),e._v(" Break Out #3: Create the infrastructure for our sample app with ARM templates")]),e._v(" "),a("p",[e._v("So, this is our last Break-Out session for today. You will now have the challenge to create the ARM template for our SCM Contacts application and deploy it to Azure.")]),e._v(" "),a("h2",{attrs:{id:"services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#services"}},[e._v("#")]),e._v(" Services")]),e._v(" "),a("p",[e._v("As a reminder, here is the architecture, we want to create:")]),e._v(" "),a("p",[a("img",{attrs:{src:r(309),alt:"architecture_day2",title:"architecture_day2"}})]),e._v(" "),a("h3",{attrs:{id:"services-to-be-added"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#services-to-be-added"}},[e._v("#")]),e._v(" Services to be added")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Contacts API")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("Azure Web App:")]),e._v(" "),a("ul",[a("li",[e._v("Size: S1")]),e._v(" "),a("li",[e._v("make it accept only HTTPS traffic")])])])])]),e._v(" "),a("li",[a("strong",[e._v("Resources / Images API")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("Azure Storage Account:")]),e._v(" "),a("ul",[a("li",[e._v("SKU: Local Redundant Storage")]),e._v(" "),a("li",[e._v("Kind: StorageV2")])])]),e._v(" "),a("li",[a("em",[e._v("Azure Web App:")]),e._v(" "),a("ul",[a("li",[e._v("Size: S1")]),e._v(" "),a("li",[e._v("make it accept only HTTPS traffic")]),e._v(" "),a("li",[e._v("configure App Settings:\n"),a("ul",[a("li",[e._v("ImageStoreOptions__StorageAccountConnectionString: <CONNECTIONSTRING_OF_STORAGEACCOUNT>")]),e._v(" "),a("li",[e._v("ImageStoreOptions__ImageContainer: "),a("em",[e._v("rawimages")])]),e._v(" "),a("li",[e._v("ImageStoreOptions-__ThumbnailContainer: "),a("em",[e._v("thumbnails")])]),e._v(" "),a("li",[e._v("StorageQueueOptions__StorageAccountConnectionString: <CONNECTIONSTRING_OF_STORAGEACCOUNT>")]),e._v(" "),a("li",[e._v("StorageQueueOptions__Queue: "),a("em",[e._v("thumbnails")])]),e._v(" "),a("li",[e._v("StorageQueueOptions__ImageContainer: "),a("em",[e._v("rawimages")])]),e._v(" "),a("li",[e._v("StorageQueueOptions__ThumbnailContainer: "),a("em",[e._v("thumbnails")])])])])])]),e._v(" "),a("li",[a("em",[e._v("Azure Function:")]),e._v(" "),a("ul",[a("li",[e._v("Consumption Plan (!)")]),e._v(" "),a("li",[e._v("configure App Settings:\n"),a("ul",[a("li",[e._v("AzureWebJobsDashboard: <CONNECTIONSTRING_OF_STORAGEACCOUNT>")]),e._v(" "),a("li",[e._v("AzureWebJobsStorage: <CONNECTIONSTRING_OF_STORAGEACCOUNT>")]),e._v(" "),a("li",[e._v("StorageAccountConnectionString: <CONNECTIONSTRING_OF_STORAGEACCOUNT>")]),e._v(" "),a("li",[e._v("QueueName: "),a("em",[e._v("thumbnails")])]),e._v(" "),a("li",[e._v("FUNCTIONS"),a("em",[e._v("WORKER_RUNTIME: _dotnet")])]),e._v(" "),a("li",[e._v("FUNCTIONS*EXTENSION_VERSION: *~2_")]),e._v(" "),a("li",[e._v("ImageProcessorOptions__StorageAccountConnectionString: <CONNECTIONSTRING_OF_STORAGEACCOUNT>")]),e._v(" "),a("li",[e._v("ImageProcessorOptions__ImageWidth: "),a("em",[e._v("100")])])])])])])])]),e._v(" "),a("li",[a("strong",[e._v("Frontend / Single Page Application")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("Azure Storage Account:")]),e._v(" "),a("ul",[a("li",[e._v("SKU: Local Redundant Storage")]),e._v(" "),a("li",[e._v("Kind: StorageV2")]),e._v(" "),a("li",[e._v("Static Website Hosting can't be enabled via ARM templates at the time of writing. Enable it via Azure CLI after the deployment: "),a("code",[e._v("az storage blob service-properties update --account-name <STORAGE_ACCOUNT_NAME> --static-website --index-document index.html --404-document index.html")]),e._v(". To show the URL for it, use: "),a("code",[e._v('az storage account show -n <STORAGE_ACCOUNT_NAME> --query "primaryEndpoints.web" --output tsv')])])])])])])]),e._v(" "),a("h2",{attrs:{id:"todo-for-you"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#todo-for-you"}},[e._v("#")]),e._v(" TODO for You")]),e._v(" "),a("p",[e._v("Create one ARM template (plus parameters file) that contains all resources we need. Deploy the resources to a new resource group.")]),e._v(" "),a("h2",{attrs:{id:"references-links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references-links"}},[e._v("#")]),e._v(" References / Links")]),e._v(" "),a("ul",[a("li",[e._v("You can access/see the current template/JSON of running resources via "),a("a",{attrs:{href:"https://resources.azure.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://resources.azure.com"),a("OutboundLink")],1),e._v(". (That is a good starting point, when you want to know what UI setting influences which JSON parameter.)")]),e._v(" "),a("li",[e._v("Azure Resource Manager Template Reference: "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/templates/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.microsoft.com/en-us/azure/templates/"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("find documentation for all available properties of a service/resource")])])]),e._v(" "),a("li",[e._v("Azure Quickstart Templates: "),a("a",{attrs:{href:"https://github.com/Azure/azure-quickstart-templates",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/Azure/azure-quickstart-templates"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Azure Function App (Consumption Plan): "),a("a",{attrs:{href:"https://github.com/Azure/azure-quickstart-templates/tree/master/101-function-app-create-dynamic",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/Azure/azure-quickstart-templates/tree/master/101-function-app-create-dynamic"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Basic Web App: "),a("a",{attrs:{href:"https://github.com/Azure/azure-quickstart-templates/tree/master/101-webapp-basic-windows",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/Azure/azure-quickstart-templates/tree/master/101-webapp-basic-windows"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Storage Account: "),a("a",{attrs:{href:"https://github.com/Azure/azure-quickstart-templates/tree/master/101-storage-account-create",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/Azure/azure-quickstart-templates/tree/master/101-storage-account-create"),a("OutboundLink")],1)])])])]),e._v(" "),a("h1",{attrs:{id:"wrap-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wrap-up"}},[e._v("#")]),e._v(" Wrap-Up")]),e._v(" "),a("p",[a("strong",[a("em",[e._v("Congratulations")])]),e._v("! You have just automated the deployment of an Azure infrastructure. The next step would be to also automatically deploy the Web Apps / SPA to your infrastructure. We will learn about that on "),a("strong",[e._v("Day 4")]),e._v(", when we are talking about "),a("strong",[e._v("Continuous Integration and Continuous Deployment (CI/CD)")]),e._v(". On "),a("strong",[e._v("Day 3")]),e._v(", we will learn about some additional Azure services that we can add to our application, to be able to store data, search for it and to show you how to do service-to-service communication with a "),a("em",[e._v("microsoervice approach")]),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);