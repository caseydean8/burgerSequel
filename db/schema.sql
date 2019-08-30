/* Create and use the burgers_db */
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;


/* Create a table burgers*/
CREATE TABLE burgers (
	id INT( 11 ) AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR( 255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	/* Set ID as primary key */
	PRIMARY KEY ( id )
);