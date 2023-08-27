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
		.ms-webpartzone-cell {
			margin: auto auto 0px;
		}
    </style>    
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderPageTitle" runat="server">
	Digital Workplace
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
	<WebPartPages:SPProxyWebPartManager runat="server" id="spproxywebpartmanager"></WebPartPages:SPProxyWebPartManager>	
<div id="my-dash-board-page-wrapper" class="paddtop0 top10" style="margin:0">
<div id="page-inner">
<!--  <div class="row">
<div class="col-md-12">
<h3 class="top5"> <span class="glyphicon glyphicon-home icon-size"></span> Home </h3>   
</div>
</div>  -->             
<!-- /. ROW  -->
	<div class="col-md-12 top15">
		<div style="background-color:transparent;">
		<ul id="myTab" class="nav nav-tabs nav-justified shadow3" style="margin-bottom: 15px; margin-top:0px">
	    <li class="active"><a href="#home" data-toggle="tab" class="js-tabcollapse-panel-heading" data-parent="" data-localize="Home">
		</a></li>  
		<li class=""><a href="#Approvals" data-toggle="tab" class="js-tabcollapse-panel-heading" data-parent="" data-localize="Approvals">
		</a></li>
		<li class=""><a href="#Tasks" data-toggle="tab" class="js-tabcollapse-panel-heading" data-parent="" style="background-image: none;" data-localize="Tasks">
		</a></li>     
		<!--<li class=""><a href="#Documents" data-toggle="tab" class="js-tabcollapse-panel-heading" data-parent="" style="background-image: none;">
		Documents</a></li>-->
		</ul>
			<div id="myTabContent" class="tab-content">
				<div>
					<div class="row tab-pane fade active in" id="home">
						<div class="row top15">
							<div class="col-md-12">
							<!-- Left Panle WebParts -->
								<div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
									<WebPartPages:WebPartZone id="WebPartZone1" runat="server" title="Zone1"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
								</div>
								<div class="col-xs-12 col-sm-8 col-md-9 col-lg-5">
									<div class="row">
									<!-- Approvals-Allocated-->
										<WebPartPages:WebPartZone id="WebPartZone3" runat="server" title="Zone3"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
									<!-- Approvals-Allocated-->
									<!-- Sticky Notes-->
										<div class="col-lg-12 col-md-12 col-sm-12">
											<div class="panel panel-default shadow2">
											<!-- <div class="panel-heading  panel-head-4">
											<div class="panel-title">
											<h4 class="h4-color"><span class="glyphicon glyphicon-list-alt"></span> Sticky Notes </h4>
											</div>
											</div>-->
												<div class="list-group">
													<WebPartPages:WebPartZone id="WebPartZone4" runat="server" title="Zone4"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>         
													<!--<div class="pull-right" style="margin-right: 15px; margin-top: 3px;"><a href="#">View All</a></div>-->            
												</div>
											</div>                   
										</div>
									<!-- Sticky Notes-->  
									</div>
								</div>
							<!--End of left Panle WebParts-->
							<!--Start Right Side WebParts-->
							<div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
								<div class="panel panel-default  shadow2">
									<div class="panel-heading  panel-head-4">
										<div class="panel-title">
											<!--<h4 class="h4-color"><span class="glyphicon glyphicon-bell"></span> 
											Notification Center </h4>-->
											<h4 class="h4-color" data-localize="NotificationCenter"><span class="glyphicon glyphicon-bell"></span> 
											</h4>
										</div>
									</div>
									<WebPartPages:WebPartZone id="WebPartZone6" runat="server" title="Zone6"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
								</div>                   
							</div>
							<!-- Notification-->  
							<!--End right side webparts-->  
							</div>
						</div>
					</div>
				<!--2nd Tab Details-->
					<div class="tab-pane fade" id="Approvals">       
						<div class="col-lg-12  top15">
							<div class="row">
								<div class="col-lg-12 panel panel-default grid" style="background-color:#fff">   
								<!-- Filter End-->
									<div class="clearfix"></div>
									<div class="row panel-heading  panel-head-4">
										<div class="panel-title">
											<!--<h4 class="h4-color"><span class="glyphicon glyphicon-save"></span>
											&nbsp;Approvals Inbox</h4>-->
											<h4 class="h4-color"><span class="glyphicon glyphicon-save"></span>
												<span data-localize="ApprovalInbox"></span>
											</h4>
										</div>
									</div>
								<!-- TASK-->
									<WebPartPages:WebPartZone id="WebPartZone10" runat="server" title="Zone10"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
								</div>
								<div class="col-lg-12 top20 mrg-btm-20 panel panel-default grid" style="background-color:#fff">   
								<!-- Filter End-->
									<div class="clearfix"></div>
									<div class="row panel-heading  panel-head-4">
										<div class="panel-title">
											<!--<h4 class="h4-color"><span class="glyphicon glyphicon-open"></span>
											&nbsp;Approvals Outbox</h4>-->
											<h4 class="h4-color"><span class="glyphicon glyphicon-open"></span>
												<span data-localize="ApprovalOutbox"></span>
											</h4>
										</div>
									</div>
								<!-- TASK-->
									<WebPartPages:WebPartZone id="WebPartZone11" runat="server" title="Zone11"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
								</div>
							</div>
						</div>
					</div>
				<!--End of 2nd Tab-->
				<!--3rd Tab Details-->
					<div class="row tab-pane fade" id="Tasks">       
						<div class="col-lg-12 top15">
							<div class="row" style="display:none">
								<div class="col-lg-12">   
									<div class="row">   
										<div class="col-md-6 pull-right">
											<WebPartPages:WebPartZone id="WebPartZone16" runat="server" title="Zone16"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
										</div>
									</div>
								<!-- Filter End-->
								</div>
							</div>
							<div class="col-lg-12 panel panel-default grid" style="background-color:#fff">   
							<!-- Filter End-->
								<div class="clearfix"></div>
									<div class="row panel-heading  panel-head-4">
										<div class="panel-title">
											<h4 class="h4-color"><span class="glyphicon glyphicon-save"></span>
											<span data-localize="TaskInbox"></span>
											</h4>
										</div>
									</div>
							<!-- TASK-->
									<WebPartPages:WebPartZone id="WebPartZone12" runat="server" title="Zone12"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
							</div>
							<div class="col-lg-12 panel panel-default top20 mrg-btm-20 grid" style="background-color:#fff">   
							<!-- Filter End-->
								<div class="clearfix"></div>
								<div class="row panel-heading  panel-head-4">
									<div class="panel-title">
										<h4 class="h4-color"><span class="glyphicon glyphicon-open"></span>
										<span data-localize="TaskOutbox"></span>
										</h4>
									</div>
								</div>
							<!-- TASK-->
								<WebPartPages:WebPartZone id="WebPartZone13" runat="server" title="Zone13"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
							</div>
						</div>
					</div>
				<!--End of 3rd Tab-->
				<!--4th Tab Details-->
					<div class="tab-pane fade" id="Documents">       
					<div class="col-lg-12 top15">
					<div class="row">
					<WebPartPages:WebPartZone id="WebPartZone8" runat="server" title="Zone8"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>		         
					</div>
					</div>
					</div>
				<!--End of 4th Tab-->
				</div>
			</div>
		</div>
	</div>
</div>
</div>
<!--</div>-->
</asp:Content>




