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


## Database Server setup

The database server is an Amazon RDS micro server running MySQL 5.7.23.
The server was setup using the amazon launch wizard with the default settings.

The following modifications are needed to allow incoming connections for the Development team and Back-end server:

1. Click `Edit` on the inbound security group rules page.
2. Click `Add Rule`
3. Select the following rules: `Type: MYSQL/Aurora` , `Protocol: TCP` , `Port Range: 3306` , `Source: Custom 0.0.0.0/0`
4. Click `Save`
