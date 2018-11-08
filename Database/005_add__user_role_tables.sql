USE shmoozed;



-- Add Tables

CREATE TABLE User_Role (
);

CREATE TABLE Role (
);



-- Foreign key additions

ALTER TABLE User_Role
ADD FOREIGN KEY (User_Id) 
REFERENCES User(User_Id);



