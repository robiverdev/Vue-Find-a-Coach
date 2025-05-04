package models

type Coach struct {
	ID int64
	UserID int64
	FirstName string `binding:"required"`
	LastName string `binding:"required"`
	Areas []string `binding:"required"`
	Description string `binding:"required"`
	HourlyRate int `binding:"required"`
}