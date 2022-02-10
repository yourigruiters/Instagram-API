// jQuery Ajax for feed Instagram Graph API
if ($("#instagram-feed1").length != 0) {
  var token =
    "IGQVJVcmpiNXFWNFNNazdXcm90UWk3akgxeXhyX0NVbkE0Q0RMRDF3ZA28tOEM1dUJEUHJZAc0paNFdGTXNqek9QR2xDWjVORndGQ1NKLTgyOHBJSlFQdXFVMzk4NV95eDNuNjhHc1FPVnhRSlpYS1g3bQZDZD";
  var fields =
    "id,media_type,media_url,thumbnail_url,timestamp,permalink,caption";
  var limit = 6; // Set a number of display items

  $.ajax({
    url:
      "https://graph.instagram.com/me/media?fields=" +
      fields +
      "&access_token=" +
      token +
      "&limit=" +
      limit,
    type: "GET",
    success: function (response) {
      console.log(response);
      for (var x in response.data) {
        var link = response.data[x]["permalink"],
          caption = response.data[x]["caption"],
          image = response.data[x]["media_url"],
          image_video = response.data[x]["thumbnail_url"],
          html = "";
        if (response.data[x]["media_type"] == "VIDEO") {
          html += '<div class="instagram_new">';
          html +=
            '<a class="insta-link" href="' +
            link +
            '" rel="noopener" target="_blank">';
          html +=
            '<img src="' +
            image_video +
            '" loading="lazy" alt="' +
            caption +
            '" class="insta-image" />';
          html += "</a>";
          html += "</div>";
        } else {
          html += '<div class="instagram_new">';
          html +=
            '<a class="insta-link" href="' +
            link +
            '" rel="noopener" target="_blank">';
          html +=
            '<img src="' +
            image +
            '" loading="lazy" alt="' +
            caption +
            '" class="insta-image" />';
          html += "</a>";
          html += "</div>";
        }
        $("#instagram-feed1").append(html);
      }
    },
    error: function (data) {
      console.log(data);
      var html = '<div class="class-no-data">No Images Found</div>';
      $("#instagram-feed1").append(html);
    },
  });
}
