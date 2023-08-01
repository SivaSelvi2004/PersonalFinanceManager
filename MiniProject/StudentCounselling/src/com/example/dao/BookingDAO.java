package com.example.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

//import com.example.entity.Appointment;
import com.example.entity.Booking;
import com.example.interfc.BookingInterface;
import com.example.util.DBConnection;

public  class BookingDAO implements BookingInterface{
	public void saveOrUpdateBooking(Booking booking) {
	    String query = "";
	    if (booking.getBookingId() == 0) {
	        String checkQuery = "SELECT appointmentId FROM appointments WHERE appointmentId = ?";
	        try (Connection connection = DBConnection.getConnection();
	             PreparedStatement checkStatement = connection.prepareStatement(checkQuery)) {
	            checkStatement.setInt(1, booking.getAppointmentId());
	            ResultSet resultSet = checkStatement.executeQuery();

	            if (!resultSet.next()) {
	                System.out.println();
	                return;
	            }
	            connection.close();
	        }
	        catch (SQLException e) {
	            e.printStackTrace();
	            return;
	        }

	        query = "INSERT INTO bookings (appointmentId, bookingDay, bookingSlot, studentId) VALUES (?, ?, ?, ?)";
	    } else {
	        query = "UPDATE bookings SET appointmentId = ?, bookingDay = ?, bookingSlot = ?, studentId = ? WHERE bookingId = ?";
	    }

	    try (Connection connection = DBConnection.getConnection();
	         PreparedStatement statement = connection.prepareStatement(query)) {
	        statement.setInt(1, booking.getAppointmentId());
	        statement.setString(2, booking.getBookingDay());
	        statement.setString(3, booking.getBookingSlot());
	        statement.setInt(4, booking.getStudentId());

	        if (booking.getBookingId() != 0) {
	            statement.setInt(5, booking.getBookingId());
	        }

	        statement.executeUpdate();
            connection.close();
	    } 
	    catch (SQLException e) {
	        e.printStackTrace();
	    }
	}

    public void deleteBookingByAppointmentId(int appointmentId) {
        String query = "DELETE FROM bookings WHERE appointmentId = ?";
        try (Connection connection = DBConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, appointmentId);
            statement.executeUpdate();
            connection.close();
        } 
        catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
