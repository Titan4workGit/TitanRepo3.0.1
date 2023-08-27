<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=16.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
 <%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
 <%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

   
   
<asp:Content ContentPlaceholderID="PlaceHolderAdditionalPageHead" runat="server">
	<meta name="revisit-after" content="2 days" />
    <meta name="description" content="Digital Workplace"/>
    <meta name="keywords" content="Digital Workplace" /> 
    <style type="text/css">
	.home-slider > .ms-webpart-zone {
		    display: block !important;
	}
	.home-slider > .ms-webpart-zone > .ms-webpart-cell-horizontal {
		    display: block !important;
		    margin: auto auto 0px !important;
	}
    </style>   
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderPageTitle" runat="server">
	Digital Workplace
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
<script type="text/javascript" src="https://s0.assets-yammer.com/assets/platform_embed.js"></script>
<script src='../SiteAssets/EmployeeSynchronous/Permission/CheckUserAuthentication.js'></script>
<script type="text/javascript">

$(document).ready(function () {
	//SP.SOD.executeOrDelayUntilScriptLoaded(getCurrentURL,"sp.js");
	SP.SOD.executeFunc('sp.js', 'SP.ClientContext', getCurrentURL_Link); 
}); 




function getCurrentURL_Link()
{
	// Get Social Media Settings.
 	setTimeout(GetSocialMediaSettings,3000);

	var listName='Companies';
	var txtCompanyId =  titanForWork.getQueryStringParameter("CompanyId");
    var siteURL = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('"+listName+"')/items?$select=ID,SiteURL&$filter=ID eq '" + txtCompanyId + "'";
    $.ajax({
        url: siteURL,
        headers: { Accept: "application/json;odata=verbose" },
        async: false,
        success: function (data)
        {
            var items = data.d.results;
            
            if (items.length>0)
            {
                        
                var siteURL = items[0].SiteURL;
                setURL(siteURL);
            }
		}, eror: function (data)
        {
            console.log($('#txtSomethingWentWrong').val());
        }
    });
}

