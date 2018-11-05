Hosting Docs Go Here...

## Front-end Server setup

The Front-end server is an Amazon Linux AMI micro-ec2 instance. The instance can be setup using [this guide](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/install-LAMP.html)

The following modifications are needed for Angular routing:

1. Create a .htaccess file in the /var/www/html/ directory with the following code:
 `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>`

2. Modify the httpd.conf file in the /etc/httpd/conf/ directory with the following:

  Change:
  `<Directory "/var/www">
      AllowOverride None`

  To:
  `<Directory "/var/www">
      AllowOverride All`


  Also change:
  `<Directory "/var/www/html">
    AllowOverride None`

  To:
  `<Directory "/var/www/html">
    AllowOverride All`