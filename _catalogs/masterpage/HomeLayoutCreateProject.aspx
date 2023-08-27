<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=16.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
 <%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
 <%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>




<asp:Content ContentPlaceholderID="PlaceHolderAdditionalPageHead" runat="server">
	<meta name="revisit-after" content="2 days" />
    <meta name="description" content="Intranet"/>
    <meta name="keywords" content="Intranet" />    
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderPageTitle" runat="server">
	Intranet
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
		<div class="col-md-12">
			<div class="row">
				<div class="col-md-12">
					<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="WebPartZone1"  FrameType ="TitleBarOnly"  Orientation="Horizontal"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>   
				</div>
			</div>
		</div>
</asp:Content>