function setURL(siteURL)
{
	var txtCompanyId =  titanForWork.getQueryStringParameter("CompanyId");
	var url = _spPageContextInfo.webServerRelativeUrl;


	var webPartCollection = new Array();
	    webPartCollection.push("Banners");
	    webPartCollection.push("Emergency Annoucements");
	    webPartCollection.push("Annoucements");
	    webPartCollection.push("Polls");
	    webPartCollection.push("Events");
	    webPartCollection.push("Media Gallery");
	    webPartCollection.push("Tech Admin");
	    webPartCollection.push("Project Admin");
	    webPartCollection.push("HR Admin");
	    webPartCollection.push("Meeting Room");
	    webPartCollection.push("Occasion");
	    var users = UserExistInProcessApprover(txtCompanyId , "", webPartCollection);
	   // console.log(users);
	    
	    $('.Meeting_Add').show();//Show for everyone
	        
	    for (var collectionIndex = 0; collectionIndex < users.length; collectionIndex++)
	    {
	        
	        if (users[collectionIndex].webPartName == "Annoucements")
	        {
	            $('.addAnnouncement').show();//Show or hide add new item link
	        }
	        else if (users[collectionIndex].webPartName == "Events")
	        {
	            $('.Event_Add').show();//Show or hide add new item link
	        }
	        else if (users[collectionIndex].webPartName == "Polls")
	        {
	            $('.Poll_Add').show();//Show or hide add new item link
	        }	       
			else if (users[collectionIndex].webPartName == "HR Admin")
	        {
	            $('.EmployeeAward_Add').show();//Show or hide add new item link
	        }
			else if (users[collectionIndex].webPartName == "Media Gallery")
	        {
	            $('.MediaGallery_Add').show();//Show or hide add new item link//MediaGallery_Add
	        }



	    }





    //var linkurlAnnouncements="javascript:OpenPopUpPageWithTitle('"+siteURL+"/Lists/Announcements/NewForm.aspx?Source="+url+"/Pages/Titan-New.aspx?WebAppId="+txtCompanyId+"',RefreshOnDialogClose,null,null,'Announcements')";

	//Add and View For Announcement web part
	$(".addAnnouncement").attr("href", "../Pages/Announcements.aspx?Mode=Add&WebAppId="+txtCompanyId+"&Source=Home");
	//$(".addAnnouncement").attr("onclick", ""+linkurlAnnouncements+"");

	//$(".viewAnnouncment").attr("href", ""+siteURL+"/Lists/Announcements/AllItems.aspx?Source="+url+"/Pages/Titan-New.aspx?WebAppId="+txtCompanyId+"");
	$(".viewAnnouncment").attr("href", "../Pages/ViewAnnouncements.aspx?WebAppId="+txtCompanyId+"&Source=Home");
	$(".viewAnnouncment").attr("onclick", "");

	
	//Add and View For Event web part
	//$(".Event_Add").attr("href", ""+siteURL+"/Lists/Event/NewForm.aspx?Source="+url+"/Pages/Titan-New.aspx?WebAppId="+txtCompanyId+"");	
	//$(".Event_Add").attr("onclick", "");
	//var linkurlEvent="javascript:OpenPopUpPageWithTitle('"+siteURL+"/Lists/Event/NewForm.aspx?Source="+url+"/Pages/Titan-New.aspx?WebAppId="+txtCompanyId+"',RefreshOnDialogClose,null,null,'Add New Event')";
	//$(".Event_Add").attr("href",""+linkurlEvent+"");	
      $(".Event_Add").attr("onclick", "");
	$(".Events_View").attr("href",""+url+"/Pages/AllEvents.aspx?WebAppId="+txtCompanyId+"");
	$(".Events_View").attr("onclick", "");

	//Add and View For Poll web part
	
	
	$(".Poll_Add").attr("href", ""+url+"/Pages/AddPolls.aspx?WebAppId="+txtCompanyId+"");
	$(".Poll_Add").attr("onclick", "");

	$(".Poll_View").attr("href", ""+url+"/Pages/ViewPolls.aspx?WebAppId="+txtCompanyId+"");
	$(".Poll_View").attr("onclick", "");

	//Add and View For Meeting web part
	//$(".Meeting_Add").attr("href", ""+siteURL+"/Lists/MeetingRoom/NewForm.aspx?Source="+url+"/Pages/Titan-New.aspx?WebAppId="+txtCompanyId+"");
	//$(".Meeting_Add").attr("onclick", "");

    //var linkurlMeeting="javascript:OpenPopUpPageWithTitle('"+siteURL+"/Lists/MeetingRoom/NewForm.aspx?Source="+url+"/Pages/Titan-New.aspx?WebAppId="+txtCompanyId+"',RefreshOnDialogClose,null,null,'Meeting')";
	//$(".Meeting_Add").attr("href",""+linkurlMeeting+"");
	$(".Meeting_Add").attr("onclick", "");

	$(".Meeting_View").attr("href",  ""+url+"/Pages/AllMeetings.aspx?WebAppId="+txtCompanyId+"");
	$(".Meeting_View").attr("onclick", "");

	
	//Add and View For Employee of the Month web part
	$(".EmployeeAward_Add").attr("href", ""+url+"/Pages/Empofthemonth.aspx?WebAppId="+txtCompanyId+"&sourcelocation=../Pages/Titan-New.aspx");
	//$(".EmployeeAward_Add").attr("href", ""+siteURL+"/Lists/EmployeeoftheMonth/NewForm.aspx?Source="+url+"/Pages/Titan-New.aspx?WebAppId="+txtCompanyId+"");
	$(".EmployeeAward_Add").attr("onclick", "");

	$(".EmployeeAward_View").attr("href", ""+url+"/Pages/ViewEmployeeOftheMonth.aspx?WebAppId="+txtCompanyId+"&sourcelocation=../Pages/Titan-New.aspx");
	$(".EmployeeAward_View").attr("onclick", "");

	

	//Add and View For Employee of the Month web part
	
	$(".MediaGallery_Add").attr("href", ""+siteURL+"/MediaGallery/Forms/Thumbnails.aspx?Source="+url+"/Pages/Titan-New.aspx?WebAppId="+txtCompanyId+"");
	$(".MediaGallery_Add").attr("onclick", "");

	$(".Mediagallery_View").attr("href", ""+siteURL+"/MediaGallery/Forms/Thumbnails.aspx?Source="+url+"/Pages/Titan-New.aspx?WebAppId="+txtCompanyId+"");
	$(".Mediagallery_View").attr("onclick", "");


	$(".viewBanner").attr("href", ""+siteURL+"/Pages/ViewSliders.aspx?WebAppId="+txtCompanyId+"");
	$(".viewBanner").attr("onclick", "");
}



