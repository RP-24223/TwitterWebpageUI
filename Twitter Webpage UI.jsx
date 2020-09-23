// Created using compCode v1.2.1

buildTwitterDesktopUI();
function buildTwitterDesktopUI() {

app.beginUndoGroup("Twitter Desktop");

try {

// CREATE FOLDER HIERARCHY START
	var socialMediaUi_folder_properties = {"name":"Social Media UI","label":2,"comment":"","itemIsFolderItem":{"type":"function","arguments":["item"],"body":"return item instanceof FolderItem;"}};
	var socialMediaUi_folder = findProjectItem(app.project.rootFolder, false, socialMediaUi_folder_properties);
	if (socialMediaUi_folder === null) {
		socialMediaUi_folder = app.project.items.addFolder(socialMediaUi_folder_properties.name);
		socialMediaUi_folder.label = socialMediaUi_folder_properties.label;
	}
	var twitter_folder_properties = {"name":"Twitter","label":2,"comment":"","itemIsFolderItem":{"type":"function","arguments":["item"],"body":"return item instanceof FolderItem;"}};
	var twitter_folder = findProjectItem(socialMediaUi_folder, false, twitter_folder_properties);
	if (twitter_folder === null) {
		twitter_folder = app.project.items.addFolder(twitter_folder_properties.name);
		twitter_folder.label = twitter_folder_properties.label;
		twitter_folder.parentFolder = socialMediaUi_folder;
	}
	var imageComps_folder_properties = {"name":"Image Comps","label":2,"comment":"","itemIsFolderItem":{"type":"function","arguments":["item"],"body":"return item instanceof FolderItem;"}};
	var imageComps_folder = findProjectItem(twitter_folder, false, imageComps_folder_properties);
	if (imageComps_folder === null) {
		imageComps_folder = app.project.items.addFolder(imageComps_folder_properties.name);
		imageComps_folder.label = imageComps_folder_properties.label;
		imageComps_folder.parentFolder = twitter_folder;
	}
	var solids_folder_properties = {"name":"Solids","label":2,"comment":"","itemIsFolderItem":{"type":"function","arguments":["item"],"body":"return item instanceof FolderItem;"}};
	var solids_folder = findProjectItem(app.project.rootFolder, false, solids_folder_properties);
	if (solids_folder === null) {
		solids_folder = app.project.items.addFolder(solids_folder_properties.name);
		solids_folder.label = solids_folder_properties.label;
	}
	var panels_folder_properties = {"name":"Panels","label":2,"comment":"","itemIsFolderItem":{"type":"function","arguments":["item"],"body":"return item instanceof FolderItem;"}};
	var panels_folder = findProjectItem(twitter_folder, false, panels_folder_properties);
	if (panels_folder === null) {
		panels_folder = app.project.items.addFolder(panels_folder_properties.name);
		panels_folder.label = panels_folder_properties.label;
		panels_folder.parentFolder = twitter_folder;
	}
	var buttons_folder_properties = {"name":"Buttons","label":2,"comment":"","itemIsFolderItem":{"type":"function","arguments":["item"],"body":"return item instanceof FolderItem;"}};
	var buttons_folder = findProjectItem(twitter_folder, false, buttons_folder_properties);
	if (buttons_folder === null) {
		buttons_folder = app.project.items.addFolder(buttons_folder_properties.name);
		buttons_folder.label = buttons_folder_properties.label;
		buttons_folder.parentFolder = twitter_folder;
	}
// CREATE FOLDER HIERARCHY END

// CREATE COMPOSITIONS START
	var twitterDesktop_comp_properties = {"name":"Twitter Desktop","label":15,"comment":"","height":2247,"width":1448,"pixelAspect":1,"bgColor":[0.09019607843137,0.12549019607843,0.16470588235294],"duration":5.00500500500501,"numLayers":25,"frameRate":23.9759979248047,"itemIsCompItem":{"type":"function","arguments":["item"],"body":"return item instanceof CompItem;"}};
	var twitterDesktop_comp = app.project.items.addComp(twitterDesktop_comp_properties.name, twitterDesktop_comp_properties.width, twitterDesktop_comp_properties.height, twitterDesktop_comp_properties.pixelAspect, twitterDesktop_comp_properties.duration, twitterDesktop_comp_properties.frameRate);
		twitterDesktop_comp.time = 0;
		twitterDesktop_comp.bgColor = twitterDesktop_comp_properties.bgColor;
		twitterDesktop_comp.resolutionFactor = [1, 1];
		twitterDesktop_comp.motionBlur = true;
		twitterDesktop_comp.parentFolder = twitter_folder;
	var avatarImage_comp_properties = {"name":"Avatar Image","label":15,"comment":"","height":600,"width":600,"pixelAspect":1,"bgColor":[0.09019607843137,0.12549019607843,0.16470588235294],"duration":5.00500500500501,"numLayers":1,"frameRate":23.9759979248047,"itemIsCompItem":{"type":"function","arguments":["item"],"body":"return item instanceof CompItem;"}};
	var avatarImage_comp = findProjectItem(imageComps_folder, false, avatarImage_comp_properties);
	var avatarImage_comp_populate = false;
	if (avatarImage_comp === null) {
		avatarImage_comp = app.project.items.addComp(avatarImage_comp_properties.name, avatarImage_comp_properties.width, avatarImage_comp_properties.height, avatarImage_comp_properties.pixelAspect, avatarImage_comp_properties.duration, avatarImage_comp_properties.frameRate);
		avatarImage_comp.time = 0;
		avatarImage_comp.bgColor = avatarImage_comp_properties.bgColor;
		avatarImage_comp.resolutionFactor = [1, 1];
		avatarImage_comp.parentFolder = imageComps_folder;
		avatarImage_comp_populate = true;
	}
	var ymlGuestProfileImage1_comp_properties = {"name":"YML - Guest Profile Image 1","label":15,"comment":"","height":400,"width":400,"pixelAspect":1,"bgColor":[0.09019607843137,0.12549019607843,0.16470588235294],"duration":5.00500500500501,"numLayers":1,"frameRate":23.9759979248047,"itemIsCompItem":{"type":"function","arguments":["item"],"body":"return item instanceof CompItem;"}};
	var ymlGuestProfileImage1_comp = findProjectItem(imageComps_folder, false, ymlGuestProfileImage1_comp_properties);
	var ymlGuestProfileImage1_comp_populate = false;
	if (ymlGuestProfileImage1_comp === null) {
		ymlGuestProfileImage1_comp = app.project.items.addComp(ymlGuestProfileImage1_comp_properties.name, ymlGuestProfileImage1_comp_properties.width, ymlGuestProfileImage1_comp_properties.height, ymlGuestProfileImage1_comp_properties.pixelAspect, ymlGuestProfileImage1_comp_properties.duration, ymlGuestProfileImage1_comp_properties.frameRate);
		ymlGuestProfileImage1_comp.time = 0;
		ymlGuestProfileImage1_comp.bgColor = ymlGuestProfileImage1_comp_properties.bgColor;
		ymlGuestProfileImage1_comp.resolutionFactor = [1, 1];
		ymlGuestProfileImage1_comp.motionBlur = true;
		ymlGuestProfileImage1_comp.parentFolder = imageComps_folder;
		ymlGuestProfileImage1_comp_populate = true;
	}
	var ymlGuestProfileImage2_comp_properties = {"name":"YML - Guest Profile Image 2","label":15,"comment":"","height":400,"width":400,"pixelAspect":1,"bgColor":[0.09019607843137,0.12549019607843,0.16470588235294],"duration":5.00500500500501,"numLayers":1,"frameRate":23.9759979248047,"itemIsCompItem":{"type":"function","arguments":["item"],"body":"return item instanceof CompItem;"}};
	var ymlGuestProfileImage2_comp = findProjectItem(imageComps_folder, false, ymlGuestProfileImage2_comp_properties);
	var ymlGuestProfileImage2_comp_populate = false;
	if (ymlGuestProfileImage2_comp === null) {
		ymlGuestProfileImage2_comp = app.project.items.addComp(ymlGuestProfileImage2_comp_properties.name, ymlGuestProfileImage2_comp_properties.width, ymlGuestProfileImage2_comp_properties.height, ymlGuestProfileImage2_comp_properties.pixelAspect, ymlGuestProfileImage2_comp_properties.duration, ymlGuestProfileImage2_comp_properties.frameRate);
		ymlGuestProfileImage2_comp.time = 0;
		ymlGuestProfileImage2_comp.bgColor = ymlGuestProfileImage2_comp_properties.bgColor;
		ymlGuestProfileImage2_comp.resolutionFactor = [1, 1];
		ymlGuestProfileImage2_comp.motionBlur = true;
		ymlGuestProfileImage2_comp.parentFolder = imageComps_folder;
		ymlGuestProfileImage2_comp_populate = true;
	}
	var ymlGuestProfileImage3_comp_properties = {"name":"YML - Guest Profile Image 3","label":15,"comment":"","height":400,"width":400,"pixelAspect":1,"bgColor":[0.09019607843137,0.12549019607843,0.16470588235294],"duration":5.00500500500501,"numLayers":1,"frameRate":23.9759979248047,"itemIsCompItem":{"type":"function","arguments":["item"],"body":"return item instanceof CompItem;"}};
	var ymlGuestProfileImage3_comp = findProjectItem(imageComps_folder, false, ymlGuestProfileImage3_comp_properties);
	var ymlGuestProfileImage3_comp_populate = false;
	if (ymlGuestProfileImage3_comp === null) {
		ymlGuestProfileImage3_comp = app.project.items.addComp(ymlGuestProfileImage3_comp_properties.name, ymlGuestProfileImage3_comp_properties.width, ymlGuestProfileImage3_comp_properties.height, ymlGuestProfileImage3_comp_properties.pixelAspect, ymlGuestProfileImage3_comp_properties.duration, ymlGuestProfileImage3_comp_properties.frameRate);
		ymlGuestProfileImage3_comp.time = 0;
		ymlGuestProfileImage3_comp.bgColor = ymlGuestProfileImage3_comp_properties.bgColor;
		ymlGuestProfileImage3_comp.resolutionFactor = [1, 1];
		ymlGuestProfileImage3_comp.motionBlur = true;
		ymlGuestProfileImage3_comp.parentFolder = imageComps_folder;
		ymlGuestProfileImage3_comp_populate = true;
	}
	var menuUpperLeft_comp_properties = {"name":"MENU - Upper Left","label":15,"comment":"","height":620,"width":360,"pixelAspect":1,"bgColor":[0.09019607843137,0.12549019607843,0.16470588235294],"duration":5.00500500500501,"numLayers":20,"frameRate":23.9759979248047,"itemIsCompItem":{"type":"function","arguments":["item"],"body":"return item instanceof CompItem;"}};
	var menuUpperLeft_comp = findProjectItem(panels_folder, false, menuUpperLeft_comp_properties);
	var menuUpperLeft_comp_populate = false;
	if (menuUpperLeft_comp === null) {
		menuUpperLeft_comp = app.project.items.addComp(menuUpperLeft_comp_properties.name, menuUpperLeft_comp_properties.width, menuUpperLeft_comp_properties.height, menuUpperLeft_comp_properties.pixelAspect, menuUpperLeft_comp_properties.duration, menuUpperLeft_comp_properties.frameRate);
		menuUpperLeft_comp.time = 0;
		menuUpperLeft_comp.bgColor = menuUpperLeft_comp_properties.bgColor;
		menuUpperLeft_comp.resolutionFactor = [1, 1];
		menuUpperLeft_comp.motionBlur = true;
		menuUpperLeft_comp.parentFolder = panels_folder;
		menuUpperLeft_comp_populate = true;
	}
	var menuBottomLeftProfileButtons_comp_properties = {"name":"MENU - Bottom Left Profile Buttons","label":15,"comment":"","height":65,"width":360,"pixelAspect":1,"bgColor":[0.09019607843137,0.12549019607843,0.16470588235294],"duration":5.00500500500501,"numLayers":5,"frameRate":23.9759979248047,"itemIsCompItem":{"type":"function","arguments":["item"],"body":"return item instanceof CompItem;"}};
	var menuBottomLeftProfileButtons_comp = findProjectItem(panels_folder, false, menuBottomLeftProfileButtons_comp_properties);
	var menuBottomLeftProfileButtons_comp_populate = false;
	if (menuBottomLeftProfileButtons_comp === null) {
		menuBottomLeftProfileButtons_comp = app.project.items.addComp(menuBottomLeftProfileButtons_comp_properties.name, menuBottomLeftProfileButtons_comp_properties.width, menuBottomLeftProfileButtons_comp_properties.height, menuBottomLeftProfileButtons_comp_properties.pixelAspect, menuBottomLeftProfileButtons_comp_properties.duration, menuBottomLeftProfileButtons_comp_properties.frameRate);
		menuBottomLeftProfileButtons_comp.time = 0;
		menuBottomLeftProfileButtons_comp.bgColor = menuBottomLeftProfileButtons_comp_properties.bgColor;
		menuBottomLeftProfileButtons_comp.resolutionFactor = [1, 1];
		menuBottomLeftProfileButtons_comp.hideShyLayers = true;
		menuBottomLeftProfileButtons_comp.motionBlur = true;
		menuBottomLeftProfileButtons_comp.parentFolder = panels_folder;
		menuBottomLeftProfileButtons_comp_populate = true;
	}
	var menuSearchBar_comp_properties = {"name":"MENU - Search Bar","label":15,"comment":"","height":54,"width":488,"pixelAspect":1,"bgColor":[0.09019607843137,0.12549019607843,0.16470588235294],"duration":5.00500500500501,"numLayers":3,"frameRate":23.9759979248047,"itemIsCompItem":{"type":"function","arguments":["item"],"body":"return item instanceof CompItem;"}};
	var menuSearchBar_comp = findProjectItem(panels_folder, false, menuSearchBar_comp_properties);
	var menuSearchBar_comp_populate = false;
	if (menuSearchBar_comp === null) {
		menuSearchBar_comp = app.project.items.addComp(menuSearchBar_comp_properties.name, menuSearchBar_comp_properties.width, menuSearchBar_comp_properties.height, menuSearchBar_comp_properties.pixelAspect, menuSearchBar_comp_properties.duration, menuSearchBar_comp_properties.frameRate);
		menuSearchBar_comp.time = 0;
		menuSearchBar_comp.bgColor = menuSearchBar_comp_properties.bgColor;
		menuSearchBar_comp.resolutionFactor = [1, 1];
		menuSearchBar_comp.motionBlur = true;
		menuSearchBar_comp.parentFolder = panels_folder;
		menuSearchBar_comp_populate = true;
	}
	var menuYouMightLike_comp_properties = {"name":"MENU  - You Might Like","label":15,"comment":"","height":342,"width":488,"pixelAspect":1,"bgColor":[0.09019607843137,0.12549019607843,0.16470588235294],"duration":5.00500500500501,"numLayers":25,"frameRate":23.9759979248047,"itemIsCompItem":{"type":"function","arguments":["item"],"body":"return item instanceof CompItem;"}};
	var menuYouMightLike_comp = findProjectItem(panels_folder, false, menuYouMightLike_comp_properties);
	var menuYouMightLike_comp_populate = false;
	if (menuYouMightLike_comp === null) {
		menuYouMightLike_comp = app.project.items.addComp(menuYouMightLike_comp_properties.name, menuYouMightLike_comp_properties.width, menuYouMightLike_comp_properties.height, menuYouMightLike_comp_properties.pixelAspect, menuYouMightLike_comp_properties.duration, menuYouMightLike_comp_properties.frameRate);
		menuYouMightLike_comp.time = 0;
		menuYouMightLike_comp.bgColor = menuYouMightLike_comp_properties.bgColor;
		menuYouMightLike_comp.resolutionFactor = [1, 1];
		menuYouMightLike_comp.motionBlur = true;
		menuYouMightLike_comp.parentFolder = panels_folder;
		menuYouMightLike_comp_populate = true;
	}
	var menuTrending_comp_properties = {"name":"MENU - Trending","label":15,"comment":"","height":464,"width":488,"pixelAspect":1,"bgColor":[0.09019607843137,0.12549019607843,0.16470588235294],"duration":5.00500500500501,"numLayers":25,"frameRate":23.9759979248047,"itemIsCompItem":{"type":"function","arguments":["item"],"body":"return item instanceof CompItem;"}};
	var menuTrending_comp = findProjectItem(panels_folder, false, menuTrending_comp_properties);
	var menuTrending_comp_populate = false;
	if (menuTrending_comp === null) {
		menuTrending_comp = app.project.items.addComp(menuTrending_comp_properties.name, menuTrending_comp_properties.width, menuTrending_comp_properties.height, menuTrending_comp_properties.pixelAspect, menuTrending_comp_properties.duration, menuTrending_comp_properties.frameRate);
		menuTrending_comp.time = 0;
		menuTrending_comp.bgColor = menuTrending_comp_properties.bgColor;
		menuTrending_comp.resolutionFactor = [1, 1];
		menuTrending_comp.motionBlur = true;
		menuTrending_comp.parentFolder = panels_folder;
		menuTrending_comp_populate = true;
	}
	var center00PageHeader_comp_properties = {"name":"CENTER - 00 Page Header","label":15,"comment":"","height":56,"width":600,"pixelAspect":1,"bgColor":[0.09019607843137,0.12549019607843,0.16470588235294],"duration":5.00500500500501,"numLayers":5,"frameRate":23.9759979248047,"itemIsCompItem":{"type":"function","arguments":["item"],"body":"return item instanceof CompItem;"}};
	var center00PageHeader_comp = findProjectItem(panels_folder, false, center00PageHeader_comp_properties);
	var center00PageHeader_comp_populate = false;
	if (center00PageHeader_comp === null) {
		center00PageHeader_comp = app.project.items.addComp(center00PageHeader_comp_properties.name, center00PageHeader_comp_properties.width, center00PageHeader_comp_properties.height, center00PageHeader_comp_properties.pixelAspect, center00PageHeader_comp_properties.duration, center00PageHeader_comp_properties.frameRate);
		center00PageHeader_comp.time = 0;
		center00PageHeader_comp.bgColor = center00PageHeader_comp_properties.bgColor;
		center00PageHeader_comp.resolutionFactor = [1, 1];
		center00PageHeader_comp.motionBlur = true;
		center00PageHeader_comp.parentFolder = panels_folder;
		center00PageHeader_comp_populate = true;
	}
	var center01ProfileHeader_comp_properties = {"name":"CENTER - 01 Profile Header","label":15,"comment":"","height":546,"width":600,"pixelAspect":1,"bgColor":[0.09019607843137,0.12549019607843,0.16470588235294],"duration":5.00500500500501,"numLayers":25,"frameRate":23.9759979248047,"itemIsCompItem":{"type":"function","arguments":["item"],"body":"return item instanceof CompItem;"}};
	var center01ProfileHeader_comp = findProjectItem(panels_folder, false, center01ProfileHeader_comp_properties);
	var center01ProfileHeader_comp_populate = false;
	if (center01ProfileHeader_comp === null) {
		center01ProfileHeader_comp = app.project.items.addComp(center01ProfileHeader_comp_properties.name, center01ProfileHeader_comp_properties.width, center01ProfileHeader_comp_properties.height, center01ProfileHeader_comp_properties.pixelAspect, center01ProfileHeader_comp_properties.duration, center01ProfileHeader_comp_properties.frameRate);
		center01ProfileHeader_comp.time = 0;
		center01ProfileHeader_comp.bgColor = center01ProfileHeader_comp_properties.bgColor;
		center01ProfileHeader_comp.resolutionFactor = [1, 1];
		center01ProfileHeader_comp.motionBlur = true;
		center01ProfileHeader_comp.parentFolder = panels_folder;
		center01ProfileHeader_comp_populate = true;
	}
	var center02TweetsTabs_comp_properties = {"name":"CENTER - 02 Tweets Tabs","label":15,"comment":"","height":40,"width":600,"pixelAspect":1,"bgColor":[0.09019607843137,0.12549019607843,0.16470588235294],"duration":5.00500500500501,"numLayers":5,"frameRate":23.9759979248047,"itemIsCompItem":{"type":"function","arguments":["item"],"body":"return item instanceof CompItem;"}};
	var center02TweetsTabs_comp = findProjectItem(panels_folder, false, center02TweetsTabs_comp_properties);
	var center02TweetsTabs_comp_populate = false;
	if (center02TweetsTabs_comp === null) {
		center02TweetsTabs_comp = app.project.items.addComp(center02TweetsTabs_comp_properties.name, center02TweetsTabs_comp_properties.width, center02TweetsTabs_comp_properties.height, center02TweetsTabs_comp_properties.pixelAspect, center02TweetsTabs_comp_properties.duration, center02TweetsTabs_comp_properties.frameRate);
		center02TweetsTabs_comp.time = 0;
		center02TweetsTabs_comp.bgColor = center02TweetsTabs_comp_properties.bgColor;
		center02TweetsTabs_comp.resolutionFactor = [1, 1];
		center02TweetsTabs_comp.motionBlur = true;
		center02TweetsTabs_comp.parentFolder = panels_folder;
		center02TweetsTabs_comp_populate = true;
	}
	var tweetStyle1_comp_properties = {"name":"Tweet (Style 1)","label":15,"comment":"","height":600,"width":600,"pixelAspect":1,"bgColor":[0.09019607843137,0.12549019607843,0.16470588235294],"duration":5.00500500500501,"numLayers":13,"frameRate":23.9759979248047,"itemIsCompItem":{"type":"function","arguments":["item"],"body":"return item instanceof CompItem;"}};
	var tweetStyle1_comp = findProjectItem(panels_folder, false, tweetStyle1_comp_properties);
	var tweetStyle1_comp_populate = false;
	if (tweetStyle1_comp === null) {
		tweetStyle1_comp = app.project.items.addComp(tweetStyle1_comp_properties.name, tweetStyle1_comp_properties.width, tweetStyle1_comp_properties.height, tweetStyle1_comp_properties.pixelAspect, tweetStyle1_comp_properties.duration, tweetStyle1_comp_properties.frameRate);
		tweetStyle1_comp.time = 0;
		tweetStyle1_comp.bgColor = tweetStyle1_comp_properties.bgColor;
		tweetStyle1_comp.resolutionFactor = [1, 1];
		tweetStyle1_comp.motionBlur = true;
		tweetStyle1_comp.parentFolder = panels_folder;
		tweetStyle1_comp_populate = true;
	}
	var tweetStyle2_comp_properties = {"name":"Tweet (Style 2)","label":15,"comment":"","height":600,"width":600,"pixelAspect":1,"bgColor":[0.09019607843137,0.12549019607843,0.16470588235294],"duration":5.00500500500501,"numLayers":13,"frameRate":23.9759979248047,"itemIsCompItem":{"type":"function","arguments":["item"],"body":"return item instanceof CompItem;"}};
	var tweetStyle2_comp = findProjectItem(panels_folder, false, tweetStyle2_comp_properties);
	var tweetStyle2_comp_populate = false;
	if (tweetStyle2_comp === null) {
		tweetStyle2_comp = app.project.items.addComp(tweetStyle2_comp_properties.name, tweetStyle2_comp_properties.width, tweetStyle2_comp_properties.height, tweetStyle2_comp_properties.pixelAspect, tweetStyle2_comp_properties.duration, tweetStyle2_comp_properties.frameRate);
		tweetStyle2_comp.time = 0;
		tweetStyle2_comp.bgColor = tweetStyle2_comp_properties.bgColor;
		tweetStyle2_comp.resolutionFactor = [1, 1];
		tweetStyle2_comp.motionBlur = true;
		tweetStyle2_comp.parentFolder = panels_folder;
		tweetStyle2_comp_populate = true;
	}
	var tweetStyle3_comp_properties = {"name":"Tweet (Style 3)","label":15,"comment":"","height":600,"width":600,"pixelAspect":1,"bgColor":[0.09019607843137,0.12549019607843,0.16470588235294],"duration":5.00500500500501,"numLayers":13,"frameRate":23.9759979248047,"itemIsCompItem":{"type":"function","arguments":["item"],"body":"return item instanceof CompItem;"}};
	var tweetStyle3_comp = findProjectItem(panels_folder, false, tweetStyle3_comp_properties);
	var tweetStyle3_comp_populate = false;
	if (tweetStyle3_comp === null) {
		tweetStyle3_comp = app.project.items.addComp(tweetStyle3_comp_properties.name, tweetStyle3_comp_properties.width, tweetStyle3_comp_properties.height, tweetStyle3_comp_properties.pixelAspect, tweetStyle3_comp_properties.duration, tweetStyle3_comp_properties.frameRate);
		tweetStyle3_comp.time = 0;
		tweetStyle3_comp.bgColor = tweetStyle3_comp_properties.bgColor;
		tweetStyle3_comp.resolutionFactor = [1, 1];
		tweetStyle3_comp.motionBlur = true;
		tweetStyle3_comp.parentFolder = panels_folder;
		tweetStyle3_comp_populate = true;
	}
	var tweetStyle4_comp_properties = {"name":"Tweet (Style 4)","label":15,"comment":"","height":600,"width":600,"pixelAspect":1,"bgColor":[0.09019607843137,0.12549019607843,0.16470588235294],"duration":5.00500500500501,"numLayers":13,"frameRate":23.9759979248047,"itemIsCompItem":{"type":"function","arguments":["item"],"body":"return item instanceof CompItem;"}};
	var tweetStyle4_comp = findProjectItem(panels_folder, false, tweetStyle4_comp_properties);
	var tweetStyle4_comp_populate = false;
	if (tweetStyle4_comp === null) {
		tweetStyle4_comp = app.project.items.addComp(tweetStyle4_comp_properties.name, tweetStyle4_comp_properties.width, tweetStyle4_comp_properties.height, tweetStyle4_comp_properties.pixelAspect, tweetStyle4_comp_properties.duration, tweetStyle4_comp_properties.frameRate);
		tweetStyle4_comp.time = 0;
		tweetStyle4_comp.bgColor = tweetStyle4_comp_properties.bgColor;
		tweetStyle4_comp.resolutionFactor = [1, 1];
		tweetStyle4_comp.motionBlur = true;
		tweetStyle4_comp.parentFolder = panels_folder;
		tweetStyle4_comp_populate = true;
	}
	var tweetStyle5_comp_properties = {"name":"Tweet (Style 5)","label":15,"comment":"","height":600,"width":600,"pixelAspect":1,"bgColor":[0.09019607843137,0.12549019607843,0.16470588235294],"duration":5.00500500500501,"numLayers":15,"frameRate":23.9759979248047,"itemIsCompItem":{"type":"function","arguments":["item"],"body":"return item instanceof CompItem;"}};
	var tweetStyle5_comp = findProjectItem(panels_folder, false, tweetStyle5_comp_properties);
	var tweetStyle5_comp_populate = false;
	if (tweetStyle5_comp === null) {
		tweetStyle5_comp = app.project.items.addComp(tweetStyle5_comp_properties.name, tweetStyle5_comp_properties.width, tweetStyle5_comp_properties.height, tweetStyle5_comp_properties.pixelAspect, tweetStyle5_comp_properties.duration, tweetStyle5_comp_properties.frameRate);
		tweetStyle5_comp.time = 0;
		tweetStyle5_comp.bgColor = tweetStyle5_comp_properties.bgColor;
		tweetStyle5_comp.resolutionFactor = [1, 1];
		tweetStyle5_comp.motionBlur = true;
		tweetStyle5_comp.parentFolder = panels_folder;
		tweetStyle5_comp_populate = true;
	}
	var followButton_comp_properties = {"name":"Follow Button","label":15,"comment":"","height":33,"width":80,"pixelAspect":1,"bgColor":[0.09019607843137,0.12549019607843,0.16470588235294],"duration":5.00500500500501,"numLayers":2,"frameRate":23.9759979248047,"itemIsCompItem":{"type":"function","arguments":["item"],"body":"return item instanceof CompItem;"}};
	var followButton_comp = findProjectItem(buttons_folder, false, followButton_comp_properties);
	var followButton_comp_populate = false;
	if (followButton_comp === null) {
		followButton_comp = app.project.items.addComp(followButton_comp_properties.name, followButton_comp_properties.width, followButton_comp_properties.height, followButton_comp_properties.pixelAspect, followButton_comp_properties.duration, followButton_comp_properties.frameRate);
		followButton_comp.time = 0;
		followButton_comp.bgColor = followButton_comp_properties.bgColor;
		followButton_comp.resolutionFactor = [1, 1];
		followButton_comp.motionBlur = true;
		followButton_comp.parentFolder = buttons_folder;
		followButton_comp_populate = true;
	}
	var profileHeaderImage_comp_properties = {"name":"Profile Header Image","label":15,"comment":"","height":200,"width":600,"pixelAspect":1,"bgColor":[0.09019607843137,0.12549019607843,0.16470588235294],"duration":5.00500500500501,"numLayers":1,"frameRate":23.9759979248047,"itemIsCompItem":{"type":"function","arguments":["item"],"body":"return item instanceof CompItem;"}};
	var profileHeaderImage_comp = findProjectItem(imageComps_folder, false, profileHeaderImage_comp_properties);
	var profileHeaderImage_comp_populate = false;
	if (profileHeaderImage_comp === null) {
		profileHeaderImage_comp = app.project.items.addComp(profileHeaderImage_comp_properties.name, profileHeaderImage_comp_properties.width, profileHeaderImage_comp_properties.height, profileHeaderImage_comp_properties.pixelAspect, profileHeaderImage_comp_properties.duration, profileHeaderImage_comp_properties.frameRate);
		profileHeaderImage_comp.time = 0;
		profileHeaderImage_comp.bgColor = profileHeaderImage_comp_properties.bgColor;
		profileHeaderImage_comp.resolutionFactor = [1, 1];
		profileHeaderImage_comp.motionBlur = true;
		profileHeaderImage_comp.parentFolder = imageComps_folder;
		profileHeaderImage_comp_populate = true;
	}
// CREATE COMPOSITIONS END

// CREATE NULL LAYERS START
	var null3_null_properties = {"name":"Null 3","comment":"","label":1,"height":100,"width":100,"mainSource":{"color":[1,1,1]},"itemIsFootageItem":{"type":"function","arguments":["item"],"body":"return item instanceof FootageItem;"}};
	var null3_null = findProjectItem(solids_folder, false, null3_null_properties);
	if (null3_null === null) {
		var null3_tempNull = twitterDesktop_comp.layers.addNull();
			null3_null = null3_tempNull.source;
			null3_null.name = null3_null_properties.name;
			null3_null.label = null3_null_properties.label;
			null3_null.mainSource.color = null3_null_properties.mainSource.color;
			null3_null.parentFolder = solids_folder;
		null3_tempNull.remove();
	}
// CREATE NULL LAYERS END

// Working with comp "Twitter Desktop", varName "twitterDesktop_comp";
	twitterDesktop_comp.openInViewer();
	var username = twitterDesktop_comp.layers.addText("");
		username.name = "Username";
		username.enabled = false;
		username.guideLayer = true;
		username.moveToEnd();
		var username_marker1 = new MarkerValue("Rename this layer to change throughout comp");
			username_marker1.label = 0;
			username.property("ADBE Marker").setValueAtTime(0, username_marker1);
		var username_TextProp = username.property("ADBE Text Properties").property("ADBE Text Document");
		var username_TextDocument = username_TextProp.value;
			username_TextDocument.font = "HelveticaNeue-Bold";
			username_TextDocument.fontSize = 18;
			username_TextDocument.applyFill = true;
			username_TextDocument.fillColor = [1,1,1];
			username_TextDocument.applyStroke = false;
			username_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			username_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				username_TextDocument.verticalScale = 1;
				username_TextDocument.horizontalScale = 1;
				username_TextDocument.baselineShift = 0;
				username_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// username_TextDocument.fauxBold = false;
				// username_TextDocument.fauxItalic = false;
				// username_TextDocument.allCaps = false;
				// username_TextDocument.smallCaps = false;
				// username_TextDocument.superscript = false;
				// username_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				username_TextDocument.leading = 21.6000003814697;
				username_TextDocument.autoLeading = true;
			}
			username_TextProp.setValue(username_TextDocument);
		username.selected = false;
	var twitterhandle = twitterDesktop_comp.layers.addText("" + "\n" + 
				"PROFILE NAME");
		twitterhandle.name = "@TwitterHandle";
		twitterhandle.enabled = false;
		twitterhandle.guideLayer = true;
		twitterhandle.moveToEnd();
		var twitterhandle_marker1 = new MarkerValue("Rename this layer to change throughout comp");
			twitterhandle_marker1.label = 0;
			twitterhandle.property("ADBE Marker").setValueAtTime(0, twitterhandle_marker1);
		var twitterhandle_TextProp = twitterhandle.property("ADBE Text Properties").property("ADBE Text Document");
		var twitterhandle_TextDocument = twitterhandle_TextProp.value;
			twitterhandle_TextDocument.font = "HelveticaNeue-Bold";
			twitterhandle_TextDocument.fontSize = 18;
			twitterhandle_TextDocument.applyFill = true;
			twitterhandle_TextDocument.fillColor = [1,1,1];
			twitterhandle_TextDocument.applyStroke = false;
			twitterhandle_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			twitterhandle_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				twitterhandle_TextDocument.verticalScale = 1;
				twitterhandle_TextDocument.horizontalScale = 1;
				twitterhandle_TextDocument.baselineShift = 0;
				twitterhandle_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// twitterhandle_TextDocument.fauxBold = false;
				// twitterhandle_TextDocument.fauxItalic = false;
				// twitterhandle_TextDocument.allCaps = false;
				// twitterhandle_TextDocument.smallCaps = false;
				// twitterhandle_TextDocument.superscript = false;
				// twitterhandle_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				twitterhandle_TextDocument.leading = 21.6000003814697;
				twitterhandle_TextDocument.autoLeading = true;
			}
			twitterhandle_TextProp.setValue(twitterhandle_TextDocument);
		twitterhandle.selected = false;
	// Add existing composition "Avatar Image", varName "avatarImage_comp";
	var avatarImage = twitterDesktop_comp.layers.add(avatarImage_comp);
		avatarImage.name = "Avatar Image";
		avatarImage.label = 1;
		avatarImage.enabled = false;
		avatarImage.guideLayer = true;
		avatarImage.moveToEnd();
		var avatarImage_marker1 = new MarkerValue("Change Profile image inside this comp");
			avatarImage_marker1.label = 0;
			avatarImage.property("ADBE Marker").setValueAtTime(0, avatarImage_marker1);
		avatarImage.selected = false;
	// Add existing composition "YML - Guest Profile Image 1", varName "ymlGuestProfileImage1_comp";
	var ymlGuestProfileImage1 = twitterDesktop_comp.layers.add(ymlGuestProfileImage1_comp);
		ymlGuestProfileImage1.label = 1;
		ymlGuestProfileImage1.enabled = false;
		ymlGuestProfileImage1.guideLayer = true;
		ymlGuestProfileImage1.moveToEnd();
		ymlGuestProfileImage1.selected = false;
	// Add existing composition "YML - Guest Profile Image 2", varName "ymlGuestProfileImage2_comp";
	var ymlGuestProfileImage2 = twitterDesktop_comp.layers.add(ymlGuestProfileImage2_comp);
		ymlGuestProfileImage2.label = 1;
		ymlGuestProfileImage2.enabled = false;
		ymlGuestProfileImage2.guideLayer = true;
		ymlGuestProfileImage2.moveToEnd();
		ymlGuestProfileImage2.selected = false;
	// Add existing composition "YML - Guest Profile Image 3", varName "ymlGuestProfileImage3_comp";
	var ymlGuestProfileImage3 = twitterDesktop_comp.layers.add(ymlGuestProfileImage3_comp);
		ymlGuestProfileImage3.label = 1;
		ymlGuestProfileImage3.enabled = false;
		ymlGuestProfileImage3.guideLayer = true;
		ymlGuestProfileImage3.moveToEnd();
		ymlGuestProfileImage3.selected = false;
	//Create new Null layer "scrollPosition" and replace its source with varName "null3_null";
	var scrollPosition = twitterDesktop_comp.layers.addNull();
	var scrollPosition_source = scrollPosition.source;
		scrollPosition.replaceSource(null3_null, true);
		scrollPosition_source.remove();
		scrollPosition.name = "SCROLL POSITION";
		scrollPosition.label = 9;
		scrollPosition.moveToEnd();
		scrollPosition.property("ADBE Transform Group").property("ADBE Position").dimensionsSeparated = true;
		scrollPosition.property("ADBE Transform Group").property("ADBE Position_0").setValue(0);
		scrollPosition.property("ADBE Transform Group").property("ADBE Position_1").setValue(0);
		scrollPosition.selected = false;
	// Add Shape Layer "Left Vertical Bar", varName "leftVerticalBar";
	var leftVerticalBar = twitterDesktop_comp.layers.addShape();
		leftVerticalBar.name = "Left Vertical Bar";
		leftVerticalBar.label = 0;
		leftVerticalBar.moveToEnd();
		leftVerticalBar.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		leftVerticalBar.property("ADBE Root Vectors Group").property(1).name = "Rectangle 144";
		leftVerticalBar.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		leftVerticalBar.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		leftVerticalBar.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([0,2247]);
		leftVerticalBar.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		leftVerticalBar.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		leftVerticalBar.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.22745098173618,0.26666668057442,0.29803922772408,1]);
		leftVerticalBar.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(1);
		leftVerticalBar.property("ADBE Transform Group").property("ADBE Position").setValue([360,1123.5,0]);
		leftVerticalBar.property("ADBE Transform Group").property("ADBE Scale").setValue([-100,100,100]);
		leftVerticalBar.selected = false;
	// Add Shape Layer "Right Vertical Bar", varName "rightVerticalBar";
	var rightVerticalBar = twitterDesktop_comp.layers.addShape();
		rightVerticalBar.name = "Right Vertical Bar";
		rightVerticalBar.label = 0;
		rightVerticalBar.moveToEnd();
		rightVerticalBar.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		rightVerticalBar.property("ADBE Root Vectors Group").property(1).name = "Rectangle 144";
		rightVerticalBar.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		rightVerticalBar.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		rightVerticalBar.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([0,2247]);
		rightVerticalBar.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		rightVerticalBar.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		rightVerticalBar.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.22745098173618,0.26666668057442,0.29803922772408,1]);
		rightVerticalBar.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(1);
		rightVerticalBar.property("ADBE Transform Group").property("ADBE Position").setValue([960,1123.5,0]);
		rightVerticalBar.property("ADBE Transform Group").property("ADBE Scale").setValue([-100,100,100]);
		rightVerticalBar.selected = false;
	// Add existing composition "MENU - Upper Left", varName "menuUpperLeft_comp";
	var menuUpperLeft = twitterDesktop_comp.layers.add(menuUpperLeft_comp);
		menuUpperLeft.collapseTransformation = true;
		menuUpperLeft.moveToEnd();
		menuUpperLeft.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0,0]);
		menuUpperLeft.property("ADBE Transform Group").property("ADBE Position").setValue([0,0,0]);
		menuUpperLeft.selected = false;
	// Add existing composition "MENU - Bottom Left Profile Buttons", varName "menuBottomLeftProfileButtons_comp";
	var menuBottomLeftProfileButtons = twitterDesktop_comp.layers.add(menuBottomLeftProfileButtons_comp);
		menuBottomLeftProfileButtons.collapseTransformation = true;
		menuBottomLeftProfileButtons.moveToEnd();
		var menuBottomLeftProfileButtons_marker1 = new MarkerValue("this always appears in Lower Left corner");
			menuBottomLeftProfileButtons_marker1.label = 0;
			menuBottomLeftProfileButtons.property("ADBE Marker").setValueAtTime(0, menuBottomLeftProfileButtons_marker1);
		menuBottomLeftProfileButtons.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0,0]);
		menuBottomLeftProfileButtons.property("ADBE Transform Group").property("ADBE Position").setValue([0.00000621154231,2182,0]);
		menuBottomLeftProfileButtons.selected = false;
	// Add existing composition "MENU - Search Bar", varName "menuSearchBar_comp";
	var menuSearchBar = twitterDesktop_comp.layers.add(menuSearchBar_comp);
		menuSearchBar.collapseTransformation = true;
		menuSearchBar.moveToEnd();
		menuSearchBar.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0,0]);
		menuSearchBar.property("ADBE Transform Group").property("ADBE Position").setValue([960,0,0]);
		menuSearchBar.selected = false;
	// Add existing composition "MENU  - You Might Like", varName "menuYouMightLike_comp";
	var menuYouMightLike = twitterDesktop_comp.layers.add(menuYouMightLike_comp);
		menuYouMightLike.collapseTransformation = true;
		menuYouMightLike.moveToEnd();
		menuYouMightLike.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0,0]);
		menuYouMightLike.property("ADBE Transform Group").property("ADBE Position").setValue([960,54,0]);
		menuYouMightLike.selected = false;
	// Add existing composition "MENU - Trending", varName "menuTrending_comp";
	var menuTrending = twitterDesktop_comp.layers.add(menuTrending_comp);
		menuTrending.collapseTransformation = true;
		menuTrending.moveToEnd();
		menuTrending.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0,0]);
		menuTrending.property("ADBE Transform Group").property("ADBE Position").setValue([960,414,0]);
		menuTrending.selected = false;
	// Add existing composition "CENTER - 00 Page Header", varName "center00PageHeader_comp";
	var center00PageHeader = twitterDesktop_comp.layers.add(center00PageHeader_comp);
		center00PageHeader.collapseTransformation = true;
		center00PageHeader.moveToEnd();
		center00PageHeader.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0,0]);
		center00PageHeader.property("ADBE Transform Group").property("ADBE Position").setValue([360,-1,0]);
		center00PageHeader.selected = false;
	// Add existing composition "CENTER - 01 Profile Header", varName "center01ProfileHeader_comp";
	var center01ProfileHeader = twitterDesktop_comp.layers.add(center01ProfileHeader_comp);
		center01ProfileHeader.collapseTransformation = true;
		center01ProfileHeader.moveToEnd();
		center01ProfileHeader.property("ADBE Transform Group").property("ADBE Position").setValue([660,327,0]);
		center01ProfileHeader.selected = false;
	// Add existing composition "CENTER - 02 Tweets Tabs", varName "center02TweetsTabs_comp";
	var center02TweetsTabs = twitterDesktop_comp.layers.add(center02TweetsTabs_comp);
		center02TweetsTabs.collapseTransformation = true;
		center02TweetsTabs.moveToEnd();
		center02TweetsTabs.property("ADBE Transform Group").property("ADBE Position").setValue([300,494,0]);
		center02TweetsTabs.selected = false;
	// Add existing composition "Tweet (Style 1)", varName "tweetStyle1_comp";
	var tweetStyle1 = twitterDesktop_comp.layers.add(tweetStyle1_comp);
		tweetStyle1.collapseTransformation = true;
		tweetStyle1.moveToEnd();
		tweetStyle1.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0,0]);
		tweetStyle1.property("ADBE Transform Group").property("ADBE Position").dimensionsSeparated = true;
		tweetStyle1.property("ADBE Transform Group").property("ADBE Position_0").setValue(0);
		tweetStyle1.property("ADBE Transform Group").property("ADBE Position_1").setValue(40);
		tweetStyle1.selected = false;
	// Add existing composition "Tweet (Style 2)", varName "tweetStyle2_comp";
	var tweetStyle2 = twitterDesktop_comp.layers.add(tweetStyle2_comp);
		tweetStyle2.collapseTransformation = true;
		tweetStyle2.moveToEnd();
		tweetStyle2.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0,0]);
		tweetStyle2.property("ADBE Transform Group").property("ADBE Position").dimensionsSeparated = true;
		tweetStyle2.property("ADBE Transform Group").property("ADBE Position_0").setValue(0);
		tweetStyle2.property("ADBE Transform Group").property("ADBE Position_1").setValue(104.5);
		tweetStyle2.selected = false;
	// Add existing composition "Tweet (Style 3)", varName "tweetStyle3_comp";
	var tweetStyle3 = twitterDesktop_comp.layers.add(tweetStyle3_comp);
		tweetStyle3.collapseTransformation = true;
		tweetStyle3.moveToEnd();
		tweetStyle3.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0,0]);
		tweetStyle3.property("ADBE Transform Group").property("ADBE Position").dimensionsSeparated = true;
		tweetStyle3.property("ADBE Transform Group").property("ADBE Position_0").setValue(0);
		tweetStyle3.property("ADBE Transform Group").property("ADBE Position_1").setValue(126);
		tweetStyle3.selected = false;
	// Add existing composition "Tweet (Style 4)", varName "tweetStyle4_comp";
	var tweetStyle4 = twitterDesktop_comp.layers.add(tweetStyle4_comp);
		tweetStyle4.collapseTransformation = true;
		tweetStyle4.moveToEnd();
		tweetStyle4.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0,0]);
		tweetStyle4.property("ADBE Transform Group").property("ADBE Position").dimensionsSeparated = true;
		tweetStyle4.property("ADBE Transform Group").property("ADBE Position_0").setValue(0);
		tweetStyle4.property("ADBE Transform Group").property("ADBE Position_1").setValue(147);
		tweetStyle4.selected = false;
	// Add existing composition "Tweet (Style 5)", varName "tweetStyle5_comp";
	var tweetStyle5 = twitterDesktop_comp.layers.add(tweetStyle5_comp);
		tweetStyle5.collapseTransformation = true;
		tweetStyle5.moveToEnd();
		tweetStyle5.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0,0]);
		tweetStyle5.property("ADBE Transform Group").property("ADBE Position").dimensionsSeparated = true;
		tweetStyle5.property("ADBE Transform Group").property("ADBE Position_0").setValue(0);
		tweetStyle5.property("ADBE Transform Group").property("ADBE Position_1").setValue(162);
		tweetStyle5.selected = false;
	// Add existing composition "Tweet (Style 5)", varName "tweetStyle5_comp";
	var tweetStyle6 = twitterDesktop_comp.layers.add(tweetStyle5_comp);
		tweetStyle6.collapseTransformation = true;
		tweetStyle6.moveToEnd();
		tweetStyle6.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0,0]);
		tweetStyle6.property("ADBE Transform Group").property("ADBE Position").dimensionsSeparated = true;
		tweetStyle6.property("ADBE Transform Group").property("ADBE Position_0").setValue(0);
		tweetStyle6.property("ADBE Transform Group").property("ADBE Position_1").setValue(394);
		tweetStyle6.selected = false;
	// Add existing composition "Tweet (Style 2)", varName "tweetStyle2_comp";
	var tweetStyle7 = twitterDesktop_comp.layers.add(tweetStyle2_comp);
		tweetStyle7.collapseTransformation = true;
		tweetStyle7.moveToEnd();
		tweetStyle7.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0,0]);
		tweetStyle7.property("ADBE Transform Group").property("ADBE Position").dimensionsSeparated = true;
		tweetStyle7.property("ADBE Transform Group").property("ADBE Position_0").setValue(0);
		tweetStyle7.property("ADBE Transform Group").property("ADBE Position_1").setValue(391);
		tweetStyle7.selected = false;
	// Add Shape Layer "BACKGROUND", varName "background";
	var background = twitterDesktop_comp.layers.addShape();
		background.name = "BACKGROUND";
		background.moveToEnd();
		background.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		background.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		background.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		background.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		background.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([1448,2247]);
		background.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		background.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		background.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.09019607843137,0.12549019607843,0.16470588235294,1]);
		background.property("ADBE Transform Group").property("ADBE Scale").setValue([100,100,100]);
		background.selected = false;
	// Apply parents
		center01ProfileHeader.setParentWithJump(scrollPosition);
		center02TweetsTabs.setParentWithJump(center01ProfileHeader);
		tweetStyle1.setParentWithJump(center02TweetsTabs);
		tweetStyle2.setParentWithJump(tweetStyle1);
		tweetStyle3.setParentWithJump(tweetStyle2);
		tweetStyle4.setParentWithJump(tweetStyle3);
		tweetStyle5.setParentWithJump(tweetStyle4);
		tweetStyle6.setParentWithJump(tweetStyle5);
		tweetStyle7.setParentWithJump(tweetStyle6);

	// Lock Layers
		leftVerticalBar.locked = true;
		rightVerticalBar.locked = true;
		menuUpperLeft.locked = true;
		menuSearchBar.locked = true;
		center00PageHeader.locked = true;
		background.locked = true;

// Working with comp "Avatar Image", varName "avatarImage_comp";
if (avatarImage_comp_populate === true) {
	// Add Shape Layer "REPLACE WITH IMAGE", varName "replaceWithImage";
	var replaceWithImage = avatarImage_comp.layers.addShape();
		replaceWithImage.name = "REPLACE WITH IMAGE";
		replaceWithImage.moveToEnd();
		replaceWithImage.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		replaceWithImage.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		replaceWithImage.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		replaceWithImage.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		replaceWithImage.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([600,600]);
		replaceWithImage.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		replaceWithImage.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		replaceWithImage.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.28780466715495,0.4446470672009,0.61891850490196,1]);
		replaceWithImage.property("ADBE Effect Parade").addProperty("ADBE Ramp");
		replaceWithImage.property("ADBE Effect Parade").property(1).name = "Gradient Ramp";
		replaceWithImage.property("ADBE Effect Parade").property(1).property("ADBE Ramp-0001").setValue([0,0]);
		replaceWithImage.property("ADBE Effect Parade").property(1).property("ADBE Ramp-0002").setValue([1,0,0.73327177762985,1]);
		replaceWithImage.property("ADBE Effect Parade").property(1).property("ADBE Ramp-0003").setValue([600,600]);
		replaceWithImage.property("ADBE Effect Parade").property(1).property("ADBE Ramp-0004").setValue([1,0.67454046010971,0,1]);
		replaceWithImage.selected = false;
}
// Working with comp "YML - Guest Profile Image 1", varName "ymlGuestProfileImage1_comp";
if (ymlGuestProfileImage1_comp_populate === true) {
	// Add Shape Layer "REPLACE WITH IMAGE", varName "replaceWithImage1";
	var replaceWithImage1 = ymlGuestProfileImage1_comp.layers.addShape();
		replaceWithImage1.name = "REPLACE WITH IMAGE";
		replaceWithImage1.moveToEnd();
		replaceWithImage1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		replaceWithImage1.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		replaceWithImage1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		replaceWithImage1.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		replaceWithImage1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([400,400]);
		replaceWithImage1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		replaceWithImage1.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		replaceWithImage1.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.12136583030224,0.4759196639061,0.86986827850342,1]);
		replaceWithImage1.selected = false;
}
// Working with comp "YML - Guest Profile Image 2", varName "ymlGuestProfileImage2_comp";
if (ymlGuestProfileImage2_comp_populate === true) {
	// Add Shape Layer "REPLACE WITH IMAGE", varName "replaceWithImage2";
	var replaceWithImage2 = ymlGuestProfileImage2_comp.layers.addShape();
		replaceWithImage2.name = "REPLACE WITH IMAGE";
		replaceWithImage2.moveToEnd();
		replaceWithImage2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		replaceWithImage2.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		replaceWithImage2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		replaceWithImage2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		replaceWithImage2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([400,400]);
		replaceWithImage2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		replaceWithImage2.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		replaceWithImage2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.86986827850342,0.12136583030224,0.6785461306572,1]);
		replaceWithImage2.selected = false;
}
// Working with comp "YML - Guest Profile Image 3", varName "ymlGuestProfileImage3_comp";
if (ymlGuestProfileImage3_comp_populate === true) {
	// Add Shape Layer "REPLACE WITH IMAGE", varName "replaceWithImage3";
	var replaceWithImage3 = ymlGuestProfileImage3_comp.layers.addShape();
		replaceWithImage3.name = "REPLACE WITH IMAGE";
		replaceWithImage3.moveToEnd();
		replaceWithImage3.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		replaceWithImage3.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		replaceWithImage3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		replaceWithImage3.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		replaceWithImage3.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([400,400]);
		replaceWithImage3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		replaceWithImage3.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		replaceWithImage3.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.12136583030224,0.86986827850342,0.42833453416824,1]);
		replaceWithImage3.selected = false;
}
// Working with comp "MENU - Upper Left", varName "menuUpperLeft_comp";
if (menuUpperLeft_comp_populate === true) {
	// Add Shape Layer "Twitter Logo", varName "twitterLogo";
	var twitterLogo = menuUpperLeft_comp.layers.addShape();
		twitterLogo.name = "Twitter Logo";
		twitterLogo.label = 1;
		twitterLogo.shy = true;
		twitterLogo.moveToEnd();
		twitterLogo.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		twitterLogo.property("ADBE Root Vectors Group").property(1).name = "Vector";
		twitterLogo.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		twitterLogo.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var twitterLogoPath = twitterLogo.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var twitterLogoPath_newShape = new Shape();
			twitterLogoPath_newShape.vertices = [[10.8475036621094, -7.88624572753906], [14.1912536621094, -8.80250549316406], [14.1887512207031, -8.79875183105469], [11.2850036621094, -5.7862548828125], [11.3025054931641, -5.03375244140625], [-5.26625061035156, 11.5337524414062], [-14.1912536621094, 8.91749572753906], [-12.8012542724609, 8.99874877929688], [-5.56875610351562, 6.5050048828125], [-11.0087432861328, 2.46249389648438], [-9.91250610351562, 2.56500244140625], [-8.37875366210938, 2.36250305175781], [-13.0500030517578, -3.34750366210938], [-13.0500030517578, -3.42250061035156], [-10.4125061035156, -2.69374084472656], [-13.0025024414062, -7.54124450683594], [-12.2149963378906, -10.46875], [-0.21249389648438, -4.38374328613281], [-0.36250305175781, -5.70875549316406], [5.46000671386719, -11.5337524414062], [9.71000671386719, -9.69624328613281], [13.4075012207031, -11.1087493896484]];
			twitterLogoPath_newShape.inTangents = [[1.20249938964844, -0.72000122070312], [-1.04374694824219, 0.46249389648438], [0, 0], [1.13749694824219, -0.82249450683594], [0, -0.25], [10.7124938964844, 0], [2.57749938964844, 1.65374755859375], [-0.47000122070312, 0], [-1.99374389648438, 1.5625], [0.74125671386719, 2.3125], [-0.375, 0], [-0.49000549316406, 0.13250732421875], [0, 2.82124328613281], [0, 0], [-0.95500183105469, -0.03125], [0, 2.02000427246094], [-0.5, 0.86250305175781], [-4.84124755859375, -0.24374389648438], [0, 0.45500183105469], [-3.21499633789062, 0], [-1.0625, -1.1300048828125], [-1.125, 0.66749572753906]];
			twitterLogoPath_newShape.outTangents = [[1.17875671386719, -0.14125061035156], [0, 0], [-0.77874755859375, 1.16624450683594], [0.01124572753906, 0.25], [0, 7.69500732421875], [-3.28750610351562, 0], [0.45625305175781, 0.05375671386719], [2.72749328613281, 0], [-2.54875183105469, -0.04499816894531], [0.35499572753906, 0.0675048828125], [0.52999877929688, 0], [-2.66499328613281, -0.53500366210938], [0, 0], [0.78500366210938, 0.43624877929688], [-1.56124877929688, -1.04374694824219], [0, -1.06500244140625], [2.87249755859375, 3.52250671386719], [-0.09750366210938, -0.42750549316406], [0, -3.21749877929688], [1.67500305175781, 0], [1.32624816894531, -0.25999450683594], [-0.43499755859375, 1.36000061035156]];
			twitterLogoPath_newShape.closed = true;
		twitterLogoPath.setValue(twitterLogoPath_newShape);
		twitterLogo.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		twitterLogo.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		twitterLogo.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([1,1,1,1]);
		twitterLogo.property("ADBE Transform Group").property("ADBE Position").setValue([130.234512329102,26.533748626709,0]);
		twitterLogo.selected = false;
	// Add Shape Layer "Home Icon", varName "homeIcon";
	var homeIcon = menuUpperLeft_comp.layers.addShape();
		homeIcon.name = "Home Icon";
		homeIcon.label = 1;
		homeIcon.shy = true;
		homeIcon.moveToEnd();
		homeIcon.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		homeIcon.property("ADBE Root Vectors Group").property(1).name = "Union";
		homeIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Group");
		homeIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Vector";
		homeIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		homeIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).name = "Path 1";
		var homeIconPath = homeIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).property("ADBE Vector Shape");
		var homeIconPath_newShape = new Shape();
			homeIconPath_newShape.vertices = [[0.37794494628906, -10.5406494140625], [11.1238861083984, -4.73851013183594], [11.1238861083984, -4.73851013183594], [11.4472351074219, -3.65785217285156], [10.3655090332031, -3.33450317382812], [9.49545288085938, -3.80464172363281], [7.76597595214844, 8.41656494140625], [4.93351745605469, 10.6363830566406], [-4.93917846679688, 10.6363830566406], [-7.76632690429688, 8.44316101074219], [-9.49899291992188, -3.80250549316406], [-10.3658599853516, -3.33450317382812], [-10.7445220947266, -3.23878479003906], [-11.4465179443359, -3.65678405761719], [-11.1242370605469, -4.73851013183594], [-0.38041687011719, -10.5406494140625]];
			homeIconPath_newShape.inTangents = [[-0.23719787597656, -0.12763977050781], [0, 0], [0, 0], [0.20846557617188, -0.38609313964844], [0.38716125488281, 0.20527648925781], [0, 0], [0, 0], [1.43803405761719, 0], [0, 0], [0.22761535644531, 1.29232788085938], [0, 0], [0, 0], [0.12763977050781, 0], [0.14358520507812, 0.26591491699219], [-0.38716125488281, 0.20953369140625], [0, 0]];
			homeIconPath_newShape.outTangents = [[0, 0], [0, 0], [0.38716125488281, 0.21060180664062], [-0.20953369140625, 0.38716125488281], [0, 0], [0, 0], [-0.23187255859375, 1.31784057617188], [0, 0], [-1.4359130859375, 0], [0, 0], [0, 0], [-0.12019348144531, 0.06381225585938], [-0.28292846679688, 0], [-0.20953369140625, -0.38822937011719], [0, 0], [0.23719787597656, -0.12763977050781]];
			homeIconPath_newShape.closed = true;
		homeIconPath.setValue(homeIconPath_newShape);
		homeIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		homeIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).name = "Path 2";
		var homeIconPath3 = homeIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Shape");
		var homeIconPath3_newShape = new Shape();
			homeIconPath3_newShape.vertices = [[4.93563842773438, 9.04092407226562], [6.19073486328125, 8.16661071777344], [6.19073486328125, 8.16661071777344], [7.99891662597656, -4.61300659179688], [-0.00177001953125, -8.93136596679688], [-8.00033569335938, -4.61087036132812], [-6.19001770019531, 8.192138671875], [-4.93705749511719, 9.04092407226562]];
			homeIconPath3_newShape.inTangents = [[0, 0], [-0.11381530761719, 0.64456176757812], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-0.51054382324219, 0]];
			homeIconPath3_newShape.outTangents = [[0.50735473632812, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0.10955810546875, 0.61903381347656], [0, 0]];
			homeIconPath3_newShape.closed = true;
		homeIconPath3.setValue(homeIconPath3_newShape);
		homeIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		homeIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).name = "Merge Paths 1";
		homeIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		homeIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(3).property("ADBE Vector Position").setValue([-9.5367431640625e-7,-9.5367431640625e-7]);
		homeIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Group");
		homeIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Vector";
		homeIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).addProperty("ADBE Vector Shape - Group");
		homeIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(1).name = "Path 1";
		var homeIconPath5 = homeIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(1).property("ADBE Vector Shape");
		var homeIconPath5_newShape = new Shape();
			homeIconPath5_newShape.vertices = [[0, 4.02055358886719], [-4.02055358886719, 0], [0, -4.02055358886719], [4.02055358886719, 0]];
			homeIconPath5_newShape.inTangents = [[2.21768188476562, 0], [0, 2.21662902832031], [-2.21768188476562, 0], [0, -2.21662902832031]];
			homeIconPath5_newShape.outTangents = [[-2.21768188476562, 0], [0, -2.21662902832031], [2.21768188476562, 0], [0, 2.21662902832031]];
			homeIconPath5_newShape.closed = true;
		homeIconPath5.setValue(homeIconPath5_newShape);
		homeIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).addProperty("ADBE Vector Shape - Group");
		homeIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(2).name = "Path 2";
		var homeIconPath7 = homeIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(2).property("ADBE Vector Shape");
		var homeIconPath7_newShape = new Shape();
			homeIconPath7_newShape.vertices = [[0, 2.42509460449219], [2.42509460449219, 0], [0, -2.42509460449219], [-2.42509460449219, 0]];
			homeIconPath7_newShape.inTangents = [[-1.33805847167969, 0], [0, 1.33805847167969], [1.33805847167969, 0], [0, -1.33805847167969]];
			homeIconPath7_newShape.outTangents = [[1.33805847167969, 0], [0, -1.33805847167969], [-1.33805847167969, 0], [0, 1.33805847167969]];
			homeIconPath7_newShape.closed = true;
		homeIconPath7.setValue(homeIconPath7_newShape);
		homeIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).addProperty("ADBE Vector Filter - Merge");
		homeIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(3).name = "Merge Paths 1";
		homeIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		homeIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(3).property("ADBE Vector Position").setValue([-0.02334833145142,0.55327224731445]);
		homeIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		homeIcon.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		homeIcon.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([1,1,1,1]);
		homeIcon.property("ADBE Transform Group").property("ADBE Position").setValue([128.50065612793,84.6363830566406,0]);
		homeIcon.selected = false;
	var home = menuUpperLeft_comp.layers.addBoxText([57.1199989318848,24], "Home");
		home.name = "Home";
		home.shy = true;
		home.moveToEnd();
		var home_TextProp = home.property("ADBE Text Properties").property("ADBE Text Document");
		var home_TextDocument = home_TextProp.value;
			home_TextDocument.font = "HelveticaNeue-Bold";
			home_TextDocument.fontSize = 20;
			home_TextDocument.applyFill = true;
			home_TextDocument.fillColor = [1,1,1];
			home_TextDocument.applyStroke = false;
			home_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			home_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				home_TextDocument.verticalScale = 1;
				home_TextDocument.horizontalScale = 1;
				home_TextDocument.baselineShift = 0;
				home_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// home_TextDocument.fauxBold = false;
				// home_TextDocument.fauxItalic = false;
				// home_TextDocument.allCaps = false;
				// home_TextDocument.smallCaps = false;
				// home_TextDocument.superscript = false;
				// home_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				home_TextDocument.leading = 24;
				home_TextDocument.autoLeading = true;
			}
			home_TextProp.setValue(home_TextDocument);
		home.property("ADBE Transform Group").property("ADBE Position").setValue([60.5426025390625,2.69695281982422,0]);
		home.selected = false;
	// Add Shape Layer "Explore Icon", varName "exploreIcon";
	var exploreIcon = menuUpperLeft_comp.layers.addShape();
		exploreIcon.name = "Explore Icon";
		exploreIcon.label = 1;
		exploreIcon.shy = true;
		exploreIcon.moveToEnd();
		exploreIcon.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		exploreIcon.property("ADBE Root Vectors Group").property(1).name = "Vector";
		exploreIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		exploreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var exploreIconPath = exploreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var exploreIconPath_newShape = new Shape();
			exploreIconPath_newShape.vertices = [[5.97999572753906, -5.2615966796875], [10.6153869628906, -5.2615966796875], [10.6153869628906, -5.2615966796875], [11.5, -4.4154052734375], [10.6153869628906, -3.5692138671875], [5.82666015625, -3.5692138671875], [5.17794799804688, 3.56929016113281], [9.69302368164062, 3.56929016113281], [10.57763671875, 4.41548156738281], [9.69302368164062, 5.26167297363281], [5.02578735351562, 5.26167297363281], [4.57522583007812, 10.2260131835938], [3.69532775878906, 11], [3.61749267578125, 10.9966125488281], [2.81307983398438, 10.079345703125], [3.24948120117188, 5.26167297363281], [-4.20486450195312, 5.26167297363281], [-4.6566162109375, 10.2260131835938], [-5.53651428222656, 11], [-5.61436462402344, 10.9966125488281], [-6.41876220703125, 10.0804748535156], [-5.97999572753906, 5.26054382324219], [-10.6153869628906, 5.26054382324219], [-11.5, 4.41435241699219], [-10.6153869628906, 3.56816101074219], [-5.82666015625, 3.56816101074219], [-5.17794799804688, -3.57034301757812], [-9.69302368164062, -3.57034301757812], [-10.57763671875, -4.41653442382812], [-9.69302368164062, -5.26272583007812], [-5.02461242675781, -5.26272583007812], [-4.57405090332031, -10.2270660400391], [-3.61512756347656, -10.9976654052734], [-2.81307983398438, -10.0803985595703], [-3.24948120117188, -5.26272583007812], [4.20486450195312, -5.26272583007812], [4.6566162109375, -10.2270660400391], [5.61436462402344, -10.9976654052734], [6.41876220703125, -10.0815277099609]];
			exploreIconPath_newShape.inTangents = [[0, 0], [0, 0], [0, 0], [0, -0.46710205078125], [0.48831176757812, 0], [0, 0], [0, 0], [0, 0], [0, -0.46597290039062], [0.48712158203125, 0], [0, 0], [0, 0], [0.4541015625, 0], [0, 0], [-0.04246520996094, 0.46597290039062], [0, 0], [0, 0], [0, 0], [0.4541015625, 0], [0, 0], [-0.04246520996094, 0.46484375], [0, 0], [0, 0], [0, 0.46710205078125], [-0.48831176757812, 0], [0, 0], [0, 0], [0, 0], [0, 0.46597290039062], [-0.48831176757812, 0], [0, 0], [0, 0], [-0.49539184570312, -0.03384399414062], [0.04364013671875, -0.46597290039062], [0, 0], [0, 0], [0, 0], [-0.49185180664062, -0.03384399414062], [0.04246520996094, -0.46484375]];
			exploreIconPath_newShape.outTangents = [[0, 0], [0, 0], [0.48831176757812, 0], [0, 0.46710205078125], [0, 0], [0, 0], [0, 0], [0.48712158203125, 0], [0, 0.46597290039062], [0, 0], [0, 0], [-0.04010009765625, 0.44114685058594], [0, 0], [-0.48594665527344, -0.041748046875], [0, 0], [0, 0], [0, 0], [-0.04010009765625, 0.44114685058594], [0, 0], [-0.48594665527344, -0.041748046875], [0, 0], [0, 0], [-0.48831176757812, 0], [0, -0.46710205078125], [0, 0], [0, 0], [0, 0], [-0.48831176757812, 0], [0, -0.46597290039062], [0, 0], [0, 0], [0.04246520996094, -0.46597290039062], [0.48359680175781, 0.041748046875], [0, 0], [0, 0], [0, 0], [0.04246520996094, -0.46597290039062], [0.48594665527344, 0.041748046875], [0, 0]];
			exploreIconPath_newShape.closed = true;
		exploreIconPath.setValue(exploreIconPath_newShape);
		exploreIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		exploreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var exploreIconPath3 = exploreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var exploreIconPath3_newShape = new Shape();
			exploreIconPath3_newShape.vertices = [[-4.05154418945312, 3.56816101074219], [3.40281677246094, 3.56816101074219], [4.05154418945312, -3.5692138671875], [-3.40281677246094, -3.5692138671875]];
			exploreIconPath3_newShape.closed = true;
		exploreIconPath3.setValue(exploreIconPath3_newShape);
		exploreIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		exploreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		exploreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		exploreIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		exploreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		exploreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([1,1,1,1]);
		exploreIcon.property("ADBE Transform Group").property("ADBE Position").setValue([128.543258666992,145,0]);
		exploreIcon.selected = false;
	var explore = menuUpperLeft_comp.layers.addBoxText([72.4199981689453,24], "Explore");
		explore.name = "Explore";
		explore.shy = true;
		explore.moveToEnd();
		var explore_TextProp = explore.property("ADBE Text Properties").property("ADBE Text Document");
		var explore_TextDocument = explore_TextProp.value;
			explore_TextDocument.font = "HelveticaNeue-Bold";
			explore_TextDocument.fontSize = 20;
			explore_TextDocument.applyFill = true;
			explore_TextDocument.fillColor = [1,1,1];
			explore_TextDocument.applyStroke = false;
			explore_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			explore_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				explore_TextDocument.verticalScale = 1;
				explore_TextDocument.horizontalScale = 1;
				explore_TextDocument.baselineShift = 0;
				explore_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// explore_TextDocument.fauxBold = false;
				// explore_TextDocument.fauxItalic = false;
				// explore_TextDocument.allCaps = false;
				// explore_TextDocument.smallCaps = false;
				// explore_TextDocument.superscript = false;
				// explore_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				explore_TextDocument.leading = 24;
				explore_TextDocument.autoLeading = true;
			}
			explore_TextProp.setValue(explore_TextDocument);
		explore.property("ADBE Transform Group").property("ADBE Position").setValue([68,1.33332824707031,0]);
		explore.selected = false;
	var compcode1 = menuUpperLeft_comp.layers.addBoxText([7.1399998664856,13], "1");
		compcode1.name = "1";
		compcode1.label = 3;
		compcode1.moveToEnd();
		var compcode1_TextProp = compcode1.property("ADBE Text Properties").property("ADBE Text Document");
		var compcode1_TextDocument = compcode1_TextProp.value;
			compcode1_TextDocument.font = "Helvetica";
			compcode1_TextDocument.fontSize = 11;
			compcode1_TextDocument.applyFill = true;
			compcode1_TextDocument.fillColor = [1,1,1];
			compcode1_TextDocument.applyStroke = false;
			compcode1_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			compcode1_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				compcode1_TextDocument.verticalScale = 1;
				compcode1_TextDocument.horizontalScale = 1;
				compcode1_TextDocument.baselineShift = 0;
				compcode1_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// compcode1_TextDocument.fauxBold = false;
				// compcode1_TextDocument.fauxItalic = false;
				// compcode1_TextDocument.allCaps = false;
				// compcode1_TextDocument.smallCaps = false;
				// compcode1_TextDocument.superscript = false;
				// compcode1_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				compcode1_TextDocument.leading = 13.2000007629395;
				compcode1_TextDocument.autoLeading = true;
			}
			compcode1_TextProp.setValue(compcode1_TextDocument);
		compcode1.property("ADBE Transform Group").property("ADBE Position").setValue([136.5,197.333333015442,0]);
		compcode1.selected = false;
	// Add Shape Layer "Notifications Icon", varName "notificationsIcon";
	var notificationsIcon = menuUpperLeft_comp.layers.addShape();
		notificationsIcon.name = "Notifications Icon";
		notificationsIcon.label = 1;
		notificationsIcon.shy = true;
		notificationsIcon.moveToEnd();
		notificationsIcon.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		notificationsIcon.property("ADBE Root Vectors Group").property(1).name = "Ellipse 67";
		notificationsIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		notificationsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var notificationsIconPath = notificationsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var notificationsIconPath_newShape = new Shape();
			notificationsIconPath_newShape.vertices = [[0, -8.5], [8.5, 0], [0, 8.5], [-8.5, 0]];
			notificationsIconPath_newShape.inTangents = [[-4.77528381347656, 0], [0, -4.77528381347656], [4.77528381347656, 0], [0, 4.77528381347656]];
			notificationsIconPath_newShape.outTangents = [[4.77528381347656, 0], [0, 4.77528381347656], [-4.77528381347656, 0], [0, -4.77528381347656]];
			notificationsIconPath_newShape.closed = true;
		notificationsIconPath.setValue(notificationsIconPath_newShape);
		notificationsIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		notificationsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		notificationsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.09019608050585,0.12549020349979,0.16470588743687,1]);
		notificationsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(1);
		notificationsIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		notificationsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		notificationsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.29411765933037,0.62745100259781,0.92549020051956,1]);
		notificationsIcon.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([8,-10]);
		notificationsIcon.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		notificationsIcon.property("ADBE Root Vectors Group").property(2).name = "Vector";
		notificationsIcon.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Shape - Group");
		notificationsIcon.property("ADBE Root Vectors Group").property(2).property(2).property(1).name = "Path 1";
		var notificationsIconPath3 = notificationsIcon.property("ADBE Root Vectors Group").property(2).property(2).property(1).property("ADBE Vector Shape");
		var notificationsIconPath3_newShape = new Shape();
			notificationsIconPath3_newShape.vertices = [[8.73631286621094, -1.74069213867188], [11.155029296875, 5.17617797851562], [11.1527252197266, 5.17732238769531], [11.4552154541016, 6.13856506347656], [10.6386260986328, 6.72816467285156], [4.97767639160156, 6.72816467285156], [0.00105285644531, 11.5], [-4.97901916503906, 6.72816467285156], [-10.6376647949219, 6.72816467285156], [-11.4565582275391, 6.13742065429688], [-11.1517791748047, 5.17617797851562], [-8.73419189453125, -1.74069213867188], [-6.03599548339844, -9.00625610351562], [-0.00700378417969, -11.5], [0.00794982910156, -11.5], [6.03694152832031, -9.00740051269531]];
			notificationsIconPath3_newShape.inTangents = [[0.02301025390625, -2.90438842773438], [-0.02301025390625, -0.01835632324219], [0, 0], [0.11846923828125, -0.35215759277344], [0.37034606933594, 0], [0, 0], [2.68325805664062, 0], [0.1173095703125, 2.64974975585938], [0, 0], [0.1173095703125, 0.35330200195312], [-0.29904174804688, 0.22138977050781], [0.04255676269531, 4.96682739257812], [-1.76429748535156, 1.78140258789062], [-2.30487060546875, 0.011474609375], [0, 0], [-1.58143615722656, -1.59786987304688]];
			notificationsIconPath3_newShape.outTangents = [[-0.04255676269531, 5.03565979003906], [0, 0], [0.29904174804688, 0.22138977050781], [-0.11502075195312, 0.35330200195312], [0, 0], [-0.11616516113281, 2.64974975585938], [-2.68325805664062, 0], [0, 0], [-0.37034606933594, 0], [-0.11616516113281, -0.35330200195312], [0.09431457519531, -0.072265625], [-0.02529907226562, -2.90438842773438], [1.58258056640625, -1.59902954101562], [0, 0], [2.30601501464844, 0.011474609375], [1.76545715332031, 1.78140258789062]];
			notificationsIconPath3_newShape.closed = true;
		notificationsIconPath3.setValue(notificationsIconPath3_newShape);
		notificationsIcon.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Shape - Group");
		notificationsIcon.property("ADBE Root Vectors Group").property(2).property(2).property(2).name = "Path 2";
		var notificationsIconPath5 = notificationsIcon.property("ADBE Root Vectors Group").property(2).property(2).property(2).property("ADBE Vector Shape");
		var notificationsIconPath5_newShape = new Shape();
			notificationsIconPath5_newShape.vertices = [[-3.2503662109375, 6.72702026367188], [0.002197265625, 9.77593994140625], [0.002197265625, 9.77824401855469], [3.25477600097656, 6.72702026367188]];
			notificationsIconPath5_newShape.inTangents = [[0, 0], [-1.73094177246094, 0], [0, 0], [-0.11502075195312, 1.69767761230469]];
			notificationsIconPath5_newShape.outTangents = [[0.11271667480469, 1.69882202148438], [0, 0], [1.73094177246094, 0], [0, 0]];
			notificationsIconPath5_newShape.closed = true;
		notificationsIconPath5.setValue(notificationsIconPath5_newShape);
		notificationsIcon.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Shape - Group");
		notificationsIcon.property("ADBE Root Vectors Group").property(2).property(2).property(3).name = "Path 3";
		var notificationsIconPath7 = notificationsIcon.property("ADBE Root Vectors Group").property(2).property(2).property(3).property("ADBE Vector Shape");
		var notificationsIconPath7_newShape = new Shape();
			notificationsIconPath7_newShape.vertices = [[-7.00900268554688, -1.75674438476562], [-8.76179504394531, 5.00640869140625], [-8.76179504394531, 5.00755310058594], [8.76620483398438, 5.00755310058594], [7.01225280761719, -1.75559997558594], [4.80975341796875, -7.7972412109375], [0.002197265625, -9.77938842773438], [-4.80879211425781, -7.79838562011719]];
			notificationsIconPath7_newShape.inTangents = [[-0.02070617675781, -2.47767639160156], [0.85110473632812, -1.29849243164062], [0, 0], [0, 0], [-0.02760314941406, 3.28981018066406], [1.46066284179688, 1.47398376464844], [1.84365844726562, 0.00917053222656], [1.25709533691406, -1.26980590820312]];
			notificationsIconPath7_newShape.outTangents = [[0.02760314941406, 3.28981018066406], [0, 0], [0, 0], [-0.85110473632812, -1.29734802246094], [0.02070617675781, -2.47883605957031], [-1.25709533691406, -1.27096557617188], [-1.84365844726562, 0.00802612304688], [-1.45951843261719, 1.47398376464844]];
			notificationsIconPath7_newShape.closed = true;
		notificationsIconPath7.setValue(notificationsIconPath7_newShape);
		notificationsIcon.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Filter - Merge");
		notificationsIcon.property("ADBE Root Vectors Group").property(2).property(2).property(4).name = "Merge Paths 1";
		notificationsIcon.property("ADBE Root Vectors Group").property(2).property(2).property(4).property("ADBE Vector Merge Type").setValue(5);
		notificationsIcon.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Graphic - Fill");
		notificationsIcon.property("ADBE Root Vectors Group").property(2).property(2).property(5).name = "Fill 1";
		notificationsIcon.property("ADBE Root Vectors Group").property(2).property(2).property(5).property("ADBE Vector Fill Color").setValue([1,1,1,1]);
		notificationsIcon.property("ADBE Transform Group").property("ADBE Position").setValue([128.543258666992,205.5,0]);
		notificationsIcon.selected = false;
	var notifications = menuUpperLeft_comp.layers.addBoxText([121.379997253418,24], "Notifications");
		notifications.name = "Notifications";
		notifications.shy = true;
		notifications.moveToEnd();
		var notifications_TextProp = notifications.property("ADBE Text Properties").property("ADBE Text Document");
		var notifications_TextDocument = notifications_TextProp.value;
			notifications_TextDocument.font = "HelveticaNeue-Bold";
			notifications_TextDocument.fontSize = 20;
			notifications_TextDocument.applyFill = true;
			notifications_TextDocument.fillColor = [1,1,1];
			notifications_TextDocument.applyStroke = false;
			notifications_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			notifications_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				notifications_TextDocument.verticalScale = 1;
				notifications_TextDocument.horizontalScale = 1;
				notifications_TextDocument.baselineShift = 0;
				notifications_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// notifications_TextDocument.fauxBold = false;
				// notifications_TextDocument.fauxItalic = false;
				// notifications_TextDocument.allCaps = false;
				// notifications_TextDocument.smallCaps = false;
				// notifications_TextDocument.superscript = false;
				// notifications_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				notifications_TextDocument.leading = 24;
				notifications_TextDocument.autoLeading = true;
			}
			notifications_TextProp.setValue(notifications_TextDocument);
		notifications.property("ADBE Transform Group").property("ADBE Position").setValue([92,2.83332824707031,0]);
		notifications.selected = false;
	// Add Shape Layer "Messages Icon", varName "messagesIcon";
	var messagesIcon = menuUpperLeft_comp.layers.addShape();
		messagesIcon.name = "Messages Icon";
		messagesIcon.label = 1;
		messagesIcon.shy = true;
		messagesIcon.moveToEnd();
		messagesIcon.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		messagesIcon.property("ADBE Root Vectors Group").property(1).name = "Vector";
		messagesIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		messagesIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var messagesIconPath = messagesIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var messagesIconPath_newShape = new Shape();
			messagesIconPath_newShape.vertices = [[-7.97500610351562, -10], [7.97500610351562, -10], [11, -6.94221496582031], [11, 6.94111633300781], [7.97500610351562, 10], [-7.97500610351562, 10], [-11, 6.94111633300781], [-11, -6.94221496582031]];
			messagesIconPath_newShape.inTangents = [[-1.668701171875, 0], [0, 0], [0, -1.68666076660156], [0, 0], [1.668701171875, 0], [0, 0], [0, 1.68666076660156], [0, 0]];
			messagesIconPath_newShape.outTangents = [[0, 0], [1.668701171875, 0], [0, 0], [0, 1.68666076660156], [0, 0], [-1.668701171875, 0], [0, 0], [0, -1.68666076660156]];
			messagesIconPath_newShape.closed = true;
		messagesIconPath.setValue(messagesIconPath_newShape);
		messagesIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		messagesIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var messagesIconPath3 = messagesIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var messagesIconPath3_newShape = new Shape();
			messagesIconPath3_newShape.vertices = [[7.97500610351562, -8.33332824707031], [-7.97500610351562, -8.33332824707031], [-7.97500610351562, -8.33332824707031], [-9.35000610351562, -6.94444274902344], [-9.35000610351562, -6.15110778808594], [-0.4949951171875, -0.19000244140625], [0.4949951171875, -0.18777465820312], [9.35000610351562, -6.15110778808594], [9.35000610351562, -6.94444274902344]];
			messagesIconPath3_newShape.inTangents = [[0.75900268554688, 0], [0, 0], [0, 0], [0, -0.76666259765625], [0, 0], [0, 0], [-0.30029296875, 0.19999694824219], [0, 0], [0, 0]];
			messagesIconPath3_newShape.outTangents = [[0, 0], [0, 0], [-0.75900268554688, 0], [0, 0], [0, 0], [0.30140686035156, 0.20443725585938], [0, 0], [0, 0], [0, -0.76666259765625]];
			messagesIconPath3_newShape.closed = true;
		messagesIconPath3.setValue(messagesIconPath3_newShape);
		messagesIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		messagesIcon.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Path 3";
		var messagesIconPath5 = messagesIcon.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Shape");
		var messagesIconPath5_newShape = new Shape();
			messagesIconPath5_newShape.vertices = [[-7.97500610351562, 8.33111572265625], [7.97500610351562, 8.33111572265625], [7.97500610351562, 8.32777404785156], [9.35000610351562, 6.93888854980469], [9.35000610351562, -4.19667053222656], [1.38600158691406, 1.16999816894531], [0, 1.59555053710938], [-1.38600158691406, 1.16888427734375], [-9.35000610351562, -4.19778442382812], [-9.35000610351562, 6.94223022460938]];
			messagesIconPath5_newShape.inTangents = [[-0.75900268554688, 0], [0, 0], [0, 0], [0, 0.76666259765625], [0, 0], [0, 0], [0.48399353027344, 0], [0.42129516601562, 0.28443908691406], [0, 0], [0, 0]];
			messagesIconPath5_newShape.outTangents = [[0, 0], [0, 0], [0.75900268554688, 0], [0, 0], [0, 0], [-0.42129516601562, 0.28334045410156], [-0.48179626464844, 0], [0, 0], [0, 0], [0, 0.76666259765625]];
			messagesIconPath5_newShape.closed = true;
		messagesIconPath5.setValue(messagesIconPath5_newShape);
		messagesIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		messagesIcon.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Merge Paths 1";
		messagesIcon.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Merge Type").setValue(5);
		messagesIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		messagesIcon.property("ADBE Root Vectors Group").property(1).property(2).property(5).name = "Fill 1";
		messagesIcon.property("ADBE Root Vectors Group").property(1).property(2).property(5).property("ADBE Vector Fill Color").setValue([1,1,1,1]);
		messagesIcon.property("ADBE Transform Group").property("ADBE Position").setValue([128.043258666992,265,0]);
		messagesIcon.selected = false;
	var messages = menuUpperLeft_comp.layers.addBoxText([96.9000015258789,24], "Messages");
		messages.name = "Messages";
		messages.shy = true;
		messages.moveToEnd();
		var messages_TextProp = messages.property("ADBE Text Properties").property("ADBE Text Document");
		var messages_TextDocument = messages_TextProp.value;
			messages_TextDocument.font = "HelveticaNeue-Bold";
			messages_TextDocument.fontSize = 20;
			messages_TextDocument.applyFill = true;
			messages_TextDocument.fillColor = [1,1,1];
			messages_TextDocument.applyStroke = false;
			messages_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			messages_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				messages_TextDocument.verticalScale = 1;
				messages_TextDocument.horizontalScale = 1;
				messages_TextDocument.baselineShift = 0;
				messages_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// messages_TextDocument.fauxBold = false;
				// messages_TextDocument.fauxItalic = false;
				// messages_TextDocument.allCaps = false;
				// messages_TextDocument.smallCaps = false;
				// messages_TextDocument.superscript = false;
				// messages_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				messages_TextDocument.leading = 24;
				messages_TextDocument.autoLeading = true;
			}
			messages_TextProp.setValue(messages_TextDocument);
		messages.property("ADBE Transform Group").property("ADBE Position").setValue([208.543258666992,267.333343505859,0]);
		messages.selected = false;
	// Add Shape Layer "Bookmarks Icon", varName "bookmarksIcon";
	var bookmarksIcon = menuUpperLeft_comp.layers.addShape();
		bookmarksIcon.name = "Bookmarks Icon";
		bookmarksIcon.label = 1;
		bookmarksIcon.shy = true;
		bookmarksIcon.moveToEnd();
		bookmarksIcon.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		bookmarksIcon.property("ADBE Root Vectors Group").property(1).name = "Vector";
		bookmarksIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		bookmarksIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var bookmarksIconPath = bookmarksIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var bookmarksIconPath_newShape = new Shape();
			bookmarksIconPath_newShape.vertices = [[8.19291687011719, 10.8421325683594], [8.67840576171875, 10.9993438720703], [8.67620849609375, 10.9993438720703], [9.04965209960938, 10.9098205566406], [9.5, 10.1805114746094], [9.5, -8.54350280761719], [7.02861022949219, -11], [-7.02861022949219, -11], [-9.5, -8.54350280761719], [-9.5, 10.1815948486328], [-9.04965209960938, 10.9098205566406], [-8.19071960449219, 10.8443145751953], [0.0010986328125, 4.91595458984375]];
			bookmarksIconPath_newShape.inTangents = [[0, 0], [-0.17245483398438, 0], [0, 0], [-0.11642456054688, 0.06004333496094], [0, 0.30787658691406], [0, 0], [1.36201477050781, 0], [0, 0], [0, -1.35380554199219], [0, 0], [-0.27459716796875, -0.13865661621094], [-0.25042724609375, 0.17904663085938], [0, 0]];
			bookmarksIconPath_newShape.outTangents = [[0.14279174804688, 0.10263061523438], [0, 0], [0.12850952148438, 0], [0.27679443359375, -0.13975524902344], [0, 0], [0, -1.35380554199219], [0, 0], [-1.36201477050781, 0], [0, 0], [0, 0.30787658691406], [0.27679443359375, 0.14193725585938], [0, 0], [0, 0]];
			bookmarksIconPath_newShape.closed = true;
		bookmarksIconPath.setValue(bookmarksIconPath_newShape);
		bookmarksIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		bookmarksIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var bookmarksIconPath3 = bookmarksIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var bookmarksIconPath3_newShape = new Shape();
			bookmarksIconPath3_newShape.vertices = [[0.48439025878906, 3.24116516113281], [0.0010986328125, 3.08395385742188], [0.0010986328125, 3.08395385742188], [-0.48219299316406, 3.24116516113281], [-7.8524169921875, 8.57232666015625], [-7.8524169921875, -8.54350280761719], [-7.02861022949219, -9.36233520507812], [7.03080749511719, -9.36233520507812], [7.85459899902344, -8.54350280761719], [7.85459899902344, 8.57232666015625]];
			bookmarksIconPath3_newShape.inTangents = [[0, 0], [0.17025756835938, 0], [0, 0], [0.14279174804688, -0.10481262207031], [0, 0], [0, 0], [-0.45364379882812, 0], [0, 0], [0, -0.44981384277344], [0, 0]];
			bookmarksIconPath3_newShape.outTangents = [[-0.14279174804688, -0.10481262207031], [0, 0], [-0.17025756835938, 0], [0, 0], [0, 0], [0, -0.44981384277344], [0, 0], [0.45364379882812, 0], [0, 0], [0, 0]];
			bookmarksIconPath3_newShape.closed = true;
		bookmarksIconPath3.setValue(bookmarksIconPath3_newShape);
		bookmarksIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		bookmarksIcon.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		bookmarksIcon.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		bookmarksIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		bookmarksIcon.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		bookmarksIcon.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([1,1,1,1]);
		bookmarksIcon.property("ADBE Transform Group").property("ADBE Position").setValue([128.543258666992,327,0]);
		bookmarksIcon.selected = false;
	var bookmarks = menuUpperLeft_comp.layers.addBoxText([110.160003662109,24], "Bookmarks");
		bookmarks.name = "Bookmarks";
		bookmarks.shy = true;
		bookmarks.moveToEnd();
		var bookmarks_TextProp = bookmarks.property("ADBE Text Properties").property("ADBE Text Document");
		var bookmarks_TextDocument = bookmarks_TextProp.value;
			bookmarks_TextDocument.font = "HelveticaNeue-Bold";
			bookmarks_TextDocument.fontSize = 20;
			bookmarks_TextDocument.applyFill = true;
			bookmarks_TextDocument.fillColor = [1,1,1];
			bookmarks_TextDocument.applyStroke = false;
			bookmarks_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			bookmarks_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				bookmarks_TextDocument.verticalScale = 1;
				bookmarks_TextDocument.horizontalScale = 1;
				bookmarks_TextDocument.baselineShift = 0;
				bookmarks_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// bookmarks_TextDocument.fauxBold = false;
				// bookmarks_TextDocument.fauxItalic = false;
				// bookmarks_TextDocument.allCaps = false;
				// bookmarks_TextDocument.smallCaps = false;
				// bookmarks_TextDocument.superscript = false;
				// bookmarks_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				bookmarks_TextDocument.leading = 24;
				bookmarks_TextDocument.autoLeading = true;
			}
			bookmarks_TextProp.setValue(bookmarks_TextDocument);
		bookmarks.property("ADBE Transform Group").property("ADBE Position").setValue([215.043258666992,328.333343505859,0]);
		bookmarks.selected = false;
	// Add Shape Layer "Lists Icon", varName "listsIcon";
	var listsIcon = menuUpperLeft_comp.layers.addShape();
		listsIcon.name = "Lists Icon";
		listsIcon.label = 1;
		listsIcon.shy = true;
		listsIcon.moveToEnd();
		listsIcon.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		listsIcon.property("ADBE Root Vectors Group").property(1).name = "Union";
		listsIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Group");
		listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Vector";
		listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).name = "Path 1";
		var listsIconPath = listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).property("ADBE Vector Shape");
		var listsIconPath_newShape = new Shape();
			listsIconPath_newShape.vertices = [[-8.52499389648438, 11], [8.52499389648438, 11], [11, 8.52499389648438], [11, -8.52499389648438], [8.52499389648438, -11], [-8.52499389648438, -11], [-11, -8.52499389648438], [-11, 8.52499389648438]];
			listsIconPath_newShape.inTangents = [[-1.36399841308594, 0], [0, 0], [0, 1.36399841308594], [0, 0], [1.36399841308594, 0], [0, 0], [0, -1.36399841308594], [0, 0]];
			listsIconPath_newShape.outTangents = [[0, 0], [1.36399841308594, 0], [0, 0], [0, -1.36399841308594], [0, 0], [-1.36399841308594, 0], [0, 0], [0, 1.36399841308594]];
			listsIconPath_newShape.closed = true;
		listsIconPath.setValue(listsIconPath_newShape);
		listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).name = "Path 2";
		var listsIconPath3 = listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Shape");
		var listsIconPath3_newShape = new Shape();
			listsIconPath3_newShape.vertices = [[-9.35000610351562, -8.52499389648438], [-8.52499389648438, -9.35000610351562], [8.52499389648438, -9.35000610351562], [9.35000610351562, -8.52499389648438], [9.35000610351562, 8.52499389648438], [8.52499389648438, 9.35000610351562], [-8.52499389648438, 9.35000610351562], [-9.35000610351562, 8.52499389648438]];
			listsIconPath3_newShape.inTangents = [[0, 0], [-0.45539855957031, 0], [0, 0], [0, -0.45429992675781], [0, 0], [0.45539855957031, 0], [0, 0], [0, 0.45429992675781]];
			listsIconPath3_newShape.outTangents = [[0, -0.45429992675781], [0, 0], [0.45539855957031, 0], [0, 0], [0, 0.45429992675781], [0, 0], [-0.45539855957031, 0], [0, 0]];
			listsIconPath3_newShape.closed = true;
		listsIconPath3.setValue(listsIconPath3_newShape);
		listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).name = "Merge Paths 1";
		listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		listsIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Group");
		listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Vector";
		listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).addProperty("ADBE Vector Shape - Group");
		listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(1).name = "Path 1";
		var listsIconPath5 = listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(1).property("ADBE Vector Shape");
		var listsIconPath5_newShape = new Shape();
			listsIconPath5_newShape.vertices = [[-5.5, -3.69599914550781], [5.5, -3.69599914550781], [6.32499694824219, -4.52099609375], [5.5, -5.34600830078125], [-5.5, -5.34600830078125], [-6.32499694824219, -4.52099609375]];
			listsIconPath5_newShape.inTangents = [[-0.45539855957031, 0], [0, 0], [0, 0.45649719238281], [0.45539855957031, 0], [0, 0], [0, -0.45429992675781]];
			listsIconPath5_newShape.outTangents = [[0, 0], [0.45539855957031, 0], [0, -0.45649719238281], [0, 0], [-0.45539855957031, 0], [0, 0.45429992675781]];
			listsIconPath5_newShape.closed = true;
		listsIconPath5.setValue(listsIconPath5_newShape);
		listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).addProperty("ADBE Vector Shape - Group");
		listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(2).name = "Path 2";
		var listsIconPath7 = listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(2).property("ADBE Vector Shape");
		var listsIconPath7_newShape = new Shape();
			listsIconPath7_newShape.vertices = [[-5.5, 0.82499694824219], [5.5, 0.82499694824219], [6.32499694824219, 0], [5.5, -0.82499694824219], [-5.5, -0.82499694824219], [-6.32499694824219, 0]];
			listsIconPath7_newShape.inTangents = [[-0.45539855957031, 0], [0, 0], [0, 0.45539855957031], [0.45539855957031, 0], [0, 0], [0, -0.45539855957031]];
			listsIconPath7_newShape.outTangents = [[0, 0], [0.45539855957031, 0], [0, -0.45539855957031], [0, 0], [-0.45539855957031, 0], [0, 0.45539855957031]];
			listsIconPath7_newShape.closed = true;
		listsIconPath7.setValue(listsIconPath7_newShape);
		listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).addProperty("ADBE Vector Shape - Group");
		listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(3).name = "Path 3";
		var listsIconPath9 = listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(3).property("ADBE Vector Shape");
		var listsIconPath9_newShape = new Shape();
			listsIconPath9_newShape.vertices = [[-5.5, 5.34600830078125], [0, 5.34600830078125], [0.82499694824219, 4.52099609375], [0, 3.69599914550781], [-5.5, 3.69599914550781], [-6.32499694824219, 4.52099609375]];
			listsIconPath9_newShape.inTangents = [[-0.45539855957031, 0], [0, 0], [0, 0.45429992675781], [0.45539855957031, 0], [0, 0], [0, -0.45649719238281]];
			listsIconPath9_newShape.outTangents = [[0, 0], [0.45539855957031, 0], [0, -0.45429992675781], [0, 0], [-0.45539855957031, 0], [0, 0.45649719238281]];
			listsIconPath9_newShape.closed = true;
		listsIconPath9.setValue(listsIconPath9_newShape);
		listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).addProperty("ADBE Vector Filter - Merge");
		listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(4).name = "Merge Paths 1";
		listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(4).property("ADBE Vector Merge Type").setValue(5);
		listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(3).property("ADBE Vector Position").setValue([-0.17500019073486,-0.40398263931274]);
		listsIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		listsIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		listsIcon.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([1,1,1,1]);
		listsIcon.property("ADBE Transform Group").property("ADBE Position").setValue([128.043258666992,386,0]);
		listsIcon.selected = false;
	var lists = menuUpperLeft_comp.layers.addBoxText([45.9000015258789,24], "Lists");
		lists.name = "Lists";
		lists.shy = true;
		lists.moveToEnd();
		var lists_TextProp = lists.property("ADBE Text Properties").property("ADBE Text Document");
		var lists_TextDocument = lists_TextProp.value;
			lists_TextDocument.font = "HelveticaNeue-Bold";
			lists_TextDocument.fontSize = 20;
			lists_TextDocument.applyFill = true;
			lists_TextDocument.fillColor = [1,1,1];
			lists_TextDocument.applyStroke = false;
			lists_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			lists_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				lists_TextDocument.verticalScale = 1;
				lists_TextDocument.horizontalScale = 1;
				lists_TextDocument.baselineShift = 0;
				lists_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// lists_TextDocument.fauxBold = false;
				// lists_TextDocument.fauxItalic = false;
				// lists_TextDocument.allCaps = false;
				// lists_TextDocument.smallCaps = false;
				// lists_TextDocument.superscript = false;
				// lists_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				lists_TextDocument.leading = 24;
				lists_TextDocument.autoLeading = true;
			}
			lists_TextProp.setValue(lists_TextDocument);
		lists.property("ADBE Transform Group").property("ADBE Position").setValue([183.543258666992,387.333343505859,0]);
		lists.selected = false;
	// Add Shape Layer "Profile Icon", varName "profileIcon";
	var profileIcon = menuUpperLeft_comp.layers.addShape();
		profileIcon.name = "Profile Icon";
		profileIcon.label = 1;
		profileIcon.shy = true;
		profileIcon.moveToEnd();
		profileIcon.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		profileIcon.property("ADBE Root Vectors Group").property(1).name = "Vector";
		profileIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		profileIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var profileIconPath = profileIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var profileIconPath_newShape = new Shape();
			profileIconPath_newShape.vertices = [[4.3685302734375, -1.43156433105469], [0.0001220703125, -0.01130676269531], [0.0001220703125, -0.01130676269531], [-4.3682861328125, -1.43156433105469], [-5.28520202636719, -6.39567565917969], [0.0001220703125, -11.5], [5.28543090820312, -6.39793395996094]];
			profileIconPath_newShape.inTangents = [[0.92601013183594, -1.05162048339844], [1.54145812988281, 0], [0, 0], [1.1011962890625, 1.25177001953125], [-0.30943298339844, 2.28643798828125], [-2.87699890136719, 0], [-0.43229675292969, -3.19444274902344]];
			profileIconPath_newShape.outTangents = [[-1.1011962890625, 1.25064086914062], [0, 0], [-1.54145812988281, 0], [-0.92601013183594, -1.05162048339844], [0.43229675292969, -3.19670104980469], [2.87699890136719, 0], [0.30943298339844, 2.2886962890625]];
			profileIconPath_newShape.closed = true;
		profileIconPath.setValue(profileIconPath_newShape);
		profileIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		profileIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var profileIconPath3 = profileIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var profileIconPath3_newShape = new Shape();
			profileIconPath3_newShape.vertices = [[0.0001220703125, -9.8038330078125], [-3.59471130371094, -6.17178344726562], [-3.08279418945312, -2.54763793945312], [0.0001220703125, -1.70747375488281], [3.08303833007812, -2.54763793945312], [3.59495544433594, -6.17178344726562]];
			profileIconPath3_newShape.inTangents = [[2.69953918457031, 0], [0.18429565429688, -1.35693359375], [-0.57676696777344, -0.65359497070312], [-1.6427001953125, 0], [-0.51760864257812, 0.58799743652344], [0.23548889160156, 1.75270080566406]];
			profileIconPath3_newShape.outTangents = [[-2.69953918457031, 0], [-0.23548889160156, 1.75157165527344], [0.51760864257812, 0.58799743652344], [1.6427001953125, 0], [0.57676696777344, -0.65359497070312], [-0.18429565429688, -1.35580444335938]];
			profileIconPath3_newShape.closed = true;
		profileIconPath3.setValue(profileIconPath3_newShape);
		profileIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		profileIcon.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Path 3";
		var profileIconPath5 = profileIcon.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Shape");
		var profileIconPath5_newShape = new Shape();
			profileIconPath5_newShape.vertices = [[0.0001220703125, 1.60569763183594], [9.41949462890625, 8.37905883789062], [9.41835021972656, 8.37905883789062], [8.97013854980469, 10.5727691650391], [6.99867248535156, 11.5], [-6.99842834472656, 11.5], [-8.96989440917969, 10.5727691650391], [-9.41925048828125, 8.37905883789062]];
			profileIconPath5_newShape.inTangents = [[-4.54814147949219, 0], [-0.9976806640625, -3.98712158203125], [0, 0], [0.48234558105469, -0.61062622070312], [0.78836059570312, 0], [0, 0], [0.46414184570312, 0.58799743652344], [-0.19566345214844, 0.78250122070312]];
			profileIconPath5_newShape.outTangents = [[4.54814147949219, 0], [0, 0], [0.19680786132812, 0.78363037109375], [-0.46414184570312, 0.58799743652344], [0, 0], [-0.78836059570312, 0], [-0.481201171875, -0.61062622070312], [0.9976806640625, -3.98712158203125]];
			profileIconPath5_newShape.closed = true;
		profileIconPath5.setValue(profileIconPath5_newShape);
		profileIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		profileIcon.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Path 4";
		var profileIconPath7 = profileIcon.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Shape");
		var profileIconPath7_newShape = new Shape();
			profileIconPath7_newShape.vertices = [[6.99867248535156, 9.80609130859375], [7.62663269042969, 9.52792358398438], [7.62663269042969, 9.52792358398438], [7.76313781738281, 8.78839111328125], [0.0001220703125, 3.30412292480469], [-7.76289367675781, 8.78839111328125], [-7.62638854980469, 9.52792358398438], [-6.99842834472656, 9.80609130859375]];
			profileIconPath7_newShape.inTangents = [[0, 0], [-0.14334106445312, 0.18092346191406], [0, 0], [0.06825256347656, 0.27365112304688], [3.76205444335938, 0], [0.80769348144531, -3.22836303710938], [-0.15585327148438, -0.19676208496094], [-0.267333984375, 0]];
			profileIconPath7_newShape.outTangents = [[0.26847839355469, 0], [0, 0], [0.15585327148438, -0.19676208496094], [-0.80769348144531, -3.2294921875], [-3.76205444335938, 0], [-0.06825256347656, 0.27365112304688], [0.14334106445312, 0.18205261230469], [0, 0]];
			profileIconPath7_newShape.closed = true;
		profileIconPath7.setValue(profileIconPath7_newShape);
		profileIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		profileIcon.property("ADBE Root Vectors Group").property(1).property(2).property(5).name = "Merge Paths 1";
		profileIcon.property("ADBE Root Vectors Group").property(1).property(2).property(5).property("ADBE Vector Merge Type").setValue(5);
		profileIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		profileIcon.property("ADBE Root Vectors Group").property(1).property(2).property(6).name = "Fill 1";
		profileIcon.property("ADBE Root Vectors Group").property(1).property(2).property(6).property("ADBE Vector Fill Color").setValue([1,1,1,1]);
		profileIcon.property("ADBE Transform Group").property("ADBE Position").setValue([128.543258666992,445.5,0]);
		profileIcon.selected = false;
	var profile = menuUpperLeft_comp.layers.addBoxText([62.2200012207031,24], "Profile");
		profile.name = "Profile";
		profile.shy = true;
		profile.moveToEnd();
		var profile_TextProp = profile.property("ADBE Text Properties").property("ADBE Text Document");
		var profile_TextDocument = profile_TextProp.value;
			profile_TextDocument.font = "HelveticaNeue-Bold";
			profile_TextDocument.fontSize = 20;
			profile_TextDocument.applyFill = true;
			profile_TextDocument.fillColor = [1,1,1];
			profile_TextDocument.applyStroke = false;
			profile_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			profile_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				profile_TextDocument.verticalScale = 1;
				profile_TextDocument.horizontalScale = 1;
				profile_TextDocument.baselineShift = 0;
				profile_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// profile_TextDocument.fauxBold = false;
				// profile_TextDocument.fauxItalic = false;
				// profile_TextDocument.allCaps = false;
				// profile_TextDocument.smallCaps = false;
				// profile_TextDocument.superscript = false;
				// profile_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				profile_TextDocument.leading = 24;
				profile_TextDocument.autoLeading = true;
			}
			profile_TextProp.setValue(profile_TextDocument);
		profile.property("ADBE Transform Group").property("ADBE Position").setValue([191.543258666992,448.333343505859,0]);
		profile.selected = false;
	// Add Shape Layer "More Icon", varName "moreIcon";
	var moreIcon = menuUpperLeft_comp.layers.addShape();
		moreIcon.name = "More Icon";
		moreIcon.label = 1;
		moreIcon.shy = true;
		moreIcon.moveToEnd();
		moreIcon.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		moreIcon.property("ADBE Root Vectors Group").property(1).name = "Union";
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Group");
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Vector";
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).name = "Path 1";
		var moreIconPath = moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).property("ADBE Vector Shape");
		var moreIconPath_newShape = new Shape();
			moreIconPath_newShape.vertices = [[3.06976318359375, 0], [5.02325439453125, -1.9534912109375], [6.97674560546875, 0], [5.02325439453125, 1.9534912109375]];
			moreIconPath_newShape.inTangents = [[0, 1.07498168945312], [-1.07720947265625, 0], [0, -1.07609558105469], [1.07609558105469, 0]];
			moreIconPath_newShape.outTangents = [[0, -1.07498168945312], [1.07609558105469, 0], [0, 1.07609558105469], [-1.07832336425781, 0]];
			moreIconPath_newShape.closed = true;
		moreIconPath.setValue(moreIconPath_newShape);
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).name = "Path 2";
		var moreIconPath3 = moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Shape");
		var moreIconPath3_newShape = new Shape();
			moreIconPath3_newShape.vertices = [[4.18605041503906, 0], [5.02325439453125, 0.83720397949219], [5.86045837402344, 0], [5.02325439453125, -0.83720397949219]];
			moreIconPath3_newShape.inTangents = [[0, -0.46102905273438], [-0.46214294433594, 0], [0, 0.46102905273438], [0.46102905273438, 0]];
			moreIconPath3_newShape.outTangents = [[0, 0.46214294433594], [0.46214294433594, 0], [0, -0.46214294433594], [-0.46102905273438, 0]];
			moreIconPath3_newShape.closed = true;
		moreIconPath3.setValue(moreIconPath3_newShape);
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).name = "Path 3";
		var moreIconPath5 = moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).property("ADBE Vector Shape");
		var moreIconPath5_newShape = new Shape();
			moreIconPath5_newShape.vertices = [[-1.9534912109375, 0], [0, -1.9534912109375], [1.9534912109375, 0], [0, 1.9534912109375]];
			moreIconPath5_newShape.inTangents = [[0, 1.07498168945312], [-1.07832336425781, 0], [0, -1.07609558105469], [1.07720947265625, 0]];
			moreIconPath5_newShape.outTangents = [[0, -1.07498168945312], [1.07832336425781, 0], [0, 1.07609558105469], [-1.07720947265625, 0]];
			moreIconPath5_newShape.closed = true;
		moreIconPath5.setValue(moreIconPath5_newShape);
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(4).name = "Path 4";
		var moreIconPath7 = moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(4).property("ADBE Vector Shape");
		var moreIconPath7_newShape = new Shape();
			moreIconPath7_newShape.vertices = [[-0.83720397949219, 0], [0, 0.83720397949219], [0.83720397949219, 0], [0, -0.83720397949219]];
			moreIconPath7_newShape.inTangents = [[0, -0.46102905273438], [-0.46214294433594, 0], [0, 0.46102905273438], [0.46102905273438, 0]];
			moreIconPath7_newShape.outTangents = [[0, 0.46214294433594], [0.46214294433594, 0], [0, -0.46214294433594], [-0.46102905273438, 0]];
			moreIconPath7_newShape.closed = true;
		moreIconPath7.setValue(moreIconPath7_newShape);
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(5).name = "Path 5";
		var moreIconPath9 = moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(5).property("ADBE Vector Shape");
		var moreIconPath9_newShape = new Shape();
			moreIconPath9_newShape.vertices = [[-6.97674560546875, 0], [-5.02325439453125, -1.9534912109375], [-3.06976318359375, 0], [-5.02325439453125, 1.9534912109375]];
			moreIconPath9_newShape.inTangents = [[0, 1.07498168945312], [-1.07720947265625, 0], [0, -1.07609558105469], [1.07609558105469, 0]];
			moreIconPath9_newShape.outTangents = [[0, -1.07498168945312], [1.07498168945312, 0], [0, 1.07609558105469], [-1.07720947265625, 0]];
			moreIconPath9_newShape.closed = true;
		moreIconPath9.setValue(moreIconPath9_newShape);
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(6).name = "Path 6";
		var moreIconPath11 = moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(6).property("ADBE Vector Shape");
		var moreIconPath11_newShape = new Shape();
			moreIconPath11_newShape.vertices = [[-5.86045837402344, 0], [-5.02325439453125, 0.83720397949219], [-4.18605041503906, 0], [-5.02325439453125, -0.83720397949219]];
			moreIconPath11_newShape.inTangents = [[0, -0.46102905273438], [-0.46214294433594, 0], [0, 0.46102905273438], [0.46102905273438, 0]];
			moreIconPath11_newShape.outTangents = [[0, 0.46214294433594], [0.46214294433594, 0], [0, -0.46214294433594], [-0.46102905273438, 0]];
			moreIconPath11_newShape.closed = true;
		moreIconPath11.setValue(moreIconPath11_newShape);
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(7).name = "Merge Paths 1";
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(7).property("ADBE Vector Merge Type").setValue(5);
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(3).property("ADBE Vector Position").setValue([-0.02325582504272,-0.04651165008545]);
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Group");
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Vector";
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).addProperty("ADBE Vector Shape - Group");
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(1).name = "Path 1";
		var moreIconPath13 = moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(1).property("ADBE Vector Shape");
		var moreIconPath13_newShape = new Shape();
			moreIconPath13_newShape.vertices = [[-12, 0], [0, 12], [12, 0], [0, -12]];
			moreIconPath13_newShape.inTangents = [[0, -6.6173095703125], [-6.6173095703125, 0], [0, 6.6173095703125], [6.6173095703125, 0]];
			moreIconPath13_newShape.outTangents = [[0, 6.6173095703125], [6.6173095703125, 0], [0, -6.6173095703125], [-6.6173095703125, 0]];
			moreIconPath13_newShape.closed = true;
		moreIconPath13.setValue(moreIconPath13_newShape);
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).addProperty("ADBE Vector Shape - Group");
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(2).name = "Path 2";
		var moreIconPath15 = moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(2).property("ADBE Vector Shape");
		var moreIconPath15_newShape = new Shape();
			moreIconPath15_newShape.vertices = [[-10.3255767822266, 0], [0, -10.3255767822266], [10.3255767822266, 0], [0, 10.3255767822266]];
			moreIconPath15_newShape.inTangents = [[0, 5.69302368164062], [-5.69302368164062, 0], [0, -5.69302368164062], [5.69302368164062, 0]];
			moreIconPath15_newShape.outTangents = [[0, -5.69302368164062], [5.69302368164062, 0], [0, 5.69302368164062], [-5.69302368164062, 0]];
			moreIconPath15_newShape.closed = true;
		moreIconPath15.setValue(moreIconPath15_newShape);
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).addProperty("ADBE Vector Filter - Merge");
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(3).name = "Merge Paths 1";
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(3).property("ADBE Vector Position").setValue([9.09494701772928e-13,0]);
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		moreIcon.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([1,1,1,1]);
		moreIcon.property("ADBE Transform Group").property("ADBE Position").setValue([128.043258666992,506,0]);
		moreIcon.selected = false;
	var more = menuUpperLeft_comp.layers.addBoxText([49.9799995422363,24], "More");
		more.name = "More";
		more.shy = true;
		more.moveToEnd();
		var more_TextProp = more.property("ADBE Text Properties").property("ADBE Text Document");
		var more_TextDocument = more_TextProp.value;
			more_TextDocument.font = "HelveticaNeue-Bold";
			more_TextDocument.fontSize = 20;
			more_TextDocument.applyFill = true;
			more_TextDocument.fillColor = [1,1,1];
			more_TextDocument.applyStroke = false;
			more_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			more_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				more_TextDocument.verticalScale = 1;
				more_TextDocument.horizontalScale = 1;
				more_TextDocument.baselineShift = 0;
				more_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// more_TextDocument.fauxBold = false;
				// more_TextDocument.fauxItalic = false;
				// more_TextDocument.allCaps = false;
				// more_TextDocument.smallCaps = false;
				// more_TextDocument.superscript = false;
				// more_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				more_TextDocument.leading = 24;
				more_TextDocument.autoLeading = true;
			}
			more_TextProp.setValue(more_TextDocument);
		more.property("ADBE Transform Group").property("ADBE Position").setValue([185.543258666992,509.333343505859,0]);
		more.selected = false;
	var tweet = menuUpperLeft_comp.layers.addText("Tweet");
		tweet.name = "Tweet";
		tweet.shy = true;
		tweet.moveToEnd();
		var tweet_TextProp = tweet.property("ADBE Text Properties").property("ADBE Text Document");
		var tweet_TextDocument = tweet_TextProp.value;
			tweet_TextDocument.font = "HelveticaNeue-Bold";
			tweet_TextDocument.fontSize = 18;
			tweet_TextDocument.applyFill = true;
			tweet_TextDocument.fillColor = [1,1,1];
			tweet_TextDocument.applyStroke = false;
			tweet_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			tweet_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				tweet_TextDocument.verticalScale = 1;
				tweet_TextDocument.horizontalScale = 1;
				tweet_TextDocument.baselineShift = 0;
				tweet_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// tweet_TextDocument.fauxBold = false;
				// tweet_TextDocument.fauxItalic = false;
				// tweet_TextDocument.allCaps = false;
				// tweet_TextDocument.smallCaps = false;
				// tweet_TextDocument.superscript = false;
				// tweet_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				tweet_TextDocument.leading = 21.6000003814697;
				tweet_TextDocument.autoLeading = true;
			}
			tweet_TextProp.setValue(tweet_TextDocument);
		tweet.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-0.00890827178955,-6.30900059640408,0]);
		tweet.property("ADBE Transform Group").property("ADBE Position").setValue([210.543258666992,580,0]);
		tweet.selected = false;
	// Add Shape Layer "Tweet Button", varName "tweetButton";
	var tweetButton = menuUpperLeft_comp.layers.addShape();
		tweetButton.name = "Tweet Button";
		tweetButton.label = 1;
		tweetButton.shy = true;
		tweetButton.moveToEnd();
		tweetButton.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		tweetButton.property("ADBE Root Vectors Group").property(1).name = "Rectangle 149";
		tweetButton.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		tweetButton.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var tweetButtonPath = tweetButton.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var tweetButtonPath_newShape = new Shape();
			tweetButtonPath_newShape.vertices = [[-105.5, -25], [105.5, -25], [105.5, 25], [-105.5, 25]];
			tweetButtonPath_newShape.closed = true;
		tweetButtonPath.setValue(tweetButtonPath_newShape);
		tweetButton.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - RC");
		tweetButton.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Round Corners 1";
		tweetButton.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector RoundCorner Radius").setValue(25);
		tweetButton.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		tweetButton.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		tweetButton.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.29411765933037,0.62745100259781,0.92549020051956,1]);
		tweetButton.property("ADBE Transform Group").property("ADBE Position").setValue([210.543258666992,580,0]);
		tweetButton.selected = false;
	// Apply parents
		home.setParentWithJump(homeIcon);
		explore.setParentWithJump(exploreIcon);
		notifications.setParentWithJump(notificationsIcon);

	// Lock Layers
		twitterLogo.locked = true;
		homeIcon.locked = true;
		home.locked = true;
		exploreIcon.locked = true;
		explore.locked = true;
		compcode1.locked = true;
		notificationsIcon.locked = true;
		notifications.locked = true;
		messagesIcon.locked = true;
		messages.locked = true;
		bookmarksIcon.locked = true;
		bookmarks.locked = true;
		listsIcon.locked = true;
		lists.locked = true;
		profileIcon.locked = true;
		profile.locked = true;
		moreIcon.locked = true;
		more.locked = true;
		tweet.locked = true;
		tweetButton.locked = true;

}
// Working with comp "MENU - Bottom Left Profile Buttons", varName "menuBottomLeftProfileButtons_comp";
if (menuBottomLeftProfileButtons_comp_populate === true) {
	// Add Shape Layer "Drop Arrow", varName "dropArrow";
	var dropArrow = menuBottomLeftProfileButtons_comp.layers.addShape();
		dropArrow.name = "Drop Arrow";
		dropArrow.label = 16;
		dropArrow.moveToEnd();
		dropArrow.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		dropArrow.property("ADBE Root Vectors Group").property(1).name = "Vector";
		dropArrow.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		dropArrow.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var dropArrowPath = dropArrow.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var dropArrowPath_newShape = new Shape();
			dropArrowPath_newShape.vertices = [[5.59455871582031, -3.75369262695312], [6.75910949707031, -3.75369262695312], [6.75910949707031, -3.75201416015625], [6.75910949707031, -2.56217956542969], [0.582275390625, 3.75328063964844], [0, 4], [-0.582275390625, 3.75244140625], [-6.75910949707031, -2.56301879882812], [-6.75910949707031, -3.75369262695312], [-5.59455871582031, -3.75369262695312], [0, 1.96641540527344]];
			dropArrowPath_newShape.inTangents = [[0, 0], [-0.32119750976562, -0.32839965820312], [0, 0], [0.32119750976562, -0.32839965820312], [0, 0], [0.21165466308594, 0], [0.16059875488281, 0.1650390625], [0, 0], [-0.32119750976562, 0.32839965820312], [-0.32119750976562, -0.32839965820312], [0, 0]];
			dropArrowPath_newShape.outTangents = [[0.322021484375, -0.32839965820312], [0, 0], [0.32119750976562, 0.32923889160156], [0, 0], [-0.16059875488281, 0.16419982910156], [-0.21165466308594, 0], [0, 0], [-0.32119750976562, -0.32923889160156], [0.322021484375, -0.32839965820312], [0, 0], [0, 0]];
			dropArrowPath_newShape.closed = true;
		dropArrowPath.setValue(dropArrowPath_newShape);
		dropArrow.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		dropArrow.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		dropArrow.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([1,1,1,1]);
		dropArrow.property("ADBE Transform Group").property("ADBE Position").setValue([186,0,0]);
		dropArrow.selected = false;
	// Add Shape Layer "Avatar Matte", varName "avatarMatte";
	var avatarMatte = menuBottomLeftProfileButtons_comp.layers.addShape();
		avatarMatte.name = "Avatar Matte";
		avatarMatte.label = 16;
		avatarMatte.enabled = false;
		avatarMatte.moveToEnd();
		avatarMatte.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		avatarMatte.property("ADBE Root Vectors Group").property(1).name = "Ellipse 64";
		avatarMatte.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		avatarMatte.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var avatarMattePath = avatarMatte.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var avatarMattePath_newShape = new Shape();
			avatarMattePath_newShape.vertices = [[0, -20], [20, 0], [0, 20], [-20, 0]];
			avatarMattePath_newShape.inTangents = [[-11.2359619140625, 0], [0, -11.2359619140625], [11.2359619140625, 0], [0, 11.2359619140625]];
			avatarMattePath_newShape.outTangents = [[11.2359619140625, 0], [0, 11.2359619140625], [-11.2359619140625, 0], [0, -11.2359619140625]];
			avatarMattePath_newShape.closed = true;
		avatarMattePath.setValue(avatarMattePath_newShape);
		avatarMatte.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		avatarMatte.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		avatarMatte.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.29411765933037,0.62745100259781,0.92549020051956,1]);
		avatarMatte.property("ADBE Transform Group").property("ADBE Position").setValue([95.5,32,0]);
		avatarMatte.selected = false;
	// Add existing composition "Avatar Image", varName "avatarImage_comp";
	var avatarImage1 = menuBottomLeftProfileButtons_comp.layers.add(avatarImage_comp);
		avatarImage1.moveToEnd();
		avatarImage1.trackMatteType = TrackMatteType.ALPHA;
		avatarImage1.timeRemapEnabled = true;
		var avatarImage1TimeRemap = avatarImage1.property("ADBE Time Remapping");
			avatarImage1TimeRemap.setValueAtTime(99999, avatarImage1TimeRemap.keyValue(1));
			avatarImage1TimeRemap.removeKey(2);
			avatarImage1TimeRemap.removeKey(1);
			var avatarImage1TimeRemap_keyTimesArray = [0];
			var avatarImage1TimeRemap_valuesArray = [0];
			avatarImage1TimeRemap.setValuesAtTimes(avatarImage1TimeRemap_keyTimesArray, avatarImage1TimeRemap_valuesArray);
			avatarImage1TimeRemap.removeKey(avatarImage1TimeRemap.nearestKeyIndex(99999));
			var avatarImage1TimeRemap_easeInSpeedArray = [0];
			var avatarImage1TimeRemap_easeInInfluArray = [16.666666667];
			var avatarImage1TimeRemap_easeOutSpeedArray = [0];
			var avatarImage1TimeRemap_easeOutInfluArray = [16.666666667];
			var avatarImage1TimeRemap_keyInInterpolationType = [KeyframeInterpolationType.HOLD];
			var avatarImage1TimeRemap_keyOutInterpolationType = [KeyframeInterpolationType.HOLD];
			applyEasing(avatarImage1TimeRemap, avatarImage1TimeRemap_keyTimesArray, [avatarImage1TimeRemap_easeInSpeedArray, avatarImage1TimeRemap_easeInInfluArray], [avatarImage1TimeRemap_easeOutSpeedArray, avatarImage1TimeRemap_easeOutInfluArray], [avatarImage1TimeRemap_keyInInterpolationType, avatarImage1TimeRemap_keyOutInterpolationType]);

		avatarImage1.property("ADBE Transform Group").property("ADBE Position").setValue([95.5,32,0]);
		avatarImage1.property("ADBE Transform Group").property("ADBE Scale").setValue([7,7,100]);
		avatarImage1.selected = false;
	var name1 = menuBottomLeftProfileButtons_comp.layers.addText("@TwitterHandle");
		name1.name = "@Name";
		name1.moveToEnd();
		var name1_TextProp = name1.property("ADBE Text Properties").property("ADBE Text Document");
		var name1_TextDocument = name1_TextProp.value;
			name1_TextDocument.font = "Helvetica";
			name1_TextDocument.fontSize = 16;
			name1_TextDocument.applyFill = true;
			name1_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			name1_TextDocument.applyStroke = false;
			name1_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			name1_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				name1_TextDocument.verticalScale = 1;
				name1_TextDocument.horizontalScale = 1;
				name1_TextDocument.baselineShift = 0;
				name1_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// name1_TextDocument.fauxBold = false;
				// name1_TextDocument.fauxItalic = false;
				// name1_TextDocument.allCaps = false;
				// name1_TextDocument.smallCaps = false;
				// name1_TextDocument.superscript = false;
				// name1_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				name1_TextDocument.leading = 19.2000007629395;
				name1_TextDocument.autoLeading = true;
			}
			name1_TextProp.setValue(name1_TextDocument);
		name1.property("ADBE Transform Group").property("ADBE Position").setValue([123.950000762939,47.1705741882324,0]);
		name1.selected = false;
	var name2 = menuBottomLeftProfileButtons_comp.layers.addText("Username");
		name2.name = "Name";
		name2.moveToEnd();
		var name2_TextProp = name2.property("ADBE Text Properties").property("ADBE Text Document");
		var name2_TextDocument = name2_TextProp.value;
			name2_TextDocument.font = "HelveticaNeue-Bold";
			name2_TextDocument.fontSize = 16;
			name2_TextDocument.applyFill = true;
			name2_TextDocument.fillColor = [1,1,1];
			name2_TextDocument.applyStroke = false;
			name2_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			name2_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				name2_TextDocument.verticalScale = 1;
				name2_TextDocument.horizontalScale = 1;
				name2_TextDocument.baselineShift = 0;
				name2_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// name2_TextDocument.fauxBold = false;
				// name2_TextDocument.fauxItalic = false;
				// name2_TextDocument.allCaps = false;
				// name2_TextDocument.smallCaps = false;
				// name2_TextDocument.superscript = false;
				// name2_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				name2_TextDocument.leading = 19.2000007629395;
				name2_TextDocument.autoLeading = true;
			}
			name2_TextProp.setValue(name2_TextDocument);
		name2.property("ADBE Transform Group").property("ADBE Position").setValue([124.049998998642,26.0904951244593,0]);
		name2.selected = false;
	// Apply parents
		dropArrow.setParentWithJump(avatarMatte);

	// Lock Layers
		dropArrow.locked = true;
		avatarMatte.locked = true;
		avatarImage1.locked = true;
		name1.locked = true;
		name2.locked = true;

}
// Working with comp "MENU - Search Bar", varName "menuSearchBar_comp";
if (menuSearchBar_comp_populate === true) {
	// Add Shape Layer "Magnifying Glass", varName "magnifyingGlass";
	var magnifyingGlass = menuSearchBar_comp.layers.addShape();
		magnifyingGlass.name = "Magnifying Glass";
		magnifyingGlass.moveToEnd();
		magnifyingGlass.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		magnifyingGlass.property("ADBE Root Vectors Group").property(1).name = "Ellipse 58";
		magnifyingGlass.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		magnifyingGlass.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var magnifyingGlassPath = magnifyingGlass.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var magnifyingGlassPath_newShape = new Shape();
			magnifyingGlassPath_newShape.vertices = [[0, -7], [7, 0], [0, 7], [-7, 0]];
			magnifyingGlassPath_newShape.inTangents = [[-3.93258666992188, 0], [0, -3.93258666992188], [3.93258666992188, 0], [0, 3.93258666992188]];
			magnifyingGlassPath_newShape.outTangents = [[3.93258666992188, 0], [0, 3.93258666992188], [-3.93258666992188, 0], [0, -3.93258666992188]];
			magnifyingGlassPath_newShape.closed = true;
		magnifyingGlassPath.setValue(magnifyingGlassPath_newShape);
		magnifyingGlass.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		magnifyingGlass.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var magnifyingGlassPath3 = magnifyingGlass.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var magnifyingGlassPath3_newShape = new Shape();
			magnifyingGlassPath3_newShape.vertices = [[7.5625, 8.625], [4.0625, 5.125]];
			magnifyingGlassPath3_newShape.closed = false;
		magnifyingGlassPath3.setValue(magnifyingGlassPath3_newShape);
		magnifyingGlass.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		magnifyingGlass.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Stroke 1";
		magnifyingGlass.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Stroke Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		magnifyingGlass.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Stroke Width").setValue(1);
		magnifyingGlass.property("ADBE Transform Group").property("ADBE Position").setValue([54,26,0]);
		magnifyingGlass.selected = false;
	var searchTwitter = menuSearchBar_comp.layers.addBoxText([97.9199981689453,18], "Search Twitter");
		searchTwitter.name = "Search Twitter";
		searchTwitter.label = 8;
		searchTwitter.moveToEnd();
		var searchTwitter_TextProp = searchTwitter.property("ADBE Text Properties").property("ADBE Text Document");
		var searchTwitter_TextDocument = searchTwitter_TextProp.value;
			searchTwitter_TextDocument.font = "Helvetica";
			searchTwitter_TextDocument.fontSize = 15;
			searchTwitter_TextDocument.applyFill = true;
			searchTwitter_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			searchTwitter_TextDocument.applyStroke = false;
			searchTwitter_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			searchTwitter_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				searchTwitter_TextDocument.verticalScale = 1;
				searchTwitter_TextDocument.horizontalScale = 1;
				searchTwitter_TextDocument.baselineShift = 0;
				searchTwitter_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// searchTwitter_TextDocument.fauxBold = false;
				// searchTwitter_TextDocument.fauxItalic = false;
				// searchTwitter_TextDocument.allCaps = false;
				// searchTwitter_TextDocument.smallCaps = false;
				// searchTwitter_TextDocument.superscript = false;
				// searchTwitter_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				searchTwitter_TextDocument.leading = 18;
				searchTwitter_TextDocument.autoLeading = true;
			}
			searchTwitter_TextProp.setValue(searchTwitter_TextDocument);
		searchTwitter.property("ADBE Transform Group").property("ADBE Position").setValue([127,29.5,0]);
		searchTwitter.selected = false;
	// Add Shape Layer "Bubble", varName "bubble";
	var bubble = menuSearchBar_comp.layers.addShape();
		bubble.name = "Bubble";
		bubble.moveToEnd();
		bubble.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		bubble.property("ADBE Root Vectors Group").property(1).name = "Rectangle 132";
		bubble.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		bubble.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var bubblePath = bubble.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var bubblePath_newShape = new Shape();
			bubblePath_newShape.vertices = [[-173, -20], [173, -20], [173, 20], [-173, 20]];
			bubblePath_newShape.closed = true;
		bubblePath.setValue(bubblePath_newShape);
		bubble.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - RC");
		bubble.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Round Corners 1";
		bubble.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector RoundCorner Radius").setValue(20);
		bubble.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		bubble.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		bubble.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.15686275064945,0.20000000298023,0.25098040699959,1]);
		bubble.property("ADBE Transform Group").property("ADBE Position").setValue([203,27,0]);
		bubble.selected = false;
	// Lock Layers
		magnifyingGlass.locked = true;
		searchTwitter.locked = true;
		bubble.locked = true;

}
// Working with comp "MENU  - You Might Like", varName "menuYouMightLike_comp";
if (menuYouMightLike_comp_populate === true) {
	var youMightLike = menuYouMightLike_comp.layers.addText("You might like");
		youMightLike.name = "You might like";
		youMightLike.moveToEnd();
		var youMightLike_TextProp = youMightLike.property("ADBE Text Properties").property("ADBE Text Document");
		var youMightLike_TextDocument = youMightLike_TextProp.value;
			youMightLike_TextDocument.font = "HelveticaNeue-Bold";
			youMightLike_TextDocument.fontSize = 20;
			youMightLike_TextDocument.applyFill = true;
			youMightLike_TextDocument.fillColor = [1,1,1];
			youMightLike_TextDocument.applyStroke = false;
			youMightLike_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			youMightLike_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				youMightLike_TextDocument.verticalScale = 1;
				youMightLike_TextDocument.horizontalScale = 1;
				youMightLike_TextDocument.baselineShift = 0;
				youMightLike_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// youMightLike_TextDocument.fauxBold = false;
				// youMightLike_TextDocument.fauxItalic = false;
				// youMightLike_TextDocument.allCaps = false;
				// youMightLike_TextDocument.smallCaps = false;
				// youMightLike_TextDocument.superscript = false;
				// youMightLike_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				youMightLike_TextDocument.leading = 24;
				youMightLike_TextDocument.autoLeading = true;
			}
			youMightLike_TextProp.setValue(youMightLike_TextDocument);
		youMightLike.property("ADBE Transform Group").property("ADBE Position").setValue([-160.310001209378,-136.386871337891,0]);
		youMightLike.selected = false;
	// Add Shape Layer "Divider", varName "divider";
	var divider = menuYouMightLike_comp.layers.addShape();
		divider.name = "Divider";
		divider.label = 0;
		divider.moveToEnd();
		divider.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		divider.property("ADBE Root Vectors Group").property(1).name = "Rectangle 150";
		divider.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		divider.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var dividerPath = divider.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var dividerPath_newShape = new Shape();
			dividerPath_newShape.vertices = [[-173, -0.5], [173, -0.5], [173, 0.5], [-173, 0.5]];
			dividerPath_newShape.closed = true;
		dividerPath.setValue(dividerPath_newShape);
		divider.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		divider.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		divider.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.22745098173618,0.26666668057442,0.29803922772408,1]);
		divider.property("ADBE Transform Group").property("ADBE Position").setValue([0,-118.5,0]);
		divider.selected = false;
	// Add Shape Layer "Matte 1", varName "matte1";
	var matte1 = menuYouMightLike_comp.layers.addShape();
		matte1.name = "Matte 1";
		matte1.label = 11;
		matte1.enabled = false;
		matte1.moveToEnd();
		matte1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		matte1.property("ADBE Root Vectors Group").property(1).name = "Ellipse 68";
		matte1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		matte1.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var matte1Path = matte1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var matte1Path_newShape = new Shape();
			matte1Path_newShape.vertices = [[0, -25], [25, 0], [0, 25], [-25, 0]];
			matte1Path_newShape.inTangents = [[-14.0449371337891, 0], [0, -14.0449371337891], [14.0449371337891, 0], [0, 14.0449371337891]];
			matte1Path_newShape.outTangents = [[14.0449371337891, 0], [0, 14.0449371337891], [-14.0449371337891, 0], [0, -14.0449371337891]];
			matte1Path_newShape.closed = true;
		matte1Path.setValue(matte1Path_newShape);
		matte1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		matte1.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		matte1.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.29411765933037,0.62745100259781,0.92549020051956,1]);
		matte1.property("ADBE Transform Group").property("ADBE Position").setValue([-134,-83,0]);
		matte1.selected = false;
	// Add existing composition "YML - Guest Profile Image 1", varName "ymlGuestProfileImage1_comp";
	var ymlGuestProfileImage4 = menuYouMightLike_comp.layers.add(ymlGuestProfileImage1_comp);
		ymlGuestProfileImage4.label = 8;
		ymlGuestProfileImage4.collapseTransformation = true;
		ymlGuestProfileImage4.moveToEnd();
		ymlGuestProfileImage4.trackMatteType = TrackMatteType.ALPHA;
		ymlGuestProfileImage4.timeRemapEnabled = true;
		var ymlGuestProfileImage4TimeRemap = ymlGuestProfileImage4.property("ADBE Time Remapping");
			ymlGuestProfileImage4TimeRemap.setValueAtTime(99999, ymlGuestProfileImage4TimeRemap.keyValue(1));
			ymlGuestProfileImage4TimeRemap.removeKey(2);
			ymlGuestProfileImage4TimeRemap.removeKey(1);
			var ymlGuestProfileImage4TimeRemap_keyTimesArray = [0];
			var ymlGuestProfileImage4TimeRemap_valuesArray = [0];
			ymlGuestProfileImage4TimeRemap.setValuesAtTimes(ymlGuestProfileImage4TimeRemap_keyTimesArray, ymlGuestProfileImage4TimeRemap_valuesArray);
			ymlGuestProfileImage4TimeRemap.removeKey(ymlGuestProfileImage4TimeRemap.nearestKeyIndex(99999));
			var ymlGuestProfileImage4TimeRemap_easeInSpeedArray = [0];
			var ymlGuestProfileImage4TimeRemap_easeInInfluArray = [16.666666667];
			var ymlGuestProfileImage4TimeRemap_easeOutSpeedArray = [0];
			var ymlGuestProfileImage4TimeRemap_easeOutInfluArray = [16.666666667];
			var ymlGuestProfileImage4TimeRemap_keyInInterpolationType = [KeyframeInterpolationType.HOLD];
			var ymlGuestProfileImage4TimeRemap_keyOutInterpolationType = [KeyframeInterpolationType.HOLD];
			applyEasing(ymlGuestProfileImage4TimeRemap, ymlGuestProfileImage4TimeRemap_keyTimesArray, [ymlGuestProfileImage4TimeRemap_easeInSpeedArray, ymlGuestProfileImage4TimeRemap_easeInInfluArray], [ymlGuestProfileImage4TimeRemap_easeOutSpeedArray, ymlGuestProfileImage4TimeRemap_easeOutInfluArray], [ymlGuestProfileImage4TimeRemap_keyInInterpolationType, ymlGuestProfileImage4TimeRemap_keyOutInterpolationType]);

		ymlGuestProfileImage4.property("ADBE Transform Group").property("ADBE Position").setValue([0,-0.5,0]);
		ymlGuestProfileImage4.property("ADBE Transform Group").property("ADBE Scale").setValue([13,13,100]);
		ymlGuestProfileImage4.selected = false;
	var name3 = menuYouMightLike_comp.layers.addText("Name");
		name3.name = "Name 1";
		name3.moveToEnd();
		var name3_TextProp = name3.property("ADBE Text Properties").property("ADBE Text Document");
		var name3_TextDocument = name3_TextProp.value;
			name3_TextDocument.font = "HelveticaNeue-Bold";
			name3_TextDocument.fontSize = 16;
			name3_TextDocument.applyFill = true;
			name3_TextDocument.fillColor = [1,1,1];
			name3_TextDocument.applyStroke = false;
			name3_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			name3_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				name3_TextDocument.verticalScale = 1;
				name3_TextDocument.horizontalScale = 1;
				name3_TextDocument.baselineShift = 0;
				name3_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// name3_TextDocument.fauxBold = false;
				// name3_TextDocument.fauxItalic = false;
				// name3_TextDocument.allCaps = false;
				// name3_TextDocument.smallCaps = false;
				// name3_TextDocument.superscript = false;
				// name3_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				name3_TextDocument.leading = 19.2000007629395;
				name3_TextDocument.autoLeading = true;
			}
			name3_TextProp.setValue(name3_TextDocument);
		name3.property("ADBE Transform Group").property("ADBE Position").setValue([-101.450000762939,-88.9095154106617,0]);
		name3.selected = false;
	var name4 = menuYouMightLike_comp.layers.addText("@Name");
		name4.name = "@Name 1";
		name4.moveToEnd();
		var name4_TextProp = name4.property("ADBE Text Properties").property("ADBE Text Document");
		var name4_TextDocument = name4_TextProp.value;
			name4_TextDocument.font = "Helvetica";
			name4_TextDocument.fontSize = 16;
			name4_TextDocument.applyFill = true;
			name4_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			name4_TextDocument.applyStroke = false;
			name4_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			name4_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				name4_TextDocument.verticalScale = 1;
				name4_TextDocument.horizontalScale = 1;
				name4_TextDocument.baselineShift = 0;
				name4_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// name4_TextDocument.fauxBold = false;
				// name4_TextDocument.fauxItalic = false;
				// name4_TextDocument.allCaps = false;
				// name4_TextDocument.smallCaps = false;
				// name4_TextDocument.superscript = false;
				// name4_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				name4_TextDocument.leading = 19.2000007629395;
				name4_TextDocument.autoLeading = true;
			}
			name4_TextProp.setValue(name4_TextDocument);
		name4.property("ADBE Transform Group").property("ADBE Position").setValue([-100.559999465942,-67.8294372558594,0]);
		name4.selected = false;
	// Add Shape Layer "Check", varName "check";
	var check = menuYouMightLike_comp.layers.addShape();
		check.name = "Check";
		check.label = 11;
		check.moveToEnd();
		check.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		check.property("ADBE Root Vectors Group").property(1).name = "Vector";
		check.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		check.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var checkPath = check.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var checkPath_newShape = new Shape();
			checkPath_newShape.vertices = [[6.36351013183594, -2.36190795898438], [8, 0.38095092773438], [8, 0.3817138671875], [6.51968383789062, 3.03619384765625], [6.54483032226562, 3.42704772949219], [3.63601684570312, 6.47467041015625], [2.6181640625, 6.28572082519531], [-0.00038146972656, 8], [-2.61892700195312, 6.28572082519531], [-3.63601684570312, 6.4761962890625], [-6.54483032226562, 3.42857360839844], [-6.52044677734375, 3.03695678710938], [-8, 0.38095092773438], [-6.36427307128906, -2.36190795898438], [-6.54483032226562, -3.42857360839844], [-3.63601684570312, -6.4761962890625], [-2.6181640625, -6.28572082519531], [0.00038146972656, -8], [2.6181640625, -6.28419494628906], [3.63601684570312, -6.47467041015625], [6.54483032226562, -3.42857360839844]];
			checkPath_newShape.inTangents = [[0.11732482910156, -0.33143615722656], [0, -1.20381164550781], [0, 0], [0.88224792480469, -0.52342224121094], [0, -0.132568359375], [1.6075439453125, 0], [0.31617736816406, 0.12419128417969], [1.15194702148438, 0], [0.47235107421875, 1.01638793945312], [0.35807800292969, 0], [0, 1.68380737304688], [-0.01524353027344, 0.1295166015625], [0, 1.13905334472656], [-0.96910095214844, 0.4952392578125], [0, 0.37638854980469], [-1.6075439453125, 0], [-0.31617736816406, -0.12571716308594], [-1.15042114257812, 0], [-0.47084045410156, -1.01866149902344], [-0.35807800292969, 0], [0, -1.68380737304688]];
			checkPath_newShape.outTangents = [[0.96986389160156, 0.4952392578125], [0, 0], [0, 1.13829040527344], [0.01600646972656, 0.12876892089844], [0, 1.68380737304688], [-0.35884094238281, 0], [-0.47160339355469, 1.01638793945312], [-1.15118408203125, 0], [-0.31617736816406, 0.12495422363281], [-1.6075439453125, 0], [0, -0.132568359375], [-0.88377380371094, -0.52418518066406], [0, -1.20533752441406], [-0.11732482910156, -0.33218383789062], [0, -1.68380737304688], [0.35807800292969, 0], [0.47311401367188, -1.015625], [1.15042114257812, 0], [0.31694030761719, -0.12648010253906], [1.60601806640625, 0], [0, 0.37713623046875]];
			checkPath_newShape.closed = true;
		checkPath.setValue(checkPath_newShape);
		check.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		check.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var checkPath3 = check.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var checkPath3_newShape = new Shape();
			checkPath3_newShape.vertices = [[-0.34245300292969, 2.79313659667969], [2.95947265625, -2.15924072265625], [2.95947265625, -2.16000366210938], [2.79948425292969, -2.95237731933594], [2.00714111328125, -2.79466247558594], [-0.90699768066406, 1.57865905761719], [-2.25550842285156, 0.23237609863281], [-3.06309509277344, 0.23237609863281], [-3.06309509277344, 1.03999328613281], [-1.22317504882812, 2.8800048828125], [-1.13555908203125, 2.95161437988281], [-0.81863403320312, 3.04762268066406]];
			checkPath3_newShape.inTangents = [[-0.1104736328125, 0.16532897949219], [0, 0], [0, 0], [0.26361083984375, 0.17523193359375], [0.17523193359375, -0.26286315917969], [0, 0], [0, 0], [0.22322082519531, -0.22247314453125], [-0.22322082519531, -0.22323608398438], [0, 0], [0, 0], [-0.10894775390625, 0]];
			checkPath3_newShape.outTangents = [[0, 0], [0, 0], [0.17523193359375, -0.26210021972656], [-0.2620849609375, -0.17446899414062], [0, 0], [0, 0], [-0.22247314453125, -0.2239990234375], [-0.22322082519531, 0.22247314453125], [0, 0], [0, 0], [0.09751892089844, 0.06552124023438], [0.18513488769531, 0]];
			checkPath3_newShape.closed = true;
		checkPath3.setValue(checkPath3_newShape);
		check.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		check.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		check.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		check.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		check.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		check.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([1,1,1,1]);
		check.property("ADBE Transform Group").property("ADBE Position").setValue([-44,-93,0]);
		check.selected = false;
	// Add Shape Layer "Promoted Shape", varName "promotedShape";
	var promotedShape = menuYouMightLike_comp.layers.addShape();
		promotedShape.name = "Promoted Shape";
		promotedShape.label = 11;
		promotedShape.moveToEnd();
		promotedShape.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		promotedShape.property("ADBE Root Vectors Group").property(1).name = "Vector";
		promotedShape.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		promotedShape.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var promotedShapePath = promotedShape.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var promotedShapePath_newShape = new Shape();
			promotedShapePath_newShape.vertices = [[-5.56817626953125, -6.5], [5.56817626953125, -6.5], [7, -5.03750610351562], [7, 5.03750610351562], [5.56817626953125, 6.5], [-5.56817626953125, 6.5], [-7, 5.03750610351562], [-7, -5.03750610351562]];
			promotedShapePath_newShape.inTangents = [[-0.79100036621094, 0], [0, 0], [0, -0.80795288085938], [0, 0], [0.79100036621094, 0], [0, 0], [0, 0.80795288085938], [0, 0]];
			promotedShapePath_newShape.outTangents = [[0, 0], [0.79100036621094, 0], [0, 0], [0, 0.80795288085938], [0, 0], [-0.79100036621094, 0], [0, 0], [0, -0.80795288085938]];
			promotedShapePath_newShape.closed = true;
		promotedShapePath.setValue(promotedShapePath_newShape);
		promotedShape.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		promotedShape.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var promotedShapePath3 = promotedShape.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var promotedShapePath3_newShape = new Shape();
			promotedShapePath3_newShape.vertices = [[2.94317626953125, 1.54635620117188], [3.5, 0.97760009765625], [3.49873352050781, 0.97564697265625], [3.49873352050781, -2.69685363769531], [2.94190979003906, -3.26495361328125], [-0.65354919433594, -3.26495361328125], [-1.21035766601562, -2.69619750976562], [-0.6541748046875, -2.12680053710938], [1.59854125976562, -2.12680053710938], [-3.20408630371094, 2.77874755859375], [-3.20408630371094, 3.58279418945312], [-2.81082153320312, 3.74984741210938], [-2.41627502441406, 3.58345031738281], [2.38636779785156, -1.32145690917969], [2.38636779785156, 0.97694396972656]];
			promotedShapePath3_newShape.inTangents = [[-0.30735778808594, 0], [0, 0.31394958496094], [0, 0], [0, 0], [0.30735778808594, 0], [0, 0], [0, -0.31394958496094], [-0.30673217773438, 0], [0, 0], [0, 0], [-0.21763610839844, -0.22230529785156], [-0.1431884765625, 0], [-0.10818481445312, 0.11050415039062], [0, 0], [0, 0]];
			promotedShapePath3_newShape.outTangents = [[0.30735778808594, 0], [0, 0], [0, 0], [0, -0.31460571289062], [0, 0], [-0.30735778808594, 0], [0, 0.31394958496094], [0, 0], [0, 0], [-0.21763610839844, 0.22164916992188], [0.10882568359375, 0.11114501953125], [0.1431884765625, 0], [0, 0], [0, 0], [0, 0.31394958496094]];
			promotedShapePath3_newShape.closed = true;
		promotedShapePath3.setValue(promotedShapePath3_newShape);
		promotedShape.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		promotedShape.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		promotedShape.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		promotedShape.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		promotedShape.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		promotedShape.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		promotedShape.property("ADBE Transform Group").property("ADBE Position").setValue([-92,-44.5,0]);
		promotedShape.selected = false;
	var promoted = menuYouMightLike_comp.layers.addBoxText([59.1599998474121,16], "Promoted");
		promoted.name = "Promoted";
		promoted.label = 11;
		promoted.moveToEnd();
		var promoted_TextProp = promoted.property("ADBE Text Properties").property("ADBE Text Document");
		var promoted_TextDocument = promoted_TextProp.value;
			promoted_TextDocument.font = "Helvetica";
			promoted_TextDocument.fontSize = 13;
			promoted_TextDocument.applyFill = true;
			promoted_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			promoted_TextDocument.applyStroke = false;
			promoted_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			promoted_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				promoted_TextDocument.verticalScale = 1;
				promoted_TextDocument.horizontalScale = 1;
				promoted_TextDocument.baselineShift = 0;
				promoted_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// promoted_TextDocument.fauxBold = false;
				// promoted_TextDocument.fauxItalic = false;
				// promoted_TextDocument.allCaps = false;
				// promoted_TextDocument.smallCaps = false;
				// promoted_TextDocument.superscript = false;
				// promoted_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				promoted_TextDocument.leading = 15.6000003814697;
				promoted_TextDocument.autoLeading = true;
			}
			promoted_TextProp.setValue(promoted_TextDocument);
		promoted.property("ADBE Transform Group").property("ADBE Position").setValue([41,1.66665649414062,0]);
		promoted.selected = false;
	// Add existing composition "Follow Button", varName "followButton_comp";
	var followButton = menuYouMightLike_comp.layers.add(followButton_comp);
		followButton.collapseTransformation = true;
		followButton.moveToEnd();
		followButton.timeRemapEnabled = true;
		var followButtonTimeRemap = followButton.property("ADBE Time Remapping");
			followButtonTimeRemap.setValueAtTime(99999, followButtonTimeRemap.keyValue(1));
			followButtonTimeRemap.removeKey(2);
			followButtonTimeRemap.removeKey(1);
			var followButtonTimeRemap_keyTimesArray = [0];
			var followButtonTimeRemap_valuesArray = [0];
			followButtonTimeRemap.setValuesAtTimes(followButtonTimeRemap_keyTimesArray, followButtonTimeRemap_valuesArray);
			followButtonTimeRemap.removeKey(followButtonTimeRemap.nearestKeyIndex(99999));
			var followButtonTimeRemap_easeInSpeedArray = [0];
			var followButtonTimeRemap_easeInInfluArray = [16.666666667];
			var followButtonTimeRemap_easeOutSpeedArray = [0];
			var followButtonTimeRemap_easeOutInfluArray = [16.666666667];
			var followButtonTimeRemap_keyInInterpolationType = [KeyframeInterpolationType.HOLD];
			var followButtonTimeRemap_keyOutInterpolationType = [KeyframeInterpolationType.HOLD];
			applyEasing(followButtonTimeRemap, followButtonTimeRemap_keyTimesArray, [followButtonTimeRemap_easeInSpeedArray, followButtonTimeRemap_easeInInfluArray], [followButtonTimeRemap_easeOutSpeedArray, followButtonTimeRemap_easeOutInfluArray], [followButtonTimeRemap_keyInInterpolationType, followButtonTimeRemap_keyOutInterpolationType]);

		followButton.property("ADBE Transform Group").property("ADBE Position").setValue([119.5,-85,0]);
		followButton.selected = false;
	// Add Shape Layer "Divider", varName "divider1";
	var divider1 = menuYouMightLike_comp.layers.addShape();
		divider1.name = "Divider";
		divider1.label = 0;
		divider1.moveToEnd();
		divider1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		divider1.property("ADBE Root Vectors Group").property(1).name = "Rectangle 151";
		divider1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		divider1.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var divider1Path = divider1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var divider1Path_newShape = new Shape();
			divider1Path_newShape.vertices = [[-173, -0.5], [173, -0.5], [173, 0.5], [-173, 0.5]];
			divider1Path_newShape.closed = true;
		divider1Path.setValue(divider1Path_newShape);
		divider1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		divider1.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		divider1.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.22745098173618,0.26666668057442,0.29803922772408,1]);
		divider1.property("ADBE Transform Group").property("ADBE Position").setValue([0,-24.5,0]);
		divider1.selected = false;
	// Add Shape Layer "Matte 2", varName "matte2";
	var matte2 = menuYouMightLike_comp.layers.addShape();
		matte2.name = "Matte 2";
		matte2.label = 11;
		matte2.enabled = false;
		matte2.moveToEnd();
		matte2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		matte2.property("ADBE Root Vectors Group").property(1).name = "Ellipse 69";
		matte2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		matte2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var matte2Path = matte2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var matte2Path_newShape = new Shape();
			matte2Path_newShape.vertices = [[0, -25], [25, 0], [0, 25], [-25, 0]];
			matte2Path_newShape.inTangents = [[-14.0449371337891, 0], [0, -14.0449371337891], [14.0449371337891, 0], [0, 14.0449371337891]];
			matte2Path_newShape.outTangents = [[14.0449371337891, 0], [0, 14.0449371337891], [-14.0449371337891, 0], [0, -14.0449371337891]];
			matte2Path_newShape.closed = true;
		matte2Path.setValue(matte2Path_newShape);
		matte2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		matte2.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		matte2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.29411765933037,0.62745100259781,0.92549020051956,1]);
		matte2.property("ADBE Transform Group").property("ADBE Position").setValue([-134,10,0]);
		matte2.selected = false;
	// Add existing composition "YML - Guest Profile Image 2", varName "ymlGuestProfileImage2_comp";
	var ymlGuestProfileImage5 = menuYouMightLike_comp.layers.add(ymlGuestProfileImage2_comp);
		ymlGuestProfileImage5.label = 8;
		ymlGuestProfileImage5.collapseTransformation = true;
		ymlGuestProfileImage5.moveToEnd();
		ymlGuestProfileImage5.trackMatteType = TrackMatteType.ALPHA;
		ymlGuestProfileImage5.timeRemapEnabled = true;
		var ymlGuestProfileImage5TimeRemap = ymlGuestProfileImage5.property("ADBE Time Remapping");
			ymlGuestProfileImage5TimeRemap.setValueAtTime(99999, ymlGuestProfileImage5TimeRemap.keyValue(1));
			ymlGuestProfileImage5TimeRemap.removeKey(2);
			ymlGuestProfileImage5TimeRemap.removeKey(1);
			var ymlGuestProfileImage5TimeRemap_keyTimesArray = [0];
			var ymlGuestProfileImage5TimeRemap_valuesArray = [0];
			ymlGuestProfileImage5TimeRemap.setValuesAtTimes(ymlGuestProfileImage5TimeRemap_keyTimesArray, ymlGuestProfileImage5TimeRemap_valuesArray);
			ymlGuestProfileImage5TimeRemap.removeKey(ymlGuestProfileImage5TimeRemap.nearestKeyIndex(99999));
			var ymlGuestProfileImage5TimeRemap_easeInSpeedArray = [0];
			var ymlGuestProfileImage5TimeRemap_easeInInfluArray = [16.666666667];
			var ymlGuestProfileImage5TimeRemap_easeOutSpeedArray = [0];
			var ymlGuestProfileImage5TimeRemap_easeOutInfluArray = [16.666666667];
			var ymlGuestProfileImage5TimeRemap_keyInInterpolationType = [KeyframeInterpolationType.HOLD];
			var ymlGuestProfileImage5TimeRemap_keyOutInterpolationType = [KeyframeInterpolationType.HOLD];
			applyEasing(ymlGuestProfileImage5TimeRemap, ymlGuestProfileImage5TimeRemap_keyTimesArray, [ymlGuestProfileImage5TimeRemap_easeInSpeedArray, ymlGuestProfileImage5TimeRemap_easeInInfluArray], [ymlGuestProfileImage5TimeRemap_easeOutSpeedArray, ymlGuestProfileImage5TimeRemap_easeOutInfluArray], [ymlGuestProfileImage5TimeRemap_keyInInterpolationType, ymlGuestProfileImage5TimeRemap_keyOutInterpolationType]);

		ymlGuestProfileImage5.property("ADBE Transform Group").property("ADBE Position").setValue([0,1,0]);
		ymlGuestProfileImage5.property("ADBE Transform Group").property("ADBE Scale").setValue([13,13,100]);
		ymlGuestProfileImage5.selected = false;
	var name5 = menuYouMightLike_comp.layers.addText("Name");
		name5.name = "Name 2";
		name5.moveToEnd();
		var name5_TextProp = name5.property("ADBE Text Properties").property("ADBE Text Document");
		var name5_TextDocument = name5_TextProp.value;
			name5_TextDocument.font = "HelveticaNeue-Bold";
			name5_TextDocument.fontSize = 16;
			name5_TextDocument.applyFill = true;
			name5_TextDocument.fillColor = [1,1,1];
			name5_TextDocument.applyStroke = false;
			name5_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			name5_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				name5_TextDocument.verticalScale = 1;
				name5_TextDocument.horizontalScale = 1;
				name5_TextDocument.baselineShift = 0;
				name5_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// name5_TextDocument.fauxBold = false;
				// name5_TextDocument.fauxItalic = false;
				// name5_TextDocument.allCaps = false;
				// name5_TextDocument.smallCaps = false;
				// name5_TextDocument.superscript = false;
				// name5_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				name5_TextDocument.leading = 19.2000007629395;
				name5_TextDocument.autoLeading = true;
			}
			name5_TextProp.setValue(name5_TextDocument);
		name5.property("ADBE Transform Group").property("ADBE Position").setValue([-101.450000762939,4.09049412608147,0]);
		name5.selected = false;
	var name6 = menuYouMightLike_comp.layers.addText("@Name");
		name6.name = "@Name 2";
		name6.moveToEnd();
		var name6_TextProp = name6.property("ADBE Text Properties").property("ADBE Text Document");
		var name6_TextDocument = name6_TextProp.value;
			name6_TextDocument.font = "Helvetica";
			name6_TextDocument.fontSize = 16;
			name6_TextDocument.applyFill = true;
			name6_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			name6_TextDocument.applyStroke = false;
			name6_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			name6_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				name6_TextDocument.verticalScale = 1;
				name6_TextDocument.horizontalScale = 1;
				name6_TextDocument.baselineShift = 0;
				name6_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// name6_TextDocument.fauxBold = false;
				// name6_TextDocument.fauxItalic = false;
				// name6_TextDocument.allCaps = false;
				// name6_TextDocument.smallCaps = false;
				// name6_TextDocument.superscript = false;
				// name6_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				name6_TextDocument.leading = 19.2000007629395;
				name6_TextDocument.autoLeading = true;
			}
			name6_TextProp.setValue(name6_TextDocument);
		name6.property("ADBE Transform Group").property("ADBE Position").setValue([-100.559999465942,25.1705741882324,0]);
		name6.selected = false;
	// Add existing composition "Follow Button", varName "followButton_comp";
	var followButton1 = menuYouMightLike_comp.layers.add(followButton_comp);
		followButton1.collapseTransformation = true;
		followButton1.moveToEnd();
		followButton1.timeRemapEnabled = true;
		var followButton1TimeRemap = followButton1.property("ADBE Time Remapping");
			followButton1TimeRemap.setValueAtTime(99999, followButton1TimeRemap.keyValue(1));
			followButton1TimeRemap.removeKey(2);
			followButton1TimeRemap.removeKey(1);
			var followButton1TimeRemap_keyTimesArray = [0];
			var followButton1TimeRemap_valuesArray = [0];
			followButton1TimeRemap.setValuesAtTimes(followButton1TimeRemap_keyTimesArray, followButton1TimeRemap_valuesArray);
			followButton1TimeRemap.removeKey(followButton1TimeRemap.nearestKeyIndex(99999));
			var followButton1TimeRemap_easeInSpeedArray = [0];
			var followButton1TimeRemap_easeInInfluArray = [16.666666667];
			var followButton1TimeRemap_easeOutSpeedArray = [0];
			var followButton1TimeRemap_easeOutInfluArray = [16.666666667];
			var followButton1TimeRemap_keyInInterpolationType = [KeyframeInterpolationType.HOLD];
			var followButton1TimeRemap_keyOutInterpolationType = [KeyframeInterpolationType.HOLD];
			applyEasing(followButton1TimeRemap, followButton1TimeRemap_keyTimesArray, [followButton1TimeRemap_easeInSpeedArray, followButton1TimeRemap_easeInInfluArray], [followButton1TimeRemap_easeOutSpeedArray, followButton1TimeRemap_easeOutInfluArray], [followButton1TimeRemap_keyInInterpolationType, followButton1TimeRemap_keyOutInterpolationType]);

		followButton1.property("ADBE Transform Group").property("ADBE Position").setValue([119.5,8,0]);
		followButton1.selected = false;
	// Add Shape Layer "Divider", varName "divider2";
	var divider2 = menuYouMightLike_comp.layers.addShape();
		divider2.name = "Divider";
		divider2.label = 0;
		divider2.moveToEnd();
		divider2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		divider2.property("ADBE Root Vectors Group").property(1).name = "Rectangle 152";
		divider2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		divider2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var divider2Path = divider2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var divider2Path_newShape = new Shape();
			divider2Path_newShape.vertices = [[-173, -0.5], [173, -0.5], [173, 0.5], [-173, 0.5]];
			divider2Path_newShape.closed = true;
		divider2Path.setValue(divider2Path_newShape);
		divider2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		divider2.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		divider2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.22745098173618,0.26666668057442,0.29803922772408,1]);
		divider2.property("ADBE Transform Group").property("ADBE Position").setValue([0,45.5,0]);
		divider2.selected = false;
	// Add Shape Layer "Matte 3", varName "matte3";
	var matte3 = menuYouMightLike_comp.layers.addShape();
		matte3.name = "Matte 3";
		matte3.label = 11;
		matte3.enabled = false;
		matte3.shy = true;
		matte3.moveToEnd();
		matte3.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		matte3.property("ADBE Root Vectors Group").property(1).name = "Ellipse 16";
		matte3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		matte3.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var matte3Path = matte3.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var matte3Path_newShape = new Shape();
			matte3Path_newShape.vertices = [[0, -25], [25, 0], [0, 25], [-25, 0]];
			matte3Path_newShape.inTangents = [[-14.0449371337891, 0], [0, -14.0449371337891], [14.0449371337891, 0], [0, 14.0449371337891]];
			matte3Path_newShape.outTangents = [[14.0449371337891, 0], [0, 14.0449371337891], [-14.0449371337891, 0], [0, -14.0449371337891]];
			matte3Path_newShape.closed = true;
		matte3Path.setValue(matte3Path_newShape);
		matte3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		matte3.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		matte3.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.01960784383118,0.44705882668495,0.93725490570068,1]);
		matte3.property("ADBE Root Vectors Group").addProperty("ADBE Vector Graphic - Fill");
		matte3.property("ADBE Root Vectors Group").property(2).name = "Fill 1";
		matte3.property("ADBE Transform Group").property("ADBE Position").setValue([-134,80,0]);
		matte3.effectsActive = false;
		matte3.selected = false;
	// Add existing composition "YML - Guest Profile Image 3", varName "ymlGuestProfileImage3_comp";
	var ymlGuestProfileImage6 = menuYouMightLike_comp.layers.add(ymlGuestProfileImage3_comp);
		ymlGuestProfileImage6.label = 8;
		ymlGuestProfileImage6.collapseTransformation = true;
		ymlGuestProfileImage6.moveToEnd();
		ymlGuestProfileImage6.trackMatteType = TrackMatteType.ALPHA;
		ymlGuestProfileImage6.timeRemapEnabled = true;
		var ymlGuestProfileImage6TimeRemap = ymlGuestProfileImage6.property("ADBE Time Remapping");
			ymlGuestProfileImage6TimeRemap.setValueAtTime(99999, ymlGuestProfileImage6TimeRemap.keyValue(1));
			ymlGuestProfileImage6TimeRemap.removeKey(2);
			ymlGuestProfileImage6TimeRemap.removeKey(1);
			var ymlGuestProfileImage6TimeRemap_keyTimesArray = [0];
			var ymlGuestProfileImage6TimeRemap_valuesArray = [0];
			ymlGuestProfileImage6TimeRemap.setValuesAtTimes(ymlGuestProfileImage6TimeRemap_keyTimesArray, ymlGuestProfileImage6TimeRemap_valuesArray);
			ymlGuestProfileImage6TimeRemap.removeKey(ymlGuestProfileImage6TimeRemap.nearestKeyIndex(99999));
			var ymlGuestProfileImage6TimeRemap_easeInSpeedArray = [0];
			var ymlGuestProfileImage6TimeRemap_easeInInfluArray = [16.666666667];
			var ymlGuestProfileImage6TimeRemap_easeOutSpeedArray = [0];
			var ymlGuestProfileImage6TimeRemap_easeOutInfluArray = [16.666666667];
			var ymlGuestProfileImage6TimeRemap_keyInInterpolationType = [KeyframeInterpolationType.HOLD];
			var ymlGuestProfileImage6TimeRemap_keyOutInterpolationType = [KeyframeInterpolationType.HOLD];
			applyEasing(ymlGuestProfileImage6TimeRemap, ymlGuestProfileImage6TimeRemap_keyTimesArray, [ymlGuestProfileImage6TimeRemap_easeInSpeedArray, ymlGuestProfileImage6TimeRemap_easeInInfluArray], [ymlGuestProfileImage6TimeRemap_easeOutSpeedArray, ymlGuestProfileImage6TimeRemap_easeOutInfluArray], [ymlGuestProfileImage6TimeRemap_keyInInterpolationType, ymlGuestProfileImage6TimeRemap_keyOutInterpolationType]);

		ymlGuestProfileImage6.property("ADBE Transform Group").property("ADBE Position").setValue([0,0,0]);
		ymlGuestProfileImage6.property("ADBE Transform Group").property("ADBE Scale").setValue([13,13,100]);
		ymlGuestProfileImage6.selected = false;
	var name7 = menuYouMightLike_comp.layers.addText("Name");
		name7.name = "Name 3";
		name7.moveToEnd();
		var name7_TextProp = name7.property("ADBE Text Properties").property("ADBE Text Document");
		var name7_TextDocument = name7_TextProp.value;
			name7_TextDocument.font = "HelveticaNeue-Bold";
			name7_TextDocument.fontSize = 16;
			name7_TextDocument.applyFill = true;
			name7_TextDocument.fillColor = [1,1,1];
			name7_TextDocument.applyStroke = false;
			name7_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			name7_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				name7_TextDocument.verticalScale = 1;
				name7_TextDocument.horizontalScale = 1;
				name7_TextDocument.baselineShift = 0;
				name7_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// name7_TextDocument.fauxBold = false;
				// name7_TextDocument.fauxItalic = false;
				// name7_TextDocument.allCaps = false;
				// name7_TextDocument.smallCaps = false;
				// name7_TextDocument.superscript = false;
				// name7_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				name7_TextDocument.leading = 19.2000007629395;
				name7_TextDocument.autoLeading = true;
			}
			name7_TextProp.setValue(name7_TextDocument);
		name7.property("ADBE Transform Group").property("ADBE Position").setValue([-101.449999809265,74.0904941260815,0]);
		name7.selected = false;
	var name8 = menuYouMightLike_comp.layers.addText("@Name");
		name8.name = "@Name 3";
		name8.moveToEnd();
		var name8_TextProp = name8.property("ADBE Text Properties").property("ADBE Text Document");
		var name8_TextDocument = name8_TextProp.value;
			name8_TextDocument.font = "Helvetica";
			name8_TextDocument.fontSize = 16;
			name8_TextDocument.applyFill = true;
			name8_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			name8_TextDocument.applyStroke = false;
			name8_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			name8_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				name8_TextDocument.verticalScale = 1;
				name8_TextDocument.horizontalScale = 1;
				name8_TextDocument.baselineShift = 0;
				name8_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// name8_TextDocument.fauxBold = false;
				// name8_TextDocument.fauxItalic = false;
				// name8_TextDocument.allCaps = false;
				// name8_TextDocument.smallCaps = false;
				// name8_TextDocument.superscript = false;
				// name8_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				name8_TextDocument.leading = 19.2000007629395;
				name8_TextDocument.autoLeading = true;
			}
			name8_TextProp.setValue(name8_TextDocument);
		name8.property("ADBE Transform Group").property("ADBE Position").setValue([-100.559999465942,95.1705741882324,0]);
		name8.selected = false;
	// Add existing composition "Follow Button", varName "followButton_comp";
	var followButton2 = menuYouMightLike_comp.layers.add(followButton_comp);
		followButton2.collapseTransformation = true;
		followButton2.moveToEnd();
		followButton2.timeRemapEnabled = true;
		var followButton2TimeRemap = followButton2.property("ADBE Time Remapping");
			followButton2TimeRemap.setValueAtTime(99999, followButton2TimeRemap.keyValue(1));
			followButton2TimeRemap.removeKey(2);
			followButton2TimeRemap.removeKey(1);
			var followButton2TimeRemap_keyTimesArray = [0];
			var followButton2TimeRemap_valuesArray = [0];
			followButton2TimeRemap.setValuesAtTimes(followButton2TimeRemap_keyTimesArray, followButton2TimeRemap_valuesArray);
			followButton2TimeRemap.removeKey(followButton2TimeRemap.nearestKeyIndex(99999));
			var followButton2TimeRemap_easeInSpeedArray = [0];
			var followButton2TimeRemap_easeInInfluArray = [16.666666667];
			var followButton2TimeRemap_easeOutSpeedArray = [0];
			var followButton2TimeRemap_easeOutInfluArray = [16.666666667];
			var followButton2TimeRemap_keyInInterpolationType = [KeyframeInterpolationType.HOLD];
			var followButton2TimeRemap_keyOutInterpolationType = [KeyframeInterpolationType.HOLD];
			applyEasing(followButton2TimeRemap, followButton2TimeRemap_keyTimesArray, [followButton2TimeRemap_easeInSpeedArray, followButton2TimeRemap_easeInInfluArray], [followButton2TimeRemap_easeOutSpeedArray, followButton2TimeRemap_easeOutInfluArray], [followButton2TimeRemap_keyInInterpolationType, followButton2TimeRemap_keyOutInterpolationType]);

		followButton2.property("ADBE Transform Group").property("ADBE Position").setValue([119.5,77.75,0]);
		followButton2.selected = false;
	// Add Shape Layer "Divider", varName "divider3";
	var divider3 = menuYouMightLike_comp.layers.addShape();
		divider3.name = "Divider";
		divider3.label = 0;
		divider3.moveToEnd();
		divider3.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		divider3.property("ADBE Root Vectors Group").property(1).name = "Rectangle 153";
		divider3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		divider3.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var divider3Path = divider3.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var divider3Path_newShape = new Shape();
			divider3Path_newShape.vertices = [[-173, -0.5], [173, -0.5], [173, 0.5], [-173, 0.5]];
			divider3Path_newShape.closed = true;
		divider3Path.setValue(divider3Path_newShape);
		divider3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		divider3.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		divider3.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.22745098173618,0.26666668057442,0.29803922772408,1]);
		divider3.property("ADBE Transform Group").property("ADBE Position").setValue([0,114.5,0]);
		divider3.selected = false;
	var showMore = menuYouMightLike_comp.layers.addText("Show more");
		showMore.name = "Show more";
		showMore.moveToEnd();
		var showMore_TextProp = showMore.property("ADBE Text Properties").property("ADBE Text Document");
		var showMore_TextDocument = showMore_TextProp.value;
			showMore_TextDocument.font = "Helvetica";
			showMore_TextDocument.fontSize = 14;
			showMore_TextDocument.applyFill = true;
			showMore_TextDocument.fillColor = [0.29412001371384,0.62745004892349,0.92548996210098];
			showMore_TextDocument.applyStroke = false;
			showMore_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			showMore_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				showMore_TextDocument.verticalScale = 1;
				showMore_TextDocument.horizontalScale = 1;
				showMore_TextDocument.baselineShift = 0;
				showMore_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// showMore_TextDocument.fauxBold = false;
				// showMore_TextDocument.fauxItalic = false;
				// showMore_TextDocument.allCaps = false;
				// showMore_TextDocument.smallCaps = false;
				// showMore_TextDocument.superscript = false;
				// showMore_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				showMore_TextDocument.leading = 16.8000011444092;
				showMore_TextDocument.autoLeading = true;
			}
			showMore_TextProp.setValue(showMore_TextDocument);
		showMore.property("ADBE Transform Group").property("ADBE Position").setValue([-159.720001220703,143.399230957031,0]);
		showMore.selected = false;
	// Add Shape Layer "Background", varName "background1";
	var background1 = menuYouMightLike_comp.layers.addShape();
		background1.name = "Background";
		background1.label = 11;
		background1.moveToEnd();
		background1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		background1.property("ADBE Root Vectors Group").property(1).name = "Rectangle 139";
		background1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		background1.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var background1Path = background1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var background1Path_newShape = new Shape();
			background1Path_newShape.vertices = [[-173, -164], [173, -164], [173, 164], [-173, 164]];
			background1Path_newShape.closed = true;
		background1Path.setValue(background1Path_newShape);
		background1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - RC");
		background1.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Round Corners 1";
		background1.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector RoundCorner Radius").setValue(14);
		background1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		background1.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		background1.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.10980392247438,0.15294118225574,0.20000000298023,1]);
		background1.property("ADBE Transform Group").property("ADBE Position").setValue([203,171,0]);
		background1.selected = false;
	// Apply parents
		youMightLike.setParentWithJump(background1);
		divider.setParentWithJump(background1);
		matte1.setParentWithJump(background1);
		ymlGuestProfileImage4.setParentWithJump(matte1);
		name3.setParentWithJump(background1);
		name4.setParentWithJump(background1);
		check.setParentWithJump(background1);
		promotedShape.setParentWithJump(background1);
		promoted.setParentWithJump(promotedShape);
		followButton.setParentWithJump(background1);
		divider1.setParentWithJump(background1);
		matte2.setParentWithJump(background1);
		ymlGuestProfileImage5.setParentWithJump(matte2);
		name5.setParentWithJump(background1);
		name6.setParentWithJump(background1);
		followButton1.setParentWithJump(background1);
		divider2.setParentWithJump(background1);
		matte3.setParentWithJump(background1);
		ymlGuestProfileImage6.setParentWithJump(matte3);
		name7.setParentWithJump(background1);
		name8.setParentWithJump(background1);
		followButton2.setParentWithJump(background1);
		divider3.setParentWithJump(background1);
		showMore.setParentWithJump(background1);

	// Lock Layers
		youMightLike.locked = true;
		divider.locked = true;
		matte1.locked = true;
		ymlGuestProfileImage4.locked = true;
		promotedShape.locked = true;
		promoted.locked = true;
		followButton.locked = true;
		divider1.locked = true;
		matte2.locked = true;
		ymlGuestProfileImage5.locked = true;
		followButton1.locked = true;
		divider2.locked = true;
		matte3.locked = true;
		ymlGuestProfileImage6.locked = true;
		followButton2.locked = true;
		divider3.locked = true;
		showMore.locked = true;
		background1.locked = true;

}
// Working with comp "MENU - Trending", varName "menuTrending_comp";
if (menuTrending_comp_populate === true) {
	var trendsForYou = menuTrending_comp.layers.addText("Trends for you");
		trendsForYou.name = "Trends for you";
		trendsForYou.moveToEnd();
		var trendsForYou_TextProp = trendsForYou.property("ADBE Text Properties").property("ADBE Text Document");
		var trendsForYou_TextDocument = trendsForYou_TextProp.value;
			trendsForYou_TextDocument.font = "HelveticaNeue-Bold";
			trendsForYou_TextDocument.fontSize = 20;
			trendsForYou_TextDocument.applyFill = true;
			trendsForYou_TextDocument.fillColor = [1,1,1];
			trendsForYou_TextDocument.applyStroke = false;
			trendsForYou_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			trendsForYou_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				trendsForYou_TextDocument.verticalScale = 1;
				trendsForYou_TextDocument.horizontalScale = 1;
				trendsForYou_TextDocument.baselineShift = 0;
				trendsForYou_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// trendsForYou_TextDocument.fauxBold = false;
				// trendsForYou_TextDocument.fauxItalic = false;
				// trendsForYou_TextDocument.allCaps = false;
				// trendsForYou_TextDocument.smallCaps = false;
				// trendsForYou_TextDocument.superscript = false;
				// trendsForYou_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				trendsForYou_TextDocument.leading = 24;
				trendsForYou_TextDocument.autoLeading = true;
			}
			trendsForYou_TextProp.setValue(trendsForYou_TextDocument);
		trendsForYou.property("ADBE Transform Group").property("ADBE Position").setValue([42.6700003147125,34.6130982637405,0]);
		trendsForYou.selected = false;
	// Add Shape Layer "Gear", varName "gear";
	var gear = menuTrending_comp.layers.addShape();
		gear.name = "Gear";
		gear.label = 10;
		gear.moveToEnd();
		gear.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		gear.property("ADBE Root Vectors Group").property(1).name = "Vector";
		gear.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		gear.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var gearPath = gear.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var gearPath_newShape = new Shape();
			gearPath_newShape.vertices = [[-0.36100769042969, 10.375], [0.36099243164062, 10.375], [0.36300659179688, 10.3699951171875], [2.625, 8.30999755859375], [2.63899230957031, 8.16000366210938], [3.11900329589844, 7.51400756835938], [3.90899658203125, 7.63600158691406], [4.02400207519531, 7.73199462890625], [7.08399963378906, 7.59199523925781], [7.593994140625, 7.08200073242188], [7.73399353027344, 4.02200317382812], [7.63400268554688, 3.90200805664062], [7.51699829101562, 3.10699462890625], [8.15699768066406, 2.63699340820312], [8.31199645996094, 2.62300109863281], [10.3760070800781, 0.36100769042969], [10.3760070800781, -0.36199951171875], [8.30900573730469, -2.62399291992188], [8.15699768066406, -2.63800048828125], [7.51100158691406, -3.11599731445312], [7.63400268554688, -3.90400695800781], [7.73399353027344, -4.02200317382812], [7.593994140625, -7.08200073242188], [7.08399963378906, -7.593994140625], [4.02400207519531, -7.73399353027344], [3.90400695800781, -7.63200378417969], [3.11000061035156, -7.51499938964844], [2.63800048828125, -8.15499877929688], [2.62399291992188, -8.31100463867188], [0.36199951171875, -10.375], [-0.36000061035156, -10.375], [-2.62199401855469, -8.30900573730469], [-2.63600158691406, -8.156005859375], [-3.11300659179688, -7.51300048828125], [-3.90299987792969, -7.63499450683594], [-4.01899719238281, -7.73300170898438], [-7.07899475097656, -7.59300231933594], [-7.59100341796875, -7.08099365234375], [-7.72799682617188, -4.02099609375], [-7.63400268554688, -3.90499877929688], [-7.51400756835938, -3.11000061035156], [-8.156005859375, -2.63699340820312], [-8.31199645996094, -2.62300109863281], [-10.3760070800781, -0.36100769042969], [-10.3760070800781, 0.36100769042969], [-8.30900573730469, 2.62300109863281], [-8.15899658203125, 2.63699340820312], [-7.51300048828125, 3.11700439453125], [-7.63499450683594, 3.90400695800781], [-7.73300170898438, 4.02200317382812], [-7.59300231933594, 7.08200073242188], [-7.0830078125, 7.59199523925781], [-4.02299499511719, 7.73199462890625], [-3.90699768066406, 7.63499450683594], [-3.10899353027344, 7.52000427246094], [-2.63699340820312, 8.16400146484375], [-2.62300109863281, 8.31100463867188]];
			gearPath_newShape.inTangents = [[-1.18299865722656, 0], [0, 0], [0, 0], [-0.10699462890625, 1.17300415039062], [0, 0], [-0.27299499511719, 0.11399841308594], [-0.21699523925781, -0.18299865722656], [0, 0], [-0.8070068359375, 0.80400085449219], [0, 0], [0.75599670410156, 0.90499877929688], [0, 0], [-0.11300659179688, 0.27200317382812], [-0.28399658203125, 0.02400207519531], [0, 0], [0, 1.18299865722656], [0, 0], [1.17999267578125, 0.10699462890625], [0, 0], [0.11199951171875, 0.27000427246094], [-0.18800354003906, 0.22000122070312], [0, 0], [0.83599853515625, 0.83799743652344], [0, 0], [0.86700439453125, -0.72300720214844], [0, 0], [0.27699279785156, 0.11700439453125], [0.02499389648438, 0.28500366210938], [0, 0], [1.18299865722656, 0], [0, 0], [0.10699462890625, -1.17999267578125], [0, 0], [0.27000427246094, -0.11199951171875], [0.21800231933594, 0.18400573730469], [0, 0], [0.80400085449219, -0.80400085449219], [0, 0], [-0.75700378417969, -0.90800476074219], [0, 0], [0.11000061035156, -0.27000427246094], [0.28500366210938, -0.02499389648438], [0, 0], [0, -1.18299865722656], [0, 0], [-1.17999267578125, -0.10699462890625], [0, 0], [-0.11000061035156, -0.27200317382812], [0.18600463867188, -0.22200012207031], [0, 0], [-0.83599853515625, -0.83999633789062], [0, 0], [-0.86799621582031, 0.72500610351562], [0, 0], [-0.28599548339844, -0.1199951171875], [-0.02499389648438, -0.28700256347656], [0, 0]];
			gearPath_newShape.outTangents = [[0, 0], [0, 0], [1.1820068359375, 0], [0, 0], [0.02499389648438, -0.28599548339844], [0.25999450683594, -0.10800170898438], [0, 0], [0.8699951171875, 0.7239990234375], [0, 0], [0.83599853515625, -0.83999633789062], [0, 0], [-0.18400573730469, -0.22099304199219], [0.11000061035156, -0.26499938964844], [0, 0], [1.17599487304688, -0.10800170898438], [0, 0], [0, -1.1820068359375], [0, 0], [-0.28599548339844, -0.02799987792969], [-0.11099243164062, -0.26600646972656], [0, 0], [0.75599670410156, -0.90699768066406], [0, 0], [-0.80599975585938, -0.802001953125], [0, 0], [-0.21400451660156, 0.17900085449219], [-0.26600646972656, -0.11000061035156], [0, 0], [-0.10800170898438, -1.17599487304688], [0, 0], [-1.1820068359375, 0], [0, 0], [-0.02499389648438, 0.28500366210938], [-0.26199340820312, 0.10800170898438], [0, 0], [-0.87199401855469, -0.72500610351562], [0, 0], [-0.83500671386719, 0.83700561523438], [0, 0], [0.18499755859375, 0.22200012207031], [-0.11199951171875, 0.26600646972656], [0, 0], [-1.17599487304688, 0.10800170898438], [0, 0], [0, 1.1820068359375], [0, 0], [0.28799438476562, 0.0260009765625], [0.10800170898438, 0.26400756835938], [0, 0], [-0.75599670410156, 0.906005859375], [0, 0], [0.8070068359375, 0.80299377441406], [0, 0], [0.21600341796875, -0.17999267578125], [0.26499938964844, 0.11099243164062], [0, 0], [0.10800170898438, 1.17599487304688]];
			gearPath_newShape.closed = true;
		gearPath.setValue(gearPath_newShape);
		gear.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		gear.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var gearPath3 = gear.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var gearPath3_newShape = new Shape();
			gearPath3_newShape.vertices = [[-2.54200744628906, 6.1300048828125], [-3.41200256347656, 5.95500183105469], [-3.41200256347656, 5.9580078125], [-4.86500549316406, 6.48199462890625], [-4.98100280761719, 6.5780029296875], [-5.47300720214844, 6.75799560546875], [-6.01899719238281, 6.531005859375], [-6.52900695800781, 6.02099609375], [-6.57499694824219, 4.98100280761719], [-6.47900390625, 4.86599731445312], [-6.12600708007812, 2.54100036621094], [-8.02299499511719, 1.14500427246094], [-8.17300415039062, 1.13099670410156], [-8.875, 0.36300659179688], [-8.875, -0.35899353027344], [-8.17500305175781, -1.12899780273438], [-8.01899719238281, -1.14300537109375], [-6.12400817871094, -2.53999328613281], [-6.47599792480469, -4.86500549316406], [-6.57600402832031, -4.98300170898438], [-6.52999877929688, -6.02099609375], [-6.01800537109375, -6.531005859375], [-5.47200012207031, -6.75700378417969], [-4.97700500488281, -6.57699584960938], [-4.85899353027344, -6.48100280761719], [-2.52900695800781, -6.13099670410156], [-1.13900756835938, -8.02400207519531], [-1.125, -8.17599487304688], [-0.35699462890625, -8.87800598144531], [0.36599731445312, -8.87800598144531], [1.13299560546875, -8.17799377441406], [1.14700317382812, -8.02299499511719], [2.54400634765625, -6.12699890136719], [4.86599731445312, -6.48100280761719], [4.98600769042969, -6.58099365234375], [5.47799682617188, -6.76100158691406], [6.02400207519531, -6.53399658203125], [6.53399658203125, -6.02400207519531], [6.58200073242188, -4.98399353027344], [6.48199462890625, -4.86599731445312], [6.12899780273438, -2.53900146484375], [8.02400207519531, -1.14599609375], [8.17599487304688, -1.13200378417969], [8.87800598144531, -0.36399841308594], [8.87800598144531, 0.35800170898438], [8.17799377441406, 1.12800598144531], [8.02299499511719, 1.14199829101562], [6.12899780273438, 2.53900146484375], [6.48100280761719, 4.86199951171875], [6.58099365234375, 4.98199462890625], [6.53300476074219, 6.02000427246094], [6.02299499511719, 6.52999877929688], [5.47700500488281, 6.75700378417969], [4.98399353027344, 6.57699584960938], [4.87100219726562, 6.48300170898438], [2.53799438476562, 6.13299560546875], [1.14599609375, 8.02499389648438], [1.13200378417969, 8.17300415039062], [0.36399841308594, 8.87300109863281], [-0.35800170898438, 8.87300109863281], [-1.12800598144531, 8.17300415039062], [-1.14199829101562, 8.0260009765625]];
			gearPath3_newShape.inTangents = [[0.78999328613281, 0.3280029296875], [0.30000305175781, 0], [0, 0], [0.406005859375, -0.33599853515625], [0, 0], [0.12699890136719, 0], [0.14599609375, 0.14700317382812], [0, 0], [-0.25999450683594, 0.30999755859375], [0, 0], [0.32499694824219, 0.78599548339844], [0.84800720214844, 0.0780029296875], [0, 0], [0, 0.39999389648438], [0, 0], [-0.39700317382812, 0.03700256347656], [0, 0], [-0.32699584960938, 0.78799438476562], [0.53999328613281, 0.65299987792969], [0, 0], [-0.28199768066406, 0.28399658203125], [0, 0], [-0.20599365234375, 0], [-0.17999267578125, -0.14999389648438], [0, 0], [-0.78700256347656, 0.32600402832031], [-0.07600402832031, 0.84300231933594], [0, 0], [-0.39999389648438, 0], [0, 0], [-0.03500366210938, -0.39700317382812], [0, 0], [-0.78799438476562, -0.32699584960938], [-0.63400268554688, 0.52799987792969], [0, 0], [-0.12699890136719, 0], [-0.14599609375, -0.14700317382812], [0, 0], [0.25700378417969, -0.30999755859375], [0, 0], [-0.32600402832031, -0.78799438476562], [-0.84599304199219, -0.0780029296875], [0, 0], [0, -0.39999389648438], [0, 0], [0.39700317382812, -0.03700256347656], [0, 0], [0.32600402832031, -0.78999328613281], [-0.54200744628906, -0.64999389648438], [0, 0], [0.28399658203125, -0.28399658203125], [0, 0], [0.20599365234375, 0], [0.17799377441406, 0.14799499511719], [0, 0], [0.79299926757812, -0.33000183105469], [0.07600402832031, -0.84199523925781], [0, 0], [0.39999389648438, 0], [0, 0], [0.03700256347656, 0.39999389648438], [0, 0]];
			gearPath3_newShape.outTangents = [[-0.27699279785156, -0.11500549316406], [0, 0], [-0.52999877929688, 0], [0, 0], [-0.177001953125, 0.14999389648438], [-0.20599365234375, 0], [0, 0], [-0.28399658203125, -0.28399658203125], [0, 0], [0.54299926757812, -0.64999389648438], [-0.32400512695312, -0.78399658203125], [0, 0], [-0.39900207519531, -0.03799438476562], [0, 0], [0, -0.40299987792969], [0, 0], [0.84300231933594, -0.07699584960938], [0.32499694824219, -0.781005859375], [0, 0], [-0.25700378417969, -0.30799865722656], [0, 0], [0.14599609375, -0.14599609375], [0.12699890136719, 0], [0, 0], [0.63699340820312, 0.53300476074219], [0.78199768066406, -0.32499694824219], [0, 0], [0.03799438476562, -0.39900207519531], [0, 0], [0.40199279785156, 0], [0, 0], [0.07699584960938, 0.843994140625], [0.77200317382812, 0.31599426269531], [0, 0], [0.177001953125, -0.14799499511719], [0.20599365234375, 0], [0, 0], [0.28399658203125, 0.28399658203125], [0, 0], [-0.54299926757812, 0.64900207519531], [0.32499694824219, 0.78300476074219], [0, 0], [0.39900207519531, 0.03799438476562], [0, 0], [0, 0.40299987792969], [0, 0], [-0.84199523925781, 0.07699584960938], [-0.32499694824219, 0.78300476074219], [0, 0], [0.25700378417969, 0.30799865722656], [0, 0], [-0.14599609375, 0.14700317382812], [-0.12699890136719, 0], [0, 0], [-0.63699340820312, -0.53199768066406], [-0.78199768066406, 0.32499694824219], [0, 0], [-0.03799438476562, 0.39999389648438], [0, 0], [-0.40299987792969, 0], [0, 0], [-0.07600402832031, -0.84199523925781]];
			gearPath3_newShape.closed = true;
		gearPath3.setValue(gearPath3_newShape);
		gear.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		gear.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		gear.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		gear.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		gear.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		gear.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([0.29411765933037,0.62745100259781,0.92549020051956,1]);
		gear.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		gear.property("ADBE Root Vectors Group").property(2).name = "Vector 2";
		gear.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Shape - Group");
		gear.property("ADBE Root Vectors Group").property(2).property(2).property(1).name = "Path 1";
		var gearPath5 = gear.property("ADBE Root Vectors Group").property(2).property(2).property(1).property("ADBE Vector Shape");
		var gearPath5_newShape = new Shape();
			gearPath5_newShape.vertices = [[-3.78999328613281, 0], [0, -3.78999328613281], [3.78999328613281, 0], [0, 3.78999328613281]];
			gearPath5_newShape.inTangents = [[0, 2.08999633789062], [-2.08999633789062, 0], [0, -2.08999633789062], [2.08999633789062, 0]];
			gearPath5_newShape.outTangents = [[0, -2.08999633789062], [2.08999633789062, 0], [0, 2.08999633789062], [-2.08999633789062, 0]];
			gearPath5_newShape.closed = true;
		gearPath5.setValue(gearPath5_newShape);
		gear.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Shape - Group");
		gear.property("ADBE Root Vectors Group").property(2).property(2).property(2).name = "Path 2";
		var gearPath7 = gear.property("ADBE Root Vectors Group").property(2).property(2).property(2).property("ADBE Vector Shape");
		var gearPath7_newShape = new Shape();
			gearPath7_newShape.vertices = [[-2.28999328613281, 0], [0, 2.28999328613281], [0, 2.28999328613281], [2.28999328613281, 0], [0, -2.28999328613281]];
			gearPath7_newShape.inTangents = [[0, -1.26400756835938], [-1.26199340820312, 0], [0, 0], [0, 1.26400756835938], [1.25999450683594, 0]];
			gearPath7_newShape.outTangents = [[0, 1.26400756835938], [0, 0], [1.26199340820312, 0], [0, -1.26400756835938], [-1.25999450683594, 0]];
			gearPath7_newShape.closed = true;
		gearPath7.setValue(gearPath7_newShape);
		gear.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Filter - Merge");
		gear.property("ADBE Root Vectors Group").property(2).property(2).property(3).name = "Merge Paths 1";
		gear.property("ADBE Root Vectors Group").property(2).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		gear.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Graphic - Fill");
		gear.property("ADBE Root Vectors Group").property(2).property(2).property(4).name = "Fill 1";
		gear.property("ADBE Root Vectors Group").property(2).property(2).property(4).property("ADBE Vector Fill Color").setValue([0.29411765933037,0.62745100259781,0.92549020051956,1]);
		gear.property("ADBE Transform Group").property("ADBE Position").setValue([148.3759765625,-202.625,0]);
		gear.selected = false;
	// Add Shape Layer "Divider", varName "divider4";
	var divider4 = menuTrending_comp.layers.addShape();
		divider4.name = "Divider";
		divider4.label = 0;
		divider4.moveToEnd();
		divider4.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		divider4.property("ADBE Root Vectors Group").property(1).name = "Rectangle 154";
		divider4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		divider4.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var divider4Path = divider4.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var divider4Path_newShape = new Shape();
			divider4Path_newShape.vertices = [[-173, -0.5], [173, -0.5], [173, 0.5], [-173, 0.5]];
			divider4Path_newShape.closed = true;
		divider4Path.setValue(divider4Path_newShape);
		divider4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		divider4.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		divider4.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.22745098173618,0.26666668057442,0.29803922772408,1]);
		divider4.property("ADBE Transform Group").property("ADBE Position").setValue([0,-179.5,0]);
		divider4.selected = false;
	var trendingInCountry = menuTrending_comp.layers.addText("Trending in Country");
		trendingInCountry.name = "Trending in Country";
		trendingInCountry.moveToEnd();
		var trendingInCountry_TextProp = trendingInCountry.property("ADBE Text Properties").property("ADBE Text Document");
		var trendingInCountry_TextDocument = trendingInCountry_TextProp.value;
			trendingInCountry_TextDocument.font = "Helvetica";
			trendingInCountry_TextDocument.fontSize = 13;
			trendingInCountry_TextDocument.applyFill = true;
			trendingInCountry_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			trendingInCountry_TextDocument.applyStroke = false;
			trendingInCountry_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			trendingInCountry_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				trendingInCountry_TextDocument.verticalScale = 1;
				trendingInCountry_TextDocument.horizontalScale = 1;
				trendingInCountry_TextDocument.baselineShift = 0;
				trendingInCountry_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// trendingInCountry_TextDocument.fauxBold = false;
				// trendingInCountry_TextDocument.fauxItalic = false;
				// trendingInCountry_TextDocument.allCaps = false;
				// trendingInCountry_TextDocument.smallCaps = false;
				// trendingInCountry_TextDocument.superscript = false;
				// trendingInCountry_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				trendingInCountry_TextDocument.leading = 15.6000003814697;
				trendingInCountry_TextDocument.autoLeading = true;
			}
			trendingInCountry_TextProp.setValue(trendingInCountry_TextDocument);
		trendingInCountry.property("ADBE Transform Group").property("ADBE Position").setValue([-160.069999694824,-156.486389160156,0]);
		trendingInCountry.selected = false;
	var hashtag = menuTrending_comp.layers.addText("#Hashtag");
		hashtag.name = "#Hashtag";
		hashtag.moveToEnd();
		var hashtag_TextProp = hashtag.property("ADBE Text Properties").property("ADBE Text Document");
		var hashtag_TextDocument = hashtag_TextProp.value;
			hashtag_TextDocument.font = "HelveticaNeue-Bold";
			hashtag_TextDocument.fontSize = 16;
			hashtag_TextDocument.applyFill = true;
			hashtag_TextDocument.fillColor = [1,1,1];
			hashtag_TextDocument.applyStroke = false;
			hashtag_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			hashtag_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hashtag_TextDocument.verticalScale = 1;
				hashtag_TextDocument.horizontalScale = 1;
				hashtag_TextDocument.baselineShift = 0;
				hashtag_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hashtag_TextDocument.fauxBold = false;
				// hashtag_TextDocument.fauxItalic = false;
				// hashtag_TextDocument.allCaps = false;
				// hashtag_TextDocument.smallCaps = false;
				// hashtag_TextDocument.superscript = false;
				// hashtag_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hashtag_TextDocument.leading = 19.2000007629395;
				hashtag_TextDocument.autoLeading = true;
			}
			hashtag_TextProp.setValue(hashtag_TextDocument);
		hashtag.property("ADBE Transform Group").property("ADBE Position").setValue([-159.709999203682,-134.909484982491,0]);
		hashtag.selected = false;
	var tweets = menuTrending_comp.layers.addText("1,222 Tweets");
		tweets.name = "1,222 Tweets";
		tweets.moveToEnd();
		var tweets_TextProp = tweets.property("ADBE Text Properties").property("ADBE Text Document");
		var tweets_TextDocument = tweets_TextProp.value;
			tweets_TextDocument.font = "Helvetica";
			tweets_TextDocument.fontSize = 16;
			tweets_TextDocument.applyFill = true;
			tweets_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			tweets_TextDocument.applyStroke = false;
			tweets_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			tweets_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				tweets_TextDocument.verticalScale = 1;
				tweets_TextDocument.horizontalScale = 1;
				tweets_TextDocument.baselineShift = 0;
				tweets_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// tweets_TextDocument.fauxBold = false;
				// tweets_TextDocument.fauxItalic = false;
				// tweets_TextDocument.allCaps = false;
				// tweets_TextDocument.smallCaps = false;
				// tweets_TextDocument.superscript = false;
				// tweets_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				tweets_TextDocument.leading = 19.2000007629395;
				tweets_TextDocument.autoLeading = true;
			}
			tweets_TextProp.setValue(tweets_TextDocument);
		tweets.property("ADBE Transform Group").property("ADBE Position").setValue([-160.950000762939,-112.829406738281,0]);
		tweets.selected = false;
	// Add Shape Layer "Arrow", varName "arrow";
	var arrow = menuTrending_comp.layers.addShape();
		arrow.name = "Arrow";
		arrow.label = 10;
		arrow.moveToEnd();
		arrow.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		arrow.property("ADBE Root Vectors Group").property(1).name = "Vector";
		arrow.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		arrow.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var arrowPath = arrow.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var arrowPath_newShape = new Shape();
			arrowPath_newShape.vertices = [[3.99612426757812, -2.81527709960938], [4.82792663574219, -2.81527709960938], [4.82792663574219, -2.81401062011719], [4.82792663574219, -1.921630859375], [0.41590881347656, 2.81495666503906], [0, 3], [-0.41590881347656, 2.8143310546875], [-4.82792663574219, -1.92227172851562], [-4.82792663574219, -2.81527709960938], [-3.99612426757812, -2.81527709960938], [0, 1.47482299804688]];
			arrowPath_newShape.inTangents = [[0, 0], [-0.22943115234375, -0.24630737304688], [0, 0], [0.22943115234375, -0.24630737304688], [0, 0], [0.15118408203125, 0], [0.11471557617188, 0.123779296875], [0, 0], [-0.22943115234375, 0.24630737304688], [-0.22943115234375, -0.24630737304688], [0, 0]];
			arrowPath_newShape.outTangents = [[0.23001098632812, -0.24630737304688], [0, 0], [0.22943115234375, 0.24693298339844], [0, 0], [-0.11471557617188, 0.12315368652344], [-0.15118408203125, 0], [0, 0], [-0.22943115234375, -0.24693298339844], [0.23001098632812, -0.24630737304688], [0, 0], [0, 0]];
			arrowPath_newShape.closed = true;
		arrowPath.setValue(arrowPath_newShape);
		arrow.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		arrow.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		arrow.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		arrow.property("ADBE Transform Group").property("ADBE Position").setValue([152,-160,0]);
		arrow.selected = false;
	// Add Shape Layer "Divider", varName "divider5";
	var divider5 = menuTrending_comp.layers.addShape();
		divider5.name = "Divider";
		divider5.label = 0;
		divider5.moveToEnd();
		divider5.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		divider5.property("ADBE Root Vectors Group").property(1).name = "Rectangle 155";
		divider5.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		divider5.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var divider5Path = divider5.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var divider5Path_newShape = new Shape();
			divider5Path_newShape.vertices = [[-173, -0.5], [173, -0.5], [173, 0.5], [-173, 0.5]];
			divider5Path_newShape.closed = true;
		divider5Path.setValue(divider5Path_newShape);
		divider5.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		divider5.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		divider5.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.22745098173618,0.26666668057442,0.29803922772408,1]);
		divider5.property("ADBE Transform Group").property("ADBE Position").setValue([0,-97.5,0]);
		divider5.selected = false;
	var hashtag1 = menuTrending_comp.layers.addText("#Hashtag");
		hashtag1.name = "#Hashtag";
		hashtag1.moveToEnd();
		var hashtag1_TextProp = hashtag1.property("ADBE Text Properties").property("ADBE Text Document");
		var hashtag1_TextDocument = hashtag1_TextProp.value;
			hashtag1_TextDocument.font = "HelveticaNeue-Bold";
			hashtag1_TextDocument.fontSize = 16;
			hashtag1_TextDocument.applyFill = true;
			hashtag1_TextDocument.fillColor = [1,1,1];
			hashtag1_TextDocument.applyStroke = false;
			hashtag1_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			hashtag1_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hashtag1_TextDocument.verticalScale = 1;
				hashtag1_TextDocument.horizontalScale = 1;
				hashtag1_TextDocument.baselineShift = 0;
				hashtag1_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hashtag1_TextDocument.fauxBold = false;
				// hashtag1_TextDocument.fauxItalic = false;
				// hashtag1_TextDocument.allCaps = false;
				// hashtag1_TextDocument.smallCaps = false;
				// hashtag1_TextDocument.superscript = false;
				// hashtag1_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hashtag1_TextDocument.leading = 19.2000007629395;
				hashtag1_TextDocument.autoLeading = true;
			}
			hashtag1_TextProp.setValue(hashtag1_TextDocument);
		hashtag1.property("ADBE Transform Group").property("ADBE Position").setValue([-159.709999144077,-71.9094849824905,0]);
		hashtag1.selected = false;
	var loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry = menuTrending_comp.layers.addBoxText([290.700012207031,36], "Lorem ipsum is simply dummy text of the prnting" + "\n" + 
				"and typesetting industry. ");
		loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry.name = "Lorem ipsum is simply dummy text of the prnting and typesetting industry.";
		loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry.label = 10;
		loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry.moveToEnd();
		var loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry_TextProp = loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry.property("ADBE Text Properties").property("ADBE Text Document");
		var loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry_TextDocument = loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry_TextProp.value;
			loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry_TextDocument.font = "Helvetica";
			loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry_TextDocument.fontSize = 13;
			loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry_TextDocument.applyFill = true;
			loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry_TextDocument.applyStroke = false;
			loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry_TextDocument.verticalScale = 1;
				loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry_TextDocument.horizontalScale = 1;
				loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry_TextDocument.baselineShift = 0;
				loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry_TextDocument.fauxBold = false;
				// loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry_TextDocument.fauxItalic = false;
				// loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry_TextDocument.allCaps = false;
				// loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry_TextDocument.smallCaps = false;
				// loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry_TextDocument.superscript = false;
				// loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry_TextDocument.leading = 17.9790000915527;
				loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry_TextDocument.autoLeading = false;
			}
			loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry_TextProp.setValue(loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry_TextDocument);
		loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry.property("ADBE Transform Group").property("ADBE Position").setValue([-16.5,-42.8333129882812,0]);
		loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry.selected = false;
	// Add Shape Layer "Promotion Icon", varName "promotionIcon";
	var promotionIcon = menuTrending_comp.layers.addShape();
		promotionIcon.name = "Promotion Icon";
		promotionIcon.label = 10;
		promotionIcon.moveToEnd();
		promotionIcon.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		promotionIcon.property("ADBE Root Vectors Group").property(1).name = "Vector";
		promotionIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		promotionIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var promotionIconPath = promotionIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var promotionIconPath_newShape = new Shape();
			promotionIconPath_newShape.vertices = [[-4.77272033691406, -5.5], [4.77272033691406, -5.5], [6, -4.26249694824219], [6, 4.26249694824219], [4.77272033691406, 5.5], [-4.77272033691406, 5.5], [-6, 4.26249694824219], [-6, -4.26249694824219]];
			promotionIconPath_newShape.inTangents = [[-0.67799377441406, 0], [0, 0], [0, -0.68365478515625], [0, 0], [0.67799377441406, 0], [0, 0], [0, 0.68365478515625], [0, 0]];
			promotionIconPath_newShape.outTangents = [[0, 0], [0.67799377441406, 0], [0, 0], [0, 0.68365478515625], [0, 0], [-0.67799377441406, 0], [0, 0], [0, -0.68365478515625]];
			promotionIconPath_newShape.closed = true;
		promotionIconPath.setValue(promotionIconPath_newShape);
		promotionIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		promotionIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var promotionIconPath3 = promotionIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var promotionIconPath3_newShape = new Shape();
			promotionIconPath3_newShape.vertices = [[2.52272033691406, 1.30845642089844], [3, 0.82719421386719], [2.9989013671875, 0.82554626464844], [2.9989013671875, -2.28195190429688], [2.52163696289062, -2.76264953613281], [-0.5601806640625, -2.76264953613281], [-1.03746032714844, -2.28140258789062], [-0.56072998046875, -1.79960632324219], [1.37017822265625, -1.79960632324219], [-2.74636840820312, 2.35125732421875], [-2.74636840820312, 3.03160095214844], [-2.40927124023438, 3.17294311523438], [-2.07109069824219, 3.03215026855469], [2.04545593261719, -1.11814880371094], [2.04545593261719, 0.82664489746094]];
			promotionIconPath3_newShape.inTangents = [[-0.26345825195312, 0], [0, 0.26565551757812], [0, 0], [0, 0], [0.26345825195312, 0], [0, 0], [0, -0.26565551757812], [-0.26290893554688, 0], [0, 0], [0, 0], [-0.18653869628906, -0.18809509277344], [-0.12272644042969, 0], [-0.09272766113281, 0.093505859375], [0, 0], [0, 0]];
			promotionIconPath3_newShape.outTangents = [[0.26345825195312, 0], [0, 0], [0, 0], [0, -0.26620483398438], [0, 0], [-0.26345825195312, 0], [0, 0.26565551757812], [0, 0], [0, 0], [-0.18653869628906, 0.18754577636719], [0.09327697753906, 0.09405517578125], [0.12272644042969, 0], [0, 0], [0, 0], [0, 0.26565551757812]];
			promotionIconPath3_newShape.closed = true;
		promotionIconPath3.setValue(promotionIconPath3_newShape);
		promotionIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		promotionIcon.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		promotionIcon.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		promotionIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		promotionIcon.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		promotionIcon.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		promotionIcon.property("ADBE Transform Group").property("ADBE Position").setValue([-151,-12.5,0]);
		promotionIcon.selected = false;
	var promotedByName = menuTrending_comp.layers.addText("Promoted by Name");
		promotedByName.name = "Promoted by Name";
		promotedByName.moveToEnd();
		var promotedByName_TextProp = promotedByName.property("ADBE Text Properties").property("ADBE Text Document");
		var promotedByName_TextDocument = promotedByName_TextProp.value;
			promotedByName_TextDocument.font = "Helvetica";
			promotedByName_TextDocument.fontSize = 13;
			promotedByName_TextDocument.applyFill = true;
			promotedByName_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			promotedByName_TextDocument.applyStroke = false;
			promotedByName_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			promotedByName_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				promotedByName_TextDocument.verticalScale = 1;
				promotedByName_TextDocument.horizontalScale = 1;
				promotedByName_TextDocument.baselineShift = 0;
				promotedByName_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// promotedByName_TextDocument.fauxBold = false;
				// promotedByName_TextDocument.fauxItalic = false;
				// promotedByName_TextDocument.allCaps = false;
				// promotedByName_TextDocument.smallCaps = false;
				// promotedByName_TextDocument.superscript = false;
				// promotedByName_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				promotedByName_TextDocument.leading = 15.6000003814697;
				promotedByName_TextDocument.autoLeading = true;
			}
			promotedByName_TextProp.setValue(promotedByName_TextDocument);
		promotedByName.property("ADBE Transform Group").property("ADBE Position").setValue([-142.139999389648,-9.48638916015625,0]);
		promotedByName.selected = false;
	// Add Shape Layer "Divider", varName "divider6";
	var divider6 = menuTrending_comp.layers.addShape();
		divider6.name = "Divider";
		divider6.label = 0;
		divider6.moveToEnd();
		divider6.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		divider6.property("ADBE Root Vectors Group").property(1).name = "Rectangle 156";
		divider6.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		divider6.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var divider6Path = divider6.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var divider6Path_newShape = new Shape();
			divider6Path_newShape.vertices = [[-173, -0.5], [173, -0.5], [173, 0.5], [-173, 0.5]];
			divider6Path_newShape.closed = true;
		divider6Path.setValue(divider6Path_newShape);
		divider6.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		divider6.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		divider6.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.22745098173618,0.26666668057442,0.29803922772408,1]);
		divider6.property("ADBE Transform Group").property("ADBE Position").setValue([0,9.5,0]);
		divider6.selected = false;
	var category = menuTrending_comp.layers.addText("Category");
		category.name = "Category";
		category.moveToEnd();
		var category_TextProp = category.property("ADBE Text Properties").property("ADBE Text Document");
		var category_TextDocument = category_TextProp.value;
			category_TextDocument.font = "Helvetica";
			category_TextDocument.fontSize = 13;
			category_TextDocument.applyFill = true;
			category_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			category_TextDocument.applyStroke = false;
			category_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			category_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				category_TextDocument.verticalScale = 1;
				category_TextDocument.horizontalScale = 1;
				category_TextDocument.baselineShift = 0;
				category_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// category_TextDocument.fauxBold = false;
				// category_TextDocument.fauxItalic = false;
				// category_TextDocument.allCaps = false;
				// category_TextDocument.smallCaps = false;
				// category_TextDocument.superscript = false;
				// category_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				category_TextDocument.leading = 15.6000003814697;
				category_TextDocument.autoLeading = true;
			}
			category_TextProp.setValue(category_TextDocument);
		category.property("ADBE Transform Group").property("ADBE Position").setValue([-159.540000915527,32.5135908126831,0]);
		category.selected = false;
	var hashtag2 = menuTrending_comp.layers.addText("#Hashtag");
		hashtag2.name = "#Hashtag";
		hashtag2.moveToEnd();
		var hashtag2_TextProp = hashtag2.property("ADBE Text Properties").property("ADBE Text Document");
		var hashtag2_TextDocument = hashtag2_TextProp.value;
			hashtag2_TextDocument.font = "HelveticaNeue-Bold";
			hashtag2_TextDocument.fontSize = 16;
			hashtag2_TextDocument.applyFill = true;
			hashtag2_TextDocument.fillColor = [1,1,1];
			hashtag2_TextDocument.applyStroke = false;
			hashtag2_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			hashtag2_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hashtag2_TextDocument.verticalScale = 1;
				hashtag2_TextDocument.horizontalScale = 1;
				hashtag2_TextDocument.baselineShift = 0;
				hashtag2_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hashtag2_TextDocument.fauxBold = false;
				// hashtag2_TextDocument.fauxItalic = false;
				// hashtag2_TextDocument.allCaps = false;
				// hashtag2_TextDocument.smallCaps = false;
				// hashtag2_TextDocument.superscript = false;
				// hashtag2_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hashtag2_TextDocument.leading = 19.2000007629395;
				hashtag2_TextDocument.autoLeading = true;
			}
			hashtag2_TextProp.setValue(hashtag2_TextDocument);
		hashtag2.property("ADBE Transform Group").property("ADBE Position").setValue([-159.709999203682,54.0904940366745,0]);
		hashtag2.selected = false;
	var kTweets = menuTrending_comp.layers.addText("13.3K Tweets");
		kTweets.name = "13.3K Tweets";
		kTweets.moveToEnd();
		var kTweets_TextProp = kTweets.property("ADBE Text Properties").property("ADBE Text Document");
		var kTweets_TextDocument = kTweets_TextProp.value;
			kTweets_TextDocument.font = "Helvetica";
			kTweets_TextDocument.fontSize = 16;
			kTweets_TextDocument.applyFill = true;
			kTweets_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			kTweets_TextDocument.applyStroke = false;
			kTweets_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			kTweets_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				kTweets_TextDocument.verticalScale = 1;
				kTweets_TextDocument.horizontalScale = 1;
				kTweets_TextDocument.baselineShift = 0;
				kTweets_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// kTweets_TextDocument.fauxBold = false;
				// kTweets_TextDocument.fauxItalic = false;
				// kTweets_TextDocument.allCaps = false;
				// kTweets_TextDocument.smallCaps = false;
				// kTweets_TextDocument.superscript = false;
				// kTweets_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				kTweets_TextDocument.leading = 19.2000007629395;
				kTweets_TextDocument.autoLeading = true;
			}
			kTweets_TextProp.setValue(kTweets_TextDocument);
		kTweets.property("ADBE Transform Group").property("ADBE Position").setValue([-160.970001220703,76.1705741882324,0]);
		kTweets.selected = false;
	// Add Shape Layer "Arrow", varName "arrow1";
	var arrow1 = menuTrending_comp.layers.addShape();
		arrow1.name = "Arrow";
		arrow1.label = 10;
		arrow1.moveToEnd();
		arrow1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		arrow1.property("ADBE Root Vectors Group").property(1).name = "Vector";
		arrow1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		arrow1.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var arrow1Path = arrow1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var arrow1Path_newShape = new Shape();
			arrow1Path_newShape.vertices = [[3.99612426757812, -2.81527709960938], [4.82792663574219, -2.81527709960938], [4.82792663574219, -2.81401062011719], [4.82792663574219, -1.921630859375], [0.41590881347656, 2.81495666503906], [0, 3], [-0.41590881347656, 2.8143310546875], [-4.82792663574219, -1.92227172851562], [-4.82792663574219, -2.81527709960938], [-3.99612426757812, -2.81527709960938], [0, 1.47482299804688]];
			arrow1Path_newShape.inTangents = [[0, 0], [-0.22943115234375, -0.24630737304688], [0, 0], [0.22943115234375, -0.24630737304688], [0, 0], [0.15118408203125, 0], [0.11471557617188, 0.123779296875], [0, 0], [-0.22943115234375, 0.24630737304688], [-0.22943115234375, -0.24630737304688], [0, 0]];
			arrow1Path_newShape.outTangents = [[0.23001098632812, -0.24630737304688], [0, 0], [0.22943115234375, 0.24693298339844], [0, 0], [-0.11471557617188, 0.12315368652344], [-0.15118408203125, 0], [0, 0], [-0.22943115234375, -0.24693298339844], [0.23001098632812, -0.24630737304688], [0, 0], [0, 0]];
			arrow1Path_newShape.closed = true;
		arrow1Path.setValue(arrow1Path_newShape);
		arrow1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		arrow1.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		arrow1.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		arrow1.property("ADBE Transform Group").property("ADBE Position").setValue([152,29,0]);
		arrow1.selected = false;
	// Add Shape Layer "Divider", varName "divider7";
	var divider7 = menuTrending_comp.layers.addShape();
		divider7.name = "Divider";
		divider7.label = 0;
		divider7.moveToEnd();
		divider7.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		divider7.property("ADBE Root Vectors Group").property(1).name = "Rectangle 157";
		divider7.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		divider7.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var divider7Path = divider7.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var divider7Path_newShape = new Shape();
			divider7Path_newShape.vertices = [[-173, -0.5], [173, -0.5], [173, 0.5], [-173, 0.5]];
			divider7Path_newShape.closed = true;
		divider7Path.setValue(divider7Path_newShape);
		divider7.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		divider7.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		divider7.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.22745098173618,0.26666668057442,0.29803922772408,1]);
		divider7.property("ADBE Transform Group").property("ADBE Position").setValue([0,91.5,0]);
		divider7.selected = false;
	var category1 = menuTrending_comp.layers.addText("Category");
		category1.name = "Category";
		category1.moveToEnd();
		var category1_TextProp = category1.property("ADBE Text Properties").property("ADBE Text Document");
		var category1_TextDocument = category1_TextProp.value;
			category1_TextDocument.font = "Helvetica";
			category1_TextDocument.fontSize = 13;
			category1_TextDocument.applyFill = true;
			category1_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			category1_TextDocument.applyStroke = false;
			category1_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			category1_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				category1_TextDocument.verticalScale = 1;
				category1_TextDocument.horizontalScale = 1;
				category1_TextDocument.baselineShift = 0;
				category1_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// category1_TextDocument.fauxBold = false;
				// category1_TextDocument.fauxItalic = false;
				// category1_TextDocument.allCaps = false;
				// category1_TextDocument.smallCaps = false;
				// category1_TextDocument.superscript = false;
				// category1_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				category1_TextDocument.leading = 15.6000003814697;
				category1_TextDocument.autoLeading = true;
			}
			category1_TextProp.setValue(category1_TextDocument);
		category1.property("ADBE Transform Group").property("ADBE Position").setValue([-159.540000915527,114.513590812683,0]);
		category1.selected = false;
	var hashtag3 = menuTrending_comp.layers.addText("#Hashtag");
		hashtag3.name = "#Hashtag";
		hashtag3.moveToEnd();
		var hashtag3_TextProp = hashtag3.property("ADBE Text Properties").property("ADBE Text Document");
		var hashtag3_TextDocument = hashtag3_TextProp.value;
			hashtag3_TextDocument.font = "HelveticaNeue-Bold";
			hashtag3_TextDocument.fontSize = 16;
			hashtag3_TextDocument.applyFill = true;
			hashtag3_TextDocument.fillColor = [1,1,1];
			hashtag3_TextDocument.applyStroke = false;
			hashtag3_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			hashtag3_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				hashtag3_TextDocument.verticalScale = 1;
				hashtag3_TextDocument.horizontalScale = 1;
				hashtag3_TextDocument.baselineShift = 0;
				hashtag3_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// hashtag3_TextDocument.fauxBold = false;
				// hashtag3_TextDocument.fauxItalic = false;
				// hashtag3_TextDocument.allCaps = false;
				// hashtag3_TextDocument.smallCaps = false;
				// hashtag3_TextDocument.superscript = false;
				// hashtag3_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				hashtag3_TextDocument.leading = 19.2000007629395;
				hashtag3_TextDocument.autoLeading = true;
			}
			hashtag3_TextProp.setValue(hashtag3_TextDocument);
		hashtag3.property("ADBE Transform Group").property("ADBE Position").setValue([-159.709999144077,136.090494036674,0]);
		hashtag3.selected = false;
	var kTweets1 = menuTrending_comp.layers.addText("13.3K Tweets");
		kTweets1.name = "13.3K Tweets";
		kTweets1.moveToEnd();
		var kTweets1_TextProp = kTweets1.property("ADBE Text Properties").property("ADBE Text Document");
		var kTweets1_TextDocument = kTweets1_TextProp.value;
			kTweets1_TextDocument.font = "Helvetica";
			kTweets1_TextDocument.fontSize = 16;
			kTweets1_TextDocument.applyFill = true;
			kTweets1_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			kTweets1_TextDocument.applyStroke = false;
			kTweets1_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			kTweets1_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				kTweets1_TextDocument.verticalScale = 1;
				kTweets1_TextDocument.horizontalScale = 1;
				kTweets1_TextDocument.baselineShift = 0;
				kTweets1_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// kTweets1_TextDocument.fauxBold = false;
				// kTweets1_TextDocument.fauxItalic = false;
				// kTweets1_TextDocument.allCaps = false;
				// kTweets1_TextDocument.smallCaps = false;
				// kTweets1_TextDocument.superscript = false;
				// kTweets1_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				kTweets1_TextDocument.leading = 19.2000007629395;
				kTweets1_TextDocument.autoLeading = true;
			}
			kTweets1_TextProp.setValue(kTweets1_TextDocument);
		kTweets1.property("ADBE Transform Group").property("ADBE Position").setValue([-160.970001220703,158.170574188232,0]);
		kTweets1.selected = false;
	// Add Shape Layer "Arrow", varName "arrow2";
	var arrow2 = menuTrending_comp.layers.addShape();
		arrow2.name = "Arrow";
		arrow2.label = 10;
		arrow2.moveToEnd();
		arrow2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		arrow2.property("ADBE Root Vectors Group").property(1).name = "Vector";
		arrow2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		arrow2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var arrow2Path = arrow2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var arrow2Path_newShape = new Shape();
			arrow2Path_newShape.vertices = [[3.99612426757812, -2.81527709960938], [4.82792663574219, -2.81527709960938], [4.82792663574219, -2.81401062011719], [4.82792663574219, -1.921630859375], [0.41590881347656, 2.81495666503906], [0, 3], [-0.41590881347656, 2.8143310546875], [-4.82792663574219, -1.92227172851562], [-4.82792663574219, -2.81527709960938], [-3.99612426757812, -2.81527709960938], [0, 1.47482299804688]];
			arrow2Path_newShape.inTangents = [[0, 0], [-0.22943115234375, -0.24630737304688], [0, 0], [0.22943115234375, -0.24630737304688], [0, 0], [0.15118408203125, 0], [0.11471557617188, 0.123779296875], [0, 0], [-0.22943115234375, 0.24630737304688], [-0.22943115234375, -0.24630737304688], [0, 0]];
			arrow2Path_newShape.outTangents = [[0.23001098632812, -0.24630737304688], [0, 0], [0.22943115234375, 0.24693298339844], [0, 0], [-0.11471557617188, 0.12315368652344], [-0.15118408203125, 0], [0, 0], [-0.22943115234375, -0.24693298339844], [0.23001098632812, -0.24630737304688], [0, 0], [0, 0]];
			arrow2Path_newShape.closed = true;
		arrow2Path.setValue(arrow2Path_newShape);
		arrow2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		arrow2.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		arrow2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		arrow2.property("ADBE Transform Group").property("ADBE Position").setValue([152,111,0]);
		arrow2.selected = false;
	// Add Shape Layer "Divider", varName "divider8";
	var divider8 = menuTrending_comp.layers.addShape();
		divider8.name = "Divider";
		divider8.label = 0;
		divider8.moveToEnd();
		divider8.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		divider8.property("ADBE Root Vectors Group").property(1).name = "Rectangle 158";
		divider8.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		divider8.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var divider8Path = divider8.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var divider8Path_newShape = new Shape();
			divider8Path_newShape.vertices = [[-173, -0.5], [173, -0.5], [173, 0.5], [-173, 0.5]];
			divider8Path_newShape.closed = true;
		divider8Path.setValue(divider8Path_newShape);
		divider8.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		divider8.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		divider8.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.22745098173618,0.26666668057442,0.29803922772408,1]);
		divider8.property("ADBE Transform Group").property("ADBE Position").setValue([0,173.5,0]);
		divider8.selected = false;
	var showMore1 = menuTrending_comp.layers.addText("Show more");
		showMore1.name = "Show more";
		showMore1.moveToEnd();
		var showMore1_TextProp = showMore1.property("ADBE Text Properties").property("ADBE Text Document");
		var showMore1_TextDocument = showMore1_TextProp.value;
			showMore1_TextDocument.font = "Helvetica";
			showMore1_TextDocument.fontSize = 14;
			showMore1_TextDocument.applyFill = true;
			showMore1_TextDocument.fillColor = [0.29412001371384,0.62745004892349,0.92548996210098];
			showMore1_TextDocument.applyStroke = false;
			showMore1_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			showMore1_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				showMore1_TextDocument.verticalScale = 1;
				showMore1_TextDocument.horizontalScale = 1;
				showMore1_TextDocument.baselineShift = 0;
				showMore1_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// showMore1_TextDocument.fauxBold = false;
				// showMore1_TextDocument.fauxItalic = false;
				// showMore1_TextDocument.allCaps = false;
				// showMore1_TextDocument.smallCaps = false;
				// showMore1_TextDocument.superscript = false;
				// showMore1_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				showMore1_TextDocument.leading = 16.8000011444092;
				showMore1_TextDocument.autoLeading = true;
			}
			showMore1_TextProp.setValue(showMore1_TextDocument);
		showMore1.property("ADBE Transform Group").property("ADBE Position").setValue([-159.720001220703,202.399291992188,0]);
		showMore1.selected = false;
	// Add Shape Layer "Background", varName "background2";
	var background2 = menuTrending_comp.layers.addShape();
		background2.name = "Background";
		background2.label = 10;
		background2.moveToEnd();
		background2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		background2.property("ADBE Root Vectors Group").property(1).name = "Rectangle 159";
		background2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		background2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var background2Path = background2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var background2Path_newShape = new Shape();
			background2Path_newShape.vertices = [[-173, -225], [173, -225], [173, 225], [-173, 225]];
			background2Path_newShape.closed = true;
		background2Path.setValue(background2Path_newShape);
		background2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - RC");
		background2.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Round Corners 1";
		background2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector RoundCorner Radius").setValue(14);
		background2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		background2.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		background2.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.10980392247438,0.15294118225574,0.20000000298023,1]);
		background2.property("ADBE Transform Group").property("ADBE Position").setValue([203,232,0]);
		background2.selected = false;
	// Apply parents
		gear.setParentWithJump(background2);
		divider4.setParentWithJump(background2);
		trendingInCountry.setParentWithJump(background2);
		hashtag.setParentWithJump(background2);
		tweets.setParentWithJump(background2);
		arrow.setParentWithJump(background2);
		divider5.setParentWithJump(background2);
		hashtag1.setParentWithJump(background2);
		loremIpsumIsSimplyDummyTextOfThePrntingAndTypesettingIndustry.setParentWithJump(background2);
		promotionIcon.setParentWithJump(background2);
		promotedByName.setParentWithJump(background2);
		divider6.setParentWithJump(background2);
		category.setParentWithJump(background2);
		hashtag2.setParentWithJump(background2);
		kTweets.setParentWithJump(background2);
		arrow1.setParentWithJump(background2);
		divider7.setParentWithJump(background2);
		category1.setParentWithJump(background2);
		hashtag3.setParentWithJump(background2);
		kTweets1.setParentWithJump(background2);
		arrow2.setParentWithJump(background2);
		divider8.setParentWithJump(background2);
		showMore1.setParentWithJump(background2);

	// Lock Layers
		gear.locked = true;
		divider4.locked = true;
		arrow.locked = true;
		divider5.locked = true;
		divider6.locked = true;
		arrow1.locked = true;
		divider7.locked = true;
		arrow2.locked = true;
		divider8.locked = true;

}
// Working with comp "CENTER - 00 Page Header", varName "center00PageHeader_comp";
if (center00PageHeader_comp_populate === true) {
	var editProfileName = center00PageHeader_comp.layers.addBoxText([1427.27697753906,24], "Username");
		editProfileName.name = "Edit Profile Name";
		editProfileName.moveToEnd();
		var editProfileName_TextProp = editProfileName.property("ADBE Text Properties").property("ADBE Text Document");
		var editProfileName_TextDocument = editProfileName_TextProp.value;
			editProfileName_TextDocument.font = "HelveticaNeue-Bold";
			editProfileName_TextDocument.fontSize = 20;
			editProfileName_TextDocument.applyFill = true;
			editProfileName_TextDocument.fillColor = [1,1,1];
			editProfileName_TextDocument.applyStroke = false;
			editProfileName_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			editProfileName_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				editProfileName_TextDocument.verticalScale = 1;
				editProfileName_TextDocument.horizontalScale = 1;
				editProfileName_TextDocument.baselineShift = 0;
				editProfileName_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// editProfileName_TextDocument.fauxBold = false;
				// editProfileName_TextDocument.fauxItalic = false;
				// editProfileName_TextDocument.allCaps = false;
				// editProfileName_TextDocument.smallCaps = false;
				// editProfileName_TextDocument.superscript = false;
				// editProfileName_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				editProfileName_TextDocument.leading = 24;
				editProfileName_TextDocument.autoLeading = true;
			}
			editProfileName_TextProp.setValue(editProfileName_TextDocument);
		editProfileName.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-712.258483886719,-4.73021697998047,0]);
		editProfileName.property("ADBE Transform Group").property("ADBE Position").setValue([53.1370849609375,17.6031770706177,0]);
		editProfileName.selected = false;
	var tweets1 = center00PageHeader_comp.layers.addBoxText([84.6600036621094,17], "2,006 Tweets");
		tweets1.name = "2,006 Tweets";
		tweets1.moveToEnd();
		var tweets1_TextProp = tweets1.property("ADBE Text Properties").property("ADBE Text Document");
		var tweets1_TextDocument = tweets1_TextProp.value;
			tweets1_TextDocument.font = "Helvetica";
			tweets1_TextDocument.fontSize = 14;
			tweets1_TextDocument.applyFill = true;
			tweets1_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			tweets1_TextDocument.applyStroke = false;
			tweets1_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			tweets1_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				tweets1_TextDocument.verticalScale = 1;
				tweets1_TextDocument.horizontalScale = 1;
				tweets1_TextDocument.baselineShift = 0;
				tweets1_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// tweets1_TextDocument.fauxBold = false;
				// tweets1_TextDocument.fauxItalic = false;
				// tweets1_TextDocument.allCaps = false;
				// tweets1_TextDocument.smallCaps = false;
				// tweets1_TextDocument.superscript = false;
				// tweets1_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				tweets1_TextDocument.leading = 16.8000011444092;
				tweets1_TextDocument.autoLeading = true;
			}
			tweets1_TextProp.setValue(tweets1_TextDocument);
		tweets1.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-41.8925018310547,-2.416015625,0]);
		tweets1.property("ADBE Transform Group").property("ADBE Position").setValue([53.1370849609375,41.0000610351562,0]);
		tweets1.selected = false;
	// Add Shape Layer "Arrow", varName "arrow3";
	var arrow3 = center00PageHeader_comp.layers.addShape();
		arrow3.name = "Arrow";
		arrow3.label = 6;
		arrow3.moveToEnd();
		arrow3.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		arrow3.property("ADBE Root Vectors Group").property(1).name = "Vector";
		arrow3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		arrow3.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var arrow3Path = arrow3.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var arrow3Path_newShape = new Shape();
			arrow3Path_newShape.vertices = [[-5.08625793457031, -1.00006103515625], [7.499755859375, -1.00006103515625], [8.499755859375, -0.00006103515625], [7.499755859375, 0.99993896484375], [-5.08625793457031, 0.99993896484375], [-0.79324340820312, 5.29293823242188], [-0.79324340820312, 6.70693969726562], [-1.500244140625, 6.99993896484375], [-2.20724487304688, 6.70693969726562], [-8.20724487304688, 0.70693969726562], [-8.20724487304688, -0.70706176757812], [-2.20724487304688, -6.70706176757812], [-0.79324340820312, -6.70706176757812], [-0.79324340820312, -5.29306030273438]];
			arrow3Path_newShape.inTangents = [[0, 0], [0, 0], [0, -0.55299377441406], [0.55299377441406, 0], [0, 0], [0, 0], [0.38999938964844, -0.38999938964844], [0.25700378417969, 0], [0.19500732421875, 0.19500732421875], [0, 0], [-0.38999938964844, 0.38999938964844], [0, 0], [-0.38999938964844, -0.39100646972656], [0.38999938964844, -0.38999938964844]];
			arrow3Path_newShape.outTangents = [[0, 0], [0.55299377441406, 0], [0, 0.55299377441406], [0, 0], [0, 0], [0.38999938964844, 0.39100646972656], [-0.19500732421875, 0.19500732421875], [-0.25700378417969, 0], [0, 0], [-0.38999938964844, -0.39100646972656], [0, 0], [0.39100646972656, -0.38999938964844], [0.38999938964844, 0.39100646972656], [0, 0]];
			arrow3Path_newShape.closed = true;
		arrow3Path.setValue(arrow3Path_newShape);
		arrow3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		arrow3.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		arrow3.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.29411765933037,0.62745100259781,0.92549020051956,1]);
		arrow3.property("ADBE Transform Group").property("ADBE Position").setValue([22.249755859375,28.9999980926514,0]);
		arrow3.selected = false;
	// Add Shape Layer "Edge", varName "edge";
	var edge = center00PageHeader_comp.layers.addShape();
		edge.name = "Edge";
		edge.moveToEnd();
		edge.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		edge.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		edge.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		edge.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		edge.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([600,0]);
		edge.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Position").setValue([0,-1]);
		edge.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		edge.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		edge.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.22745098173618,0.26666668057442,0.29803922772408,1]);
		edge.property("ADBE Transform Group").property("ADBE Position").setValue([300,56,0]);
		edge.selected = false;
	// Add Shape Layer "Background", varName "background3";
	var background3 = center00PageHeader_comp.layers.addShape();
		background3.name = "Background";
		background3.moveToEnd();
		background3.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		background3.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		background3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		background3.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		background3.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([600,56]);
		background3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		background3.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		background3.property("ADBE Root Vectors Group").property(1).property(2).property(2).enabled = false;
		background3.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(0);
		background3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		background3.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		background3.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.09019607843137,0.12549019607843,0.16470588235294,1]);
		background3.selected = false;
	// Lock Layers
		edge.locked = true;
		background3.locked = true;

}
// Working with comp "CENTER - 01 Profile Header", varName "center01ProfileHeader_comp";
if (center01ProfileHeader_comp_populate === true) {
	// Add Shape Layer "More Circle", varName "moreCircle";
	var moreCircle = center01ProfileHeader_comp.layers.addShape();
		moreCircle.name = "More Circle";
		moreCircle.label = 3;
		moreCircle.moveToEnd();
		moreCircle.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		moreCircle.property("ADBE Root Vectors Group").property(1).name = "Ellipse 65";
		moreCircle.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		moreCircle.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var moreCirclePath = moreCircle.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var moreCirclePath_newShape = new Shape();
			moreCirclePath_newShape.vertices = [[0, -20], [20, 0], [0, 20], [-20, 0]];
			moreCirclePath_newShape.inTangents = [[-11.2359619140625, 0], [0, -11.2359619140625], [11.2359619140625, 0], [0, 11.2359619140625]];
			moreCirclePath_newShape.outTangents = [[11.2359619140625, 0], [0, 11.2359619140625], [-11.2359619140625, 0], [0, -11.2359619140625]];
			moreCirclePath_newShape.closed = true;
		moreCirclePath.setValue(moreCirclePath_newShape);
		moreCircle.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		moreCircle.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		moreCircle.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.29411765933037,0.62745100259781,0.92549020051956,1]);
		moreCircle.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(1);
		moreCircle.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		moreCircle.property("ADBE Root Vectors Group").property(2).name = "Vector";
		moreCircle.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Shape - Group");
		moreCircle.property("ADBE Root Vectors Group").property(2).property(2).property(1).name = "Path 1";
		var moreCirclePath3 = moreCircle.property("ADBE Root Vectors Group").property(2).property(2).property(1).property("ADBE Vector Shape");
		var moreCirclePath3_newShape = new Shape();
			moreCirclePath3_newShape.vertices = [[3.97579956054688, 0.00175476074219], [6.48878479003906, 2.5], [9, 0], [6.48703002929688, -2.49826049804688]];
			moreCirclePath3_newShape.inTangents = [[0, -1.37753295898438], [-1.38731384277344, 0], [0, 1.37753295898438], [1.38468933105469, 0]];
			moreCirclePath3_newShape.outTangents = [[0, 1.37753295898438], [1.38380432128906, 0], [0, -1.37753295898438], [-1.38468933105469, 0]];
			moreCirclePath3_newShape.closed = true;
		moreCirclePath3.setValue(moreCirclePath3_newShape);
		moreCircle.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Shape - Group");
		moreCircle.property("ADBE Root Vectors Group").property(2).property(2).property(2).name = "Path 2";
		var moreCirclePath5 = moreCircle.property("ADBE Root Vectors Group").property(2).property(2).property(2).property("ADBE Vector Shape");
		var moreCirclePath5_newShape = new Shape();
			moreCirclePath5_newShape.vertices = [[5.29287719726562, -0.00086975097656], [6.48878479003906, -1.18885803222656], [7.68292236328125, -0.00086975097656], [6.48703002929688, 1.18710327148438]];
			moreCirclePath5_newShape.inTangents = [[0, 0.65513610839844], [-0.65853881835938, 0], [0, -0.65513610839844], [0.65853881835938, 0]];
			moreCirclePath5_newShape.outTangents = [[0, -0.65513610839844], [0.65853881835938, 0], [0, 0.65513610839844], [-0.65853881835938, 0]];
			moreCirclePath5_newShape.closed = true;
		moreCirclePath5.setValue(moreCirclePath5_newShape);
		moreCircle.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Shape - Group");
		moreCircle.property("ADBE Root Vectors Group").property(2).property(2).property(3).name = "Path 3";
		var moreCirclePath7 = moreCircle.property("ADBE Root Vectors Group").property(2).property(2).property(3).property("ADBE Vector Shape");
		var moreCirclePath7_newShape = new Shape();
			moreCirclePath7_newShape.vertices = [[-2.51121520996094, 0.00175476074219], [0, 2.5], [0, 2.49826049804688], [2.51121520996094, -0.00175476074219], [0, -2.5]];
			moreCirclePath7_newShape.inTangents = [[0, -1.37753295898438], [-1.38555908203125, 0], [0, 0], [0, 1.37840270996094], [1.38731384277344, 0]];
			moreCirclePath7_newShape.outTangents = [[0, 1.37753295898438], [0, 0], [1.38555908203125, 0], [0, -1.37840270996094], [-1.38731384277344, 0]];
			moreCirclePath7_newShape.closed = true;
		moreCirclePath7.setValue(moreCirclePath7_newShape);
		moreCircle.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Shape - Group");
		moreCircle.property("ADBE Root Vectors Group").property(2).property(2).property(4).name = "Path 4";
		var moreCirclePath9 = moreCircle.property("ADBE Root Vectors Group").property(2).property(2).property(4).property("ADBE Vector Shape");
		var moreCirclePath9_newShape = new Shape();
			moreCirclePath9_newShape.vertices = [[-1.19415283203125, -0.00086975097656], [0, -1.18885803222656], [0, -1.18972778320312], [1.19415283203125, 0.00086975097656], [0, 1.18885803222656]];
			moreCirclePath9_newShape.inTangents = [[0, 0.65513610839844], [-0.65853881835938, 0], [0, 0], [0, -0.65513610839844], [0.65853881835938, 0]];
			moreCirclePath9_newShape.outTangents = [[0, -0.65513610839844], [0, 0], [0.65853881835938, 0], [0, 0.65513610839844], [-0.65853881835938, 0]];
			moreCirclePath9_newShape.closed = true;
		moreCirclePath9.setValue(moreCirclePath9_newShape);
		moreCircle.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Shape - Group");
		moreCircle.property("ADBE Root Vectors Group").property(2).property(2).property(5).name = "Path 5";
		var moreCirclePath11 = moreCircle.property("ADBE Root Vectors Group").property(2).property(2).property(5).property("ADBE Vector Shape");
		var moreCirclePath11_newShape = new Shape();
			moreCirclePath11_newShape.vertices = [[-9, 0.00175476074219], [-6.48878479003906, 2.5], [-6.48703002929688, 2.5], [-3.97579956054688, 0], [-6.48878479003906, -2.49826049804688]];
			moreCirclePath11_newShape.inTangents = [[0, -1.37753295898438], [-1.38468933105469, 0], [0, 0], [0, 1.37753295898438], [1.38380432128906, 0]];
			moreCirclePath11_newShape.outTangents = [[0, 1.37753295898438], [0, 0], [1.38468933105469, 0], [0, -1.37753295898438], [-1.38380432128906, 0]];
			moreCirclePath11_newShape.closed = true;
		moreCirclePath11.setValue(moreCirclePath11_newShape);
		moreCircle.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Shape - Group");
		moreCircle.property("ADBE Root Vectors Group").property(2).property(2).property(6).name = "Path 6";
		var moreCirclePath13 = moreCircle.property("ADBE Root Vectors Group").property(2).property(2).property(6).property("ADBE Vector Shape");
		var moreCirclePath13_newShape = new Shape();
			moreCirclePath13_newShape.vertices = [[-7.68292236328125, -0.00086975097656], [-6.48878479003906, -1.18885803222656], [-6.48703002929688, -1.18885803222656], [-5.29287719726562, -0.00086975097656], [-6.48878479003906, 1.18710327148438]];
			moreCirclePath13_newShape.inTangents = [[0, 0.65513610839844], [-0.65853881835938, 0], [0, 0], [0, -0.65513610839844], [0.65853881835938, 0]];
			moreCirclePath13_newShape.outTangents = [[0, -0.65513610839844], [0, 0], [0.65853881835938, 0], [0, 0.65513610839844], [-0.65853881835938, 0]];
			moreCirclePath13_newShape.closed = true;
		moreCirclePath13.setValue(moreCirclePath13_newShape);
		moreCircle.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Filter - Merge");
		moreCircle.property("ADBE Root Vectors Group").property(2).property(2).property(7).name = "Merge Paths 1";
		moreCircle.property("ADBE Root Vectors Group").property(2).property(2).property(7).property("ADBE Vector Merge Type").setValue(5);
		moreCircle.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Graphic - Fill");
		moreCircle.property("ADBE Root Vectors Group").property(2).property(2).property(8).name = "Fill 1";
		moreCircle.property("ADBE Root Vectors Group").property(2).property(2).property(8).property("ADBE Vector Fill Color").setValue([0.29411765933037,0.62745100259781,0.92549020051956,1]);
		moreCircle.property("ADBE Root Vectors Group").property(2).property(3).property("ADBE Vector Position").setValue([0,0.25]);
		moreCircle.property("ADBE Transform Group").property("ADBE Position").setValue([404.5,228,0]);
		moreCircle.selected = false;
	// Add Shape Layer "Bell Circle", varName "bellCircle";
	var bellCircle = center01ProfileHeader_comp.layers.addShape();
		bellCircle.name = "Bell Circle";
		bellCircle.label = 3;
		bellCircle.moveToEnd();
		bellCircle.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		bellCircle.property("ADBE Root Vectors Group").property(1).name = "Ellipse 66";
		bellCircle.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		bellCircle.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var bellCirclePath = bellCircle.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var bellCirclePath_newShape = new Shape();
			bellCirclePath_newShape.vertices = [[0, -20], [20, 0], [0, 20], [-20, 0]];
			bellCirclePath_newShape.inTangents = [[-11.2359619140625, 0], [0, -11.2359619140625], [11.2359619140625, 0], [0, 11.2359619140625]];
			bellCirclePath_newShape.outTangents = [[11.2359619140625, 0], [0, 11.2359619140625], [-11.2359619140625, 0], [0, -11.2359619140625]];
			bellCirclePath_newShape.closed = true;
		bellCirclePath.setValue(bellCirclePath_newShape);
		bellCircle.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		bellCircle.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		bellCircle.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.29411765933037,0.62745100259781,0.92549020051956,1]);
		bellCircle.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(1);
		bellCircle.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		bellCircle.property("ADBE Root Vectors Group").property(2).name = "Vector";
		bellCircle.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Shape - Group");
		bellCircle.property("ADBE Root Vectors Group").property(2).property(2).property(1).name = "Path 1";
		var bellCirclePath3 = bellCircle.property("ADBE Root Vectors Group").property(2).property(2).property(1).property("ADBE Vector Shape");
		var bellCirclePath3_newShape = new Shape();
			bellCirclePath3_newShape.vertices = [[8.07705688476562, -7.09745788574219], [10.308837890625, -7.09745788574219], [10.3097534179688, -7.09745788574219], [11, -6.41246032714844], [10.3097534179688, -5.72746276855469], [8.07797241210938, -5.72746276855469], [8.07797241210938, -3.51356506347656], [7.38772583007812, -2.82856750488281], [6.69747924804688, -3.51356506347656], [6.69747924804688, -5.72746276855469], [4.46478271484375, -5.72746276855469], [3.7745361328125, -6.41246032714844], [4.46478271484375, -7.09745788574219], [6.69656372070312, -7.09745788574219], [6.69656372070312, -9.31500244140625], [7.38681030273438, -10], [8.07705688476562, -9.31500244140625]];
			bellCirclePath3_newShape.inTangents = [[0, 0], [0, 0], [0, 0], [0, -0.377197265625], [0.38192749023438, 0], [0, 0], [0, 0], [0.38101196289062, 0], [0, 0.37811279296875], [0, 0], [0, 0], [0, 0.3790283203125], [-0.38101196289062, 0], [0, 0], [0, 0], [-0.38101196289062, 0], [0, -0.37811279296875]];
			bellCirclePath3_newShape.outTangents = [[0, 0], [0, 0], [0.38101196289062, 0], [0, 0.377197265625], [0, 0], [0, 0], [0, 0.37811279296875], [-0.38101196289062, 0], [0, 0], [0, 0], [-0.38101196289062, 0], [0, -0.3790283203125], [0, 0], [0, 0], [0, -0.37811279296875], [0.38101196289062, 0], [0, 0]];
			bellCirclePath3_newShape.closed = true;
		bellCirclePath3.setValue(bellCirclePath3_newShape);
		bellCircle.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Shape - Group");
		bellCircle.property("ADBE Root Vectors Group").property(2).property(2).property(2).name = "Path 2";
		var bellCirclePath5 = bellCircle.property("ADBE Root Vectors Group").property(2).property(2).property(2).property("ADBE Vector Shape");
		var bellCirclePath5_newShape = new Shape();
			bellCirclePath5_newShape.vertices = [[2.49711608886719, -5.71284484863281], [4.57521057128906, -0.15069580078125], [4.57429504394531, -0.151611328125], [6.42230224609375, 5.10914611816406], [6.656982421875, 5.87451171875], [6.00631713867188, 6.34030151367188], [1.74981689453125, 6.34030151367188], [-2.11001586914062, 10], [-5.96986389160156, 6.34030151367188], [-10.3101196289062, 6.34030151367188], [-10.9653930664062, 5.86994934082031], [-10.7205810546875, 5.10458374023438], [-8.87992858886719, -0.1497802734375], [-6.80276489257812, -5.71376037597656], [-2.15879821777344, -7.62443542480469], [-2.14683532714844, -7.62443542480469]];
			bellCirclePath5_newShape.inTangents = [[-1.218505859375, -1.22567749023438], [0.01840209960938, -2.22303771972656], [0, 0], [-0.07546997070312, -0.05845642089844], [0.09478759765625, -0.27764892578125], [0.29450988769531, 0], [0, 0], [2.07441711425781, 0], [0.10124206542969, 2.03306579589844], [0, 0], [0.0938720703125, 0.28131103515625], [-0.23928833007812, 0.17626953125], [0.03312683105469, 3.7747802734375], [-1.35748291015625, 1.36541748046875], [-1.77622985839844, 0.00914001464844], [0, 0]];
			bellCirclePath5_newShape.outTangents = [[1.3583984375, 1.36360168457031], [0, 0], [-0.03221130371094, 3.77659606933594], [0.23468017578125, 0.1781005859375], [-0.09478759765625, 0.27764892578125], [0, 0], [-0.10215759277344, 2.03398132324219], [-2.07441711425781, 0], [0, 0], [-0.29634094238281, 0], [-0.09295654296875, -0.28131103515625], [0.07086181640625, -0.05479431152344], [-0.01840209960938, -2.22303771972656], [1.218505859375, -1.22567749023438], [0, 0], [1.77622985839844, 0.00822448730469]];
			bellCirclePath5_newShape.closed = true;
		bellCirclePath5.setValue(bellCirclePath5_newShape);
		bellCircle.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Shape - Group");
		bellCircle.property("ADBE Root Vectors Group").property(2).property(2).property(3).name = "Path 3";
		var bellCirclePath7 = bellCircle.property("ADBE Root Vectors Group").property(2).property(2).property(3).property("ADBE Vector Shape");
		var bellCirclePath7_newShape = new Shape();
			bellCirclePath7_newShape.vertices = [[-4.59030151367188, 6.33938598632812], [-2.11094665527344, 8.6300048828125], [-2.11094665527344, 8.62910461425781], [0.368408203125, 6.33938598632812]];
			bellCirclePath7_newShape.inTangents = [[0, 0], [-1.3123779296875, 0], [0, 0], [-0.09939575195312, 1.27865600585938]];
			bellCirclePath7_newShape.outTangents = [[0.09939575195312, 1.27682495117188], [0, 0], [1.3123779296875, 0], [0, 0]];
			bellCirclePath7_newShape.closed = true;
		bellCirclePath7.setValue(bellCirclePath7_newShape);
		bellCircle.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Shape - Group");
		bellCircle.property("ADBE Root Vectors Group").property(2).property(2).property(4).name = "Path 4";
		var bellCirclePath9 = bellCircle.property("ADBE Root Vectors Group").property(2).property(2).property(4).property("ADBE Vector Shape");
		var bellCirclePath9_newShape = new Shape();
			bellCirclePath9_newShape.vertices = [[-7.5003662109375, -0.16075134277344], [-8.82011413574219, 4.97032165527344], [-8.82011413574219, 4.97032165527344], [4.51539611816406, 4.97032165527344], [3.19288635253906, -0.16075134277344], [1.51513671875, -4.75019836425781], [-2.15235900878906, -6.2535400390625], [-5.82077026367188, -4.75019836425781]];
			bellCirclePath9_newShape.inTangents = [[-0.01564025878906, -1.88327026367188], [0.64607238769531, -1.00009155273438], [0, 0], [0, 0], [-0.02024841308594, 2.478759765625], [1.11358642578125, 1.11973571777344], [1.40533447265625, 0.00639343261719], [0.95989990234375, -0.9644775390625]];
			bellCirclePath9_newShape.outTangents = [[0.02116394042969, 2.478759765625], [0, 0], [0, 0], [-0.64883422851562, -1.00009155273438], [0.01564025878906, -1.88327026367188], [-0.958984375, -0.9644775390625], [-1.40625, 0.00547790527344], [-1.11451721191406, 1.11882019042969]];
			bellCirclePath9_newShape.closed = true;
		bellCirclePath9.setValue(bellCirclePath9_newShape);
		bellCircle.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Filter - Merge");
		bellCircle.property("ADBE Root Vectors Group").property(2).property(2).property(5).name = "Merge Paths 1";
		bellCircle.property("ADBE Root Vectors Group").property(2).property(2).property(5).property("ADBE Vector Merge Type").setValue(5);
		bellCircle.property("ADBE Root Vectors Group").property(2).property(2).addProperty("ADBE Vector Graphic - Fill");
		bellCircle.property("ADBE Root Vectors Group").property(2).property(2).property(6).name = "Fill 1";
		bellCircle.property("ADBE Root Vectors Group").property(2).property(2).property(6).property("ADBE Vector Fill Color").setValue([0.29411765933037,0.62745100259781,0.92549020051956,1]);
		bellCircle.property("ADBE Root Vectors Group").property(2).property(3).property("ADBE Vector Position").setValue([0,-0.625]);
		bellCircle.property("ADBE Transform Group").property("ADBE Position").setValue([452.5,228,0]);
		bellCircle.selected = false;
	var following = center01ProfileHeader_comp.layers.addBoxText([72.4199981689453,18], "Following");
		following.name = "Following";
		following.label = 3;
		following.moveToEnd();
		var following_TextProp = following.property("ADBE Text Properties").property("ADBE Text Document");
		var following_TextDocument = following_TextProp.value;
			following_TextDocument.font = "HelveticaNeue-Bold";
			following_TextDocument.fontSize = 15;
			following_TextDocument.applyFill = true;
			following_TextDocument.fillColor = [1,1,1];
			following_TextDocument.applyStroke = false;
			following_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			following_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				following_TextDocument.verticalScale = 1;
				following_TextDocument.horizontalScale = 1;
				following_TextDocument.baselineShift = 0;
				following_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// following_TextDocument.fauxBold = false;
				// following_TextDocument.fauxItalic = false;
				// following_TextDocument.allCaps = false;
				// following_TextDocument.smallCaps = false;
				// following_TextDocument.superscript = false;
				// following_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				following_TextDocument.leading = 18;
				following_TextDocument.autoLeading = true;
			}
			following_TextProp.setValue(following_TextDocument);
		following.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0.11260223388672,-3.54766082763672,0]);
		following.property("ADBE Transform Group").property("ADBE Position").setValue([0,0,0]);
		following.selected = false;
	// Add Shape Layer "Following Button", varName "followingButton";
	var followingButton = center01ProfileHeader_comp.layers.addShape();
		followingButton.name = "Following Button";
		followingButton.label = 3;
		followingButton.moveToEnd();
		followingButton.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		followingButton.property("ADBE Root Vectors Group").property(1).name = "Rectangle 148";
		followingButton.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		followingButton.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var followingButtonPath = followingButton.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var followingButtonPath_newShape = new Shape();
			followingButtonPath_newShape.vertices = [[-52.5, -20], [52.5, -20], [52.5, 20], [-52.5, 20]];
			followingButtonPath_newShape.closed = true;
		followingButtonPath.setValue(followingButtonPath_newShape);
		followingButton.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - RC");
		followingButton.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Round Corners 1";
		followingButton.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector RoundCorner Radius").setValue(20);
		followingButton.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		followingButton.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		followingButton.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.29411765933037,0.62745100259781,0.92549020051956,1]);
		followingButton.property("ADBE Transform Group").property("ADBE Position").setValue([534,228,0]);
		followingButton.selected = false;
	// Add Shape Layer "Profile Image Outline", varName "profileImageOutline";
	var profileImageOutline = center01ProfileHeader_comp.layers.addShape();
		profileImageOutline.name = "Profile Image Outline";
		profileImageOutline.label = 7;
		profileImageOutline.moveToEnd();
		profileImageOutline.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		profileImageOutline.property("ADBE Root Vectors Group").property(1).name = "Ellipse 57";
		profileImageOutline.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		profileImageOutline.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var profileImageOutlinePath = profileImageOutline.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var profileImageOutlinePath_newShape = new Shape();
			profileImageOutlinePath_newShape.vertices = [[0, -67], [67, 0], [0, 67], [-67, 0]];
			profileImageOutlinePath_newShape.inTangents = [[-37.6404418945312, 0], [0, -37.6404418945312], [37.6404418945312, 0], [0, 37.6404418945312]];
			profileImageOutlinePath_newShape.outTangents = [[37.6404418945312, 0], [0, 37.6404418945312], [-37.6404418945312, 0], [0, -37.6404418945312]];
			profileImageOutlinePath_newShape.closed = true;
		profileImageOutlinePath.setValue(profileImageOutlinePath_newShape);
		profileImageOutline.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		profileImageOutline.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		profileImageOutline.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.09019608050585,0.12549020349979,0.16470588743687,1]);
		profileImageOutline.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(3);
		profileImageOutline.property("ADBE Transform Group").property("ADBE Position").setValue([83,190,0]);
		profileImageOutline.selected = false;
	// Add Shape Layer "▨ PROFILE IMAGE 2", varName "profileImage2";
	var profileImage2 = center01ProfileHeader_comp.layers.addShape();
		profileImage2.name = File.decode("%E2%96%A8%20PROFILE%20IMAGE%202");
		profileImage2.label = 3;
		profileImage2.enabled = false;
		profileImage2.shy = true;
		profileImage2.moveToEnd();
		profileImage2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		profileImage2.property("ADBE Root Vectors Group").property(1).name = "PROFILE IMAGE";
		profileImage2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		profileImage2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var profileImage2Path = profileImage2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var profileImage2Path_newShape = new Shape();
			profileImage2Path_newShape.vertices = [[0, -67], [67, 0], [0, 67], [-67, 0]];
			profileImage2Path_newShape.inTangents = [[-37.6404418945312, 0], [0, -37.6404418945312], [37.6404418945312, 0], [0, 37.6404418945312]];
			profileImage2Path_newShape.outTangents = [[37.6404418945312, 0], [0, 37.6404418945312], [-37.6404418945312, 0], [0, -37.6404418945312]];
			profileImage2Path_newShape.closed = true;
		profileImage2Path.setValue(profileImage2Path_newShape);
		profileImage2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		profileImage2.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		profileImage2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.76862746477127,0.76862746477127,0.76862746477127,1]);
		profileImage2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Graphic - Fill");
		profileImage2.property("ADBE Root Vectors Group").property(2).name = "Fill 1";
		profileImage2.property("ADBE Transform Group").property("ADBE Position").setValue([83,190,0]);
		profileImage2.effectsActive = false;
		profileImage2.selected = false;
	// Add existing composition "Avatar Image", varName "avatarImage_comp";
	var avatarImage2 = center01ProfileHeader_comp.layers.add(avatarImage_comp);
		avatarImage2.moveToEnd();
		avatarImage2.trackMatteType = TrackMatteType.ALPHA;
		avatarImage2.property("ADBE Transform Group").property("ADBE Position").setValue([83,190,0]);
		avatarImage2.property("ADBE Transform Group").property("ADBE Scale").setValue([22.8333333333333,22.8333333333333,100]);
		avatarImage2.selected = false;
	var profileName = center01ProfileHeader_comp.layers.addText("Username");
		profileName.name = "Profile Name";
		profileName.label = 3;
		profileName.moveToEnd();
		var profileName_TextProp = profileName.property("ADBE Text Properties").property("ADBE Text Document");
		var profileName_TextDocument = profileName_TextProp.value;
			profileName_TextDocument.font = "HelveticaNeue-Bold";
			profileName_TextDocument.fontSize = 20;
			profileName_TextDocument.applyFill = true;
			profileName_TextDocument.fillColor = [1,1,1];
			profileName_TextDocument.applyStroke = false;
			profileName_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			profileName_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				profileName_TextDocument.verticalScale = 1;
				profileName_TextDocument.horizontalScale = 1;
				profileName_TextDocument.baselineShift = 0;
				profileName_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// profileName_TextDocument.fauxBold = false;
				// profileName_TextDocument.fauxItalic = false;
				// profileName_TextDocument.allCaps = false;
				// profileName_TextDocument.smallCaps = false;
				// profileName_TextDocument.superscript = false;
				// profileName_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				profileName_TextDocument.leading = 24;
				profileName_TextDocument.autoLeading = true;
			}
			profileName_TextProp.setValue(profileName_TextDocument);
		profileName.property("ADBE Transform Group").property("ADBE Position").setValue([13.6799697875977,279.613118126988,0]);
		profileName.selected = false;
	var name9 = center01ProfileHeader_comp.layers.addText("@TwitterHandle");
		name9.name = "@Name";
		name9.label = 3;
		name9.moveToEnd();
		var name9_TextProp = name9.property("ADBE Text Properties").property("ADBE Text Document");
		var name9_TextDocument = name9_TextProp.value;
			name9_TextDocument.font = "Helvetica";
			name9_TextDocument.fontSize = 16;
			name9_TextDocument.applyFill = true;
			name9_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			name9_TextDocument.applyStroke = false;
			name9_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			name9_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				name9_TextDocument.verticalScale = 1;
				name9_TextDocument.horizontalScale = 1;
				name9_TextDocument.baselineShift = 0;
				name9_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// name9_TextDocument.fauxBold = false;
				// name9_TextDocument.fauxItalic = false;
				// name9_TextDocument.allCaps = false;
				// name9_TextDocument.smallCaps = false;
				// name9_TextDocument.superscript = false;
				// name9_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				name9_TextDocument.leading = 19.2000007629395;
				name9_TextDocument.autoLeading = true;
			}
			name9_TextProp.setValue(name9_TextDocument);
		name9.property("ADBE Transform Group").property("ADBE Position").setValue([13.2421875,301.25,0]);
		name9.selected = false;
	var loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe = center01ProfileHeader_comp.layers.addBoxText([568.140014648438,51], "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the.");
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe.name = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the.";
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe.label = 3;
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe.moveToEnd();
		var loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe_TextProp = loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe.property("ADBE Text Properties").property("ADBE Text Document");
		var loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe_TextDocument = loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe_TextProp.value;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe_TextDocument.font = "Helvetica";
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe_TextDocument.fontSize = 16;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe_TextDocument.applyFill = true;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe_TextDocument.fillColor = [1,1,1];
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe_TextDocument.applyStroke = false;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe_TextDocument.verticalScale = 1;
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe_TextDocument.horizontalScale = 1;
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe_TextDocument.baselineShift = 0;
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe_TextDocument.fauxBold = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe_TextDocument.fauxItalic = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe_TextDocument.allCaps = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe_TextDocument.smallCaps = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe_TextDocument.superscript = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe_TextDocument.leading = 18.8479995727539;
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe_TextDocument.autoLeading = false;
			}
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe_TextProp.setValue(loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe_TextDocument);
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe.property("ADBE Transform Group").property("ADBE Position").setValue([297.851257324219,343.041656494141,0]);
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysStandardDummyTextEverSinceThe.selected = false;
	// Add Shape Layer "Location Icon", varName "locationIcon";
	var locationIcon = center01ProfileHeader_comp.layers.addShape();
		locationIcon.name = "Location Icon";
		locationIcon.label = 3;
		locationIcon.moveToEnd();
		locationIcon.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		locationIcon.property("ADBE Root Vectors Group").property(1).name = "Union";
		locationIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Group");
		locationIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Vector";
		locationIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		locationIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).name = "Path 1";
		var locationIconPath = locationIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).property("ADBE Vector Shape");
		var locationIconPath_newShape = new Shape();
			locationIconPath_newShape.vertices = [[-3.02963256835938, 0.00120544433594], [0, 3.03004455566406], [0, 3.02763366699219], [3.02963256835938, -0.00039672851562], [0, -3.03004455566406]];
			locationIconPath_newShape.inTangents = [[0, -1.67042541503906], [-1.67042541503906, 0], [0, 0], [0, 1.66961669921875], [1.66961669921875, 0]];
			locationIconPath_newShape.outTangents = [[0, 1.67042541503906], [0, 0], [1.66961669921875, 0], [0, -1.66961669921875], [-1.66961669921875, 0]];
			locationIconPath_newShape.closed = true;
		locationIconPath.setValue(locationIconPath_newShape);
		locationIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		locationIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).name = "Path 2";
		var locationIconPath3 = locationIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Shape");
		var locationIconPath3_newShape = new Shape();
			locationIconPath3_newShape.vertices = [[-1.82962036132812, 0.00120544433594], [0, -1.82841491699219], [0, -1.83001708984375], [1.82962036132812, 0.00039672851562], [0, 1.8292236328125]];
			locationIconPath3_newShape.inTangents = [[0, 1.00881958007812], [-1.00801086425781, 0], [0, 0], [0, -1.00881958007812], [1.00801086425781, 0]];
			locationIconPath3_newShape.outTangents = [[0, -1.00881958007812], [0, 0], [1.00801086425781, 0], [0, 1.00881958007812], [-1.00801086425781, 0]];
			locationIconPath3_newShape.closed = true;
		locationIconPath3.setValue(locationIconPath3_newShape);
		locationIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		locationIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).name = "Merge Paths 1";
		locationIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		locationIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(3).property("ADBE Vector Position").setValue([-3.92404747009277,-4.97046089172363]);
		locationIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Group");
		locationIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Vector";
		locationIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).addProperty("ADBE Vector Shape - Group");
		locationIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(1).name = "Path 1";
		var locationIconPath5 = locationIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(1).property("ADBE Vector Shape");
		var locationIconPath5_newShape = new Shape();
			locationIconPath5_newShape.vertices = [[0, -8.00050354003906], [6.95368957519531, -1.04841613769531], [6.95368957519531, -1.04681396484375], [5.56007385253906, 3.13163757324219], [5.5584716796875, 3.13003540039062], [5.55287170410156, 3.1412353515625], [0.372802734375, 7.87089538574219], [0.00080871582031, 8.00050354003906], [-0.37120056152344, 7.87010192871094], [-5.55126953125, 3.14044189453125], [-5.55686950683594, 3.12843322753906], [-5.55926513671875, 3.13003540039062], [-6.95368957519531, -1.04841613769531]];
			locationIconPath5_newShape.inTangents = [[-3.83364868164062, 0], [0, -3.83204650878906], [0, 0], [0.91201782226562, -1.21281433105469], [0, 0], [0, 0], [0.15760803222656, -0.12400817871094], [0.13040161132812, 0], [0.11039733886719, 0.08799743652344], [1.30241394042969, 1.65602111816406], [0, 0], [0, 0], [0, 1.52162170410156]];
			locationIconPath5_newShape.outTangents = [[3.83364868164062, 0], [0, 0], [0, 1.52241516113281], [0, 0], [0, 0], [-1.30241394042969, 1.65762329101562], [-0.11039733886719, 0.08720397949219], [-0.13040161132812, 0], [-0.15760803222656, -0.12400817871094], [0, 0], [0, 0], [-0.91201782226562, -1.21202087402344], [0, -3.83204650878906]];
			locationIconPath5_newShape.closed = true;
		locationIconPath5.setValue(locationIconPath5_newShape);
		locationIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).addProperty("ADBE Vector Shape - Group");
		locationIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(2).name = "Path 2";
		var locationIconPath7 = locationIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(2).property("ADBE Vector Shape");
		var locationIconPath7_newShape = new Shape();
			locationIconPath7_newShape.vertices = [[-4.6048583984375, 2.40362548828125], [0, 6.63168334960938], [0, 6.63008117675781], [4.6048583984375, 2.40202331542969], [5.753662109375, -1.04841613769531], [0, -6.80047607421875], [-5.753662109375, -1.04600524902344]];
			locationIconPath7_newShape.inTangents = [[-0.75201416015625, -1.00001525878906], [-0.97921752929688, -0.79200744628906], [0, 0], [-0.98881530761719, 1.25601196289062], [0, 1.25601196289062], [3.17204284667969, 0], [0, -3.17283630371094]];
			locationIconPath7_newShape.outTangents = [[0.98881530761719, 1.25601196289062], [0, 0], [0.97921752929688, -0.79281616210938], [0.75120544433594, -1.00080871582031], [0, -3.17123413085938], [-3.17204284667969, 0], [0, 1.25601196289062]];
			locationIconPath7_newShape.closed = true;
		locationIconPath7.setValue(locationIconPath7_newShape);
		locationIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).addProperty("ADBE Vector Filter - Merge");
		locationIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(3).name = "Merge Paths 1";
		locationIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		locationIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property(3).property("ADBE Vector Position").setValue([0.00017142295837,1.17842245101929]);
		locationIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		locationIcon.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		locationIcon.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		locationIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		locationIcon.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		locationIcon.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		locationIcon.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0.58859252929688,0]);
		locationIcon.property("ADBE Transform Group").property("ADBE Position").setValue([21.9536743164062,372.75,0]);
		locationIcon.selected = false;
	var cityCountry = center01ProfileHeader_comp.layers.addBoxText([94.8600006103516,19], "City, Country");
		cityCountry.name = "City, Country";
		cityCountry.moveToEnd();
		var cityCountry_TextProp = cityCountry.property("ADBE Text Properties").property("ADBE Text Document");
		var cityCountry_TextDocument = cityCountry_TextProp.value;
			cityCountry_TextDocument.font = "Helvetica";
			cityCountry_TextDocument.fontSize = 16;
			cityCountry_TextDocument.applyFill = true;
			cityCountry_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			cityCountry_TextDocument.applyStroke = false;
			cityCountry_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			cityCountry_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				cityCountry_TextDocument.verticalScale = 1;
				cityCountry_TextDocument.horizontalScale = 1;
				cityCountry_TextDocument.baselineShift = 0;
				cityCountry_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// cityCountry_TextDocument.fauxBold = false;
				// cityCountry_TextDocument.fauxItalic = false;
				// cityCountry_TextDocument.allCaps = false;
				// cityCountry_TextDocument.smallCaps = false;
				// cityCountry_TextDocument.superscript = false;
				// cityCountry_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				cityCountry_TextDocument.leading = 19.2000007629395;
				cityCountry_TextDocument.autoLeading = true;
			}
			cityCountry_TextProp.setValue(cityCountry_TextDocument);
		cityCountry.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-46.7268829345703,-2.17578125,0]);
		cityCountry.property("ADBE Transform Group").property("ADBE Position").setValue([13.3194427490234,1.99038696289062,0]);
		cityCountry.selected = false;
	// Add Shape Layer "Website icon", varName "websiteIcon";
	var websiteIcon = center01ProfileHeader_comp.layers.addShape();
		websiteIcon.name = "Website icon";
		websiteIcon.label = 3;
		websiteIcon.moveToEnd();
		websiteIcon.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		websiteIcon.property("ADBE Root Vectors Group").property(1).name = "Union";
		websiteIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		websiteIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var websiteIconPath = websiteIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var websiteIconPath_newShape = new Shape();
			websiteIconPath_newShape.vertices = [[-0.181396484375, 2.31143188476562], [-0.0184326171875, 2.33311462402344], [-0.02003479003906, 2.334716796875], [0.55958557128906, 1.89558410644531], [0.14212036132812, 1.15058898925781], [-1.45704650878906, 0.04515075683594], [-2.01097106933594, -2.18501281738281], [-0.82684326171875, -4.15187072753906], [2.00701904296875, -6.24555969238281], [6.20564270019531, -5.61616516113281], [6.75956726074219, -3.38600158691406], [5.57464599609375, -1.41915893554688], [4.38650512695312, -0.54010009765625], [4.25965881347656, 0.30284118652344], [5.10260009765625, 0.4296875], [6.29074096679688, -0.44857788085938], [7.9525146484375, -3.20858764648438], [7.17622375488281, -6.33547973632812], [1.29173278808594, -7.21855163574219], [-1.54214477539062, -5.12486267089844], [-3.20231628417969, -2.36485290527344], [-2.42521667480469, 0.76043701171875]];
			websiteIconPath_newShape.inTangents = [[-0.90716552734375, -0.25529479980469], [-0.05378723144531, 0], [0, 0], [-0.0738525390625, 0.26492309570312], [0.32112121582031, 0.09152221679688], [0.39979553222656, 0.54188537597656], [-0.12042236328125, 0.79476928710938], [-0.64384460449219, 0.47605895996094], [0, 0], [-0.98342895507812, -1.32942199707031], [0.11882019042969, -0.79316711425781], [0.64463806152344, -0.47525024414062], [0, 0], [-0.19749450683594, -0.26812744140625], [-0.267333984375, 0.19749450683594], [0, 0], [-0.16697692871094, 1.11187744140625], [0.66632080078125, 0.90475463867188], [1.86408996582031, -1.37759399414062], [0, 0], [0.16697692871094, -1.11187744140625], [-0.66792297363281, -0.90313720703125]];
			websiteIconPath_newShape.outTangents = [[0.05378723144531, 0.01364135742188], [0, 0], [0.26332092285156, 0], [0.09071350097656, -0.32112121582031], [-0.64625549316406, -0.18223571777344], [-0.47605895996094, -0.64463806152344], [0.11961364746094, -0.79154968261719], [0, 0], [1.33103942871094, -0.98422241210938], [0.47525024414062, 0.64463806152344], [-0.11961364746094, 0.7923583984375], [0, 0], [-0.26812744140625, 0.19749450683594], [0.19749450683594, 0.267333984375], [0, 0], [0.90475463867188, -0.66873168945312], [0.16697692871094, -1.11187744140625], [-1.38081359863281, -1.86569213867188], [0, 0], [-0.90394592285156, 0.66873168945312], [-0.16697692871094, 1.11187744140625], [0.56034851074219, 0.75944519042969]];
			websiteIconPath_newShape.closed = true;
		websiteIconPath.setValue(websiteIconPath_newShape);
		websiteIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		websiteIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var websiteIconPath3 = websiteIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var websiteIconPath3_newShape = new Shape();
			websiteIconPath3_newShape.vertices = [[-7.17535400390625, 6.334228515625], [-3.78353881835938, 8.04017639160156], [-3.78434753417969, 8.03857421875], [-1.29165649414062, 7.21490478515625], [1.54220581054688, 5.1212158203125], [2.42527770996094, -0.76327514648438], [0.18226623535156, -2.31428527832031], [-0.56111145019531, -1.89521789550781], [-0.14366149902344, -1.15103149414062], [1.45550537109375, -0.04638671875], [0.82530212402344, 4.15223693847656], [-2.0069580078125, 6.24592590332031], [-6.20556640625, 5.61573791503906], [-6.75950622558594, 3.38555908203125], [-5.57537841796875, 1.41871643066406], [-4.38723754882812, 0.53965759277344], [-4.26119995117188, -0.30328369140625], [-5.10414123535156, -0.43011474609375], [-6.29066467285156, 0.44813537597656], [-7.95245361328125, 3.20814514160156]];
			websiteIconPath3_newShape.inTangents = [[-0.66792297363281, -0.90475463867188], [-1.29249572753906, 0], [0, 0], [-0.74900817871094, 0.55633544921875], [0, 0], [1.37840270996094, 1.86569213867188], [0.90716552734375, 0.25529479980469], [0.08992004394531, -0.32112121582031], [-0.32112121582031, -0.09071350097656], [-0.39979553222656, -0.54107666015625], [1.33103942871094, -0.98342895507812], [0, 0], [0.98342895507812, 1.33023071289062], [-0.11882019042969, 0.79476928710938], [-0.64463806152344, 0.47605895996094], [0, 0], [0.19668579101562, 0.267333984375], [0.26812744140625, -0.19668579101562], [0, 0], [0.16697692871094, -1.11106872558594]];
			websiteIconPath3_newShape.outTangents = [[0.82527160644531, 1.11589050292969], [0, 0], [0.86862182617188, 0], [0, 0], [1.86569213867188, -1.37919616699219], [-0.56034851074219, -0.75944519042969], [-0.31951904296875, -0.08670043945312], [-0.09071350097656, 0.32112121582031], [0.64625549316406, 0.18142700195312], [0.98342895507812, 1.3326416015625], [0, 0], [-1.3326416015625, 0.98342895507812], [-0.47605895996094, -0.64463806152344], [0.11961364746094, -0.79154968261719], [0, 0], [0.26812744140625, -0.19749450683594], [-0.19668579101562, -0.267333984375], [0, 0], [-0.90475463867188, 0.66873168945312], [-0.16697692871094, 1.11106872558594]];
			websiteIconPath3_newShape.closed = true;
		websiteIconPath3.setValue(websiteIconPath3_newShape);
		websiteIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		websiteIcon.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		websiteIcon.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		websiteIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		websiteIcon.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		websiteIcon.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		websiteIcon.property("ADBE Transform Group").property("ADBE Position").setValue([156.5,372.75,0]);
		websiteIcon.selected = false;
	var websitecom = center01ProfileHeader_comp.layers.addBoxText([93.8399963378906,19], "website.com");
		websitecom.name = "website.com";
		websitecom.moveToEnd();
		var websitecom_TextProp = websitecom.property("ADBE Text Properties").property("ADBE Text Document");
		var websitecom_TextDocument = websitecom_TextProp.value;
			websitecom_TextDocument.font = "Helvetica";
			websitecom_TextDocument.fontSize = 16;
			websitecom_TextDocument.applyFill = true;
			websitecom_TextDocument.fillColor = [0.29412001371384,0.62745004892349,0.92548996210098];
			websitecom_TextDocument.applyStroke = false;
			websitecom_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			websitecom_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				websitecom_TextDocument.verticalScale = 1;
				websitecom_TextDocument.horizontalScale = 1;
				websitecom_TextDocument.baselineShift = 0;
				websitecom_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// websitecom_TextDocument.fauxBold = false;
				// websitecom_TextDocument.fauxItalic = false;
				// websitecom_TextDocument.allCaps = false;
				// websitecom_TextDocument.smallCaps = false;
				// websitecom_TextDocument.superscript = false;
				// websitecom_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				websitecom_TextDocument.leading = 19.2000007629395;
				websitecom_TextDocument.autoLeading = true;
			}
			websitecom_TextProp.setValue(websitecom_TextDocument);
		websitecom.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-46.7754669189453,-3.59375,0]);
		websitecom.property("ADBE Transform Group").property("ADBE Position").setValue([14.4745330810547,0,0]);
		websitecom.selected = false;
	// Add Shape Layer "Join Date icon", varName "joinDateIcon";
	var joinDateIcon = center01ProfileHeader_comp.layers.addShape();
		joinDateIcon.name = "Join Date icon";
		joinDateIcon.label = 3;
		joinDateIcon.moveToEnd();
		joinDateIcon.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		joinDateIcon.property("ADBE Root Vectors Group").property(1).name = "Union";
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Group");
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Vector";
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).name = "Path 1";
		var joinDateIconPath = joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(1).property("ADBE Vector Shape");
		var joinDateIconPath_newShape = new Shape();
			joinDateIconPath_newShape.vertices = [[-6.16639709472656, -8], [6.16639709472656, -8], [8, -6.16639709472656], [8, 6.16639709472656], [6.16639709472656, 8], [-6.16639709472656, 8], [-8, 6.16639709472656], [-8, -6.16639709472656]];
			joinDateIconPath_newShape.inTangents = [[-1.01119995117188, 0], [0, 0], [0, -1.01119995117188], [0, 0], [1.01119995117188, 0], [0, 0], [0, 1.01119995117188], [0, 0]];
			joinDateIconPath_newShape.outTangents = [[0, 0], [1.01119995117188, 0], [0, 0], [0, 1.01119995117188], [0, 0], [-1.01119995117188, 0], [0, 0], [0, -1.01119995117188]];
			joinDateIconPath_newShape.closed = true;
		joinDateIconPath.setValue(joinDateIconPath_newShape);
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Shape - Group");
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).name = "Path 2";
		var joinDateIconPath3 = joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(2).property("ADBE Vector Shape");
		var joinDateIconPath3_newShape = new Shape();
			joinDateIconPath3_newShape.vertices = [[6.16639709472656, 6.80000305175781], [6.80000305175781, 6.16639709472656], [6.80000305175781, 6.16799926757812], [6.80000305175781, -4.46719360351562], [6.16799926757812, -5.09919738769531], [-6.16799926757812, -5.09919738769531], [-6.80000305175781, -4.46560668945312], [-6.80000305175781, 6.16639709472656], [-6.16639709472656, 6.80000305175781]];
			joinDateIconPath3_newShape.inTangents = [[0, 0], [0, 0.34959411621094], [0, 0], [0, 0], [0.34880065917969, 0], [0, 0], [0, -0.34959411621094], [0, 0], [-0.34959411621094, 0]];
			joinDateIconPath3_newShape.outTangents = [[0.34959411621094, 0], [0, 0], [0, 0], [0, -0.34800720214844], [0, 0], [-0.34880065917969, 0.00160217285156], [0, 0], [0, 0.34959411621094], [0, 0]];
			joinDateIconPath3_newShape.closed = true;
		joinDateIconPath3.setValue(joinDateIconPath3_newShape);
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).name = "Merge Paths 1";
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 1";
		var joinDateIconPath5 = joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var joinDateIconPath5_newShape = new Shape();
			joinDateIconPath5_newShape.vertices = [[-3.97434997558594, -1.57200622558594], [-2.94635009765625, -2.60000610351562], [-3.97434997558594, -3.62800598144531], [-5.00234985351562, -2.60000610351562]];
			joinDateIconPath5_newShape.inTangents = [[-0.5677490234375, 0], [0, 0.5677490234375], [0.5677490234375, 0], [0, -0.5677490234375]];
			joinDateIconPath5_newShape.outTangents = [[0.5677490234375, 0], [0, -0.5677490234375], [-0.5677490234375, 0], [0, 0.5677490234375]];
			joinDateIconPath5_newShape.closed = true;
		joinDateIconPath5.setValue(joinDateIconPath5_newShape);
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Path 2";
		var joinDateIconPath7 = joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Shape");
		var joinDateIconPath7_newShape = new Shape();
			joinDateIconPath7_newShape.vertices = [[-3.97434997558594, 1.95280456542969], [-2.94635009765625, 0.9248046875], [-3.97434997558594, -0.10319519042969], [-5.00234985351562, 0.9248046875]];
			joinDateIconPath7_newShape.inTangents = [[-0.5677490234375, 0], [0, 0.5677490234375], [0.5677490234375, 0], [0, -0.5677490234375]];
			joinDateIconPath7_newShape.outTangents = [[0.5677490234375, 0], [0, -0.5677490234375], [-0.5677490234375, 0], [0, 0.5677490234375]];
			joinDateIconPath7_newShape.closed = true;
		joinDateIconPath7.setValue(joinDateIconPath7_newShape);
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Path 3";
		var joinDateIconPath9 = joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Shape");
		var joinDateIconPath9_newShape = new Shape();
			joinDateIconPath9_newShape.vertices = [[3.9744873046875, -1.57200622558594], [5.00248718261719, -2.60000610351562], [3.9744873046875, -3.62800598144531], [2.94648742675781, -2.60000610351562]];
			joinDateIconPath9_newShape.inTangents = [[-0.5677490234375, 0], [0, 0.5677490234375], [0.5677490234375, 0], [0, -0.5677490234375]];
			joinDateIconPath9_newShape.outTangents = [[0.5677490234375, 0], [0, -0.5677490234375], [-0.5677490234375, 0], [0, 0.5677490234375]];
			joinDateIconPath9_newShape.closed = true;
		joinDateIconPath9.setValue(joinDateIconPath9_newShape);
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(5).name = "Path 4";
		var joinDateIconPath11 = joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(5).property("ADBE Vector Shape");
		var joinDateIconPath11_newShape = new Shape();
			joinDateIconPath11_newShape.vertices = [[3.9744873046875, 1.95280456542969], [5.00248718261719, 0.9248046875], [3.9744873046875, -0.10319519042969], [2.94648742675781, 0.9248046875]];
			joinDateIconPath11_newShape.inTangents = [[-0.5677490234375, 0], [0, 0.5677490234375], [0.5677490234375, 0], [0, -0.5677490234375]];
			joinDateIconPath11_newShape.outTangents = [[0.5677490234375, 0], [0, -0.5677490234375], [-0.5677490234375, 0], [0, 0.5677490234375]];
			joinDateIconPath11_newShape.closed = true;
		joinDateIconPath11.setValue(joinDateIconPath11_newShape);
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(6).name = "Path 5";
		var joinDateIconPath13 = joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(6).property("ADBE Vector Shape");
		var joinDateIconPath13_newShape = new Shape();
			joinDateIconPath13_newShape.vertices = [[-0.0001220703125, -1.57200622558594], [1.02787780761719, -2.60000610351562], [-0.0001220703125, -3.62800598144531], [-1.02812194824219, -2.60000610351562]];
			joinDateIconPath13_newShape.inTangents = [[-0.5677490234375, 0], [0, 0.5677490234375], [0.5677490234375, 0], [0, -0.5677490234375]];
			joinDateIconPath13_newShape.outTangents = [[0.5677490234375, 0], [0, -0.5677490234375], [-0.5677490234375, 0], [0, 0.5677490234375]];
			joinDateIconPath13_newShape.closed = true;
		joinDateIconPath13.setValue(joinDateIconPath13_newShape);
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(7).name = "Path 6";
		var joinDateIconPath15 = joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(7).property("ADBE Vector Shape");
		var joinDateIconPath15_newShape = new Shape();
			joinDateIconPath15_newShape.vertices = [[-0.0001220703125, 1.95280456542969], [1.02787780761719, 0.9248046875], [-0.0001220703125, -0.10319519042969], [-1.02812194824219, 0.9248046875]];
			joinDateIconPath15_newShape.inTangents = [[-0.5677490234375, 0], [0, 0.5677490234375], [0.5677490234375, 0], [0, -0.5677490234375]];
			joinDateIconPath15_newShape.outTangents = [[0.5677490234375, 0], [0, -0.5677490234375], [-0.5677490234375, 0], [0, 0.5677490234375]];
			joinDateIconPath15_newShape.closed = true;
		joinDateIconPath15.setValue(joinDateIconPath15_newShape);
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(8).name = "Path 7";
		var joinDateIconPath17 = joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(8).property("ADBE Vector Shape");
		var joinDateIconPath17_newShape = new Shape();
			joinDateIconPath17_newShape.vertices = [[-3.97434997558594, 5.41679382324219], [-2.94635009765625, 4.3887939453125], [-3.97434997558594, 3.36079406738281], [-5.00234985351562, 4.3887939453125]];
			joinDateIconPath17_newShape.inTangents = [[-0.5677490234375, 0], [0, 0.5677490234375], [0.5677490234375, 0], [0, -0.5677490234375]];
			joinDateIconPath17_newShape.outTangents = [[0.5677490234375, 0], [0, -0.5677490234375], [-0.5677490234375, 0], [0, 0.5677490234375]];
			joinDateIconPath17_newShape.closed = true;
		joinDateIconPath17.setValue(joinDateIconPath17_newShape);
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(9).name = "Path 8";
		var joinDateIconPath19 = joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(9).property("ADBE Vector Shape");
		var joinDateIconPath19_newShape = new Shape();
			joinDateIconPath19_newShape.vertices = [[-0.0001220703125, 5.41679382324219], [1.02787780761719, 4.3887939453125], [-0.0001220703125, 3.36079406738281], [-1.02812194824219, 4.3887939453125]];
			joinDateIconPath19_newShape.inTangents = [[-0.5677490234375, 0], [0, 0.5677490234375], [0.5677490234375, 0], [0, -0.5677490234375]];
			joinDateIconPath19_newShape.outTangents = [[0.5677490234375, 0], [0, -0.5677490234375], [-0.5677490234375, 0], [0, 0.5677490234375]];
			joinDateIconPath19_newShape.closed = true;
		joinDateIconPath19.setValue(joinDateIconPath19_newShape);
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(10).name = "Merge Paths 1";
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(10).property("ADBE Vector Merge Type").setValue(5);
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(11).name = "Fill 1";
		joinDateIcon.property("ADBE Root Vectors Group").property(1).property(2).property(11).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		joinDateIcon.property("ADBE Transform Group").property("ADBE Position").setValue([295,372.75,0]);
		joinDateIcon.selected = false;
	var joinedOctober2015 = center01ProfileHeader_comp.layers.addBoxText([154.020004272461,19], "Joined October 2015");
		joinedOctober2015.name = "Joined October 2015";
		joinedOctober2015.moveToEnd();
		var joinedOctober2015_TextProp = joinedOctober2015.property("ADBE Text Properties").property("ADBE Text Document");
		var joinedOctober2015_TextDocument = joinedOctober2015_TextProp.value;
			joinedOctober2015_TextDocument.font = "Helvetica";
			joinedOctober2015_TextDocument.fontSize = 16;
			joinedOctober2015_TextDocument.applyFill = true;
			joinedOctober2015_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			joinedOctober2015_TextDocument.applyStroke = false;
			joinedOctober2015_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			joinedOctober2015_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				joinedOctober2015_TextDocument.verticalScale = 1;
				joinedOctober2015_TextDocument.horizontalScale = 1;
				joinedOctober2015_TextDocument.baselineShift = 0;
				joinedOctober2015_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// joinedOctober2015_TextDocument.fauxBold = false;
				// joinedOctober2015_TextDocument.fauxItalic = false;
				// joinedOctober2015_TextDocument.allCaps = false;
				// joinedOctober2015_TextDocument.smallCaps = false;
				// joinedOctober2015_TextDocument.superscript = false;
				// joinedOctober2015_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				joinedOctober2015_TextDocument.leading = 19.2000007629395;
				joinedOctober2015_TextDocument.autoLeading = true;
			}
			joinedOctober2015_TextProp.setValue(joinedOctober2015_TextDocument);
		joinedOctober2015.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-76.736572265625,-3.72265625,0]);
		joinedOctober2015.property("ADBE Transform Group").property("ADBE Position").setValue([15.763427734375,0,0]);
		joinedOctober2015.selected = false;
	var compcode398 = center01ProfileHeader_comp.layers.addBoxText([29.5799999237061,18], "398");
		compcode398.name = "398";
		compcode398.label = 3;
		compcode398.moveToEnd();
		var compcode398_TextProp = compcode398.property("ADBE Text Properties").property("ADBE Text Document");
		var compcode398_TextDocument = compcode398_TextProp.value;
			compcode398_TextDocument.font = "HelveticaNeue-Bold";
			compcode398_TextDocument.fontSize = 15;
			compcode398_TextDocument.applyFill = true;
			compcode398_TextDocument.fillColor = [1,1,1];
			compcode398_TextDocument.applyStroke = false;
			compcode398_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			compcode398_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				compcode398_TextDocument.verticalScale = 1;
				compcode398_TextDocument.horizontalScale = 1;
				compcode398_TextDocument.baselineShift = 0;
				compcode398_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// compcode398_TextDocument.fauxBold = false;
				// compcode398_TextDocument.fauxItalic = false;
				// compcode398_TextDocument.allCaps = false;
				// compcode398_TextDocument.smallCaps = false;
				// compcode398_TextDocument.superscript = false;
				// compcode398_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				compcode398_TextDocument.leading = 18;
				compcode398_TextDocument.autoLeading = true;
			}
			compcode398_TextProp.setValue(compcode398_TextDocument);
		compcode398.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-2.25504302978516,-3.54766082763672,0]);
		compcode398.property("ADBE Transform Group").property("ADBE Position").setValue([27.275032043457,401.047500610352,0]);
		compcode398.selected = false;
	var following1 = center01ProfileHeader_comp.layers.addBoxText([66.3000030517578,18], "Following");
		following1.name = "Following";
		following1.label = 3;
		following1.moveToEnd();
		var following1_TextProp = following1.property("ADBE Text Properties").property("ADBE Text Document");
		var following1_TextDocument = following1_TextProp.value;
			following1_TextDocument.font = "Helvetica";
			following1_TextDocument.fontSize = 15;
			following1_TextDocument.applyFill = true;
			following1_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			following1_TextDocument.applyStroke = false;
			following1_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			following1_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				following1_TextDocument.verticalScale = 1;
				following1_TextDocument.horizontalScale = 1;
				following1_TextDocument.baselineShift = 0;
				following1_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// following1_TextDocument.fauxBold = false;
				// following1_TextDocument.fauxItalic = false;
				// following1_TextDocument.allCaps = false;
				// following1_TextDocument.smallCaps = false;
				// following1_TextDocument.superscript = false;
				// following1_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				following1_TextDocument.leading = 18;
				following1_TextDocument.autoLeading = true;
			}
			following1_TextProp.setValue(following1_TextDocument);
		following1.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-1.34824371337891,-1.935791015625,0]);
		following1.property("ADBE Transform Group").property("ADBE Position").setValue([79.1517562866211,402.564208984375,0]);
		following1.selected = false;
	var compcode556 = center01ProfileHeader_comp.layers.addBoxText([29.5799999237061,18], "556");
		compcode556.name = "556";
		compcode556.label = 3;
		compcode556.moveToEnd();
		var compcode556_TextProp = compcode556.property("ADBE Text Properties").property("ADBE Text Document");
		var compcode556_TextDocument = compcode556_TextProp.value;
			compcode556_TextDocument.font = "HelveticaNeue-Bold";
			compcode556_TextDocument.fontSize = 15;
			compcode556_TextDocument.applyFill = true;
			compcode556_TextDocument.fillColor = [1,1,1];
			compcode556_TextDocument.applyStroke = false;
			compcode556_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			compcode556_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				compcode556_TextDocument.verticalScale = 1;
				compcode556_TextDocument.horizontalScale = 1;
				compcode556_TextDocument.baselineShift = 0;
				compcode556_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// compcode556_TextDocument.fauxBold = false;
				// compcode556_TextDocument.fauxItalic = false;
				// compcode556_TextDocument.allCaps = false;
				// compcode556_TextDocument.smallCaps = false;
				// compcode556_TextDocument.superscript = false;
				// compcode556_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				compcode556_TextDocument.leading = 18;
				compcode556_TextDocument.autoLeading = true;
			}
			compcode556_TextProp.setValue(compcode556_TextDocument);
		compcode556.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-2.30250549316406,-3.54273986816406,0]);
		compcode556.property("ADBE Transform Group").property("ADBE Position").setValue([146.697494506836,401.042572021484,0]);
		compcode556.selected = false;
	var followers = center01ProfileHeader_comp.layers.addBoxText([66.3000030517578,18], "Followers");
		followers.name = "Followers";
		followers.label = 3;
		followers.moveToEnd();
		var followers_TextProp = followers.property("ADBE Text Properties").property("ADBE Text Document");
		var followers_TextDocument = followers_TextProp.value;
			followers_TextDocument.font = "Helvetica";
			followers_TextDocument.fontSize = 15;
			followers_TextDocument.applyFill = true;
			followers_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			followers_TextDocument.applyStroke = false;
			followers_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			followers_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				followers_TextDocument.verticalScale = 1;
				followers_TextDocument.horizontalScale = 1;
				followers_TextDocument.baselineShift = 0;
				followers_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// followers_TextDocument.fauxBold = false;
				// followers_TextDocument.fauxItalic = false;
				// followers_TextDocument.allCaps = false;
				// followers_TextDocument.smallCaps = false;
				// followers_TextDocument.superscript = false;
				// followers_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				followers_TextDocument.leading = 18;
				followers_TextDocument.autoLeading = true;
			}
			followers_TextProp.setValue(followers_TextDocument);
		followers.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-0.64878082275391,-3.444580078125,0]);
		followers.property("ADBE Transform Group").property("ADBE Position").setValue([199.851226806641,401.055419921875,0]);
		followers.selected = false;
	// Add Shape Layer "Followed by Accounts 1", varName "followedByAccounts1";
	var followedByAccounts1 = center01ProfileHeader_comp.layers.addShape();
		followedByAccounts1.name = "Followed by Accounts 1";
		followedByAccounts1.label = 3;
		followedByAccounts1.moveToEnd();
		followedByAccounts1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		followedByAccounts1.property("ADBE Root Vectors Group").property(1).name = "Ellipse 59";
		followedByAccounts1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		followedByAccounts1.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var followedByAccounts1Path = followedByAccounts1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var followedByAccounts1Path_newShape = new Shape();
			followedByAccounts1Path_newShape.vertices = [[0, -9], [9, 0], [0, 9], [-9, 0]];
			followedByAccounts1Path_newShape.inTangents = [[-5.05618286132812, 0], [0, -5.05618286132812], [5.05618286132812, 0], [0, 5.05618286132812]];
			followedByAccounts1Path_newShape.outTangents = [[5.05618286132812, 0], [0, 5.05618286132812], [-5.05618286132812, 0], [0, -5.05618286132812]];
			followedByAccounts1Path_newShape.closed = true;
		followedByAccounts1Path.setValue(followedByAccounts1Path_newShape);
		followedByAccounts1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		followedByAccounts1.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		followedByAccounts1.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.09019608050585,0.12549020349979,0.16470588743687,1]);
		followedByAccounts1.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(1);
		followedByAccounts1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		followedByAccounts1.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		followedByAccounts1.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.29411765933037,0.62745100259781,0.92549020051956,1]);
		followedByAccounts1.property("ADBE Transform Group").property("ADBE Position").setValue([25,432,0]);
		followedByAccounts1.selected = false;
	// Add Shape Layer "Followed by Accounts 2", varName "followedByAccounts2";
	var followedByAccounts2 = center01ProfileHeader_comp.layers.addShape();
		followedByAccounts2.name = "Followed by Accounts 2";
		followedByAccounts2.label = 3;
		followedByAccounts2.moveToEnd();
		followedByAccounts2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		followedByAccounts2.property("ADBE Root Vectors Group").property(1).name = "Ellipse 60";
		followedByAccounts2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		followedByAccounts2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var followedByAccounts2Path = followedByAccounts2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var followedByAccounts2Path_newShape = new Shape();
			followedByAccounts2Path_newShape.vertices = [[0, -9], [9, 0], [0, 9], [-9, 0]];
			followedByAccounts2Path_newShape.inTangents = [[-5.05618286132812, 0], [0, -5.05618286132812], [5.05618286132812, 0], [0, 5.05618286132812]];
			followedByAccounts2Path_newShape.outTangents = [[5.05618286132812, 0], [0, 5.05618286132812], [-5.05618286132812, 0], [0, -5.05618286132812]];
			followedByAccounts2Path_newShape.closed = true;
		followedByAccounts2Path.setValue(followedByAccounts2Path_newShape);
		followedByAccounts2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		followedByAccounts2.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		followedByAccounts2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.09019608050585,0.12549020349979,0.16470588743687,1]);
		followedByAccounts2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(1);
		followedByAccounts2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		followedByAccounts2.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		followedByAccounts2.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.29411765933037,0.62745100259781,0.92549020051956,1]);
		followedByAccounts2.property("ADBE Transform Group").property("ADBE Position").setValue([35,432,0]);
		followedByAccounts2.selected = false;
	// Add Shape Layer "Followed by Accounts 3", varName "followedByAccounts3";
	var followedByAccounts3 = center01ProfileHeader_comp.layers.addShape();
		followedByAccounts3.name = "Followed by Accounts 3";
		followedByAccounts3.label = 3;
		followedByAccounts3.moveToEnd();
		followedByAccounts3.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		followedByAccounts3.property("ADBE Root Vectors Group").property(1).name = "Ellipse 61";
		followedByAccounts3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		followedByAccounts3.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var followedByAccounts3Path = followedByAccounts3.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var followedByAccounts3Path_newShape = new Shape();
			followedByAccounts3Path_newShape.vertices = [[0, -9], [9, 0], [0, 9], [-9, 0]];
			followedByAccounts3Path_newShape.inTangents = [[-5.05618286132812, 0], [0, -5.05618286132812], [5.05618286132812, 0], [0, 5.05618286132812]];
			followedByAccounts3Path_newShape.outTangents = [[5.05618286132812, 0], [0, 5.05618286132812], [-5.05618286132812, 0], [0, -5.05618286132812]];
			followedByAccounts3Path_newShape.closed = true;
		followedByAccounts3Path.setValue(followedByAccounts3Path_newShape);
		followedByAccounts3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		followedByAccounts3.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		followedByAccounts3.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Color").setValue([0.09019608050585,0.12549020349979,0.16470588743687,1]);
		followedByAccounts3.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Stroke Width").setValue(1);
		followedByAccounts3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		followedByAccounts3.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		followedByAccounts3.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").setValue([0.29411765933037,0.62745100259781,0.92549020051956,1]);
		followedByAccounts3.property("ADBE Transform Group").property("ADBE Position").setValue([44,432,0]);
		followedByAccounts3.selected = false;
	var followedByJoeSoapAnd9OthersYouFollow = center01ProfileHeader_comp.layers.addText("Followed by Joe, Soap, and 9 others you follow");
		followedByJoeSoapAnd9OthersYouFollow.name = "Followed by Joe, Soap, and 9 others you follow";
		followedByJoeSoapAnd9OthersYouFollow.label = 3;
		followedByJoeSoapAnd9OthersYouFollow.moveToEnd();
		var followedByJoeSoapAnd9OthersYouFollow_TextProp = followedByJoeSoapAnd9OthersYouFollow.property("ADBE Text Properties").property("ADBE Text Document");
		var followedByJoeSoapAnd9OthersYouFollow_TextDocument = followedByJoeSoapAnd9OthersYouFollow_TextProp.value;
			followedByJoeSoapAnd9OthersYouFollow_TextDocument.font = "Helvetica";
			followedByJoeSoapAnd9OthersYouFollow_TextDocument.fontSize = 13;
			followedByJoeSoapAnd9OthersYouFollow_TextDocument.applyFill = true;
			followedByJoeSoapAnd9OthersYouFollow_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			followedByJoeSoapAnd9OthersYouFollow_TextDocument.applyStroke = false;
			followedByJoeSoapAnd9OthersYouFollow_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			followedByJoeSoapAnd9OthersYouFollow_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				followedByJoeSoapAnd9OthersYouFollow_TextDocument.verticalScale = 1;
				followedByJoeSoapAnd9OthersYouFollow_TextDocument.horizontalScale = 1;
				followedByJoeSoapAnd9OthersYouFollow_TextDocument.baselineShift = 0;
				followedByJoeSoapAnd9OthersYouFollow_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// followedByJoeSoapAnd9OthersYouFollow_TextDocument.fauxBold = false;
				// followedByJoeSoapAnd9OthersYouFollow_TextDocument.fauxItalic = false;
				// followedByJoeSoapAnd9OthersYouFollow_TextDocument.allCaps = false;
				// followedByJoeSoapAnd9OthersYouFollow_TextDocument.smallCaps = false;
				// followedByJoeSoapAnd9OthersYouFollow_TextDocument.superscript = false;
				// followedByJoeSoapAnd9OthersYouFollow_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				followedByJoeSoapAnd9OthersYouFollow_TextDocument.leading = 15.6000003814697;
				followedByJoeSoapAnd9OthersYouFollow_TextDocument.autoLeading = true;
			}
			followedByJoeSoapAnd9OthersYouFollow_TextProp.setValue(followedByJoeSoapAnd9OthersYouFollow_TextDocument);
		followedByJoeSoapAnd9OthersYouFollow.property("ADBE Transform Group").property("ADBE Position").setValue([62.2299957275391,435.136474609375,0]);
		followedByJoeSoapAnd9OthersYouFollow.selected = false;
	// Add existing composition "Profile Header Image", varName "profileHeaderImage_comp";
	var profileHeaderImage = center01ProfileHeader_comp.layers.add(profileHeaderImage_comp);
		profileHeaderImage.moveToEnd();
		profileHeaderImage.timeRemapEnabled = true;
		var profileHeaderImageTimeRemap = profileHeaderImage.property("ADBE Time Remapping");
			profileHeaderImageTimeRemap.setValueAtTime(99999, profileHeaderImageTimeRemap.keyValue(1));
			profileHeaderImageTimeRemap.removeKey(2);
			profileHeaderImageTimeRemap.removeKey(1);
			var profileHeaderImageTimeRemap_keyTimesArray = [0];
			var profileHeaderImageTimeRemap_valuesArray = [0];
			profileHeaderImageTimeRemap.setValuesAtTimes(profileHeaderImageTimeRemap_keyTimesArray, profileHeaderImageTimeRemap_valuesArray);
			profileHeaderImageTimeRemap.removeKey(profileHeaderImageTimeRemap.nearestKeyIndex(99999));
			var profileHeaderImageTimeRemap_easeInSpeedArray = [0];
			var profileHeaderImageTimeRemap_easeInInfluArray = [16.666666667];
			var profileHeaderImageTimeRemap_easeOutSpeedArray = [0];
			var profileHeaderImageTimeRemap_easeOutInfluArray = [16.666666667];
			var profileHeaderImageTimeRemap_keyInInterpolationType = [KeyframeInterpolationType.HOLD];
			var profileHeaderImageTimeRemap_keyOutInterpolationType = [KeyframeInterpolationType.HOLD];
			applyEasing(profileHeaderImageTimeRemap, profileHeaderImageTimeRemap_keyTimesArray, [profileHeaderImageTimeRemap_easeInSpeedArray, profileHeaderImageTimeRemap_easeInInfluArray], [profileHeaderImageTimeRemap_easeOutSpeedArray, profileHeaderImageTimeRemap_easeOutInfluArray], [profileHeaderImageTimeRemap_keyInInterpolationType, profileHeaderImageTimeRemap_keyOutInterpolationType]);

		profileHeaderImage.property("ADBE Transform Group").property("ADBE Position").setValue([300,100,0]);
		profileHeaderImage.selected = false;
	// Apply parents
		following.setParentWithJump(followingButton);
		cityCountry.setParentWithJump(locationIcon);
		websitecom.setParentWithJump(websiteIcon);
		joinedOctober2015.setParentWithJump(joinDateIcon);

	// Lock Layers
		moreCircle.locked = true;
		bellCircle.locked = true;
		following.locked = true;
		followingButton.locked = true;
		profileImageOutline.locked = true;
		avatarImage2.locked = true;
		profileName.locked = true;
		name9.locked = true;

}
// Working with comp "CENTER - 02 Tweets Tabs", varName "center02TweetsTabs_comp";
if (center02TweetsTabs_comp_populate === true) {
	// Add Shape Layer "Rectangle 146", varName "rectangle146";
	var rectangle146 = center02TweetsTabs_comp.layers.addShape();
		rectangle146.name = "Rectangle 146";
		rectangle146.moveToEnd();
		rectangle146.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		rectangle146.property("ADBE Root Vectors Group").property(1).name = "Rectangle 146";
		rectangle146.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		rectangle146.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var rectangle146Path = rectangle146.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var rectangle146Path_newShape = new Shape();
			rectangle146Path_newShape.vertices = [[-69, -1], [69, -1], [69, 1], [-69, 1]];
			rectangle146Path_newShape.closed = true;
		rectangle146Path.setValue(rectangle146Path_newShape);
		rectangle146.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		rectangle146.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		rectangle146.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.29411765933037,0.62745100259781,0.92549020051956,1]);
		rectangle146.property("ADBE Transform Group").property("ADBE Position").setValue([69,39,0]);
		rectangle146.selected = false;
	var likes = center02TweetsTabs_comp.layers.addBoxText([39.7799987792969,18], "Likes");
		likes.name = "Likes";
		likes.label = 8;
		likes.moveToEnd();
		var likes_TextProp = likes.property("ADBE Text Properties").property("ADBE Text Document");
		var likes_TextDocument = likes_TextProp.value;
			likes_TextDocument.font = "HelveticaNeue-Bold";
			likes_TextDocument.fontSize = 15;
			likes_TextDocument.applyFill = true;
			likes_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			likes_TextDocument.applyStroke = false;
			likes_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			likes_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				likes_TextDocument.verticalScale = 1;
				likes_TextDocument.horizontalScale = 1;
				likes_TextDocument.baselineShift = 0;
				likes_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// likes_TextDocument.fauxBold = false;
				// likes_TextDocument.fauxItalic = false;
				// likes_TextDocument.allCaps = false;
				// likes_TextDocument.smallCaps = false;
				// likes_TextDocument.superscript = false;
				// likes_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				likes_TextDocument.leading = 18;
				likes_TextDocument.autoLeading = true;
			}
			likes_TextProp.setValue(likes_TextDocument);
		likes.property("ADBE Transform Group").property("ADBE Position").setValue([535.5,15.5,0]);
		likes.selected = false;
	var media = center02TweetsTabs_comp.layers.addBoxText([45.9000015258789,18], "Media");
		media.name = "Media";
		media.label = 8;
		media.moveToEnd();
		var media_TextProp = media.property("ADBE Text Properties").property("ADBE Text Document");
		var media_TextDocument = media_TextProp.value;
			media_TextDocument.font = "HelveticaNeue-Bold";
			media_TextDocument.fontSize = 15;
			media_TextDocument.applyFill = true;
			media_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			media_TextDocument.applyStroke = false;
			media_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			media_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				media_TextDocument.verticalScale = 1;
				media_TextDocument.horizontalScale = 1;
				media_TextDocument.baselineShift = 0;
				media_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// media_TextDocument.fauxBold = false;
				// media_TextDocument.fauxItalic = false;
				// media_TextDocument.allCaps = false;
				// media_TextDocument.smallCaps = false;
				// media_TextDocument.superscript = false;
				// media_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				media_TextDocument.leading = 18;
				media_TextDocument.autoLeading = true;
			}
			media_TextProp.setValue(media_TextDocument);
		media.property("ADBE Transform Group").property("ADBE Position").setValue([408.5,15.5,0]);
		media.selected = false;
	var tweetsReplies = center02TweetsTabs_comp.layers.addBoxText([121.379997253418,18], "Tweets & replies");
		tweetsReplies.name = "Tweets & replies";
		tweetsReplies.label = 8;
		tweetsReplies.moveToEnd();
		var tweetsReplies_TextProp = tweetsReplies.property("ADBE Text Properties").property("ADBE Text Document");
		var tweetsReplies_TextDocument = tweetsReplies_TextProp.value;
			tweetsReplies_TextDocument.font = "HelveticaNeue-Bold";
			tweetsReplies_TextDocument.fontSize = 15;
			tweetsReplies_TextDocument.applyFill = true;
			tweetsReplies_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			tweetsReplies_TextDocument.applyStroke = false;
			tweetsReplies_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			tweetsReplies_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				tweetsReplies_TextDocument.verticalScale = 1;
				tweetsReplies_TextDocument.horizontalScale = 1;
				tweetsReplies_TextDocument.baselineShift = 0;
				tweetsReplies_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// tweetsReplies_TextDocument.fauxBold = false;
				// tweetsReplies_TextDocument.fauxItalic = false;
				// tweetsReplies_TextDocument.allCaps = false;
				// tweetsReplies_TextDocument.smallCaps = false;
				// tweetsReplies_TextDocument.superscript = false;
				// tweetsReplies_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				tweetsReplies_TextDocument.leading = 18;
				tweetsReplies_TextDocument.autoLeading = true;
			}
			tweetsReplies_TextProp.setValue(tweetsReplies_TextDocument);
		tweetsReplies.property("ADBE Transform Group").property("ADBE Position").setValue([240.5,15.5,0]);
		tweetsReplies.selected = false;
	var tweets2 = center02TweetsTabs_comp.layers.addBoxText([53.0400009155273,18], "Tweets");
		tweets2.name = "Tweets";
		tweets2.label = 8;
		tweets2.moveToEnd();
		var tweets2_TextProp = tweets2.property("ADBE Text Properties").property("ADBE Text Document");
		var tweets2_TextDocument = tweets2_TextProp.value;
			tweets2_TextDocument.font = "HelveticaNeue-Bold";
			tweets2_TextDocument.fontSize = 15;
			tweets2_TextDocument.applyFill = true;
			tweets2_TextDocument.fillColor = [0.29412001371384,0.62745004892349,0.92548996210098];
			tweets2_TextDocument.applyStroke = false;
			tweets2_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			tweets2_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				tweets2_TextDocument.verticalScale = 1;
				tweets2_TextDocument.horizontalScale = 1;
				tweets2_TextDocument.baselineShift = 0;
				tweets2_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// tweets2_TextDocument.fauxBold = false;
				// tweets2_TextDocument.fauxItalic = false;
				// tweets2_TextDocument.allCaps = false;
				// tweets2_TextDocument.smallCaps = false;
				// tweets2_TextDocument.superscript = false;
				// tweets2_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				tweets2_TextDocument.leading = 18;
				tweets2_TextDocument.autoLeading = true;
			}
			tweets2_TextProp.setValue(tweets2_TextDocument);
		tweets2.property("ADBE Transform Group").property("ADBE Position").setValue([69,15.5,0]);
		tweets2.selected = false;
}
// Working with comp "Tweet (Style 1)", varName "tweetStyle1_comp";
if (tweetStyle1_comp_populate === true) {
	// Add Shape Layer "Top Edge", varName "topEdge";
	var topEdge = tweetStyle1_comp.layers.addShape();
		topEdge.name = "Top Edge";
		topEdge.label = 0;
		topEdge.moveToEnd();
		topEdge.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		topEdge.property("ADBE Root Vectors Group").property(1).name = "Rectangle 145";
		topEdge.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		topEdge.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var topEdgePath = topEdge.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var topEdgePath_newShape = new Shape();
			topEdgePath_newShape.vertices = [[-299.5, -0.5], [299.5, -0.5], [299.5, 0.5], [-299.5, 0.5]];
			topEdgePath_newShape.closed = true;
		topEdgePath.setValue(topEdgePath_newShape);
		topEdge.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		topEdge.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		topEdge.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.22745098173618,0.26666668057442,0.29803922772408,1]);
		topEdge.property("ADBE Transform Group").property("ADBE Position").setValue([299.5,0.5,0]);
		topEdge.selected = false;
	// Add Shape Layer "Arrow", varName "arrow4";
	var arrow4 = tweetStyle1_comp.layers.addShape();
		arrow4.name = "Arrow";
		arrow4.label = 0;
		arrow4.moveToEnd();
		arrow4.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		arrow4.property("ADBE Root Vectors Group").property(1).name = "Vector";
		arrow4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		arrow4.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var arrow4Path = arrow4.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var arrow4Path_newShape = new Shape();
			arrow4Path_newShape.vertices = [[3.99612426757812, -2.81527709960938], [4.82792663574219, -2.81527709960938], [4.82792663574219, -2.81401062011719], [4.82792663574219, -1.921630859375], [0.41590881347656, 2.81495666503906], [0, 3], [-0.41590881347656, 2.8143310546875], [-4.82792663574219, -1.92227172851562], [-4.82792663574219, -2.81527709960938], [-3.99612426757812, -2.81527709960938], [0, 1.47482299804688]];
			arrow4Path_newShape.inTangents = [[0, 0], [-0.22943115234375, -0.24630737304688], [0, 0], [0.22943115234375, -0.24630737304688], [0, 0], [0.15118408203125, 0], [0.11471557617188, 0.123779296875], [0, 0], [-0.22943115234375, 0.24630737304688], [-0.22943115234375, -0.24630737304688], [0, 0]];
			arrow4Path_newShape.outTangents = [[0.23001098632812, -0.24630737304688], [0, 0], [0.22943115234375, 0.24693298339844], [0, 0], [-0.11471557617188, 0.12315368652344], [-0.15118408203125, 0], [0, 0], [-0.22943115234375, -0.24693298339844], [0.23001098632812, -0.24630737304688], [0, 0], [0, 0]];
			arrow4Path_newShape.closed = true;
		arrow4Path.setValue(arrow4Path_newShape);
		arrow4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		arrow4.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		arrow4.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		arrow4.property("ADBE Transform Group").property("ADBE Position").setValue([574,22,0]);
		arrow4.selected = false;
	// Add Shape Layer "IMAGE MATTE", varName "imageMatte";
	var imageMatte = tweetStyle1_comp.layers.addShape();
		imageMatte.name = "IMAGE MATTE";
		imageMatte.enabled = false;
		imageMatte.shy = true;
		imageMatte.moveToEnd();
		imageMatte.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		imageMatte.property("ADBE Root Vectors Group").property(1).name = "PROFILE IMAGE";
		imageMatte.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		imageMatte.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var imageMattePath = imageMatte.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var imageMattePath_newShape = new Shape();
			imageMattePath_newShape.vertices = [[0, -24.5], [24.5, 0], [0, 24.5], [-24.5, 0]];
			imageMattePath_newShape.inTangents = [[-13.7640380859375, 0], [0, -13.7640380859375], [13.7640380859375, 0], [0, 13.7640380859375]];
			imageMattePath_newShape.outTangents = [[13.7640380859375, 0], [0, 13.7640380859375], [-13.7640380859375, 0], [0, -13.7640380859375]];
			imageMattePath_newShape.closed = true;
		imageMattePath.setValue(imageMattePath_newShape);
		imageMatte.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		imageMatte.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		imageMatte.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.76862746477127,0.76862746477127,0.76862746477127,1]);
		imageMatte.property("ADBE Root Vectors Group").addProperty("ADBE Vector Graphic - Fill");
		imageMatte.property("ADBE Root Vectors Group").property(2).name = "Fill 1";
		imageMatte.property("ADBE Transform Group").property("ADBE Position").setValue([39.5,36.5,0]);
		imageMatte.effectsActive = false;
		imageMatte.selected = false;
	// Add existing composition "Avatar Image", varName "avatarImage_comp";
	var avatarImage3 = tweetStyle1_comp.layers.add(avatarImage_comp);
		avatarImage3.moveToEnd();
		avatarImage3.trackMatteType = TrackMatteType.ALPHA;
		avatarImage3.property("ADBE Transform Group").property("ADBE Position").setValue([39.5,36.5,0]);
		avatarImage3.property("ADBE Transform Group").property("ADBE Scale").setValue([8.41666666666667,8.41666666666667,100]);
		avatarImage3.selected = false;
	var profileNameProfilename19h = tweetStyle1_comp.layers.addText(File.decode("Username%20@TwitterHandle%20%E2%80%A2%2019h"));
		profileNameProfilename19h.name = File.decode("Profile%20Name%20@ProfileName%20%E2%80%A2%2019h");
		profileNameProfilename19h.moveToEnd();
		var profileNameProfilename19h_TextProp = profileNameProfilename19h.property("ADBE Text Properties").property("ADBE Text Document");
		var profileNameProfilename19h_TextDocument = profileNameProfilename19h_TextProp.value;
			profileNameProfilename19h_TextDocument.font = "HelveticaNeue-Bold";
			profileNameProfilename19h_TextDocument.fontSize = 16;
			profileNameProfilename19h_TextDocument.applyFill = true;
			profileNameProfilename19h_TextDocument.fillColor = [1,1,1];
			profileNameProfilename19h_TextDocument.applyStroke = false;
			profileNameProfilename19h_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			profileNameProfilename19h_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				profileNameProfilename19h_TextDocument.verticalScale = 1;
				profileNameProfilename19h_TextDocument.horizontalScale = 1;
				profileNameProfilename19h_TextDocument.baselineShift = 0;
				profileNameProfilename19h_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// profileNameProfilename19h_TextDocument.fauxBold = false;
				// profileNameProfilename19h_TextDocument.fauxItalic = false;
				// profileNameProfilename19h_TextDocument.allCaps = false;
				// profileNameProfilename19h_TextDocument.smallCaps = false;
				// profileNameProfilename19h_TextDocument.superscript = false;
				// profileNameProfilename19h_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				profileNameProfilename19h_TextDocument.leading = 19.2000007629395;
				profileNameProfilename19h_TextDocument.autoLeading = true;
			}
			profileNameProfilename19h_TextProp.setValue(profileNameProfilename19h_TextDocument);
		profileNameProfilename19h.property("ADBE Transform Group").property("ADBE Position").setValue([71.5690002441406,23.6959991455078,0]);
		profileNameProfilename19h.selected = false;
	var loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting = tweetStyle1_comp.layers.addText("Lorem Ipsum is simply dummy text of the printing and typesetting");
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting.name = "Lorem Ipsum is simply dummy text of the printing and typesetting ";
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting.moveToEnd();
		var loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting_TextProp = loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting.property("ADBE Text Properties").property("ADBE Text Document");
		var loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting_TextDocument = loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting_TextProp.value;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting_TextDocument.font = "Helvetica";
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting_TextDocument.fontSize = 16;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting_TextDocument.applyFill = true;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting_TextDocument.fillColor = [1,1,1];
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting_TextDocument.applyStroke = false;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting_TextDocument.verticalScale = 1;
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting_TextDocument.horizontalScale = 1;
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting_TextDocument.baselineShift = 0;
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting_TextDocument.fauxBold = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting_TextDocument.fauxItalic = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting_TextDocument.allCaps = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting_TextDocument.smallCaps = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting_TextDocument.superscript = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting_TextDocument.leading = 18.8479995727539;
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting_TextDocument.autoLeading = false;
			}
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting_TextProp.setValue(loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting_TextDocument);
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0.00000381469727,0]);
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting.property("ADBE Transform Group").property("ADBE Position").setValue([71.40625,46.265625,0]);
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesetting.selected = false;
	// Add Shape Layer "Comments", varName "comments";
	var comments = tweetStyle1_comp.layers.addShape();
		comments.name = "Comments";
		comments.label = 11;
		comments.moveToEnd();
		comments.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		comments.property("ADBE Root Vectors Group").property(1).name = "Vector";
		comments.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		comments.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var commentsPath = comments.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var commentsPath_newShape = new Shape();
			commentsPath_newShape.vertices = [[-1.57443237304688, -7.5], [1.57594299316406, -7.49240112304688], [1.57594299316406, -7.4931640625], [7.5, -1.57823181152344], [7.5, -1.56532287597656], [5.18885803222656, 3.22860717773438], [-0.95391845703125, 7.41038513183594], [-1.25924682617188, 7.5], [-1.73924255371094, 7.2364501953125], [-1.83038330078125, 6.93037414550781], [-1.83038330078125, 4.02304077148438], [-7.5, -1.57443237304688], [-1.57594299316406, -7.5]];
			commentsPath_newShape.inTangents = [[0, 0], [0, 0], [0, 0], [-0.00456237792969, -3.31671142578125], [0, 0], [1.44454956054688, -1.2227783203125], [0.20050048828125, -0.12759399414062], [0.10481262207031, 0], [0.10784912109375, 0.17088317871094], [0, 0.08203125], [0, 0], [0, 3.11241149902344], [-3.322021484375, 0]];
			commentsPath_newShape.outTangents = [[0, 0], [0, 0], [3.31898498535156, 0.00076293945312], [0, 0], [-0.00227355957031, 1.77873229980469], [-1.22657775878906, 1.0374755859375], [-0.09494018554688, 0.06076049804688], [-0.1883544921875, 0], [-0.05772399902344, -0.0888671875], [0, 0], [-3.2498779296875, -0.12455749511719], [0, -3.32278442382812], [0, 0]];
			commentsPath_newShape.closed = true;
		commentsPath.setValue(commentsPath_newShape);
		comments.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		comments.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var commentsPath3 = comments.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var commentsPath3_newShape = new Shape();
			commentsPath3_newShape.vertices = [[-0.69113159179688, 5.88607788085938], [4.4521484375, 2.3597412109375], [4.45291137695312, 2.3597412109375], [6.36227416992188, -1.57139587402344], [1.57594299316406, -6.35316467285156], [1.57443237304688, -6.35316467285156], [-1.5751953125, -6.36076354980469], [-6.36000061035156, -1.57443237304688], [-1.5615234375, 2.89595031738281], [-1.26075744628906, 2.89595031738281], [-0.69113159179688, 3.465576171875]];
			commentsPath3_newShape.inTangents = [[0, 0], [-0.86126708984375, 0.72911071777344], [0, 0], [-0.00227355957031, 1.45063781738281], [2.68252563476562, 0], [0, 0], [0, 0], [0, -2.68405151367188], [-2.77973937988281, 0], [0, 0], [0, -0.31443786621094]];
			commentsPath3_newShape.outTangents = [[1.45063781738281, -0.94024658203125], [0, 0], [1.19392395019531, -1.01164245605469], [-0.00152587890625, -2.68101501464844], [0, 0], [0, 0], [-2.68252563476562, 0], [0, 2.58987426757812], [0, 0], [0.315185546875, 0], [0, 0]];
			commentsPath3_newShape.closed = true;
		commentsPath3.setValue(commentsPath3_newShape);
		comments.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		comments.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		comments.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		comments.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		comments.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		comments.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		comments.property("ADBE Transform Group").property("ADBE Position").setValue([82.5,75.5,0]);
		comments.selected = false;
	var compcode4 = tweetStyle1_comp.layers.addBoxText([19.6599998474121,17], "4");
		compcode4.name = "4";
		compcode4.label = 11;
		compcode4.moveToEnd();
		var compcode4_TextProp = compcode4.property("ADBE Text Properties").property("ADBE Text Document");
		var compcode4_TextDocument = compcode4_TextProp.value;
			compcode4_TextDocument.font = "Helvetica";
			compcode4_TextDocument.fontSize = 14;
			compcode4_TextDocument.applyFill = true;
			compcode4_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			compcode4_TextDocument.applyStroke = false;
			compcode4_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			compcode4_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				compcode4_TextDocument.verticalScale = 1;
				compcode4_TextDocument.horizontalScale = 1;
				compcode4_TextDocument.baselineShift = 0;
				compcode4_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// compcode4_TextDocument.fauxBold = false;
				// compcode4_TextDocument.fauxItalic = false;
				// compcode4_TextDocument.allCaps = false;
				// compcode4_TextDocument.smallCaps = false;
				// compcode4_TextDocument.superscript = false;
				// compcode4_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				compcode4_TextDocument.leading = 16.8000011444092;
				compcode4_TextDocument.autoLeading = true;
			}
			compcode4_TextProp.setValue(compcode4_TextDocument);
		compcode4.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-0.25871276855469,-3.345703125,0]);
		compcode4.property("ADBE Transform Group").property("ADBE Position").setValue([104.249998092651,75.5,0]);
		compcode4.selected = false;
	// Add Shape Layer "Retweets", varName "retweets";
	var retweets = tweetStyle1_comp.layers.addShape();
		retweets.name = "Retweets";
		retweets.label = 11;
		retweets.moveToEnd();
		retweets.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		retweets.property("ADBE Root Vectors Group").property(1).name = "Vector";
		retweets.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		retweets.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var retweetsPath = retweets.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var retweetsPath_newShape = new Shape();
			retweetsPath_newShape.vertices = [[8.48538208007812, 2.74543762207031], [9.32528686523438, 2.74543762207031], [9.32528686523438, 2.74543762207031], [9.32528686523438, 3.57803344726562], [6.55203247070312, 6.32719421386719], [6.132080078125, 6.5], [5.71212768554688, 6.32719421386719], [2.93885803222656, 3.57803344726562], [2.93885803222656, 2.74543762207031], [3.77876281738281, 2.74543762207031], [5.53781127929688, 4.48918151855469], [5.53781127929688, -3.5540771484375], [3.75498962402344, -5.32139587402344], [-0.88031005859375, -5.32139587402344], [-1.47457885742188, -5.91050720214844], [-0.88031005859375, -6.49960327148438], [3.75498962402344, -6.49960327148438], [6.72634887695312, -3.5540771484375], [6.72634887695312, 4.48918151855469]];
			retweetsPath_newShape.inTangents = [[0, 0], [-0.23136901855469, -0.23014831542969], [0, 0], [0.23295593261719, -0.22935485839844], [0, 0], [0.15292358398438, 0], [0.11489868164062, 0.11546325683594], [0, 0], [-0.23136901855469, 0.23014831542969], [-0.23216247558594, -0.23014831542969], [0, 0], [0, 0], [0.98252868652344, 0], [0, 0], [0, 0.32518005371094], [-0.32803344726562, 0], [0, 0], [0, -1.62435913085938], [0, 0]];
			retweetsPath_newShape.outTangents = [[0.23216247558594, -0.23014831542969], [0, 0], [0.23295593261719, 0.23014831542969], [0, 0], [-0.11647033691406, 0.11625671386719], [-0.15292358398438, 0], [0, 0], [-0.23295593261719, -0.22935485839844], [0.23136901855469, -0.23014831542969], [0, 0], [0, 0], [0, -0.97398376464844], [0, 0], [-0.32803344726562, 0], [0, -0.32518005371094], [0, 0], [1.63780212402344, 0], [0, 0], [0, 0]];
			retweetsPath_newShape.closed = true;
		retweetsPath.setValue(retweetsPath_newShape);
		retweets.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		retweets.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var retweetsPath3 = retweets.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var retweetsPath3_newShape = new Shape();
			retweetsPath3_newShape.vertices = [[-3.75657653808594, 5.32179260253906], [0.87872314453125, 5.32179260253906], [0.88031005859375, 5.32179260253906], [1.47457885742188, 5.910888671875], [0.88031005859375, 6.5], [-3.75498962402344, 6.5], [-6.72634887695312, 3.55447387695312], [-6.72634887695312, -4.48878479003906], [-8.48538208007812, -2.74504089355469], [-9.32528686523438, -2.74504089355469], [-9.32528686523438, -3.57763671875], [-6.55201721191406, -6.32679748535156], [-5.71212768554688, -6.32679748535156], [-2.93885803222656, -3.57763671875], [-2.93885803222656, -2.74504089355469], [-3.35881042480469, -2.57223510742188], [-3.78034973144531, -2.74504089355469], [-5.53938293457031, -4.48878479003906], [-5.53938293457031, 3.55447387695312]];
			retweetsPath3_newShape.inTangents = [[-0.98252868652344, 0], [0, 0], [0, 0], [0, -0.32518005371094], [0.32803344726562, 0], [0, 0], [0, 1.62435913085938], [0, 0], [0, 0], [0.23295593261719, 0.23014831542969], [-0.23295593261719, 0.22935485839844], [0, 0], [-0.23216247558594, -0.23092651367188], [0, 0], [0.23216247558594, -0.23014831542969], [0.15213012695312, 0], [0.11726379394531, 0.11546325683594], [0, 0], [0, 0]];
			retweetsPath3_newShape.outTangents = [[0, 0], [0, 0], [0.32723999023438, 0], [0, 0.32518005371094], [0, 0], [-1.63780212402344, 0], [0, 0], [0, 0], [-0.23216247558594, 0.23014831542969], [-0.23295593261719, -0.23014831542969], [0, 0], [0.23136901855469, -0.23092651367188], [0, 0], [0.23216247558594, 0.22935485839844], [-0.11569213867188, 0.11546325683594], [-0.15213012695312, 0], [0, 0], [0, 0], [0, 0.97398376464844]];
			retweetsPath3_newShape.closed = true;
		retweetsPath3.setValue(retweetsPath3_newShape);
		retweets.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		retweets.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		retweets.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		retweets.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		retweets.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		retweets.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		retweets.property("ADBE Transform Group").property("ADBE Position").setValue([217.5,75.5,0]);
		retweets.selected = false;
	var compcode3 = tweetStyle1_comp.layers.addBoxText([19.6599998474121,17], "3");
		compcode3.name = "3";
		compcode3.label = 11;
		compcode3.moveToEnd();
		var compcode3_TextProp = compcode3.property("ADBE Text Properties").property("ADBE Text Document");
		var compcode3_TextDocument = compcode3_TextProp.value;
			compcode3_TextDocument.font = "Helvetica";
			compcode3_TextDocument.fontSize = 14;
			compcode3_TextDocument.applyFill = true;
			compcode3_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			compcode3_TextDocument.applyStroke = false;
			compcode3_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			compcode3_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				compcode3_TextDocument.verticalScale = 1;
				compcode3_TextDocument.horizontalScale = 1;
				compcode3_TextDocument.baselineShift = 0;
				compcode3_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// compcode3_TextDocument.fauxBold = false;
				// compcode3_TextDocument.fauxItalic = false;
				// compcode3_TextDocument.allCaps = false;
				// compcode3_TextDocument.smallCaps = false;
				// compcode3_TextDocument.superscript = false;
				// compcode3_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				compcode3_TextDocument.leading = 16.8000011444092;
				compcode3_TextDocument.autoLeading = true;
			}
			compcode3_TextProp.setValue(compcode3_TextDocument);
		compcode3.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-0.25871276855469,-3.345703125,0]);
		compcode3.property("ADBE Transform Group").property("ADBE Position").setValue([241.249998092651,75.5,0]);
		compcode3.selected = false;
	// Add Shape Layer "Likes", varName "likes1";
	var likes1 = tweetStyle1_comp.layers.addShape();
		likes1.name = "Likes";
		likes1.label = 11;
		likes1.moveToEnd();
		likes1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		likes1.property("ADBE Root Vectors Group").property(1).name = "Vector";
		likes1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		likes1.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var likes1Path = likes1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var likes1Path_newShape = new Shape();
			likes1Path_newShape.vertices = [[-0.01034545898438, 7.5], [0.00079345703125, 7.5], [0.00079345703125, 7.4984130859375], [0.00955200195312, 7.4984130859375], [8, -2.93592834472656], [3.6978759765625, -7.5], [0, -5.33493041992188], [-3.69866943359375, -7.5], [-8, -2.93670654296875]];
			likes1Path_newShape.inTangents = [[-2.05632019042969, -0.03807067871094], [0, 0], [0, 0], [0, 0], [0, 5.05656433105469], [2.29277038574219, 0], [0.64802551269531, -0.91043090820312], [1.82307434082031, 0], [0, -2.42994689941406]];
			likes1Path_newShape.outTangents = [[0, 0], [0, 0], [0, 0], [2.05632019042969, -0.03727722167969], [0, -2.43074035644531], [-1.82386779785156, 0], [-0.64961242675781, -0.91201782226562], [-2.29116821289062, 0], [0, 5.05815124511719]];
			likes1Path_newShape.closed = true;
		likes1Path.setValue(likes1Path_newShape);
		likes1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		likes1.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var likes1Path3 = likes1.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var likes1Path3_newShape = new Shape();
			likes1Path3_newShape.vertices = [[-6.8050537109375, -2.93513488769531], [-3.6978759765625, -6.30961608886719], [-3.69708251953125, -6.30961608886719], [-0.54930114746094, -3.95817565917969], [0.55488586425781, -3.95817565917969], [3.70106506347656, -6.30961608886719], [6.80824279785156, -2.93513488769531], [0.0015869140625, 6.31040954589844]];
			likes1Path3_newShape.inTangents = [[0, 4.55218505859375], [-1.6558837890625, 0], [0, 0], [-0.01113891601562, -0.02378845214844], [-0.18310546875, 0.44569396972656], [-2.01254272460938, 0], [0, -1.79786682128906], [1.20848083496094, -0.04916381835938]];
			likes1Path3_newShape.outTangents = [[0, -1.79786682128906], [0, 0], [2.01333618164062, 0], [0.18389892578125, 0.44569396972656], [0.00955200195312, -0.02299499511719], [1.6558837890625, 0], [0, 4.552978515625], [-1.20689392089844, -0.04916381835938]];
			likes1Path3_newShape.closed = true;
		likes1Path3.setValue(likes1Path3_newShape);
		likes1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		likes1.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		likes1.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		likes1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		likes1.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		likes1.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		likes1.property("ADBE Transform Group").property("ADBE Position").setValue([353,75.5,0]);
		likes1.selected = false;
	var compcode2 = tweetStyle1_comp.layers.addBoxText([8.15999984741211,17], "2");
		compcode2.name = "2";
		compcode2.label = 11;
		compcode2.moveToEnd();
		var compcode2_TextProp = compcode2.property("ADBE Text Properties").property("ADBE Text Document");
		var compcode2_TextDocument = compcode2_TextProp.value;
			compcode2_TextDocument.font = "Helvetica";
			compcode2_TextDocument.fontSize = 14;
			compcode2_TextDocument.applyFill = true;
			compcode2_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			compcode2_TextDocument.applyStroke = false;
			compcode2_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			compcode2_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				compcode2_TextDocument.verticalScale = 1;
				compcode2_TextDocument.horizontalScale = 1;
				compcode2_TextDocument.baselineShift = 0;
				compcode2_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// compcode2_TextDocument.fauxBold = false;
				// compcode2_TextDocument.fauxItalic = false;
				// compcode2_TextDocument.allCaps = false;
				// compcode2_TextDocument.smallCaps = false;
				// compcode2_TextDocument.superscript = false;
				// compcode2_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				compcode2_TextDocument.leading = 16.8000011444092;
				compcode2_TextDocument.autoLeading = true;
			}
			compcode2_TextProp.setValue(compcode2_TextDocument);
		compcode2.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-0.25871276855469,-3.345703125,0]);
		compcode2.property("ADBE Transform Group").property("ADBE Position").setValue([375.999998092651,75.5,0]);
		compcode2.selected = false;
	// Add Shape Layer "Share", varName "share";
	var share = tweetStyle1_comp.layers.addShape();
		share.name = "Share";
		share.label = 11;
		share.moveToEnd();
		share.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		share.property("ADBE Root Vectors Group").property(1).name = "Union";
		share.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		share.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var sharePath = share.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var sharePath_newShape = new Shape();
			sharePath_newShape.vertices = [[360.397521972656, 1765.77966308594], [364.147521972656, 1769.52966308594], [364.147521972656, 1769.52966308594], [364.147521972656, 1770.32470703125], [363.75, 1770.48962402344], [363.352508544922, 1770.32470703125], [360.5625, 1767.53466796875], [360.5625, 1775.17712402344], [360, 1775.73962402344], [359.4375, 1775.17712402344], [359.4375, 1767.53466796875], [356.647521972656, 1770.32470703125], [355.852508544922, 1770.32470703125], [355.852508544922, 1769.52966308594], [359.602508544922, 1765.77966308594]];
			sharePath_newShape.inTangents = [[-0.21975708007812, -0.2197265625], [0, 0], [0, 0], [0.21975708007812, -0.2197265625], [0.14398193359375, 0], [0.1094970703125, 0.1102294921875], [0, 0], [0, 0], [0.31048583984375, 0], [0, 0.310546875], [0, 0], [0, 0], [0.22048950195312, 0.218994140625], [-0.22048950195312, 0.2197265625], [0, 0]];
			sharePath_newShape.outTangents = [[0, 0], [0, 0], [0.21975708007812, 0.2197265625], [-0.1094970703125, 0.1109619140625], [-0.14398193359375, 0], [0, 0], [0, 0], [0, 0.310546875], [-0.31048583984375, 0], [0, 0], [0, 0], [-0.21975708007812, 0.220458984375], [-0.22048950195312, -0.218994140625], [0, 0], [0.218994140625, -0.2197265625]];
			sharePath_newShape.closed = true;
		sharePath.setValue(sharePath_newShape);
		share.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		share.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var sharePath3 = share.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var sharePath3_newShape = new Shape();
			sharePath3_newShape.vertices = [[354.218994140625, 1780.38513183594], [365.781005859375, 1780.38513183594], [365.781005859375, 1780.38513183594], [367.5, 1778.66613769531], [367.5, 1774.42712402344], [366.9375, 1773.86462402344], [366.375, 1774.42712402344], [366.375, 1778.66613769531], [365.781005859375, 1779.26013183594], [354.218994140625, 1779.26013183594], [353.625, 1778.66613769531], [353.625, 1774.42712402344], [353.0625, 1773.86462402344], [352.5, 1774.42712402344], [352.5, 1778.66613769531]];
			sharePath3_newShape.inTangents = [[-0.947998046875, 0], [0, 0], [0, 0], [0, 0.947998046875], [0, 0], [0.31048583984375, 0], [0, -0.310546875], [0, 0], [0.3277587890625, 0], [0, 0], [0, 0.3277587890625], [0, 0], [0.31048583984375, 0], [0, -0.310546875], [0, 0]];
			sharePath3_newShape.outTangents = [[0, 0], [0, 0], [0.947998046875, 0], [0, 0], [0, -0.310546875], [-0.31048583984375, 0], [0, 0], [0, 0.3277587890625], [0, 0], [-0.3277587890625, 0], [0, 0], [0, -0.310546875], [-0.31048583984375, 0], [0, 0], [0, 0.947998046875]];
			sharePath3_newShape.closed = true;
		sharePath3.setValue(sharePath3_newShape);
		share.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		share.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		share.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		share.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		share.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		share.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		share.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([360,1773,0]);
		share.property("ADBE Transform Group").property("ADBE Position").setValue([500,75.3851318359375,0]);
		share.selected = false;
	// Lock Layers
		topEdge.locked = true;
		arrow4.locked = true;
		imageMatte.locked = true;
		avatarImage3.locked = true;

}
// Working with comp "Tweet (Style 2)", varName "tweetStyle2_comp";
if (tweetStyle2_comp_populate === true) {
	// Add Shape Layer "Top Edge", varName "topEdge1";
	var topEdge1 = tweetStyle2_comp.layers.addShape();
		topEdge1.name = "Top Edge";
		topEdge1.label = 0;
		topEdge1.moveToEnd();
		topEdge1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		topEdge1.property("ADBE Root Vectors Group").property(1).name = "Rectangle 145";
		topEdge1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		topEdge1.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var topEdge1Path = topEdge1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var topEdge1Path_newShape = new Shape();
			topEdge1Path_newShape.vertices = [[-299.5, -0.5], [299.5, -0.5], [299.5, 0.5], [-299.5, 0.5]];
			topEdge1Path_newShape.closed = true;
		topEdge1Path.setValue(topEdge1Path_newShape);
		topEdge1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		topEdge1.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		topEdge1.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.22745098173618,0.26666668057442,0.29803922772408,1]);
		topEdge1.property("ADBE Transform Group").property("ADBE Position").setValue([299.5,0.5,0]);
		topEdge1.selected = false;
	// Add Shape Layer "Arrow", varName "arrow5";
	var arrow5 = tweetStyle2_comp.layers.addShape();
		arrow5.name = "Arrow";
		arrow5.label = 0;
		arrow5.moveToEnd();
		arrow5.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		arrow5.property("ADBE Root Vectors Group").property(1).name = "Vector";
		arrow5.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		arrow5.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var arrow5Path = arrow5.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var arrow5Path_newShape = new Shape();
			arrow5Path_newShape.vertices = [[3.99612426757812, -2.81527709960938], [4.82792663574219, -2.81527709960938], [4.82792663574219, -2.81401062011719], [4.82792663574219, -1.921630859375], [0.41590881347656, 2.81495666503906], [0, 3], [-0.41590881347656, 2.8143310546875], [-4.82792663574219, -1.92227172851562], [-4.82792663574219, -2.81527709960938], [-3.99612426757812, -2.81527709960938], [0, 1.47482299804688]];
			arrow5Path_newShape.inTangents = [[0, 0], [-0.22943115234375, -0.24630737304688], [0, 0], [0.22943115234375, -0.24630737304688], [0, 0], [0.15118408203125, 0], [0.11471557617188, 0.123779296875], [0, 0], [-0.22943115234375, 0.24630737304688], [-0.22943115234375, -0.24630737304688], [0, 0]];
			arrow5Path_newShape.outTangents = [[0.23001098632812, -0.24630737304688], [0, 0], [0.22943115234375, 0.24693298339844], [0, 0], [-0.11471557617188, 0.12315368652344], [-0.15118408203125, 0], [0, 0], [-0.22943115234375, -0.24693298339844], [0.23001098632812, -0.24630737304688], [0, 0], [0, 0]];
			arrow5Path_newShape.closed = true;
		arrow5Path.setValue(arrow5Path_newShape);
		arrow5.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		arrow5.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		arrow5.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		arrow5.property("ADBE Transform Group").property("ADBE Position").setValue([574,22,0]);
		arrow5.selected = false;
	// Add Shape Layer "IMAGE MATTE", varName "imageMatte1";
	var imageMatte1 = tweetStyle2_comp.layers.addShape();
		imageMatte1.name = "IMAGE MATTE";
		imageMatte1.enabled = false;
		imageMatte1.shy = true;
		imageMatte1.moveToEnd();
		imageMatte1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		imageMatte1.property("ADBE Root Vectors Group").property(1).name = "PROFILE IMAGE";
		imageMatte1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		imageMatte1.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var imageMatte1Path = imageMatte1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var imageMatte1Path_newShape = new Shape();
			imageMatte1Path_newShape.vertices = [[0, -24.5], [24.5, 0], [0, 24.5], [-24.5, 0]];
			imageMatte1Path_newShape.inTangents = [[-13.7640380859375, 0], [0, -13.7640380859375], [13.7640380859375, 0], [0, 13.7640380859375]];
			imageMatte1Path_newShape.outTangents = [[13.7640380859375, 0], [0, 13.7640380859375], [-13.7640380859375, 0], [0, -13.7640380859375]];
			imageMatte1Path_newShape.closed = true;
		imageMatte1Path.setValue(imageMatte1Path_newShape);
		imageMatte1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		imageMatte1.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		imageMatte1.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.76862746477127,0.76862746477127,0.76862746477127,1]);
		imageMatte1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Graphic - Fill");
		imageMatte1.property("ADBE Root Vectors Group").property(2).name = "Fill 1";
		imageMatte1.property("ADBE Transform Group").property("ADBE Position").setValue([39.5,36.5,0]);
		imageMatte1.effectsActive = false;
		imageMatte1.selected = false;
	// Add existing composition "Avatar Image", varName "avatarImage_comp";
	var avatarImage4 = tweetStyle2_comp.layers.add(avatarImage_comp);
		avatarImage4.moveToEnd();
		avatarImage4.trackMatteType = TrackMatteType.ALPHA;
		avatarImage4.property("ADBE Transform Group").property("ADBE Position").setValue([39.5,36.5,0]);
		avatarImage4.property("ADBE Transform Group").property("ADBE Scale").setValue([8.41666666666667,8.41666666666667,100]);
		avatarImage4.selected = false;
	var profileNameProfilename19h1 = tweetStyle2_comp.layers.addText(File.decode("Username%20@TwitterHandle%20%E2%80%A2%2019h"));
		profileNameProfilename19h1.name = File.decode("Profile%20Name%20@ProfileName%20%E2%80%A2%2019h");
		profileNameProfilename19h1.moveToEnd();
		var profileNameProfilename19h1_TextProp = profileNameProfilename19h1.property("ADBE Text Properties").property("ADBE Text Document");
		var profileNameProfilename19h1_TextDocument = profileNameProfilename19h1_TextProp.value;
			profileNameProfilename19h1_TextDocument.font = "HelveticaNeue-Bold";
			profileNameProfilename19h1_TextDocument.fontSize = 16;
			profileNameProfilename19h1_TextDocument.applyFill = true;
			profileNameProfilename19h1_TextDocument.fillColor = [1,1,1];
			profileNameProfilename19h1_TextDocument.applyStroke = false;
			profileNameProfilename19h1_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			profileNameProfilename19h1_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				profileNameProfilename19h1_TextDocument.verticalScale = 1;
				profileNameProfilename19h1_TextDocument.horizontalScale = 1;
				profileNameProfilename19h1_TextDocument.baselineShift = 0;
				profileNameProfilename19h1_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// profileNameProfilename19h1_TextDocument.fauxBold = false;
				// profileNameProfilename19h1_TextDocument.fauxItalic = false;
				// profileNameProfilename19h1_TextDocument.allCaps = false;
				// profileNameProfilename19h1_TextDocument.smallCaps = false;
				// profileNameProfilename19h1_TextDocument.superscript = false;
				// profileNameProfilename19h1_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				profileNameProfilename19h1_TextDocument.leading = 19.2000007629395;
				profileNameProfilename19h1_TextDocument.autoLeading = true;
			}
			profileNameProfilename19h1_TextProp.setValue(profileNameProfilename19h1_TextDocument);
		profileNameProfilename19h1.property("ADBE Transform Group").property("ADBE Position").setValue([71.5690002441406,23.6959991455078,0]);
		profileNameProfilename19h1.selected = false;
	var loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj = tweetStyle2_comp.layers.addText("Lorem Ipsum is simply dummy text of the printing and typesetting" + "\n" + 
				"industry. Lorem Ipsum has been the industry\'s: bit.ly/2kvf6yj");
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj.name = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s: bit.ly/2kvf6yj";
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj.moveToEnd();
		var loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextProp = loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj.property("ADBE Text Properties").property("ADBE Text Document");
		var loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument = loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextProp.value;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.font = "Helvetica";
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.fontSize = 16;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.applyFill = true;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.fillColor = [1,1,1];
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.applyStroke = false;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.verticalScale = 1;
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.horizontalScale = 1;
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.baselineShift = 0;
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.fauxBold = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.fauxItalic = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.allCaps = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.smallCaps = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.superscript = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.leading = 18.8479995727539;
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.autoLeading = false;
			}
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextProp.setValue(loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument);
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0.00000381469727,0]);
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj.property("ADBE Transform Group").property("ADBE Position").setValue([71.40625,46.265625,0]);
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj.selected = false;
	// Add Shape Layer "Comments", varName "comments1";
	var comments1 = tweetStyle2_comp.layers.addShape();
		comments1.name = "Comments";
		comments1.label = 11;
		comments1.moveToEnd();
		comments1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		comments1.property("ADBE Root Vectors Group").property(1).name = "Vector";
		comments1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		comments1.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var comments1Path = comments1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var comments1Path_newShape = new Shape();
			comments1Path_newShape.vertices = [[-1.57443237304688, -7.5], [1.57594299316406, -7.49240112304688], [1.57594299316406, -7.4931640625], [7.5, -1.57823181152344], [7.5, -1.56532287597656], [5.18885803222656, 3.22860717773438], [-0.95391845703125, 7.41038513183594], [-1.25924682617188, 7.5], [-1.73924255371094, 7.2364501953125], [-1.83038330078125, 6.93037414550781], [-1.83038330078125, 4.02304077148438], [-7.5, -1.57443237304688], [-1.57594299316406, -7.5]];
			comments1Path_newShape.inTangents = [[0, 0], [0, 0], [0, 0], [-0.00456237792969, -3.31671142578125], [0, 0], [1.44454956054688, -1.2227783203125], [0.20050048828125, -0.12759399414062], [0.10481262207031, 0], [0.10784912109375, 0.17088317871094], [0, 0.08203125], [0, 0], [0, 3.11241149902344], [-3.322021484375, 0]];
			comments1Path_newShape.outTangents = [[0, 0], [0, 0], [3.31898498535156, 0.00076293945312], [0, 0], [-0.00227355957031, 1.77873229980469], [-1.22657775878906, 1.0374755859375], [-0.09494018554688, 0.06076049804688], [-0.1883544921875, 0], [-0.05772399902344, -0.0888671875], [0, 0], [-3.2498779296875, -0.12455749511719], [0, -3.32278442382812], [0, 0]];
			comments1Path_newShape.closed = true;
		comments1Path.setValue(comments1Path_newShape);
		comments1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		comments1.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var comments1Path3 = comments1.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var comments1Path3_newShape = new Shape();
			comments1Path3_newShape.vertices = [[-0.69113159179688, 5.88607788085938], [4.4521484375, 2.3597412109375], [4.45291137695312, 2.3597412109375], [6.36227416992188, -1.57139587402344], [1.57594299316406, -6.35316467285156], [1.57443237304688, -6.35316467285156], [-1.5751953125, -6.36076354980469], [-6.36000061035156, -1.57443237304688], [-1.5615234375, 2.89595031738281], [-1.26075744628906, 2.89595031738281], [-0.69113159179688, 3.465576171875]];
			comments1Path3_newShape.inTangents = [[0, 0], [-0.86126708984375, 0.72911071777344], [0, 0], [-0.00227355957031, 1.45063781738281], [2.68252563476562, 0], [0, 0], [0, 0], [0, -2.68405151367188], [-2.77973937988281, 0], [0, 0], [0, -0.31443786621094]];
			comments1Path3_newShape.outTangents = [[1.45063781738281, -0.94024658203125], [0, 0], [1.19392395019531, -1.01164245605469], [-0.00152587890625, -2.68101501464844], [0, 0], [0, 0], [-2.68252563476562, 0], [0, 2.58987426757812], [0, 0], [0.315185546875, 0], [0, 0]];
			comments1Path3_newShape.closed = true;
		comments1Path3.setValue(comments1Path3_newShape);
		comments1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		comments1.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		comments1.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		comments1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		comments1.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		comments1.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		comments1.property("ADBE Transform Group").property("ADBE Position").setValue([82.5,92.75,0]);
		comments1.selected = false;
	var compcode5 = tweetStyle2_comp.layers.addBoxText([19.6599998474121,17], "4");
		compcode5.name = "4";
		compcode5.label = 11;
		compcode5.moveToEnd();
		var compcode5_TextProp = compcode5.property("ADBE Text Properties").property("ADBE Text Document");
		var compcode5_TextDocument = compcode5_TextProp.value;
			compcode5_TextDocument.font = "Helvetica";
			compcode5_TextDocument.fontSize = 14;
			compcode5_TextDocument.applyFill = true;
			compcode5_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			compcode5_TextDocument.applyStroke = false;
			compcode5_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			compcode5_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				compcode5_TextDocument.verticalScale = 1;
				compcode5_TextDocument.horizontalScale = 1;
				compcode5_TextDocument.baselineShift = 0;
				compcode5_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// compcode5_TextDocument.fauxBold = false;
				// compcode5_TextDocument.fauxItalic = false;
				// compcode5_TextDocument.allCaps = false;
				// compcode5_TextDocument.smallCaps = false;
				// compcode5_TextDocument.superscript = false;
				// compcode5_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				compcode5_TextDocument.leading = 16.8000011444092;
				compcode5_TextDocument.autoLeading = true;
			}
			compcode5_TextProp.setValue(compcode5_TextDocument);
		compcode5.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-0.25871276855469,-3.345703125,0]);
		compcode5.property("ADBE Transform Group").property("ADBE Position").setValue([104.249998092651,92.75,0]);
		compcode5.selected = false;
	// Add Shape Layer "Retweets", varName "retweets1";
	var retweets1 = tweetStyle2_comp.layers.addShape();
		retweets1.name = "Retweets";
		retweets1.label = 11;
		retweets1.moveToEnd();
		retweets1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		retweets1.property("ADBE Root Vectors Group").property(1).name = "Vector";
		retweets1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		retweets1.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var retweets1Path = retweets1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var retweets1Path_newShape = new Shape();
			retweets1Path_newShape.vertices = [[8.48538208007812, 2.74543762207031], [9.32528686523438, 2.74543762207031], [9.32528686523438, 2.74543762207031], [9.32528686523438, 3.57803344726562], [6.55203247070312, 6.32719421386719], [6.132080078125, 6.5], [5.71212768554688, 6.32719421386719], [2.93885803222656, 3.57803344726562], [2.93885803222656, 2.74543762207031], [3.77876281738281, 2.74543762207031], [5.53781127929688, 4.48918151855469], [5.53781127929688, -3.5540771484375], [3.75498962402344, -5.32139587402344], [-0.88031005859375, -5.32139587402344], [-1.47457885742188, -5.91050720214844], [-0.88031005859375, -6.49960327148438], [3.75498962402344, -6.49960327148438], [6.72634887695312, -3.5540771484375], [6.72634887695312, 4.48918151855469]];
			retweets1Path_newShape.inTangents = [[0, 0], [-0.23136901855469, -0.23014831542969], [0, 0], [0.23295593261719, -0.22935485839844], [0, 0], [0.15292358398438, 0], [0.11489868164062, 0.11546325683594], [0, 0], [-0.23136901855469, 0.23014831542969], [-0.23216247558594, -0.23014831542969], [0, 0], [0, 0], [0.98252868652344, 0], [0, 0], [0, 0.32518005371094], [-0.32803344726562, 0], [0, 0], [0, -1.62435913085938], [0, 0]];
			retweets1Path_newShape.outTangents = [[0.23216247558594, -0.23014831542969], [0, 0], [0.23295593261719, 0.23014831542969], [0, 0], [-0.11647033691406, 0.11625671386719], [-0.15292358398438, 0], [0, 0], [-0.23295593261719, -0.22935485839844], [0.23136901855469, -0.23014831542969], [0, 0], [0, 0], [0, -0.97398376464844], [0, 0], [-0.32803344726562, 0], [0, -0.32518005371094], [0, 0], [1.63780212402344, 0], [0, 0], [0, 0]];
			retweets1Path_newShape.closed = true;
		retweets1Path.setValue(retweets1Path_newShape);
		retweets1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		retweets1.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var retweets1Path3 = retweets1.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var retweets1Path3_newShape = new Shape();
			retweets1Path3_newShape.vertices = [[-3.75657653808594, 5.32179260253906], [0.87872314453125, 5.32179260253906], [0.88031005859375, 5.32179260253906], [1.47457885742188, 5.910888671875], [0.88031005859375, 6.5], [-3.75498962402344, 6.5], [-6.72634887695312, 3.55447387695312], [-6.72634887695312, -4.48878479003906], [-8.48538208007812, -2.74504089355469], [-9.32528686523438, -2.74504089355469], [-9.32528686523438, -3.57763671875], [-6.55201721191406, -6.32679748535156], [-5.71212768554688, -6.32679748535156], [-2.93885803222656, -3.57763671875], [-2.93885803222656, -2.74504089355469], [-3.35881042480469, -2.57223510742188], [-3.78034973144531, -2.74504089355469], [-5.53938293457031, -4.48878479003906], [-5.53938293457031, 3.55447387695312]];
			retweets1Path3_newShape.inTangents = [[-0.98252868652344, 0], [0, 0], [0, 0], [0, -0.32518005371094], [0.32803344726562, 0], [0, 0], [0, 1.62435913085938], [0, 0], [0, 0], [0.23295593261719, 0.23014831542969], [-0.23295593261719, 0.22935485839844], [0, 0], [-0.23216247558594, -0.23092651367188], [0, 0], [0.23216247558594, -0.23014831542969], [0.15213012695312, 0], [0.11726379394531, 0.11546325683594], [0, 0], [0, 0]];
			retweets1Path3_newShape.outTangents = [[0, 0], [0, 0], [0.32723999023438, 0], [0, 0.32518005371094], [0, 0], [-1.63780212402344, 0], [0, 0], [0, 0], [-0.23216247558594, 0.23014831542969], [-0.23295593261719, -0.23014831542969], [0, 0], [0.23136901855469, -0.23092651367188], [0, 0], [0.23216247558594, 0.22935485839844], [-0.11569213867188, 0.11546325683594], [-0.15213012695312, 0], [0, 0], [0, 0], [0, 0.97398376464844]];
			retweets1Path3_newShape.closed = true;
		retweets1Path3.setValue(retweets1Path3_newShape);
		retweets1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		retweets1.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		retweets1.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		retweets1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		retweets1.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		retweets1.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		retweets1.property("ADBE Transform Group").property("ADBE Position").setValue([217.5,92.75,0]);
		retweets1.selected = false;
	var compcode6 = tweetStyle2_comp.layers.addBoxText([19.6599998474121,17], "3");
		compcode6.name = "3";
		compcode6.label = 11;
		compcode6.moveToEnd();
		var compcode6_TextProp = compcode6.property("ADBE Text Properties").property("ADBE Text Document");
		var compcode6_TextDocument = compcode6_TextProp.value;
			compcode6_TextDocument.font = "Helvetica";
			compcode6_TextDocument.fontSize = 14;
			compcode6_TextDocument.applyFill = true;
			compcode6_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			compcode6_TextDocument.applyStroke = false;
			compcode6_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			compcode6_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				compcode6_TextDocument.verticalScale = 1;
				compcode6_TextDocument.horizontalScale = 1;
				compcode6_TextDocument.baselineShift = 0;
				compcode6_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// compcode6_TextDocument.fauxBold = false;
				// compcode6_TextDocument.fauxItalic = false;
				// compcode6_TextDocument.allCaps = false;
				// compcode6_TextDocument.smallCaps = false;
				// compcode6_TextDocument.superscript = false;
				// compcode6_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				compcode6_TextDocument.leading = 16.8000011444092;
				compcode6_TextDocument.autoLeading = true;
			}
			compcode6_TextProp.setValue(compcode6_TextDocument);
		compcode6.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-0.25871276855469,-3.345703125,0]);
		compcode6.property("ADBE Transform Group").property("ADBE Position").setValue([241.249998092651,92.75,0]);
		compcode6.selected = false;
	// Add Shape Layer "Likes", varName "likes2";
	var likes2 = tweetStyle2_comp.layers.addShape();
		likes2.name = "Likes";
		likes2.label = 11;
		likes2.moveToEnd();
		likes2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		likes2.property("ADBE Root Vectors Group").property(1).name = "Vector";
		likes2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		likes2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var likes2Path = likes2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var likes2Path_newShape = new Shape();
			likes2Path_newShape.vertices = [[-0.01034545898438, 7.5], [0.00079345703125, 7.5], [0.00079345703125, 7.4984130859375], [0.00955200195312, 7.4984130859375], [8, -2.93592834472656], [3.6978759765625, -7.5], [0, -5.33493041992188], [-3.69866943359375, -7.5], [-8, -2.93670654296875]];
			likes2Path_newShape.inTangents = [[-2.05632019042969, -0.03807067871094], [0, 0], [0, 0], [0, 0], [0, 5.05656433105469], [2.29277038574219, 0], [0.64802551269531, -0.91043090820312], [1.82307434082031, 0], [0, -2.42994689941406]];
			likes2Path_newShape.outTangents = [[0, 0], [0, 0], [0, 0], [2.05632019042969, -0.03727722167969], [0, -2.43074035644531], [-1.82386779785156, 0], [-0.64961242675781, -0.91201782226562], [-2.29116821289062, 0], [0, 5.05815124511719]];
			likes2Path_newShape.closed = true;
		likes2Path.setValue(likes2Path_newShape);
		likes2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		likes2.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var likes2Path3 = likes2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var likes2Path3_newShape = new Shape();
			likes2Path3_newShape.vertices = [[-6.8050537109375, -2.93513488769531], [-3.6978759765625, -6.30961608886719], [-3.69708251953125, -6.30961608886719], [-0.54930114746094, -3.95817565917969], [0.55488586425781, -3.95817565917969], [3.70106506347656, -6.30961608886719], [6.80824279785156, -2.93513488769531], [0.0015869140625, 6.31040954589844]];
			likes2Path3_newShape.inTangents = [[0, 4.55218505859375], [-1.6558837890625, 0], [0, 0], [-0.01113891601562, -0.02378845214844], [-0.18310546875, 0.44569396972656], [-2.01254272460938, 0], [0, -1.79786682128906], [1.20848083496094, -0.04916381835938]];
			likes2Path3_newShape.outTangents = [[0, -1.79786682128906], [0, 0], [2.01333618164062, 0], [0.18389892578125, 0.44569396972656], [0.00955200195312, -0.02299499511719], [1.6558837890625, 0], [0, 4.552978515625], [-1.20689392089844, -0.04916381835938]];
			likes2Path3_newShape.closed = true;
		likes2Path3.setValue(likes2Path3_newShape);
		likes2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		likes2.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		likes2.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		likes2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		likes2.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		likes2.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		likes2.property("ADBE Transform Group").property("ADBE Position").setValue([353,92.75,0]);
		likes2.selected = false;
	var compcode7 = tweetStyle2_comp.layers.addBoxText([8.15999984741211,17], "2");
		compcode7.name = "2";
		compcode7.label = 11;
		compcode7.moveToEnd();
		var compcode7_TextProp = compcode7.property("ADBE Text Properties").property("ADBE Text Document");
		var compcode7_TextDocument = compcode7_TextProp.value;
			compcode7_TextDocument.font = "Helvetica";
			compcode7_TextDocument.fontSize = 14;
			compcode7_TextDocument.applyFill = true;
			compcode7_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			compcode7_TextDocument.applyStroke = false;
			compcode7_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			compcode7_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				compcode7_TextDocument.verticalScale = 1;
				compcode7_TextDocument.horizontalScale = 1;
				compcode7_TextDocument.baselineShift = 0;
				compcode7_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// compcode7_TextDocument.fauxBold = false;
				// compcode7_TextDocument.fauxItalic = false;
				// compcode7_TextDocument.allCaps = false;
				// compcode7_TextDocument.smallCaps = false;
				// compcode7_TextDocument.superscript = false;
				// compcode7_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				compcode7_TextDocument.leading = 16.8000011444092;
				compcode7_TextDocument.autoLeading = true;
			}
			compcode7_TextProp.setValue(compcode7_TextDocument);
		compcode7.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-0.25871276855469,-3.345703125,0]);
		compcode7.property("ADBE Transform Group").property("ADBE Position").setValue([375.999998092651,92.75,0]);
		compcode7.selected = false;
	// Add Shape Layer "Share", varName "share1";
	var share1 = tweetStyle2_comp.layers.addShape();
		share1.name = "Share";
		share1.label = 11;
		share1.moveToEnd();
		share1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		share1.property("ADBE Root Vectors Group").property(1).name = "Union";
		share1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		share1.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var share1Path = share1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var share1Path_newShape = new Shape();
			share1Path_newShape.vertices = [[360.397521972656, 1765.77966308594], [364.147521972656, 1769.52966308594], [364.147521972656, 1769.52966308594], [364.147521972656, 1770.32470703125], [363.75, 1770.48962402344], [363.352508544922, 1770.32470703125], [360.5625, 1767.53466796875], [360.5625, 1775.17712402344], [360, 1775.73962402344], [359.4375, 1775.17712402344], [359.4375, 1767.53466796875], [356.647521972656, 1770.32470703125], [355.852508544922, 1770.32470703125], [355.852508544922, 1769.52966308594], [359.602508544922, 1765.77966308594]];
			share1Path_newShape.inTangents = [[-0.21975708007812, -0.2197265625], [0, 0], [0, 0], [0.21975708007812, -0.2197265625], [0.14398193359375, 0], [0.1094970703125, 0.1102294921875], [0, 0], [0, 0], [0.31048583984375, 0], [0, 0.310546875], [0, 0], [0, 0], [0.22048950195312, 0.218994140625], [-0.22048950195312, 0.2197265625], [0, 0]];
			share1Path_newShape.outTangents = [[0, 0], [0, 0], [0.21975708007812, 0.2197265625], [-0.1094970703125, 0.1109619140625], [-0.14398193359375, 0], [0, 0], [0, 0], [0, 0.310546875], [-0.31048583984375, 0], [0, 0], [0, 0], [-0.21975708007812, 0.220458984375], [-0.22048950195312, -0.218994140625], [0, 0], [0.218994140625, -0.2197265625]];
			share1Path_newShape.closed = true;
		share1Path.setValue(share1Path_newShape);
		share1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		share1.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var share1Path3 = share1.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var share1Path3_newShape = new Shape();
			share1Path3_newShape.vertices = [[354.218994140625, 1780.38513183594], [365.781005859375, 1780.38513183594], [365.781005859375, 1780.38513183594], [367.5, 1778.66613769531], [367.5, 1774.42712402344], [366.9375, 1773.86462402344], [366.375, 1774.42712402344], [366.375, 1778.66613769531], [365.781005859375, 1779.26013183594], [354.218994140625, 1779.26013183594], [353.625, 1778.66613769531], [353.625, 1774.42712402344], [353.0625, 1773.86462402344], [352.5, 1774.42712402344], [352.5, 1778.66613769531]];
			share1Path3_newShape.inTangents = [[-0.947998046875, 0], [0, 0], [0, 0], [0, 0.947998046875], [0, 0], [0.31048583984375, 0], [0, -0.310546875], [0, 0], [0.3277587890625, 0], [0, 0], [0, 0.3277587890625], [0, 0], [0.31048583984375, 0], [0, -0.310546875], [0, 0]];
			share1Path3_newShape.outTangents = [[0, 0], [0, 0], [0.947998046875, 0], [0, 0], [0, -0.310546875], [-0.31048583984375, 0], [0, 0], [0, 0.3277587890625], [0, 0], [-0.3277587890625, 0], [0, 0], [0, -0.310546875], [-0.31048583984375, 0], [0, 0], [0, 0.947998046875]];
			share1Path3_newShape.closed = true;
		share1Path3.setValue(share1Path3_newShape);
		share1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		share1.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		share1.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		share1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		share1.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		share1.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		share1.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([360,1773,0]);
		share1.property("ADBE Transform Group").property("ADBE Position").setValue([500,92.6351318359375,0]);
		share1.selected = false;
	// Lock Layers
		topEdge1.locked = true;
		arrow5.locked = true;
		imageMatte1.locked = true;
		avatarImage4.locked = true;

}
// Working with comp "Tweet (Style 3)", varName "tweetStyle3_comp";
if (tweetStyle3_comp_populate === true) {
	// Add Shape Layer "Top Edge", varName "topEdge2";
	var topEdge2 = tweetStyle3_comp.layers.addShape();
		topEdge2.name = "Top Edge";
		topEdge2.label = 0;
		topEdge2.moveToEnd();
		topEdge2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		topEdge2.property("ADBE Root Vectors Group").property(1).name = "Rectangle 145";
		topEdge2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		topEdge2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var topEdge2Path = topEdge2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var topEdge2Path_newShape = new Shape();
			topEdge2Path_newShape.vertices = [[-299.5, -0.5], [299.5, -0.5], [299.5, 0.5], [-299.5, 0.5]];
			topEdge2Path_newShape.closed = true;
		topEdge2Path.setValue(topEdge2Path_newShape);
		topEdge2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		topEdge2.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		topEdge2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.22745098173618,0.26666668057442,0.29803922772408,1]);
		topEdge2.property("ADBE Transform Group").property("ADBE Position").setValue([299.5,0.5,0]);
		topEdge2.selected = false;
	// Add Shape Layer "Arrow", varName "arrow6";
	var arrow6 = tweetStyle3_comp.layers.addShape();
		arrow6.name = "Arrow";
		arrow6.label = 0;
		arrow6.moveToEnd();
		arrow6.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		arrow6.property("ADBE Root Vectors Group").property(1).name = "Vector";
		arrow6.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		arrow6.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var arrow6Path = arrow6.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var arrow6Path_newShape = new Shape();
			arrow6Path_newShape.vertices = [[3.99612426757812, -2.81527709960938], [4.82792663574219, -2.81527709960938], [4.82792663574219, -2.81401062011719], [4.82792663574219, -1.921630859375], [0.41590881347656, 2.81495666503906], [0, 3], [-0.41590881347656, 2.8143310546875], [-4.82792663574219, -1.92227172851562], [-4.82792663574219, -2.81527709960938], [-3.99612426757812, -2.81527709960938], [0, 1.47482299804688]];
			arrow6Path_newShape.inTangents = [[0, 0], [-0.22943115234375, -0.24630737304688], [0, 0], [0.22943115234375, -0.24630737304688], [0, 0], [0.15118408203125, 0], [0.11471557617188, 0.123779296875], [0, 0], [-0.22943115234375, 0.24630737304688], [-0.22943115234375, -0.24630737304688], [0, 0]];
			arrow6Path_newShape.outTangents = [[0.23001098632812, -0.24630737304688], [0, 0], [0.22943115234375, 0.24693298339844], [0, 0], [-0.11471557617188, 0.12315368652344], [-0.15118408203125, 0], [0, 0], [-0.22943115234375, -0.24693298339844], [0.23001098632812, -0.24630737304688], [0, 0], [0, 0]];
			arrow6Path_newShape.closed = true;
		arrow6Path.setValue(arrow6Path_newShape);
		arrow6.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		arrow6.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		arrow6.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		arrow6.property("ADBE Transform Group").property("ADBE Position").setValue([574,22,0]);
		arrow6.selected = false;
	// Add Shape Layer "IMAGE MATTE", varName "imageMatte2";
	var imageMatte2 = tweetStyle3_comp.layers.addShape();
		imageMatte2.name = "IMAGE MATTE";
		imageMatte2.enabled = false;
		imageMatte2.shy = true;
		imageMatte2.moveToEnd();
		imageMatte2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		imageMatte2.property("ADBE Root Vectors Group").property(1).name = "PROFILE IMAGE";
		imageMatte2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		imageMatte2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var imageMatte2Path = imageMatte2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var imageMatte2Path_newShape = new Shape();
			imageMatte2Path_newShape.vertices = [[0, -24.5], [24.5, 0], [0, 24.5], [-24.5, 0]];
			imageMatte2Path_newShape.inTangents = [[-13.7640380859375, 0], [0, -13.7640380859375], [13.7640380859375, 0], [0, 13.7640380859375]];
			imageMatte2Path_newShape.outTangents = [[13.7640380859375, 0], [0, 13.7640380859375], [-13.7640380859375, 0], [0, -13.7640380859375]];
			imageMatte2Path_newShape.closed = true;
		imageMatte2Path.setValue(imageMatte2Path_newShape);
		imageMatte2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		imageMatte2.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		imageMatte2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.76862746477127,0.76862746477127,0.76862746477127,1]);
		imageMatte2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Graphic - Fill");
		imageMatte2.property("ADBE Root Vectors Group").property(2).name = "Fill 1";
		imageMatte2.property("ADBE Transform Group").property("ADBE Position").setValue([39.5,36.5,0]);
		imageMatte2.effectsActive = false;
		imageMatte2.selected = false;
	// Add existing composition "Avatar Image", varName "avatarImage_comp";
	var avatarImage5 = tweetStyle3_comp.layers.add(avatarImage_comp);
		avatarImage5.moveToEnd();
		avatarImage5.trackMatteType = TrackMatteType.ALPHA;
		avatarImage5.property("ADBE Transform Group").property("ADBE Position").setValue([39.5,36.5,0]);
		avatarImage5.property("ADBE Transform Group").property("ADBE Scale").setValue([8.41666666666667,8.41666666666667,100]);
		avatarImage5.selected = false;
	var profileNameProfilename19h2 = tweetStyle3_comp.layers.addText(File.decode("Username%20@TwitterHandle%20%E2%80%A2%2019h"));
		profileNameProfilename19h2.name = File.decode("Profile%20Name%20@ProfileName%20%E2%80%A2%2019h");
		profileNameProfilename19h2.moveToEnd();
		var profileNameProfilename19h2_TextProp = profileNameProfilename19h2.property("ADBE Text Properties").property("ADBE Text Document");
		var profileNameProfilename19h2_TextDocument = profileNameProfilename19h2_TextProp.value;
			profileNameProfilename19h2_TextDocument.font = "HelveticaNeue-Bold";
			profileNameProfilename19h2_TextDocument.fontSize = 16;
			profileNameProfilename19h2_TextDocument.applyFill = true;
			profileNameProfilename19h2_TextDocument.fillColor = [1,1,1];
			profileNameProfilename19h2_TextDocument.applyStroke = false;
			profileNameProfilename19h2_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			profileNameProfilename19h2_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				profileNameProfilename19h2_TextDocument.verticalScale = 1;
				profileNameProfilename19h2_TextDocument.horizontalScale = 1;
				profileNameProfilename19h2_TextDocument.baselineShift = 0;
				profileNameProfilename19h2_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// profileNameProfilename19h2_TextDocument.fauxBold = false;
				// profileNameProfilename19h2_TextDocument.fauxItalic = false;
				// profileNameProfilename19h2_TextDocument.allCaps = false;
				// profileNameProfilename19h2_TextDocument.smallCaps = false;
				// profileNameProfilename19h2_TextDocument.superscript = false;
				// profileNameProfilename19h2_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				profileNameProfilename19h2_TextDocument.leading = 19.2000007629395;
				profileNameProfilename19h2_TextDocument.autoLeading = true;
			}
			profileNameProfilename19h2_TextProp.setValue(profileNameProfilename19h2_TextDocument);
		profileNameProfilename19h2.property("ADBE Transform Group").property("ADBE Position").setValue([71.5690002441406,23.6959991455078,0]);
		profileNameProfilename19h2.selected = false;
	var loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText = tweetStyle3_comp.layers.addText("Lorem Ipsum is simply dummy text of the printing and typesetting" + "\n" + 
				"industry. Lorem Ipsum has been the industry\'s: bit.ly/2kvf6yj" + "\n" + 
				"third line of text");
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText.name = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s: bit.ly/2kvf6yj third line of text ";
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText.moveToEnd();
		var loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText_TextProp = loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText.property("ADBE Text Properties").property("ADBE Text Document");
		var loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText_TextDocument = loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText_TextProp.value;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText_TextDocument.font = "Helvetica";
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText_TextDocument.fontSize = 16;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText_TextDocument.applyFill = true;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText_TextDocument.fillColor = [1,1,1];
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText_TextDocument.applyStroke = false;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText_TextDocument.verticalScale = 1;
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText_TextDocument.horizontalScale = 1;
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText_TextDocument.baselineShift = 0;
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText_TextDocument.fauxBold = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText_TextDocument.fauxItalic = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText_TextDocument.allCaps = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText_TextDocument.smallCaps = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText_TextDocument.superscript = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText_TextDocument.leading = 18.8479995727539;
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText_TextDocument.autoLeading = false;
			}
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText_TextProp.setValue(loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText_TextDocument);
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0.00000381469727,0]);
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText.property("ADBE Transform Group").property("ADBE Position").setValue([71.40625,46.265625,0]);
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjThirdLineOfText.selected = false;
	// Add Shape Layer "Comments", varName "comments2";
	var comments2 = tweetStyle3_comp.layers.addShape();
		comments2.name = "Comments";
		comments2.label = 11;
		comments2.moveToEnd();
		comments2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		comments2.property("ADBE Root Vectors Group").property(1).name = "Vector";
		comments2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		comments2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var comments2Path = comments2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var comments2Path_newShape = new Shape();
			comments2Path_newShape.vertices = [[-1.57443237304688, -7.5], [1.57594299316406, -7.49240112304688], [1.57594299316406, -7.4931640625], [7.5, -1.57823181152344], [7.5, -1.56532287597656], [5.18885803222656, 3.22860717773438], [-0.95391845703125, 7.41038513183594], [-1.25924682617188, 7.5], [-1.73924255371094, 7.2364501953125], [-1.83038330078125, 6.93037414550781], [-1.83038330078125, 4.02304077148438], [-7.5, -1.57443237304688], [-1.57594299316406, -7.5]];
			comments2Path_newShape.inTangents = [[0, 0], [0, 0], [0, 0], [-0.00456237792969, -3.31671142578125], [0, 0], [1.44454956054688, -1.2227783203125], [0.20050048828125, -0.12759399414062], [0.10481262207031, 0], [0.10784912109375, 0.17088317871094], [0, 0.08203125], [0, 0], [0, 3.11241149902344], [-3.322021484375, 0]];
			comments2Path_newShape.outTangents = [[0, 0], [0, 0], [3.31898498535156, 0.00076293945312], [0, 0], [-0.00227355957031, 1.77873229980469], [-1.22657775878906, 1.0374755859375], [-0.09494018554688, 0.06076049804688], [-0.1883544921875, 0], [-0.05772399902344, -0.0888671875], [0, 0], [-3.2498779296875, -0.12455749511719], [0, -3.32278442382812], [0, 0]];
			comments2Path_newShape.closed = true;
		comments2Path.setValue(comments2Path_newShape);
		comments2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		comments2.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var comments2Path3 = comments2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var comments2Path3_newShape = new Shape();
			comments2Path3_newShape.vertices = [[-0.69113159179688, 5.88607788085938], [4.4521484375, 2.3597412109375], [4.45291137695312, 2.3597412109375], [6.36227416992188, -1.57139587402344], [1.57594299316406, -6.35316467285156], [1.57443237304688, -6.35316467285156], [-1.5751953125, -6.36076354980469], [-6.36000061035156, -1.57443237304688], [-1.5615234375, 2.89595031738281], [-1.26075744628906, 2.89595031738281], [-0.69113159179688, 3.465576171875]];
			comments2Path3_newShape.inTangents = [[0, 0], [-0.86126708984375, 0.72911071777344], [0, 0], [-0.00227355957031, 1.45063781738281], [2.68252563476562, 0], [0, 0], [0, 0], [0, -2.68405151367188], [-2.77973937988281, 0], [0, 0], [0, -0.31443786621094]];
			comments2Path3_newShape.outTangents = [[1.45063781738281, -0.94024658203125], [0, 0], [1.19392395019531, -1.01164245605469], [-0.00152587890625, -2.68101501464844], [0, 0], [0, 0], [-2.68252563476562, 0], [0, 2.58987426757812], [0, 0], [0.315185546875, 0], [0, 0]];
			comments2Path3_newShape.closed = true;
		comments2Path3.setValue(comments2Path3_newShape);
		comments2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		comments2.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		comments2.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		comments2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		comments2.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		comments2.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		comments2.property("ADBE Transform Group").property("ADBE Position").setValue([82.5,115.5,0]);
		comments2.selected = false;
	var compcode8 = tweetStyle3_comp.layers.addBoxText([19.6599998474121,17], "4");
		compcode8.name = "4";
		compcode8.label = 11;
		compcode8.moveToEnd();
		var compcode8_TextProp = compcode8.property("ADBE Text Properties").property("ADBE Text Document");
		var compcode8_TextDocument = compcode8_TextProp.value;
			compcode8_TextDocument.font = "Helvetica";
			compcode8_TextDocument.fontSize = 14;
			compcode8_TextDocument.applyFill = true;
			compcode8_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			compcode8_TextDocument.applyStroke = false;
			compcode8_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			compcode8_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				compcode8_TextDocument.verticalScale = 1;
				compcode8_TextDocument.horizontalScale = 1;
				compcode8_TextDocument.baselineShift = 0;
				compcode8_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// compcode8_TextDocument.fauxBold = false;
				// compcode8_TextDocument.fauxItalic = false;
				// compcode8_TextDocument.allCaps = false;
				// compcode8_TextDocument.smallCaps = false;
				// compcode8_TextDocument.superscript = false;
				// compcode8_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				compcode8_TextDocument.leading = 16.8000011444092;
				compcode8_TextDocument.autoLeading = true;
			}
			compcode8_TextProp.setValue(compcode8_TextDocument);
		compcode8.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-0.25871276855469,-3.345703125,0]);
		compcode8.property("ADBE Transform Group").property("ADBE Position").setValue([104.249998092651,115.5,0]);
		compcode8.selected = false;
	// Add Shape Layer "Retweets", varName "retweets2";
	var retweets2 = tweetStyle3_comp.layers.addShape();
		retweets2.name = "Retweets";
		retweets2.label = 11;
		retweets2.moveToEnd();
		retweets2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		retweets2.property("ADBE Root Vectors Group").property(1).name = "Vector";
		retweets2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		retweets2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var retweets2Path = retweets2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var retweets2Path_newShape = new Shape();
			retweets2Path_newShape.vertices = [[8.48538208007812, 2.74543762207031], [9.32528686523438, 2.74543762207031], [9.32528686523438, 2.74543762207031], [9.32528686523438, 3.57803344726562], [6.55203247070312, 6.32719421386719], [6.132080078125, 6.5], [5.71212768554688, 6.32719421386719], [2.93885803222656, 3.57803344726562], [2.93885803222656, 2.74543762207031], [3.77876281738281, 2.74543762207031], [5.53781127929688, 4.48918151855469], [5.53781127929688, -3.5540771484375], [3.75498962402344, -5.32139587402344], [-0.88031005859375, -5.32139587402344], [-1.47457885742188, -5.91050720214844], [-0.88031005859375, -6.49960327148438], [3.75498962402344, -6.49960327148438], [6.72634887695312, -3.5540771484375], [6.72634887695312, 4.48918151855469]];
			retweets2Path_newShape.inTangents = [[0, 0], [-0.23136901855469, -0.23014831542969], [0, 0], [0.23295593261719, -0.22935485839844], [0, 0], [0.15292358398438, 0], [0.11489868164062, 0.11546325683594], [0, 0], [-0.23136901855469, 0.23014831542969], [-0.23216247558594, -0.23014831542969], [0, 0], [0, 0], [0.98252868652344, 0], [0, 0], [0, 0.32518005371094], [-0.32803344726562, 0], [0, 0], [0, -1.62435913085938], [0, 0]];
			retweets2Path_newShape.outTangents = [[0.23216247558594, -0.23014831542969], [0, 0], [0.23295593261719, 0.23014831542969], [0, 0], [-0.11647033691406, 0.11625671386719], [-0.15292358398438, 0], [0, 0], [-0.23295593261719, -0.22935485839844], [0.23136901855469, -0.23014831542969], [0, 0], [0, 0], [0, -0.97398376464844], [0, 0], [-0.32803344726562, 0], [0, -0.32518005371094], [0, 0], [1.63780212402344, 0], [0, 0], [0, 0]];
			retweets2Path_newShape.closed = true;
		retweets2Path.setValue(retweets2Path_newShape);
		retweets2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		retweets2.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var retweets2Path3 = retweets2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var retweets2Path3_newShape = new Shape();
			retweets2Path3_newShape.vertices = [[-3.75657653808594, 5.32179260253906], [0.87872314453125, 5.32179260253906], [0.88031005859375, 5.32179260253906], [1.47457885742188, 5.910888671875], [0.88031005859375, 6.5], [-3.75498962402344, 6.5], [-6.72634887695312, 3.55447387695312], [-6.72634887695312, -4.48878479003906], [-8.48538208007812, -2.74504089355469], [-9.32528686523438, -2.74504089355469], [-9.32528686523438, -3.57763671875], [-6.55201721191406, -6.32679748535156], [-5.71212768554688, -6.32679748535156], [-2.93885803222656, -3.57763671875], [-2.93885803222656, -2.74504089355469], [-3.35881042480469, -2.57223510742188], [-3.78034973144531, -2.74504089355469], [-5.53938293457031, -4.48878479003906], [-5.53938293457031, 3.55447387695312]];
			retweets2Path3_newShape.inTangents = [[-0.98252868652344, 0], [0, 0], [0, 0], [0, -0.32518005371094], [0.32803344726562, 0], [0, 0], [0, 1.62435913085938], [0, 0], [0, 0], [0.23295593261719, 0.23014831542969], [-0.23295593261719, 0.22935485839844], [0, 0], [-0.23216247558594, -0.23092651367188], [0, 0], [0.23216247558594, -0.23014831542969], [0.15213012695312, 0], [0.11726379394531, 0.11546325683594], [0, 0], [0, 0]];
			retweets2Path3_newShape.outTangents = [[0, 0], [0, 0], [0.32723999023438, 0], [0, 0.32518005371094], [0, 0], [-1.63780212402344, 0], [0, 0], [0, 0], [-0.23216247558594, 0.23014831542969], [-0.23295593261719, -0.23014831542969], [0, 0], [0.23136901855469, -0.23092651367188], [0, 0], [0.23216247558594, 0.22935485839844], [-0.11569213867188, 0.11546325683594], [-0.15213012695312, 0], [0, 0], [0, 0], [0, 0.97398376464844]];
			retweets2Path3_newShape.closed = true;
		retweets2Path3.setValue(retweets2Path3_newShape);
		retweets2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		retweets2.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		retweets2.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		retweets2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		retweets2.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		retweets2.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		retweets2.property("ADBE Transform Group").property("ADBE Position").setValue([217.5,115.5,0]);
		retweets2.selected = false;
	var compcode9 = tweetStyle3_comp.layers.addBoxText([19.6599998474121,17], "3");
		compcode9.name = "3";
		compcode9.label = 11;
		compcode9.moveToEnd();
		var compcode9_TextProp = compcode9.property("ADBE Text Properties").property("ADBE Text Document");
		var compcode9_TextDocument = compcode9_TextProp.value;
			compcode9_TextDocument.font = "Helvetica";
			compcode9_TextDocument.fontSize = 14;
			compcode9_TextDocument.applyFill = true;
			compcode9_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			compcode9_TextDocument.applyStroke = false;
			compcode9_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			compcode9_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				compcode9_TextDocument.verticalScale = 1;
				compcode9_TextDocument.horizontalScale = 1;
				compcode9_TextDocument.baselineShift = 0;
				compcode9_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// compcode9_TextDocument.fauxBold = false;
				// compcode9_TextDocument.fauxItalic = false;
				// compcode9_TextDocument.allCaps = false;
				// compcode9_TextDocument.smallCaps = false;
				// compcode9_TextDocument.superscript = false;
				// compcode9_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				compcode9_TextDocument.leading = 16.8000011444092;
				compcode9_TextDocument.autoLeading = true;
			}
			compcode9_TextProp.setValue(compcode9_TextDocument);
		compcode9.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-0.25871276855469,-3.345703125,0]);
		compcode9.property("ADBE Transform Group").property("ADBE Position").setValue([241.249998092651,115.5,0]);
		compcode9.selected = false;
	// Add Shape Layer "Likes", varName "likes3";
	var likes3 = tweetStyle3_comp.layers.addShape();
		likes3.name = "Likes";
		likes3.label = 11;
		likes3.moveToEnd();
		likes3.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		likes3.property("ADBE Root Vectors Group").property(1).name = "Vector";
		likes3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		likes3.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var likes3Path = likes3.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var likes3Path_newShape = new Shape();
			likes3Path_newShape.vertices = [[-0.01034545898438, 7.5], [0.00079345703125, 7.5], [0.00079345703125, 7.4984130859375], [0.00955200195312, 7.4984130859375], [8, -2.93592834472656], [3.6978759765625, -7.5], [0, -5.33493041992188], [-3.69866943359375, -7.5], [-8, -2.93670654296875]];
			likes3Path_newShape.inTangents = [[-2.05632019042969, -0.03807067871094], [0, 0], [0, 0], [0, 0], [0, 5.05656433105469], [2.29277038574219, 0], [0.64802551269531, -0.91043090820312], [1.82307434082031, 0], [0, -2.42994689941406]];
			likes3Path_newShape.outTangents = [[0, 0], [0, 0], [0, 0], [2.05632019042969, -0.03727722167969], [0, -2.43074035644531], [-1.82386779785156, 0], [-0.64961242675781, -0.91201782226562], [-2.29116821289062, 0], [0, 5.05815124511719]];
			likes3Path_newShape.closed = true;
		likes3Path.setValue(likes3Path_newShape);
		likes3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		likes3.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var likes3Path3 = likes3.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var likes3Path3_newShape = new Shape();
			likes3Path3_newShape.vertices = [[-6.8050537109375, -2.93513488769531], [-3.6978759765625, -6.30961608886719], [-3.69708251953125, -6.30961608886719], [-0.54930114746094, -3.95817565917969], [0.55488586425781, -3.95817565917969], [3.70106506347656, -6.30961608886719], [6.80824279785156, -2.93513488769531], [0.0015869140625, 6.31040954589844]];
			likes3Path3_newShape.inTangents = [[0, 4.55218505859375], [-1.6558837890625, 0], [0, 0], [-0.01113891601562, -0.02378845214844], [-0.18310546875, 0.44569396972656], [-2.01254272460938, 0], [0, -1.79786682128906], [1.20848083496094, -0.04916381835938]];
			likes3Path3_newShape.outTangents = [[0, -1.79786682128906], [0, 0], [2.01333618164062, 0], [0.18389892578125, 0.44569396972656], [0.00955200195312, -0.02299499511719], [1.6558837890625, 0], [0, 4.552978515625], [-1.20689392089844, -0.04916381835938]];
			likes3Path3_newShape.closed = true;
		likes3Path3.setValue(likes3Path3_newShape);
		likes3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		likes3.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		likes3.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		likes3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		likes3.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		likes3.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		likes3.property("ADBE Transform Group").property("ADBE Position").setValue([353,115.5,0]);
		likes3.selected = false;
	var compcode10 = tweetStyle3_comp.layers.addBoxText([8.15999984741211,17], "2");
		compcode10.name = "2";
		compcode10.label = 11;
		compcode10.moveToEnd();
		var compcode10_TextProp = compcode10.property("ADBE Text Properties").property("ADBE Text Document");
		var compcode10_TextDocument = compcode10_TextProp.value;
			compcode10_TextDocument.font = "Helvetica";
			compcode10_TextDocument.fontSize = 14;
			compcode10_TextDocument.applyFill = true;
			compcode10_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			compcode10_TextDocument.applyStroke = false;
			compcode10_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			compcode10_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				compcode10_TextDocument.verticalScale = 1;
				compcode10_TextDocument.horizontalScale = 1;
				compcode10_TextDocument.baselineShift = 0;
				compcode10_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// compcode10_TextDocument.fauxBold = false;
				// compcode10_TextDocument.fauxItalic = false;
				// compcode10_TextDocument.allCaps = false;
				// compcode10_TextDocument.smallCaps = false;
				// compcode10_TextDocument.superscript = false;
				// compcode10_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				compcode10_TextDocument.leading = 16.8000011444092;
				compcode10_TextDocument.autoLeading = true;
			}
			compcode10_TextProp.setValue(compcode10_TextDocument);
		compcode10.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-0.25871276855469,-3.345703125,0]);
		compcode10.property("ADBE Transform Group").property("ADBE Position").setValue([375.999998092651,115.5,0]);
		compcode10.selected = false;
	// Add Shape Layer "Share", varName "share2";
	var share2 = tweetStyle3_comp.layers.addShape();
		share2.name = "Share";
		share2.label = 11;
		share2.moveToEnd();
		share2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		share2.property("ADBE Root Vectors Group").property(1).name = "Union";
		share2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		share2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var share2Path = share2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var share2Path_newShape = new Shape();
			share2Path_newShape.vertices = [[360.397521972656, 1765.77966308594], [364.147521972656, 1769.52966308594], [364.147521972656, 1769.52966308594], [364.147521972656, 1770.32470703125], [363.75, 1770.48962402344], [363.352508544922, 1770.32470703125], [360.5625, 1767.53466796875], [360.5625, 1775.17712402344], [360, 1775.73962402344], [359.4375, 1775.17712402344], [359.4375, 1767.53466796875], [356.647521972656, 1770.32470703125], [355.852508544922, 1770.32470703125], [355.852508544922, 1769.52966308594], [359.602508544922, 1765.77966308594]];
			share2Path_newShape.inTangents = [[-0.21975708007812, -0.2197265625], [0, 0], [0, 0], [0.21975708007812, -0.2197265625], [0.14398193359375, 0], [0.1094970703125, 0.1102294921875], [0, 0], [0, 0], [0.31048583984375, 0], [0, 0.310546875], [0, 0], [0, 0], [0.22048950195312, 0.218994140625], [-0.22048950195312, 0.2197265625], [0, 0]];
			share2Path_newShape.outTangents = [[0, 0], [0, 0], [0.21975708007812, 0.2197265625], [-0.1094970703125, 0.1109619140625], [-0.14398193359375, 0], [0, 0], [0, 0], [0, 0.310546875], [-0.31048583984375, 0], [0, 0], [0, 0], [-0.21975708007812, 0.220458984375], [-0.22048950195312, -0.218994140625], [0, 0], [0.218994140625, -0.2197265625]];
			share2Path_newShape.closed = true;
		share2Path.setValue(share2Path_newShape);
		share2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		share2.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var share2Path3 = share2.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var share2Path3_newShape = new Shape();
			share2Path3_newShape.vertices = [[354.218994140625, 1780.38513183594], [365.781005859375, 1780.38513183594], [365.781005859375, 1780.38513183594], [367.5, 1778.66613769531], [367.5, 1774.42712402344], [366.9375, 1773.86462402344], [366.375, 1774.42712402344], [366.375, 1778.66613769531], [365.781005859375, 1779.26013183594], [354.218994140625, 1779.26013183594], [353.625, 1778.66613769531], [353.625, 1774.42712402344], [353.0625, 1773.86462402344], [352.5, 1774.42712402344], [352.5, 1778.66613769531]];
			share2Path3_newShape.inTangents = [[-0.947998046875, 0], [0, 0], [0, 0], [0, 0.947998046875], [0, 0], [0.31048583984375, 0], [0, -0.310546875], [0, 0], [0.3277587890625, 0], [0, 0], [0, 0.3277587890625], [0, 0], [0.31048583984375, 0], [0, -0.310546875], [0, 0]];
			share2Path3_newShape.outTangents = [[0, 0], [0, 0], [0.947998046875, 0], [0, 0], [0, -0.310546875], [-0.31048583984375, 0], [0, 0], [0, 0.3277587890625], [0, 0], [-0.3277587890625, 0], [0, 0], [0, -0.310546875], [-0.31048583984375, 0], [0, 0], [0, 0.947998046875]];
			share2Path3_newShape.closed = true;
		share2Path3.setValue(share2Path3_newShape);
		share2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		share2.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		share2.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		share2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		share2.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		share2.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		share2.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([360,1773,0]);
		share2.property("ADBE Transform Group").property("ADBE Position").setValue([500,115.385131835938,0]);
		share2.selected = false;
	// Lock Layers
		topEdge2.locked = true;
		arrow6.locked = true;
		imageMatte2.locked = true;
		avatarImage5.locked = true;

}
// Working with comp "Tweet (Style 4)", varName "tweetStyle4_comp";
if (tweetStyle4_comp_populate === true) {
	// Add Shape Layer "Top Edge", varName "topEdge3";
	var topEdge3 = tweetStyle4_comp.layers.addShape();
		topEdge3.name = "Top Edge";
		topEdge3.label = 0;
		topEdge3.moveToEnd();
		topEdge3.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		topEdge3.property("ADBE Root Vectors Group").property(1).name = "Rectangle 145";
		topEdge3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		topEdge3.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var topEdge3Path = topEdge3.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var topEdge3Path_newShape = new Shape();
			topEdge3Path_newShape.vertices = [[-299.5, -0.5], [299.5, -0.5], [299.5, 0.5], [-299.5, 0.5]];
			topEdge3Path_newShape.closed = true;
		topEdge3Path.setValue(topEdge3Path_newShape);
		topEdge3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		topEdge3.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		topEdge3.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.22745098173618,0.26666668057442,0.29803922772408,1]);
		topEdge3.property("ADBE Transform Group").property("ADBE Position").setValue([299.5,0.5,0]);
		topEdge3.selected = false;
	// Add Shape Layer "Arrow", varName "arrow7";
	var arrow7 = tweetStyle4_comp.layers.addShape();
		arrow7.name = "Arrow";
		arrow7.label = 0;
		arrow7.moveToEnd();
		arrow7.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		arrow7.property("ADBE Root Vectors Group").property(1).name = "Vector";
		arrow7.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		arrow7.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var arrow7Path = arrow7.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var arrow7Path_newShape = new Shape();
			arrow7Path_newShape.vertices = [[3.99612426757812, -2.81527709960938], [4.82792663574219, -2.81527709960938], [4.82792663574219, -2.81401062011719], [4.82792663574219, -1.921630859375], [0.41590881347656, 2.81495666503906], [0, 3], [-0.41590881347656, 2.8143310546875], [-4.82792663574219, -1.92227172851562], [-4.82792663574219, -2.81527709960938], [-3.99612426757812, -2.81527709960938], [0, 1.47482299804688]];
			arrow7Path_newShape.inTangents = [[0, 0], [-0.22943115234375, -0.24630737304688], [0, 0], [0.22943115234375, -0.24630737304688], [0, 0], [0.15118408203125, 0], [0.11471557617188, 0.123779296875], [0, 0], [-0.22943115234375, 0.24630737304688], [-0.22943115234375, -0.24630737304688], [0, 0]];
			arrow7Path_newShape.outTangents = [[0.23001098632812, -0.24630737304688], [0, 0], [0.22943115234375, 0.24693298339844], [0, 0], [-0.11471557617188, 0.12315368652344], [-0.15118408203125, 0], [0, 0], [-0.22943115234375, -0.24693298339844], [0.23001098632812, -0.24630737304688], [0, 0], [0, 0]];
			arrow7Path_newShape.closed = true;
		arrow7Path.setValue(arrow7Path_newShape);
		arrow7.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		arrow7.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		arrow7.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		arrow7.property("ADBE Transform Group").property("ADBE Position").setValue([574,22,0]);
		arrow7.selected = false;
	// Add Shape Layer "IMAGE MATTE", varName "imageMatte3";
	var imageMatte3 = tweetStyle4_comp.layers.addShape();
		imageMatte3.name = "IMAGE MATTE";
		imageMatte3.enabled = false;
		imageMatte3.shy = true;
		imageMatte3.moveToEnd();
		imageMatte3.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		imageMatte3.property("ADBE Root Vectors Group").property(1).name = "PROFILE IMAGE";
		imageMatte3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		imageMatte3.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var imageMatte3Path = imageMatte3.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var imageMatte3Path_newShape = new Shape();
			imageMatte3Path_newShape.vertices = [[0, -24.5], [24.5, 0], [0, 24.5], [-24.5, 0]];
			imageMatte3Path_newShape.inTangents = [[-13.7640380859375, 0], [0, -13.7640380859375], [13.7640380859375, 0], [0, 13.7640380859375]];
			imageMatte3Path_newShape.outTangents = [[13.7640380859375, 0], [0, 13.7640380859375], [-13.7640380859375, 0], [0, -13.7640380859375]];
			imageMatte3Path_newShape.closed = true;
		imageMatte3Path.setValue(imageMatte3Path_newShape);
		imageMatte3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		imageMatte3.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		imageMatte3.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.76862746477127,0.76862746477127,0.76862746477127,1]);
		imageMatte3.property("ADBE Root Vectors Group").addProperty("ADBE Vector Graphic - Fill");
		imageMatte3.property("ADBE Root Vectors Group").property(2).name = "Fill 1";
		imageMatte3.property("ADBE Transform Group").property("ADBE Position").setValue([39.5,36.5,0]);
		imageMatte3.effectsActive = false;
		imageMatte3.selected = false;
	// Add existing composition "Avatar Image", varName "avatarImage_comp";
	var avatarImage6 = tweetStyle4_comp.layers.add(avatarImage_comp);
		avatarImage6.moveToEnd();
		avatarImage6.trackMatteType = TrackMatteType.ALPHA;
		avatarImage6.property("ADBE Transform Group").property("ADBE Position").setValue([39.5,36.5,0]);
		avatarImage6.property("ADBE Transform Group").property("ADBE Scale").setValue([8.41666666666667,8.41666666666667,100]);
		avatarImage6.selected = false;
	var profileNameProfilename19h3 = tweetStyle4_comp.layers.addText(File.decode("Username%20@TwitterHandle%20%E2%80%A2%2019h"));
		profileNameProfilename19h3.name = File.decode("Profile%20Name%20@ProfileName%20%E2%80%A2%2019h");
		profileNameProfilename19h3.moveToEnd();
		var profileNameProfilename19h3_TextProp = profileNameProfilename19h3.property("ADBE Text Properties").property("ADBE Text Document");
		var profileNameProfilename19h3_TextDocument = profileNameProfilename19h3_TextProp.value;
			profileNameProfilename19h3_TextDocument.font = "HelveticaNeue-Bold";
			profileNameProfilename19h3_TextDocument.fontSize = 16;
			profileNameProfilename19h3_TextDocument.applyFill = true;
			profileNameProfilename19h3_TextDocument.fillColor = [1,1,1];
			profileNameProfilename19h3_TextDocument.applyStroke = false;
			profileNameProfilename19h3_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			profileNameProfilename19h3_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				profileNameProfilename19h3_TextDocument.verticalScale = 1;
				profileNameProfilename19h3_TextDocument.horizontalScale = 1;
				profileNameProfilename19h3_TextDocument.baselineShift = 0;
				profileNameProfilename19h3_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// profileNameProfilename19h3_TextDocument.fauxBold = false;
				// profileNameProfilename19h3_TextDocument.fauxItalic = false;
				// profileNameProfilename19h3_TextDocument.allCaps = false;
				// profileNameProfilename19h3_TextDocument.smallCaps = false;
				// profileNameProfilename19h3_TextDocument.superscript = false;
				// profileNameProfilename19h3_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				profileNameProfilename19h3_TextDocument.leading = 19.2000007629395;
				profileNameProfilename19h3_TextDocument.autoLeading = true;
			}
			profileNameProfilename19h3_TextProp.setValue(profileNameProfilename19h3_TextDocument);
		profileNameProfilename19h3.property("ADBE Transform Group").property("ADBE Position").setValue([71.5690002441406,23.6959991455078,0]);
		profileNameProfilename19h3.selected = false;
	var loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj = tweetStyle4_comp.layers.addText("Lorem Ipsum is simply dummy text of the printing and typesetting" + "\n" + 
				"industry. Lorem Ipsum has been the industry\'s: bit.ly/2kvf6yj" + "\n" + 
				"Lorem Ipsum is simply dummy text of the printing and typesetting" + "\n" + 
				"industry. Lorem Ipsum has been the industry\'s: bit.ly/2kvf6yj");
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj.name = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s: bit.ly/2kvf6yj Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s: bit.ly/2kvf6yj";
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj.moveToEnd();
		var loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextProp = loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj.property("ADBE Text Properties").property("ADBE Text Document");
		var loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument = loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextProp.value;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.font = "Helvetica";
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.fontSize = 16;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.applyFill = true;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.fillColor = [1,1,1];
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.applyStroke = false;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.verticalScale = 1;
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.horizontalScale = 1;
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.baselineShift = 0;
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.fauxBold = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.fauxItalic = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.allCaps = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.smallCaps = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.superscript = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.leading = 18.8479995727539;
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument.autoLeading = false;
			}
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextProp.setValue(loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj_TextDocument);
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0.00000381469727,0]);
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj.property("ADBE Transform Group").property("ADBE Position").setValue([71.40625,46.265625,0]);
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yjLoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj.selected = false;
	// Add Shape Layer "Comments", varName "comments3";
	var comments3 = tweetStyle4_comp.layers.addShape();
		comments3.name = "Comments";
		comments3.label = 11;
		comments3.moveToEnd();
		comments3.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		comments3.property("ADBE Root Vectors Group").property(1).name = "Vector";
		comments3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		comments3.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var comments3Path = comments3.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var comments3Path_newShape = new Shape();
			comments3Path_newShape.vertices = [[-1.57443237304688, -7.5], [1.57594299316406, -7.49240112304688], [1.57594299316406, -7.4931640625], [7.5, -1.57823181152344], [7.5, -1.56532287597656], [5.18885803222656, 3.22860717773438], [-0.95391845703125, 7.41038513183594], [-1.25924682617188, 7.5], [-1.73924255371094, 7.2364501953125], [-1.83038330078125, 6.93037414550781], [-1.83038330078125, 4.02304077148438], [-7.5, -1.57443237304688], [-1.57594299316406, -7.5]];
			comments3Path_newShape.inTangents = [[0, 0], [0, 0], [0, 0], [-0.00456237792969, -3.31671142578125], [0, 0], [1.44454956054688, -1.2227783203125], [0.20050048828125, -0.12759399414062], [0.10481262207031, 0], [0.10784912109375, 0.17088317871094], [0, 0.08203125], [0, 0], [0, 3.11241149902344], [-3.322021484375, 0]];
			comments3Path_newShape.outTangents = [[0, 0], [0, 0], [3.31898498535156, 0.00076293945312], [0, 0], [-0.00227355957031, 1.77873229980469], [-1.22657775878906, 1.0374755859375], [-0.09494018554688, 0.06076049804688], [-0.1883544921875, 0], [-0.05772399902344, -0.0888671875], [0, 0], [-3.2498779296875, -0.12455749511719], [0, -3.32278442382812], [0, 0]];
			comments3Path_newShape.closed = true;
		comments3Path.setValue(comments3Path_newShape);
		comments3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		comments3.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var comments3Path3 = comments3.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var comments3Path3_newShape = new Shape();
			comments3Path3_newShape.vertices = [[-0.69113159179688, 5.88607788085938], [4.4521484375, 2.3597412109375], [4.45291137695312, 2.3597412109375], [6.36227416992188, -1.57139587402344], [1.57594299316406, -6.35316467285156], [1.57443237304688, -6.35316467285156], [-1.5751953125, -6.36076354980469], [-6.36000061035156, -1.57443237304688], [-1.5615234375, 2.89595031738281], [-1.26075744628906, 2.89595031738281], [-0.69113159179688, 3.465576171875]];
			comments3Path3_newShape.inTangents = [[0, 0], [-0.86126708984375, 0.72911071777344], [0, 0], [-0.00227355957031, 1.45063781738281], [2.68252563476562, 0], [0, 0], [0, 0], [0, -2.68405151367188], [-2.77973937988281, 0], [0, 0], [0, -0.31443786621094]];
			comments3Path3_newShape.outTangents = [[1.45063781738281, -0.94024658203125], [0, 0], [1.19392395019531, -1.01164245605469], [-0.00152587890625, -2.68101501464844], [0, 0], [0, 0], [-2.68252563476562, 0], [0, 2.58987426757812], [0, 0], [0.315185546875, 0], [0, 0]];
			comments3Path3_newShape.closed = true;
		comments3Path3.setValue(comments3Path3_newShape);
		comments3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		comments3.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		comments3.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		comments3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		comments3.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		comments3.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		comments3.property("ADBE Transform Group").property("ADBE Position").setValue([82.5,129.5,0]);
		comments3.selected = false;
	var compcode11 = tweetStyle4_comp.layers.addBoxText([19.6599998474121,17], "4");
		compcode11.name = "4";
		compcode11.label = 11;
		compcode11.moveToEnd();
		var compcode11_TextProp = compcode11.property("ADBE Text Properties").property("ADBE Text Document");
		var compcode11_TextDocument = compcode11_TextProp.value;
			compcode11_TextDocument.font = "Helvetica";
			compcode11_TextDocument.fontSize = 14;
			compcode11_TextDocument.applyFill = true;
			compcode11_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			compcode11_TextDocument.applyStroke = false;
			compcode11_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			compcode11_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				compcode11_TextDocument.verticalScale = 1;
				compcode11_TextDocument.horizontalScale = 1;
				compcode11_TextDocument.baselineShift = 0;
				compcode11_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// compcode11_TextDocument.fauxBold = false;
				// compcode11_TextDocument.fauxItalic = false;
				// compcode11_TextDocument.allCaps = false;
				// compcode11_TextDocument.smallCaps = false;
				// compcode11_TextDocument.superscript = false;
				// compcode11_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				compcode11_TextDocument.leading = 16.8000011444092;
				compcode11_TextDocument.autoLeading = true;
			}
			compcode11_TextProp.setValue(compcode11_TextDocument);
		compcode11.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-0.25871276855469,-3.345703125,0]);
		compcode11.property("ADBE Transform Group").property("ADBE Position").setValue([104.249998092651,129.5,0]);
		compcode11.selected = false;
	// Add Shape Layer "Retweets", varName "retweets3";
	var retweets3 = tweetStyle4_comp.layers.addShape();
		retweets3.name = "Retweets";
		retweets3.label = 11;
		retweets3.moveToEnd();
		retweets3.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		retweets3.property("ADBE Root Vectors Group").property(1).name = "Vector";
		retweets3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		retweets3.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var retweets3Path = retweets3.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var retweets3Path_newShape = new Shape();
			retweets3Path_newShape.vertices = [[8.48538208007812, 2.74543762207031], [9.32528686523438, 2.74543762207031], [9.32528686523438, 2.74543762207031], [9.32528686523438, 3.57803344726562], [6.55203247070312, 6.32719421386719], [6.132080078125, 6.5], [5.71212768554688, 6.32719421386719], [2.93885803222656, 3.57803344726562], [2.93885803222656, 2.74543762207031], [3.77876281738281, 2.74543762207031], [5.53781127929688, 4.48918151855469], [5.53781127929688, -3.5540771484375], [3.75498962402344, -5.32139587402344], [-0.88031005859375, -5.32139587402344], [-1.47457885742188, -5.91050720214844], [-0.88031005859375, -6.49960327148438], [3.75498962402344, -6.49960327148438], [6.72634887695312, -3.5540771484375], [6.72634887695312, 4.48918151855469]];
			retweets3Path_newShape.inTangents = [[0, 0], [-0.23136901855469, -0.23014831542969], [0, 0], [0.23295593261719, -0.22935485839844], [0, 0], [0.15292358398438, 0], [0.11489868164062, 0.11546325683594], [0, 0], [-0.23136901855469, 0.23014831542969], [-0.23216247558594, -0.23014831542969], [0, 0], [0, 0], [0.98252868652344, 0], [0, 0], [0, 0.32518005371094], [-0.32803344726562, 0], [0, 0], [0, -1.62435913085938], [0, 0]];
			retweets3Path_newShape.outTangents = [[0.23216247558594, -0.23014831542969], [0, 0], [0.23295593261719, 0.23014831542969], [0, 0], [-0.11647033691406, 0.11625671386719], [-0.15292358398438, 0], [0, 0], [-0.23295593261719, -0.22935485839844], [0.23136901855469, -0.23014831542969], [0, 0], [0, 0], [0, -0.97398376464844], [0, 0], [-0.32803344726562, 0], [0, -0.32518005371094], [0, 0], [1.63780212402344, 0], [0, 0], [0, 0]];
			retweets3Path_newShape.closed = true;
		retweets3Path.setValue(retweets3Path_newShape);
		retweets3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		retweets3.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var retweets3Path3 = retweets3.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var retweets3Path3_newShape = new Shape();
			retweets3Path3_newShape.vertices = [[-3.75657653808594, 5.32179260253906], [0.87872314453125, 5.32179260253906], [0.88031005859375, 5.32179260253906], [1.47457885742188, 5.910888671875], [0.88031005859375, 6.5], [-3.75498962402344, 6.5], [-6.72634887695312, 3.55447387695312], [-6.72634887695312, -4.48878479003906], [-8.48538208007812, -2.74504089355469], [-9.32528686523438, -2.74504089355469], [-9.32528686523438, -3.57763671875], [-6.55201721191406, -6.32679748535156], [-5.71212768554688, -6.32679748535156], [-2.93885803222656, -3.57763671875], [-2.93885803222656, -2.74504089355469], [-3.35881042480469, -2.57223510742188], [-3.78034973144531, -2.74504089355469], [-5.53938293457031, -4.48878479003906], [-5.53938293457031, 3.55447387695312]];
			retweets3Path3_newShape.inTangents = [[-0.98252868652344, 0], [0, 0], [0, 0], [0, -0.32518005371094], [0.32803344726562, 0], [0, 0], [0, 1.62435913085938], [0, 0], [0, 0], [0.23295593261719, 0.23014831542969], [-0.23295593261719, 0.22935485839844], [0, 0], [-0.23216247558594, -0.23092651367188], [0, 0], [0.23216247558594, -0.23014831542969], [0.15213012695312, 0], [0.11726379394531, 0.11546325683594], [0, 0], [0, 0]];
			retweets3Path3_newShape.outTangents = [[0, 0], [0, 0], [0.32723999023438, 0], [0, 0.32518005371094], [0, 0], [-1.63780212402344, 0], [0, 0], [0, 0], [-0.23216247558594, 0.23014831542969], [-0.23295593261719, -0.23014831542969], [0, 0], [0.23136901855469, -0.23092651367188], [0, 0], [0.23216247558594, 0.22935485839844], [-0.11569213867188, 0.11546325683594], [-0.15213012695312, 0], [0, 0], [0, 0], [0, 0.97398376464844]];
			retweets3Path3_newShape.closed = true;
		retweets3Path3.setValue(retweets3Path3_newShape);
		retweets3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		retweets3.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		retweets3.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		retweets3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		retweets3.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		retweets3.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		retweets3.property("ADBE Transform Group").property("ADBE Position").setValue([217.5,129.5,0]);
		retweets3.selected = false;
	var compcode12 = tweetStyle4_comp.layers.addBoxText([19.6599998474121,17], "3");
		compcode12.name = "3";
		compcode12.label = 11;
		compcode12.moveToEnd();
		var compcode12_TextProp = compcode12.property("ADBE Text Properties").property("ADBE Text Document");
		var compcode12_TextDocument = compcode12_TextProp.value;
			compcode12_TextDocument.font = "Helvetica";
			compcode12_TextDocument.fontSize = 14;
			compcode12_TextDocument.applyFill = true;
			compcode12_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			compcode12_TextDocument.applyStroke = false;
			compcode12_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			compcode12_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				compcode12_TextDocument.verticalScale = 1;
				compcode12_TextDocument.horizontalScale = 1;
				compcode12_TextDocument.baselineShift = 0;
				compcode12_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// compcode12_TextDocument.fauxBold = false;
				// compcode12_TextDocument.fauxItalic = false;
				// compcode12_TextDocument.allCaps = false;
				// compcode12_TextDocument.smallCaps = false;
				// compcode12_TextDocument.superscript = false;
				// compcode12_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				compcode12_TextDocument.leading = 16.8000011444092;
				compcode12_TextDocument.autoLeading = true;
			}
			compcode12_TextProp.setValue(compcode12_TextDocument);
		compcode12.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-0.25871276855469,-3.345703125,0]);
		compcode12.property("ADBE Transform Group").property("ADBE Position").setValue([241.249998092651,129.5,0]);
		compcode12.selected = false;
	// Add Shape Layer "Likes", varName "likes4";
	var likes4 = tweetStyle4_comp.layers.addShape();
		likes4.name = "Likes";
		likes4.label = 11;
		likes4.moveToEnd();
		likes4.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		likes4.property("ADBE Root Vectors Group").property(1).name = "Vector";
		likes4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		likes4.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var likes4Path = likes4.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var likes4Path_newShape = new Shape();
			likes4Path_newShape.vertices = [[-0.01034545898438, 7.5], [0.00079345703125, 7.5], [0.00079345703125, 7.4984130859375], [0.00955200195312, 7.4984130859375], [8, -2.93592834472656], [3.6978759765625, -7.5], [0, -5.33493041992188], [-3.69866943359375, -7.5], [-8, -2.93670654296875]];
			likes4Path_newShape.inTangents = [[-2.05632019042969, -0.03807067871094], [0, 0], [0, 0], [0, 0], [0, 5.05656433105469], [2.29277038574219, 0], [0.64802551269531, -0.91043090820312], [1.82307434082031, 0], [0, -2.42994689941406]];
			likes4Path_newShape.outTangents = [[0, 0], [0, 0], [0, 0], [2.05632019042969, -0.03727722167969], [0, -2.43074035644531], [-1.82386779785156, 0], [-0.64961242675781, -0.91201782226562], [-2.29116821289062, 0], [0, 5.05815124511719]];
			likes4Path_newShape.closed = true;
		likes4Path.setValue(likes4Path_newShape);
		likes4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		likes4.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var likes4Path3 = likes4.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var likes4Path3_newShape = new Shape();
			likes4Path3_newShape.vertices = [[-6.8050537109375, -2.93513488769531], [-3.6978759765625, -6.30961608886719], [-3.69708251953125, -6.30961608886719], [-0.54930114746094, -3.95817565917969], [0.55488586425781, -3.95817565917969], [3.70106506347656, -6.30961608886719], [6.80824279785156, -2.93513488769531], [0.0015869140625, 6.31040954589844]];
			likes4Path3_newShape.inTangents = [[0, 4.55218505859375], [-1.6558837890625, 0], [0, 0], [-0.01113891601562, -0.02378845214844], [-0.18310546875, 0.44569396972656], [-2.01254272460938, 0], [0, -1.79786682128906], [1.20848083496094, -0.04916381835938]];
			likes4Path3_newShape.outTangents = [[0, -1.79786682128906], [0, 0], [2.01333618164062, 0], [0.18389892578125, 0.44569396972656], [0.00955200195312, -0.02299499511719], [1.6558837890625, 0], [0, 4.552978515625], [-1.20689392089844, -0.04916381835938]];
			likes4Path3_newShape.closed = true;
		likes4Path3.setValue(likes4Path3_newShape);
		likes4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		likes4.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		likes4.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		likes4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		likes4.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		likes4.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		likes4.property("ADBE Transform Group").property("ADBE Position").setValue([353,129.5,0]);
		likes4.selected = false;
	var compcode13 = tweetStyle4_comp.layers.addBoxText([8.15999984741211,17], "2");
		compcode13.name = "2";
		compcode13.label = 11;
		compcode13.moveToEnd();
		var compcode13_TextProp = compcode13.property("ADBE Text Properties").property("ADBE Text Document");
		var compcode13_TextDocument = compcode13_TextProp.value;
			compcode13_TextDocument.font = "Helvetica";
			compcode13_TextDocument.fontSize = 14;
			compcode13_TextDocument.applyFill = true;
			compcode13_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			compcode13_TextDocument.applyStroke = false;
			compcode13_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			compcode13_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				compcode13_TextDocument.verticalScale = 1;
				compcode13_TextDocument.horizontalScale = 1;
				compcode13_TextDocument.baselineShift = 0;
				compcode13_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// compcode13_TextDocument.fauxBold = false;
				// compcode13_TextDocument.fauxItalic = false;
				// compcode13_TextDocument.allCaps = false;
				// compcode13_TextDocument.smallCaps = false;
				// compcode13_TextDocument.superscript = false;
				// compcode13_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				compcode13_TextDocument.leading = 16.8000011444092;
				compcode13_TextDocument.autoLeading = true;
			}
			compcode13_TextProp.setValue(compcode13_TextDocument);
		compcode13.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-0.25871276855469,-3.345703125,0]);
		compcode13.property("ADBE Transform Group").property("ADBE Position").setValue([375.999998092651,129.5,0]);
		compcode13.selected = false;
	// Add Shape Layer "Share", varName "share3";
	var share3 = tweetStyle4_comp.layers.addShape();
		share3.name = "Share";
		share3.label = 11;
		share3.moveToEnd();
		share3.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		share3.property("ADBE Root Vectors Group").property(1).name = "Union";
		share3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		share3.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var share3Path = share3.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var share3Path_newShape = new Shape();
			share3Path_newShape.vertices = [[360.397521972656, 1765.77966308594], [364.147521972656, 1769.52966308594], [364.147521972656, 1769.52966308594], [364.147521972656, 1770.32470703125], [363.75, 1770.48962402344], [363.352508544922, 1770.32470703125], [360.5625, 1767.53466796875], [360.5625, 1775.17712402344], [360, 1775.73962402344], [359.4375, 1775.17712402344], [359.4375, 1767.53466796875], [356.647521972656, 1770.32470703125], [355.852508544922, 1770.32470703125], [355.852508544922, 1769.52966308594], [359.602508544922, 1765.77966308594]];
			share3Path_newShape.inTangents = [[-0.21975708007812, -0.2197265625], [0, 0], [0, 0], [0.21975708007812, -0.2197265625], [0.14398193359375, 0], [0.1094970703125, 0.1102294921875], [0, 0], [0, 0], [0.31048583984375, 0], [0, 0.310546875], [0, 0], [0, 0], [0.22048950195312, 0.218994140625], [-0.22048950195312, 0.2197265625], [0, 0]];
			share3Path_newShape.outTangents = [[0, 0], [0, 0], [0.21975708007812, 0.2197265625], [-0.1094970703125, 0.1109619140625], [-0.14398193359375, 0], [0, 0], [0, 0], [0, 0.310546875], [-0.31048583984375, 0], [0, 0], [0, 0], [-0.21975708007812, 0.220458984375], [-0.22048950195312, -0.218994140625], [0, 0], [0.218994140625, -0.2197265625]];
			share3Path_newShape.closed = true;
		share3Path.setValue(share3Path_newShape);
		share3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		share3.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var share3Path3 = share3.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var share3Path3_newShape = new Shape();
			share3Path3_newShape.vertices = [[354.218994140625, 1780.38513183594], [365.781005859375, 1780.38513183594], [365.781005859375, 1780.38513183594], [367.5, 1778.66613769531], [367.5, 1774.42712402344], [366.9375, 1773.86462402344], [366.375, 1774.42712402344], [366.375, 1778.66613769531], [365.781005859375, 1779.26013183594], [354.218994140625, 1779.26013183594], [353.625, 1778.66613769531], [353.625, 1774.42712402344], [353.0625, 1773.86462402344], [352.5, 1774.42712402344], [352.5, 1778.66613769531]];
			share3Path3_newShape.inTangents = [[-0.947998046875, 0], [0, 0], [0, 0], [0, 0.947998046875], [0, 0], [0.31048583984375, 0], [0, -0.310546875], [0, 0], [0.3277587890625, 0], [0, 0], [0, 0.3277587890625], [0, 0], [0.31048583984375, 0], [0, -0.310546875], [0, 0]];
			share3Path3_newShape.outTangents = [[0, 0], [0, 0], [0.947998046875, 0], [0, 0], [0, -0.310546875], [-0.31048583984375, 0], [0, 0], [0, 0.3277587890625], [0, 0], [-0.3277587890625, 0], [0, 0], [0, -0.310546875], [-0.31048583984375, 0], [0, 0], [0, 0.947998046875]];
			share3Path3_newShape.closed = true;
		share3Path3.setValue(share3Path3_newShape);
		share3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		share3.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		share3.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		share3.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		share3.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		share3.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		share3.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([360,1773,0]);
		share3.property("ADBE Transform Group").property("ADBE Position").setValue([500,129.385131835938,0]);
		share3.selected = false;
	// Lock Layers
		topEdge3.locked = true;
		arrow7.locked = true;
		imageMatte3.locked = true;
		avatarImage6.locked = true;

}
// Working with comp "Tweet (Style 5)", varName "tweetStyle5_comp";
if (tweetStyle5_comp_populate === true) {
	// Add Shape Layer "Top Edge", varName "topEdge4";
	var topEdge4 = tweetStyle5_comp.layers.addShape();
		topEdge4.name = "Top Edge";
		topEdge4.label = 0;
		topEdge4.moveToEnd();
		topEdge4.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		topEdge4.property("ADBE Root Vectors Group").property(1).name = "Rectangle 145";
		topEdge4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		topEdge4.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var topEdge4Path = topEdge4.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var topEdge4Path_newShape = new Shape();
			topEdge4Path_newShape.vertices = [[-299.5, -0.5], [299.5, -0.5], [299.5, 0.5], [-299.5, 0.5]];
			topEdge4Path_newShape.closed = true;
		topEdge4Path.setValue(topEdge4Path_newShape);
		topEdge4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		topEdge4.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		topEdge4.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.22745098173618,0.26666668057442,0.29803922772408,1]);
		topEdge4.property("ADBE Transform Group").property("ADBE Position").setValue([299.5,0.5,0]);
		topEdge4.selected = false;
	// Add Shape Layer "Arrow", varName "arrow8";
	var arrow8 = tweetStyle5_comp.layers.addShape();
		arrow8.name = "Arrow";
		arrow8.label = 0;
		arrow8.moveToEnd();
		arrow8.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		arrow8.property("ADBE Root Vectors Group").property(1).name = "Vector";
		arrow8.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		arrow8.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var arrow8Path = arrow8.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var arrow8Path_newShape = new Shape();
			arrow8Path_newShape.vertices = [[3.99612426757812, -2.81527709960938], [4.82792663574219, -2.81527709960938], [4.82792663574219, -2.81401062011719], [4.82792663574219, -1.921630859375], [0.41590881347656, 2.81495666503906], [0, 3], [-0.41590881347656, 2.8143310546875], [-4.82792663574219, -1.92227172851562], [-4.82792663574219, -2.81527709960938], [-3.99612426757812, -2.81527709960938], [0, 1.47482299804688]];
			arrow8Path_newShape.inTangents = [[0, 0], [-0.22943115234375, -0.24630737304688], [0, 0], [0.22943115234375, -0.24630737304688], [0, 0], [0.15118408203125, 0], [0.11471557617188, 0.123779296875], [0, 0], [-0.22943115234375, 0.24630737304688], [-0.22943115234375, -0.24630737304688], [0, 0]];
			arrow8Path_newShape.outTangents = [[0.23001098632812, -0.24630737304688], [0, 0], [0.22943115234375, 0.24693298339844], [0, 0], [-0.11471557617188, 0.12315368652344], [-0.15118408203125, 0], [0, 0], [-0.22943115234375, -0.24693298339844], [0.23001098632812, -0.24630737304688], [0, 0], [0, 0]];
			arrow8Path_newShape.closed = true;
		arrow8Path.setValue(arrow8Path_newShape);
		arrow8.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		arrow8.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		arrow8.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		arrow8.property("ADBE Transform Group").property("ADBE Position").setValue([574,22,0]);
		arrow8.selected = false;
	// Add Shape Layer "IMAGE MATTE", varName "imageMatte4";
	var imageMatte4 = tweetStyle5_comp.layers.addShape();
		imageMatte4.name = "IMAGE MATTE";
		imageMatte4.enabled = false;
		imageMatte4.shy = true;
		imageMatte4.moveToEnd();
		imageMatte4.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		imageMatte4.property("ADBE Root Vectors Group").property(1).name = "PROFILE IMAGE";
		imageMatte4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		imageMatte4.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var imageMatte4Path = imageMatte4.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var imageMatte4Path_newShape = new Shape();
			imageMatte4Path_newShape.vertices = [[0, -24.5], [24.5, 0], [0, 24.5], [-24.5, 0]];
			imageMatte4Path_newShape.inTangents = [[-13.7640380859375, 0], [0, -13.7640380859375], [13.7640380859375, 0], [0, 13.7640380859375]];
			imageMatte4Path_newShape.outTangents = [[13.7640380859375, 0], [0, 13.7640380859375], [-13.7640380859375, 0], [0, -13.7640380859375]];
			imageMatte4Path_newShape.closed = true;
		imageMatte4Path.setValue(imageMatte4Path_newShape);
		imageMatte4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		imageMatte4.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		imageMatte4.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.76862746477127,0.76862746477127,0.76862746477127,1]);
		imageMatte4.property("ADBE Root Vectors Group").addProperty("ADBE Vector Graphic - Fill");
		imageMatte4.property("ADBE Root Vectors Group").property(2).name = "Fill 1";
		imageMatte4.property("ADBE Transform Group").property("ADBE Position").setValue([39.5,36.5,0]);
		imageMatte4.effectsActive = false;
		imageMatte4.selected = false;
	// Add existing composition "Avatar Image", varName "avatarImage_comp";
	var avatarImage7 = tweetStyle5_comp.layers.add(avatarImage_comp);
		avatarImage7.moveToEnd();
		avatarImage7.trackMatteType = TrackMatteType.ALPHA;
		avatarImage7.property("ADBE Transform Group").property("ADBE Position").setValue([39.5,36.5,0]);
		avatarImage7.property("ADBE Transform Group").property("ADBE Scale").setValue([8.41666666666667,8.41666666666667,100]);
		avatarImage7.selected = false;
	var profileNameProfilename19h4 = tweetStyle5_comp.layers.addText(File.decode("Username%20@TwitterHandle%20%E2%80%A2%2019h"));
		profileNameProfilename19h4.name = File.decode("Profile%20Name%20@ProfileName%20%E2%80%A2%2019h");
		profileNameProfilename19h4.moveToEnd();
		var profileNameProfilename19h4_TextProp = profileNameProfilename19h4.property("ADBE Text Properties").property("ADBE Text Document");
		var profileNameProfilename19h4_TextDocument = profileNameProfilename19h4_TextProp.value;
			profileNameProfilename19h4_TextDocument.font = "HelveticaNeue-Bold";
			profileNameProfilename19h4_TextDocument.fontSize = 16;
			profileNameProfilename19h4_TextDocument.applyFill = true;
			profileNameProfilename19h4_TextDocument.fillColor = [1,1,1];
			profileNameProfilename19h4_TextDocument.applyStroke = false;
			profileNameProfilename19h4_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			profileNameProfilename19h4_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				profileNameProfilename19h4_TextDocument.verticalScale = 1;
				profileNameProfilename19h4_TextDocument.horizontalScale = 1;
				profileNameProfilename19h4_TextDocument.baselineShift = 0;
				profileNameProfilename19h4_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// profileNameProfilename19h4_TextDocument.fauxBold = false;
				// profileNameProfilename19h4_TextDocument.fauxItalic = false;
				// profileNameProfilename19h4_TextDocument.allCaps = false;
				// profileNameProfilename19h4_TextDocument.smallCaps = false;
				// profileNameProfilename19h4_TextDocument.superscript = false;
				// profileNameProfilename19h4_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				profileNameProfilename19h4_TextDocument.leading = 19.2000007629395;
				profileNameProfilename19h4_TextDocument.autoLeading = true;
			}
			profileNameProfilename19h4_TextProp.setValue(profileNameProfilename19h4_TextDocument);
		profileNameProfilename19h4.property("ADBE Transform Group").property("ADBE Position").setValue([71.5690002441406,23.6959991455078,0]);
		profileNameProfilename19h4.selected = false;
	var loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1 = tweetStyle5_comp.layers.addText("Lorem Ipsum is simply dummy text of the printing and typesetting" + "\n" + 
				"industry. Lorem Ipsum has been the industry\'s: bit.ly/2kvf6yj");
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1.name = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s: bit.ly/2kvf6yj";
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1.moveToEnd();
		var loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1_TextProp = loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1.property("ADBE Text Properties").property("ADBE Text Document");
		var loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1_TextDocument = loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1_TextProp.value;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1_TextDocument.font = "Helvetica";
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1_TextDocument.fontSize = 16;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1_TextDocument.applyFill = true;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1_TextDocument.fillColor = [1,1,1];
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1_TextDocument.applyStroke = false;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1_TextDocument.verticalScale = 1;
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1_TextDocument.horizontalScale = 1;
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1_TextDocument.baselineShift = 0;
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1_TextDocument.fauxBold = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1_TextDocument.fauxItalic = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1_TextDocument.allCaps = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1_TextDocument.smallCaps = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1_TextDocument.superscript = false;
				// loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1_TextDocument.leading = 18.8479995727539;
				loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1_TextDocument.autoLeading = false;
			}
			loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1_TextProp.setValue(loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1_TextDocument);
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0.00000381469727,0]);
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1.property("ADBE Transform Group").property("ADBE Position").setValue([71.40625,46.265625,0]);
		loremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrysBitly2kvf6yj1.selected = false;
	// Add Shape Layer "Comments", varName "comments4";
	var comments4 = tweetStyle5_comp.layers.addShape();
		comments4.name = "Comments";
		comments4.label = 11;
		comments4.moveToEnd();
		comments4.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		comments4.property("ADBE Root Vectors Group").property(1).name = "Vector";
		comments4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		comments4.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var comments4Path = comments4.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var comments4Path_newShape = new Shape();
			comments4Path_newShape.vertices = [[-1.57443237304688, -7.5], [1.57594299316406, -7.49240112304688], [1.57594299316406, -7.4931640625], [7.5, -1.57823181152344], [7.5, -1.56532287597656], [5.18885803222656, 3.22860717773438], [-0.95391845703125, 7.41038513183594], [-1.25924682617188, 7.5], [-1.73924255371094, 7.2364501953125], [-1.83038330078125, 6.93037414550781], [-1.83038330078125, 4.02304077148438], [-7.5, -1.57443237304688], [-1.57594299316406, -7.5]];
			comments4Path_newShape.inTangents = [[0, 0], [0, 0], [0, 0], [-0.00456237792969, -3.31671142578125], [0, 0], [1.44454956054688, -1.2227783203125], [0.20050048828125, -0.12759399414062], [0.10481262207031, 0], [0.10784912109375, 0.17088317871094], [0, 0.08203125], [0, 0], [0, 3.11241149902344], [-3.322021484375, 0]];
			comments4Path_newShape.outTangents = [[0, 0], [0, 0], [3.31898498535156, 0.00076293945312], [0, 0], [-0.00227355957031, 1.77873229980469], [-1.22657775878906, 1.0374755859375], [-0.09494018554688, 0.06076049804688], [-0.1883544921875, 0], [-0.05772399902344, -0.0888671875], [0, 0], [-3.2498779296875, -0.12455749511719], [0, -3.32278442382812], [0, 0]];
			comments4Path_newShape.closed = true;
		comments4Path.setValue(comments4Path_newShape);
		comments4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		comments4.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var comments4Path3 = comments4.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var comments4Path3_newShape = new Shape();
			comments4Path3_newShape.vertices = [[-0.69113159179688, 5.88607788085938], [4.4521484375, 2.3597412109375], [4.45291137695312, 2.3597412109375], [6.36227416992188, -1.57139587402344], [1.57594299316406, -6.35316467285156], [1.57443237304688, -6.35316467285156], [-1.5751953125, -6.36076354980469], [-6.36000061035156, -1.57443237304688], [-1.5615234375, 2.89595031738281], [-1.26075744628906, 2.89595031738281], [-0.69113159179688, 3.465576171875]];
			comments4Path3_newShape.inTangents = [[0, 0], [-0.86126708984375, 0.72911071777344], [0, 0], [-0.00227355957031, 1.45063781738281], [2.68252563476562, 0], [0, 0], [0, 0], [0, -2.68405151367188], [-2.77973937988281, 0], [0, 0], [0, -0.31443786621094]];
			comments4Path3_newShape.outTangents = [[1.45063781738281, -0.94024658203125], [0, 0], [1.19392395019531, -1.01164245605469], [-0.00152587890625, -2.68101501464844], [0, 0], [0, 0], [-2.68252563476562, 0], [0, 2.58987426757812], [0, 0], [0.315185546875, 0], [0, 0]];
			comments4Path3_newShape.closed = true;
		comments4Path3.setValue(comments4Path3_newShape);
		comments4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		comments4.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		comments4.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		comments4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		comments4.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		comments4.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		comments4.property("ADBE Transform Group").property("ADBE Position").setValue([82.5,367.5,0]);
		comments4.selected = false;
	var compcode14 = tweetStyle5_comp.layers.addBoxText([19.6599998474121,17], "4");
		compcode14.name = "4";
		compcode14.label = 11;
		compcode14.moveToEnd();
		var compcode14_TextProp = compcode14.property("ADBE Text Properties").property("ADBE Text Document");
		var compcode14_TextDocument = compcode14_TextProp.value;
			compcode14_TextDocument.font = "Helvetica";
			compcode14_TextDocument.fontSize = 14;
			compcode14_TextDocument.applyFill = true;
			compcode14_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			compcode14_TextDocument.applyStroke = false;
			compcode14_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			compcode14_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				compcode14_TextDocument.verticalScale = 1;
				compcode14_TextDocument.horizontalScale = 1;
				compcode14_TextDocument.baselineShift = 0;
				compcode14_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// compcode14_TextDocument.fauxBold = false;
				// compcode14_TextDocument.fauxItalic = false;
				// compcode14_TextDocument.allCaps = false;
				// compcode14_TextDocument.smallCaps = false;
				// compcode14_TextDocument.superscript = false;
				// compcode14_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				compcode14_TextDocument.leading = 16.8000011444092;
				compcode14_TextDocument.autoLeading = true;
			}
			compcode14_TextProp.setValue(compcode14_TextDocument);
		compcode14.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-0.25871276855469,-3.345703125,0]);
		compcode14.property("ADBE Transform Group").property("ADBE Position").setValue([104.249998092651,367.5,0]);
		compcode14.selected = false;
	// Add Shape Layer "Retweets", varName "retweets4";
	var retweets4 = tweetStyle5_comp.layers.addShape();
		retweets4.name = "Retweets";
		retweets4.label = 11;
		retweets4.moveToEnd();
		retweets4.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		retweets4.property("ADBE Root Vectors Group").property(1).name = "Vector";
		retweets4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		retweets4.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var retweets4Path = retweets4.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var retweets4Path_newShape = new Shape();
			retweets4Path_newShape.vertices = [[8.48538208007812, 2.74543762207031], [9.32528686523438, 2.74543762207031], [9.32528686523438, 2.74543762207031], [9.32528686523438, 3.57803344726562], [6.55203247070312, 6.32719421386719], [6.132080078125, 6.5], [5.71212768554688, 6.32719421386719], [2.93885803222656, 3.57803344726562], [2.93885803222656, 2.74543762207031], [3.77876281738281, 2.74543762207031], [5.53781127929688, 4.48918151855469], [5.53781127929688, -3.5540771484375], [3.75498962402344, -5.32139587402344], [-0.88031005859375, -5.32139587402344], [-1.47457885742188, -5.91050720214844], [-0.88031005859375, -6.49960327148438], [3.75498962402344, -6.49960327148438], [6.72634887695312, -3.5540771484375], [6.72634887695312, 4.48918151855469]];
			retweets4Path_newShape.inTangents = [[0, 0], [-0.23136901855469, -0.23014831542969], [0, 0], [0.23295593261719, -0.22935485839844], [0, 0], [0.15292358398438, 0], [0.11489868164062, 0.11546325683594], [0, 0], [-0.23136901855469, 0.23014831542969], [-0.23216247558594, -0.23014831542969], [0, 0], [0, 0], [0.98252868652344, 0], [0, 0], [0, 0.32518005371094], [-0.32803344726562, 0], [0, 0], [0, -1.62435913085938], [0, 0]];
			retweets4Path_newShape.outTangents = [[0.23216247558594, -0.23014831542969], [0, 0], [0.23295593261719, 0.23014831542969], [0, 0], [-0.11647033691406, 0.11625671386719], [-0.15292358398438, 0], [0, 0], [-0.23295593261719, -0.22935485839844], [0.23136901855469, -0.23014831542969], [0, 0], [0, 0], [0, -0.97398376464844], [0, 0], [-0.32803344726562, 0], [0, -0.32518005371094], [0, 0], [1.63780212402344, 0], [0, 0], [0, 0]];
			retweets4Path_newShape.closed = true;
		retweets4Path.setValue(retweets4Path_newShape);
		retweets4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		retweets4.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var retweets4Path3 = retweets4.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var retweets4Path3_newShape = new Shape();
			retweets4Path3_newShape.vertices = [[-3.75657653808594, 5.32179260253906], [0.87872314453125, 5.32179260253906], [0.88031005859375, 5.32179260253906], [1.47457885742188, 5.910888671875], [0.88031005859375, 6.5], [-3.75498962402344, 6.5], [-6.72634887695312, 3.55447387695312], [-6.72634887695312, -4.48878479003906], [-8.48538208007812, -2.74504089355469], [-9.32528686523438, -2.74504089355469], [-9.32528686523438, -3.57763671875], [-6.55201721191406, -6.32679748535156], [-5.71212768554688, -6.32679748535156], [-2.93885803222656, -3.57763671875], [-2.93885803222656, -2.74504089355469], [-3.35881042480469, -2.57223510742188], [-3.78034973144531, -2.74504089355469], [-5.53938293457031, -4.48878479003906], [-5.53938293457031, 3.55447387695312]];
			retweets4Path3_newShape.inTangents = [[-0.98252868652344, 0], [0, 0], [0, 0], [0, -0.32518005371094], [0.32803344726562, 0], [0, 0], [0, 1.62435913085938], [0, 0], [0, 0], [0.23295593261719, 0.23014831542969], [-0.23295593261719, 0.22935485839844], [0, 0], [-0.23216247558594, -0.23092651367188], [0, 0], [0.23216247558594, -0.23014831542969], [0.15213012695312, 0], [0.11726379394531, 0.11546325683594], [0, 0], [0, 0]];
			retweets4Path3_newShape.outTangents = [[0, 0], [0, 0], [0.32723999023438, 0], [0, 0.32518005371094], [0, 0], [-1.63780212402344, 0], [0, 0], [0, 0], [-0.23216247558594, 0.23014831542969], [-0.23295593261719, -0.23014831542969], [0, 0], [0.23136901855469, -0.23092651367188], [0, 0], [0.23216247558594, 0.22935485839844], [-0.11569213867188, 0.11546325683594], [-0.15213012695312, 0], [0, 0], [0, 0], [0, 0.97398376464844]];
			retweets4Path3_newShape.closed = true;
		retweets4Path3.setValue(retweets4Path3_newShape);
		retweets4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		retweets4.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		retweets4.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		retweets4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		retweets4.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		retweets4.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		retweets4.property("ADBE Transform Group").property("ADBE Position").setValue([217.5,367.5,0]);
		retweets4.selected = false;
	var compcode15 = tweetStyle5_comp.layers.addBoxText([19.6599998474121,17], "3");
		compcode15.name = "3";
		compcode15.label = 11;
		compcode15.moveToEnd();
		var compcode15_TextProp = compcode15.property("ADBE Text Properties").property("ADBE Text Document");
		var compcode15_TextDocument = compcode15_TextProp.value;
			compcode15_TextDocument.font = "Helvetica";
			compcode15_TextDocument.fontSize = 14;
			compcode15_TextDocument.applyFill = true;
			compcode15_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			compcode15_TextDocument.applyStroke = false;
			compcode15_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			compcode15_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				compcode15_TextDocument.verticalScale = 1;
				compcode15_TextDocument.horizontalScale = 1;
				compcode15_TextDocument.baselineShift = 0;
				compcode15_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// compcode15_TextDocument.fauxBold = false;
				// compcode15_TextDocument.fauxItalic = false;
				// compcode15_TextDocument.allCaps = false;
				// compcode15_TextDocument.smallCaps = false;
				// compcode15_TextDocument.superscript = false;
				// compcode15_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				compcode15_TextDocument.leading = 16.8000011444092;
				compcode15_TextDocument.autoLeading = true;
			}
			compcode15_TextProp.setValue(compcode15_TextDocument);
		compcode15.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-0.25871276855469,-3.345703125,0]);
		compcode15.property("ADBE Transform Group").property("ADBE Position").setValue([241.249998092651,367.5,0]);
		compcode15.selected = false;
	// Add Shape Layer "Likes", varName "likes5";
	var likes5 = tweetStyle5_comp.layers.addShape();
		likes5.name = "Likes";
		likes5.label = 11;
		likes5.moveToEnd();
		likes5.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		likes5.property("ADBE Root Vectors Group").property(1).name = "Vector";
		likes5.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		likes5.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var likes5Path = likes5.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var likes5Path_newShape = new Shape();
			likes5Path_newShape.vertices = [[-0.01034545898438, 7.5], [0.00079345703125, 7.5], [0.00079345703125, 7.4984130859375], [0.00955200195312, 7.4984130859375], [8, -2.93592834472656], [3.6978759765625, -7.5], [0, -5.33493041992188], [-3.69866943359375, -7.5], [-8, -2.93670654296875]];
			likes5Path_newShape.inTangents = [[-2.05632019042969, -0.03807067871094], [0, 0], [0, 0], [0, 0], [0, 5.05656433105469], [2.29277038574219, 0], [0.64802551269531, -0.91043090820312], [1.82307434082031, 0], [0, -2.42994689941406]];
			likes5Path_newShape.outTangents = [[0, 0], [0, 0], [0, 0], [2.05632019042969, -0.03727722167969], [0, -2.43074035644531], [-1.82386779785156, 0], [-0.64961242675781, -0.91201782226562], [-2.29116821289062, 0], [0, 5.05815124511719]];
			likes5Path_newShape.closed = true;
		likes5Path.setValue(likes5Path_newShape);
		likes5.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		likes5.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var likes5Path3 = likes5.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var likes5Path3_newShape = new Shape();
			likes5Path3_newShape.vertices = [[-6.8050537109375, -2.93513488769531], [-3.6978759765625, -6.30961608886719], [-3.69708251953125, -6.30961608886719], [-0.54930114746094, -3.95817565917969], [0.55488586425781, -3.95817565917969], [3.70106506347656, -6.30961608886719], [6.80824279785156, -2.93513488769531], [0.0015869140625, 6.31040954589844]];
			likes5Path3_newShape.inTangents = [[0, 4.55218505859375], [-1.6558837890625, 0], [0, 0], [-0.01113891601562, -0.02378845214844], [-0.18310546875, 0.44569396972656], [-2.01254272460938, 0], [0, -1.79786682128906], [1.20848083496094, -0.04916381835938]];
			likes5Path3_newShape.outTangents = [[0, -1.79786682128906], [0, 0], [2.01333618164062, 0], [0.18389892578125, 0.44569396972656], [0.00955200195312, -0.02299499511719], [1.6558837890625, 0], [0, 4.552978515625], [-1.20689392089844, -0.04916381835938]];
			likes5Path3_newShape.closed = true;
		likes5Path3.setValue(likes5Path3_newShape);
		likes5.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		likes5.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		likes5.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		likes5.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		likes5.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		likes5.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		likes5.property("ADBE Transform Group").property("ADBE Position").setValue([353,367.5,0]);
		likes5.selected = false;
	var compcode16 = tweetStyle5_comp.layers.addBoxText([8.15999984741211,17], "2");
		compcode16.name = "2";
		compcode16.label = 11;
		compcode16.moveToEnd();
		var compcode16_TextProp = compcode16.property("ADBE Text Properties").property("ADBE Text Document");
		var compcode16_TextDocument = compcode16_TextProp.value;
			compcode16_TextDocument.font = "Helvetica";
			compcode16_TextDocument.fontSize = 14;
			compcode16_TextDocument.applyFill = true;
			compcode16_TextDocument.fillColor = [0.54118001461029,0.59608000516891,0.64314007759094];
			compcode16_TextDocument.applyStroke = false;
			compcode16_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			compcode16_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				compcode16_TextDocument.verticalScale = 1;
				compcode16_TextDocument.horizontalScale = 1;
				compcode16_TextDocument.baselineShift = 0;
				compcode16_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// compcode16_TextDocument.fauxBold = false;
				// compcode16_TextDocument.fauxItalic = false;
				// compcode16_TextDocument.allCaps = false;
				// compcode16_TextDocument.smallCaps = false;
				// compcode16_TextDocument.superscript = false;
				// compcode16_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				compcode16_TextDocument.leading = 16.8000011444092;
				compcode16_TextDocument.autoLeading = true;
			}
			compcode16_TextProp.setValue(compcode16_TextDocument);
		compcode16.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-0.25871276855469,-3.345703125,0]);
		compcode16.property("ADBE Transform Group").property("ADBE Position").setValue([375.999998092651,367.5,0]);
		compcode16.selected = false;
	// Add Shape Layer "Share", varName "share4";
	var share4 = tweetStyle5_comp.layers.addShape();
		share4.name = "Share";
		share4.label = 11;
		share4.moveToEnd();
		share4.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		share4.property("ADBE Root Vectors Group").property(1).name = "Union";
		share4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		share4.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var share4Path = share4.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var share4Path_newShape = new Shape();
			share4Path_newShape.vertices = [[360.397521972656, 1765.77966308594], [364.147521972656, 1769.52966308594], [364.147521972656, 1769.52966308594], [364.147521972656, 1770.32470703125], [363.75, 1770.48962402344], [363.352508544922, 1770.32470703125], [360.5625, 1767.53466796875], [360.5625, 1775.17712402344], [360, 1775.73962402344], [359.4375, 1775.17712402344], [359.4375, 1767.53466796875], [356.647521972656, 1770.32470703125], [355.852508544922, 1770.32470703125], [355.852508544922, 1769.52966308594], [359.602508544922, 1765.77966308594]];
			share4Path_newShape.inTangents = [[-0.21975708007812, -0.2197265625], [0, 0], [0, 0], [0.21975708007812, -0.2197265625], [0.14398193359375, 0], [0.1094970703125, 0.1102294921875], [0, 0], [0, 0], [0.31048583984375, 0], [0, 0.310546875], [0, 0], [0, 0], [0.22048950195312, 0.218994140625], [-0.22048950195312, 0.2197265625], [0, 0]];
			share4Path_newShape.outTangents = [[0, 0], [0, 0], [0.21975708007812, 0.2197265625], [-0.1094970703125, 0.1109619140625], [-0.14398193359375, 0], [0, 0], [0, 0], [0, 0.310546875], [-0.31048583984375, 0], [0, 0], [0, 0], [-0.21975708007812, 0.220458984375], [-0.22048950195312, -0.218994140625], [0, 0], [0.218994140625, -0.2197265625]];
			share4Path_newShape.closed = true;
		share4Path.setValue(share4Path_newShape);
		share4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		share4.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Path 2";
		var share4Path3 = share4.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Shape");
		var share4Path3_newShape = new Shape();
			share4Path3_newShape.vertices = [[354.218994140625, 1780.38513183594], [365.781005859375, 1780.38513183594], [365.781005859375, 1780.38513183594], [367.5, 1778.66613769531], [367.5, 1774.42712402344], [366.9375, 1773.86462402344], [366.375, 1774.42712402344], [366.375, 1778.66613769531], [365.781005859375, 1779.26013183594], [354.218994140625, 1779.26013183594], [353.625, 1778.66613769531], [353.625, 1774.42712402344], [353.0625, 1773.86462402344], [352.5, 1774.42712402344], [352.5, 1778.66613769531]];
			share4Path3_newShape.inTangents = [[-0.947998046875, 0], [0, 0], [0, 0], [0, 0.947998046875], [0, 0], [0.31048583984375, 0], [0, -0.310546875], [0, 0], [0.3277587890625, 0], [0, 0], [0, 0.3277587890625], [0, 0], [0.31048583984375, 0], [0, -0.310546875], [0, 0]];
			share4Path3_newShape.outTangents = [[0, 0], [0, 0], [0.947998046875, 0], [0, 0], [0, -0.310546875], [-0.31048583984375, 0], [0, 0], [0, 0.3277587890625], [0, 0], [-0.3277587890625, 0], [0, 0], [0, -0.310546875], [-0.31048583984375, 0], [0, 0], [0, 0.947998046875]];
			share4Path3_newShape.closed = true;
		share4Path3.setValue(share4Path3_newShape);
		share4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - Merge");
		share4.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Merge Paths 1";
		share4.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Merge Type").setValue(5);
		share4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		share4.property("ADBE Root Vectors Group").property(1).property(2).property(4).name = "Fill 1";
		share4.property("ADBE Root Vectors Group").property(1).property(2).property(4).property("ADBE Vector Fill Color").setValue([0.54117649793625,0.59607845544815,0.64313727617264,1]);
		share4.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([360,1773,0]);
		share4.property("ADBE Transform Group").property("ADBE Position").setValue([500,367.385131835938,0]);
		share4.selected = false;
	// Add Shape Layer "MATTE", varName "matte";
	var matte = tweetStyle5_comp.layers.addShape();
		matte.name = "MATTE";
		matte.label = 0;
		matte.enabled = false;
		matte.moveToEnd();
		matte.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		matte.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		matte.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		matte.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		matte.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([509.80859375,268.26171875]);
		matte.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(12);
		matte.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		matte.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		matte.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.22745098173618,0.26666668057442,0.29803922772408,1]);
		matte.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([27.96484375,-85.001953125]);
		matte.selected = false;
	// Add Shape Layer "REPLACE WITH IMAGE", varName "replaceWithImage4";
	var replaceWithImage4 = tweetStyle5_comp.layers.addShape();
		replaceWithImage4.name = "REPLACE WITH IMAGE";
		replaceWithImage4.moveToEnd();
		replaceWithImage4.trackMatteType = TrackMatteType.ALPHA;
		var replaceWithImage4_marker1 = new MarkerValue("REPLACE WITH IMAGE");
			replaceWithImage4_marker1.label = 0;
			replaceWithImage4.property("ADBE Marker").setValueAtTime(0, replaceWithImage4_marker1);
		replaceWithImage4.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		replaceWithImage4.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		replaceWithImage4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		replaceWithImage4.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		replaceWithImage4.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([509.80859375,268.26171875]);
		replaceWithImage4.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Roundness").setValue(12);
		replaceWithImage4.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		replaceWithImage4.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Fill 1";
		replaceWithImage4.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector Fill Color").setValue([0.22745098173618,0.26666668057442,0.29803922772408,1]);
		replaceWithImage4.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([27.96484375,-85.001953125]);
		replaceWithImage4.selected = false;
	// Lock Layers
		topEdge4.locked = true;
		arrow8.locked = true;
		imageMatte4.locked = true;
		avatarImage7.locked = true;

}
// Working with comp "Follow Button", varName "followButton_comp";
if (followButton_comp_populate === true) {
	// Add Shape Layer "Rectangle 151", varName "rectangle151";
	var rectangle151 = followButton_comp.layers.addShape();
		rectangle151.name = "Rectangle 151";
		rectangle151.label = 11;
		rectangle151.moveToEnd();
		rectangle151.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		rectangle151.property("ADBE Root Vectors Group").property(1).name = "Rectangle 151";
		rectangle151.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Group");
		rectangle151.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Path 1";
		var rectangle151Path = rectangle151.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Shape");
		var rectangle151Path_newShape = new Shape();
			rectangle151Path_newShape.vertices = [[-39.5, -15], [39.5, -15], [39.5, 15], [-39.5, 15]];
			rectangle151Path_newShape.closed = true;
		rectangle151Path.setValue(rectangle151Path_newShape);
		rectangle151.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Filter - RC");
		rectangle151.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Round Corners 1";
		rectangle151.property("ADBE Root Vectors Group").property(1).property(2).property(2).property("ADBE Vector RoundCorner Radius").setValue(15);
		rectangle151.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		rectangle151.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Stroke 1";
		rectangle151.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Stroke Color").setValue([0.29411765933037,0.62745100259781,0.92549020051956,1]);
		rectangle151.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Stroke Width").setValue(1);
		rectangle151.property("ADBE Transform Group").property("ADBE Position").setValue([40,16,0]);
		rectangle151.selected = false;
	var follow = followButton_comp.layers.addBoxText([48.9599990844727,18], "Follow");
		follow.name = "Follow";
		follow.label = 11;
		follow.moveToEnd();
		var follow_TextProp = follow.property("ADBE Text Properties").property("ADBE Text Document");
		var follow_TextDocument = follow_TextProp.value;
			follow_TextDocument.font = "HelveticaNeue-Bold";
			follow_TextDocument.fontSize = 15;
			follow_TextDocument.applyFill = true;
			follow_TextDocument.fillColor = [0.29412001371384,0.62745004892349,0.92548996210098];
			follow_TextDocument.applyStroke = false;
			follow_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			follow_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				follow_TextDocument.verticalScale = 1;
				follow_TextDocument.horizontalScale = 1;
				follow_TextDocument.baselineShift = 0;
				follow_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// follow_TextDocument.fauxBold = false;
				// follow_TextDocument.fauxItalic = false;
				// follow_TextDocument.allCaps = false;
				// follow_TextDocument.smallCaps = false;
				// follow_TextDocument.superscript = false;
				// follow_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				follow_TextDocument.leading = 18;
				follow_TextDocument.autoLeading = true;
			}
			follow_TextProp.setValue(follow_TextDocument);
		follow.property("ADBE Transform Group").property("ADBE Position").setValue([-0.5,2.5,0]);
		follow.selected = false;
	// Apply parents
		follow.setParentWithJump(rectangle151);

}
// Working with comp "Profile Header Image", varName "profileHeaderImage_comp";
if (profileHeaderImage_comp_populate === true) {
	// Add Shape Layer "Profile Header Image", varName "profileHeaderImage1";
	var profileHeaderImage1 = profileHeaderImage_comp.layers.addShape();
		profileHeaderImage1.name = "Profile Header Image";
		profileHeaderImage1.moveToEnd();
		profileHeaderImage1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		profileHeaderImage1.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		profileHeaderImage1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		profileHeaderImage1.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		profileHeaderImage1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([600,200]);
		profileHeaderImage1.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-64,-967.318359375]);
		profileHeaderImage1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Graphic - G-Fill");
		profileHeaderImage1.property("ADBE Root Vectors Group").property(2).name = "Gradient Fill 1";
		profileHeaderImage1.property("ADBE Root Vectors Group").property(2).property("ADBE Vector Grad End Pt").setValue([600,-200]);
		profileHeaderImage1.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-64,-967.318359375,0]);
		profileHeaderImage1.property("ADBE Transform Group").property("ADBE Position").setValue([300,101.499961853027,0]);
		profileHeaderImage1.selected = false;
}

// Remove empty Solids folder
	var tempNullComp = app.project.items.addComp("tempNullComp", 100, 100, 1, 1, 24);
	var tempNullLayer = tempNullComp.layers.addNull();
	var nullFolder = tempNullLayer.source.parentFolder;
		tempNullLayer.source.remove();
		tempNullComp.remove();
	if (nullFolder.numItems === 0)
		nullFolder.remove();


	// Apply expressions to properties
		try {
			tweetStyle1.property("ADBE Transform Group").property("ADBE Position_0").expression = "0;";
		} catch (err) {}
		try {
			tweetStyle2.property("ADBE Transform Group").property("ADBE Position_0").expression = "0;";
		} catch (err) {}
		try {
			tweetStyle3.property("ADBE Transform Group").property("ADBE Position_0").expression = "0;";
		} catch (err) {}
		try {
			tweetStyle4.property("ADBE Transform Group").property("ADBE Position_0").expression = "0;";
		} catch (err) {}
		try {
			tweetStyle5.property("ADBE Transform Group").property("ADBE Position_0").expression = "0;";
		} catch (err) {}
		try {
			tweetStyle6.property("ADBE Transform Group").property("ADBE Position_0").expression = "0;";
		} catch (err) {}
		try {
			tweetStyle7.property("ADBE Transform Group").property("ADBE Position_0").expression = "0;";
		} catch (err) {}
		try {
			name1.property("ADBE Text Properties").property("ADBE Text Document").expression = "comp(\"Twitter Desktop\").layer(\"@TwitterHandle\").name";
		} catch (err) {}
		try {
			name2.property("ADBE Text Properties").property("ADBE Text Document").expression = "comp(\"Twitter Desktop\").layer(\"Username\").name";
		} catch (err) {}
		try {
			editProfileName.property("ADBE Text Properties").property("ADBE Text Document").expression = "comp(\"Twitter Desktop\").layer(\"Username\").name";
		} catch (err) {}
		try {
			background3.property("ADBE Root Vectors Group").property(1).property(2).property(3).property("ADBE Vector Fill Color").expression = "comp(\"Twitter Desktop\").layer(\"BACKGROUND\").content(\"Rectangle 1\").content(\"Fill 1\").color";
		} catch (err) {}
		try {
			profileName.property("ADBE Text Properties").property("ADBE Text Document").expression = "comp(\"Twitter Desktop\").layer(\"Username\").name;";
		} catch (err) {}
		try {
			name9.property("ADBE Text Properties").property("ADBE Text Document").expression = "comp(\"Twitter Desktop\").layer(\"@TwitterHandle\").name";
		} catch (err) {}
		try {
			profileNameProfilename19h.property("ADBE Text Properties").property("ADBE Text Document").expression = "var username = comp(\"Twitter Desktop\").layer(\"Username\").name;" + "\n" + 
				"var handle = comp(\"Twitter Desktop\").layer(\"@TwitterHandle\").name;" + "\n" + 
				"" + "\n" + 
				File.decode("%5Busername%20+%20%22%20%22%20+%20handle%20+%20%22%20%E2%80%A2%2019h%22%5D");
		} catch (err) {}
		try {
			profileNameProfilename19h1.property("ADBE Text Properties").property("ADBE Text Document").expression = "var username = comp(\"Twitter Desktop\").layer(\"Username\").name;" + "\n" + 
				"var handle = comp(\"Twitter Desktop\").layer(\"@TwitterHandle\").name;" + "\n" + 
				"" + "\n" + 
				File.decode("%5Busername%20+%20%22%20%22%20+%20handle%20+%20%22%20%E2%80%A2%2019h%22%5D");
		} catch (err) {}
		try {
			profileNameProfilename19h2.property("ADBE Text Properties").property("ADBE Text Document").expression = "var username = comp(\"Twitter Desktop\").layer(\"Username\").name;" + "\n" + 
				"var handle = comp(\"Twitter Desktop\").layer(\"@TwitterHandle\").name;" + "\n" + 
				"" + "\n" + 
				File.decode("%5Busername%20+%20%22%20%22%20+%20handle%20+%20%22%20%E2%80%A2%2019h%22%5D");
		} catch (err) {}
		try {
			profileNameProfilename19h3.property("ADBE Text Properties").property("ADBE Text Document").expression = "var username = comp(\"Twitter Desktop\").layer(\"Username\").name;" + "\n" + 
				"var handle = comp(\"Twitter Desktop\").layer(\"@TwitterHandle\").name;" + "\n" + 
				"" + "\n" + 
				File.decode("%5Busername%20+%20%22%20%22%20+%20handle%20+%20%22%20%E2%80%A2%2019h%22%5D");
		} catch (err) {}
		try {
			profileNameProfilename19h4.property("ADBE Text Properties").property("ADBE Text Document").expression = "var username = comp(\"Twitter Desktop\").layer(\"Username\").name;" + "\n" + 
				"var handle = comp(\"Twitter Desktop\").layer(\"@TwitterHandle\").name;" + "\n" + 
				"" + "\n" + 
				File.decode("%5Busername%20+%20%22%20%22%20+%20handle%20+%20%22%20%E2%80%A2%2019h%22%5D");
		} catch (err) {}

twitterDesktop_comp.openInViewer();

return {
	compItem : twitterDesktop_comp
};

} catch (e) {
	alert (e.toString() + "\nScript File: " + File.decode(e.fileName).replace(/^.*[\|\/]/, '') + 
		"\nFunction: " + arguments.callee.name + 
		"\nError on Line: " + e.line.toString());
}
app.endUndoGroup();


function findProjectItem(searchFolder, recursion, userData) {
	var folderItem;
	for (var i = 1, il = searchFolder.items.length; i <= il; i++) {
		folderItem = searchFolder.items[i];
		if (propertiesMatch(folderItem, userData)) {
			return folderItem;
		} else if (recursion === true && folderItem instanceof FolderItem && folderItem.numItems > 0) {
			var item = findProjectItem(folderItem, recursion, userData);
			if (item !== null) return item;
		}
	}
	return null;
}

function propertiesMatch(projectItem, userData) {
	if (typeof userData === 'undefined') return true;

	for (var propertyName in userData) {
		if (!userData.hasOwnProperty(propertyName)) continue;

		if (isFunctionObject(userData[propertyName])) {
			var functionConstructor = new Function(
				userData[propertyName].arguments,
				userData[propertyName].body);
			if (!functionConstructor(projectItem)) {
				return false;
			}
		} else {
			if (typeof userData[propertyName] !== typeof projectItem[propertyName]) {
				return false;
			}

			if (isArray(userData[propertyName]) && isArray(projectItem[propertyName])) {
				if (userData[propertyName].toString() !== projectItem[propertyName].toString()) {
					return false;
				}
			} else if (isObject(userData[propertyName]) && isObject(projectItem[propertyName])) {
				if (!propertiesMatch(projectItem[propertyName], userData[propertyName])) {
					return false;
				}
			} else if (projectItem[propertyName] !== userData[propertyName]) {
				return false;
			}
		}
	}
	return true;

	function isFunctionObject(object) {
		// Object needs to be of Object type;
		if (!isObject(object)) return false;

		// Object needs to have a 'type' property equal to string 'function';
		if (!object.hasOwnProperty('type') || !isString(object.type) || object.type !== 'function') {
			return false;
		}

		// Object needs to have an 'arguments' property of Array type;
		if (!object.hasOwnProperty('arguments') || !isArray(object.arguments)) {
			return false;
		}

		// Object needs to have a 'body' property of String type;
		if (!object.hasOwnProperty('body') || !isString(object.body)) {
			return false;
		}

		return true;
	}
}

function isArray(object) {
	return Object.prototype.toString.apply(object) === '[object Array]';
}

function isObject(object) {
	return typeof object === 'object';
}

function isString(value) {
	return typeof value === 'string' || value instanceof String;
}

function applyEasing(property, keyTimesArray, easeInArray, easeOutArray, keyInterpolationArray) {
	var easeIn, easeOut, easeIn0, easeOut0, easeIn1, easeOut1, easeIn2, easeOut2;
	for (var i = 0, il = keyTimesArray.length; i < il; i ++) {
		if (property.propertyValueType === PropertyValueType.TwoD) {
			easeIn0 = new KeyframeEase(easeInArray[0][i][0], easeInArray[1][i][0]);
			easeOut0 = new KeyframeEase(easeOutArray[0][i][0], easeOutArray[1][i][0]);
			easeIn1 = new KeyframeEase(easeInArray[0][i][1], easeInArray[1][i][1]);
			easeOut1 = new KeyframeEase(easeOutArray[0][i][1], easeOutArray[1][i][1]);
			property.setTemporalEaseAtKey(i+1, [easeIn0, easeIn1], [easeOut0, easeOut1]);
		} else if (property.propertyValueType === PropertyValueType.ThreeD) {
			easeIn0 = new KeyframeEase(easeInArray[0][i][0], easeInArray[1][i][0]);
			easeOut0 = new KeyframeEase(easeOutArray[0][i][0], easeOutArray[1][i][0]);
			easeIn1 = new KeyframeEase(easeInArray[0][i][1], easeInArray[1][i][1]);
			easeOut1 = new KeyframeEase(easeOutArray[0][i][1], easeOutArray[1][i][1]);
			easeIn2 = new KeyframeEase(easeInArray[0][i][2], easeInArray[1][i][2]);
			easeOut2 = new KeyframeEase(easeOutArray[0][i][2], easeOutArray[1][i][2]);
			property.setTemporalEaseAtKey(i+1, [easeIn0, easeIn1, easeIn2], [easeOut0, easeOut1, easeOut2]);
		} else {
			easeIn = new KeyframeEase(easeInArray[0][i], easeInArray[1][i]);
			easeOut = new KeyframeEase(easeOutArray[0][i], easeOutArray[1][i]);
			if (keyInterpolationArray[1][i] !== KeyframeInterpolationType.HOLD) {
				property.setTemporalEaseAtKey(i+1, [easeIn], [easeOut]);
			} else {
				property.setTemporalEaseAtKey(i+1, [easeIn]);
			}
		}
		property.setInterpolationTypeAtKey(i+1, keyInterpolationArray[0][i], keyInterpolationArray[1][i]);
	}
}

}

