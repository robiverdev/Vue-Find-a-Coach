package models

type Request struct {
	ID int64
	CoachID int64
	Email string `binding:"required"`
	Message string `binding:"required"`
}