///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// Get Social Media Settings /////////////////////////////////////////
function GetSocialMediaSettings()
{
	var txtCompanyId =  titanForWork.getQueryStringParameter("CompanyId");
	var requestURI= _spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getByTitle('SocialMediaSettings')/items?$select=ID,SocialType,Link,IsActive,Company/ID&$expand=Company&$filter=Company/ID eq "+txtCompanyId +"";
	$.ajax({
		url:requestURI,
		type:"GET",
		headers: { "ACCEPT": "application/json;odata=verbose" },
		success:function(data)
		{
			var activeTab=false;
			$.each(data.d.results,function(i,item){
				var socialType=item.SocialType;
				var link=item.Link;
				var isActive=item.IsActive;

				if(socialType=="Yammer" && isActive=="Yes")
				{
					$("#socialMediaYammer").html(link);
					$(".tab-yammer").show();
				}
				else if(item.SocialType=="Facebook" && isActive=="Yes")
				{
					$("#socialMediaFacebook").html(link);
					$(".tab-facebook").show();
										
				}
				else if(item.SocialType=="Twitter" && isActive=="Yes")
				{
					$("#socialMediaTwitter").html(link);
					$(".tab-tweeter").show();
										
				}
				else if(item.SocialType=="Linkedin" && isActive=="Yes")
				{
					$("#socialMediaLinkdin").html(link);
					$(".tab-linkdin").show();
					
				}

			})
			// Tab Active Logic
			//$("#tabdata li:visible:eq(0)").addClass("tab-active");
			//$("#tabdata .tab-active").trigger('click');
			var addActiveClass=true;
			if($(".tab-yammer").is(":visible"))
			{
				$("#tab-yammer").addClass("active");
			 	 addActiveClass=false;
			}
			if($(".tab-tweeter").is(":visible"))
			{
		    	if(addActiveClass==true)
		    	{
		    	$("#tab-tweeter").addClass("active");
		    	}
		    	addActiveClass=false;
			}
            if($(".tab-facebook").is(":visible"))
			{
			   if(addActiveClass==true)
		    	{
		    	$("#tab-facebook").addClass("active");
		    	}
               addActiveClass=false;
			}
            if($(".tab-linkdin").is(":visible"))
			{
			    if(addActiveClass==true)
		    	{
		    	$("#tab-linkdin").addClass("active");
		    	}
		     	addActiveClass=false;
			}			
		},
		error:function()
		{
			console.log("Error in Get Social Media Settings.");
		}
	})
}	


</script>

	<h1 style="display:none">Intranet</h1>

<div class="container-fluid res-container-div">
	<div class="col-md-12">
		<div class="row top15">
			<div class="col-md-8">
				<div class="home-slider"> 
					<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="WebPartZone1" FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
					<div class="container">
						<div class=" view-all-slider row view-all-3">
							<div class="col-md-12">
								<span class=" pull-right ">
									<nb data-localize="ViewAll"> 
									<!--	<SharePoint:SPLinkButton runat="server" class="viewBanner"  id="nav18" target="_blank"  Text="View All" />-->
										<a class="viewBanner" target="_blank" id="nav18"  class="text-3">
										</a>
									</nb>
								</span>
							</div>
						</div>
					</div>
				</div>	
			</div>
			<div class="col-md-4 margin20">				
				<div class="panel panel-default panel-height-2 shadow2">
					<div class="panel-heading  panel-head-4">
						<div class="panel-title">
							<h4 class="h4-color"><nb data-localize="Announcements"> <label>
							</label></nb><span class="link-color">
							</span>
								<SharePoint:SPSecurityTrimmedControl ID="SPSecurityTrimmedControl1" runat="server"  
								AuthenticationRestrictions="AuthenticatedUsersOnly" Permissions="AddListItems" PermissionContext="CurrentList" PermissionMode="All">  
								<span class="pull-right ">
								
								<!--<SharePoint:SPLinkButton runat="server" class="addAnnouncement glyphicon glyphicon-plus-sign pull-right link-color" id="nav4" target="_blank" style="display:none"   />-->
								
								<a class="addAnnouncement glyphicon glyphicon-plus-sign pull-right link-color" id="nav4" style="display:none"  class="text-3"></a>
					
								
								<!--<a class="aVisited" target="_blank" href="../Lists/Announcements/NewForm.aspx?Source=/sites/TITAN2-DEV">+ Add New</a>-->
								</span>   					
								</SharePoint:SPSecurityTrimmedControl>							
							</h4>
						</div>
					</div>				
					<div class="panel-body over-flow-y" >                       
						<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="WebPartZone2"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>                       				
					</div>
					<div class="container">
						<div class="row view-all-3">
							<div class="col-sm-12">
								<span class=" pull-right ">
									<nb data-localize="ViewAll">
									<a class="viewAnnouncment" id="nav5" class="text-3">
									</a>
									<!-- <SharePoint:SPLinkButton runat="server" class="viewAnnouncment"  id="nav5" target="_blank"  Text="View All" />-->
									</nb>
								</span>
							</div>
						</div>
					</div>	
				<!--/panel content-->
				</div>
			</div>
		</div>
		<div class="container-fluid top10">
			<div class="row">
				<div class="col-md-6 promoted-div">
					<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="WebPartZone3"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone> 
				</div>
				<div class="col-md-6 news-box padd-right-2 padd-left-2 mrg-btm20" style="padding-left:0px;">
					<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="WebPartZone4"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
				</div>
			</div>
		</div>
	</div>
	<!--part 1 end -->

	<!--part 2 -->
	<div class="col-md-12">
		<div class="row top10">
			<div class="col-md-3">				
				<div class="panel panel-default panel-height-2 shadow2">
					<div class="panel-heading  panel-head-4">
						<div class="panel-title">
							<h4 class="h4-color"><nb data-localize="Poll"> <label>
							</label></nb><span class="link-color"></span>
								<SharePoint:SPSecurityTrimmedControl ID="SPSecurityTrimmedControl10" runat="server"  
								AuthenticationRestrictions="AuthenticatedUsersOnly" Permissions="AddListItems" PermissionContext="CurrentSite">                   
								<span class="pull-right ">
								<a class="glyphicon glyphicon-plus-sign pull-right link-color Poll_Add" id="nav10" style="display:none"  class="text-3"></a>				
								<!--	<SharePoint:SPLinkButton runat="server" class="glyphicon glyphicon-plus-sign pull-right link-color Poll_Add"   id="nav10" target="_blank" style="display:none" />-->
								</span>
								</SharePoint:SPSecurityTrimmedControl>
							</h4>
						</div>
					</div>					
					<div class="panel-body over-flow-y">				
						<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="WebPartZone7"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>                              				               
					</div>
					<div class="container">
						<div class="row  view-all-3">
							<div class="col-sm-12">
								<span class="pull-right">
									<nb data-localize="ViewAll">
									<!--<SharePoint:SPLinkButton runat="server"  class="Poll_View" id="nav3" target="_blank"  Text="View All" />-->
										<a class="Poll_View" id="nav3"  class="text-3">
										</a>
									</nb>
								</span>
							</div>
						</div>
					</div>
								
				<!--/panel content-->
				</div>
				</div>
		
				<div class="col-md-3">					
					<div class="panel panel-default panel-height-2 shadow2">
						<div class="panel-heading  panel-head-4">
							<div class="panel-title">
							<h4 class="h4-color"><nb data-localize="MeetingRoom"><label>
							</label></nb><span class="link-color"></span>
							<SharePoint:SPSecurityTrimmedControl ID="SPSecurityTrimmedControl4" runat="server"  
							AuthenticationRestrictions="AuthenticatedUsersOnly" Permissions="AddListItems" PermissionContext="CurrentList">                   
							<span class="pull-right ">
							
							<!--	<SharePoint:SPLinkButton runat="server" class="glyphicon glyphicon-plus-sign pull-right link-color Meeting_Add"   id="nav6" target="_blank" style="display:none"/>-->
							
							<a class="glyphicon glyphicon-plus-sign pull-right link-color Meeting_Add" id="nav6"  style="display:none" class="text-3"></a>
							
							
							</span>
							</SharePoint:SPSecurityTrimmedControl>
							</h4>
							</div>
						</div>						
						<div class="panel-body over-flow-y">
							<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="WebPartZone8"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
						</div>
						<div class="container">
							<div class="row  view-all-3">
								<div class="col-sm-12">
									<span class=" pull-right">
										<nb data-localize="ViewAll">
											<!--	<SharePoint:SPLinkButton runat="server" class="Meeting_View"   id="nav7" target="_blank"  Text="View All" />-->
											<a class="Meeting_View" target="_blank" id="nav7"   class="text-3">
											</a>
										</nb>
									</span>
								</div>
							</div>
						</div>											
					<!--/panel content-->
					</div>
				</div>                    
				<div class="col-md-3">
					<div class="panel panel-default panel-height-2 shadow2">
						<div class="panel-heading  panel-head-4">
							<div class="panel-title">
								<h4 class="h4-color"><nb data-localize="Events"><label>
									</label></nb><span class="link-color"></span>
									<SharePoint:SPSecurityTrimmedControl ID="SPSecurityTrimmedControl3" runat="server"  
									AuthenticationRestrictions="AuthenticatedUsersOnly" Permissions="AddListItems" PermissionContext="CurrentSite"> 
									<span class="pull-right ">
									<!--<SharePoint:SPLinkButton runat="server" class="aVisited"  NavigateUrl="~site/Medgulf/Lists/Event/NewForm.aspx?Source=/sites/TITAN2-DEV" id="nav8" target="_blank"  Text="+ Add New" />-->
									<a class="glyphicon glyphicon-plus-sign pull-right link-color Event_Add"  class="text-3" style="display:none">
									</a>
									</span>
									</SharePoint:SPSecurityTrimmedControl>
								</h4>
							</div>
						</div>
						<div class="panel-body over-flow-y">
							<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="WebPartZone9"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
						</div>
						<div class="container">
							<div class="row  view-all-3">
								<div class="col-sm-12">
									<span class=" pull-right">
									<!--<SharePoint:SPLinkButton runat="server"  NavigateUrl="~site/Blogs/Lists/Posts/AllPosts.aspx?Source=/sites/Titan-dev" id="nav9" target="_blank"  Text="View All" />-->
										<nb data-localize="ViewAll">
											<a target="_blank" class="Events_View" >
												<label class="View_All_label" style="margin-bottom:0px !important; font-weight:500">
												</label>
											</a>
										</nb>					
									</span> 
								</div>
							</div>
						</div>
						
					<!--/panel content-->
					</div>
				</div>
		
				<div class="col-md-3">
					<div class="panel panel-default panel-height-2 shadow2">
						<div class="panel-heading  panel-head-4">
							<div class="panel-title">
								<h4 class="h4-color"><nb data-localize="EmployeeOfTheMonth">
								<label></label></nb><span class="link-color"></span>
									<SharePoint:SPSecurityTrimmedControl ID="SPSecurityTrimmedControl8" runat="server"  
									AuthenticationRestrictions="AuthenticatedUsersOnly" Permissions="AddListItems" PermissionContext="CurrentSite"> 
										<span class="pull-right ">
										<!-- <SharePoint:SPLinkButton runat="server" class="aVisited"  NavigateUrl="~site/Blogs/Lists/Posts/NewPost.aspx?Source=/sites/Titan-dev" id="nav12" target="_blank"  Text="+ Add New" />-->							
											<a class="glyphicon glyphicon-plus-sign pull-right link-color EmployeeAward_Add" target="_blank"  class="text-3" style="display:none">
											</a>
										</span>
									</SharePoint:SPSecurityTrimmedControl>													
								</h4>
							</div>
						</div>
							<div class="panel-body">                           
							<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="WebPartZone10"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>				                                        
							</div>
							<div class="container"> 
								<div class="row view-all-3">
									<div class="col-sm-12 ">
										<span class=" pull-right">
											<nb data-localize="ViewAll">														
												<!--<SharePoint:SPLinkButton runat="server"  class="EmployeeAward_View" id="nav11" target="_blank"  Text="View All" />-->							
												<a class="EmployeeAward_View" target="_blank" id="nav11"  class="text-3" >
												</a>							
											</nb>
										</span>
									</div>
								</div>
							</div>
								<!--/panel content-->
								</div>
					</div>                                        						
				</div>	
		</div>
			<!--</div>-->
	<!--part 2 end-->	
	<!--part-3-->
	<div class="col-md-12">	
		<div class="row top10">
			<div class="col-md-6">
				<div class="panel panel-default panel-height-2 shadow2">
					<div class="panel-heading  panel-head-4">
						<div class="panel-title">
							<h4 class="h4-color">
								<nb data-localize="MediaGallery"><label>
								 </label>
								</nb>
								<span class="link-color"></span>
								<SharePoint:SPSecurityTrimmedControl ID="SPSecurityTrimmedControl2" runat="server"  
								AuthenticationRestrictions="AuthenticatedUsersOnly" Permissions="AddListItems" PermissionContext="CurrentSite">
								<span class="pull-right ">
								<!--	<SharePoint:SPLinkButton runat="server" class="glyphicon glyphicon-plus-sign pull-right MediaGallery_Add link-color"   id="nav1" target="_blank" style="display:none" />-->
								<a class="glyphicon glyphicon-plus-sign pull-right MediaGallery_Add link-color" target="_blank"  class="text-3" style="display:none">
								</a>	
								</span>
								</SharePoint:SPSecurityTrimmedControl>
							</h4>
						</div>
					</div>
					<div class="panel-body">                           
						<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="WebPartZone5"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>                                                 
					</div>
					<div class="container">
						<div class="row view-all-3">
							<div class="col-md-12">
								<span class=" pull-right">
									<nb data-localize="ViewAll"> 
									<!--<SharePoint:SPLinkButton runat="server"  class="Mediagallery_View" id="nav2" target="_blank"  Text="View All" />-->
										<a class="Mediagallery_View" target="_blank" id="nav2"  class="text-3">
										</a>
									</nb>
								</span>
							</div>        
						</div>
					</div>	
				<!--/panel content-->
				</div>
			</div>	
			<div class="col-md-6">
				<div class="panel panel-default panel-height-2 shadow2">				
					<div class="tabbable full-width-tabs social-webpart">
						<ul class="nav nav-tabs" id="tabdata" style="/*border-top:1px solid #ccc;*/">
							<li style="display:none;" class="tab-active take-all-space-you-can tab-yammer"><a href="#tab-yammer" data-toggle="tab" class="top-margin" ><img src="../_catalogs/masterpage/Titan2/Images/yammer.png"></a></li>
							<li style="display:none;" class="take-all-space-you-can tab-tweeter"><a href="#tab-tweeter" data-toggle="tab" class="top-margin" ><img src="../_catalogs/masterpage/Titan2/Images/tweeter.png"></a></li>
							<li style="display:none;" class="take-all-space-you-can tab-facebook"><a href="#tab-facebook" data-toggle="tab" class="top-margin" ><img src="../_catalogs/masterpage/Titan2/Images/fb.png"></a></li>
							<li style="display:none;" class="take-all-space-you-can tab-linkdin"><a href="#tab-linkdin" data-toggle="tab" class="top-margin" ><img src="../_catalogs/masterpage/Titan2/Images/linkdeinh.png"></a></li>						
						</ul>
						<div class="panel-body" style="padding:0px;">					
							<div class="tab-content">
							<div class="tab-pane" id="tab-yammer">  
								<!--<div id="embedded-feed" style="height:272px;width:99.8%;"></div>-->
								<div id="socialMediaYammer" style="height:272px;width:99.8%;">
								</div>
							</div>						
							<div class="tab-pane" id="tab-tweeter">
								<div id="socialMediaTwitter"></div>
							</div>  
							<div class="tab-pane" id="tab-facebook">
								<div id="socialMediaFacebook"></div>
							</div>  
								<div class="tab-pane" id="tab-linkdin">
									<div id="socialMediaLinkdin"></div>
								</div>  						
							</div> 
						</div>
						
						
					</div>                      
				</div>
			</div>
		</div>
	</div>
	<!--part 3 end-->	
</div>
</asp:Content>



