package com.example.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.example.entity.Appointment;
import com.example.interfc.AppointmentInterface;
import com.example.util.DBConnection;

public class AppointmentDAO implements AppointmentInterface {
	
	public void saveOrUpdateAppointment(Appointment appointment) {
        String query;
        if (appointment.getAppointmentId() == 0) {
            query = "INSERT INTO appointments (appointmentDay, appointmentSlot, counselorId, studentId) VALUES (?, ?, ?, ?)";
        } else {
            query = "UPDATE appointments SET appointmentDay = ?, appointmentSlot = ?, counselorId = ?, studentId = ? WHERE appointmentId = ?";
        }

        try (Connection connection = DBConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, appointment.getAppointmentDay());
            statement.setString(2, appointment.getAppointmentSlot());
            statement.setInt(3, appointment.getCounselorId());
            statement.setInt(4, appointment.getStudentId());

            if (appointment.getAppointmentId() != 0) {
                statement.setInt(5, appointment.getAppointmentId());
            }

            statement.executeUpdate();
            connection.close();
        } 
        catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void deleteAppointmentById(int appointmentId) {
        String query = "DELETE FROM appointments WHERE appointmentId = ?";
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

    public List<Appointment> getAppointmentsByStudent(int studentId) {
        List<Appointment> appointments = new ArrayList<>();
        String query = "SELECT * FROM appointments WHERE studentId = ?";
        try (Connection connection = DBConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, studentId);
            try (ResultSet resultSet = statement.executeQuery()) {
                while (resultSet.next()) {
                    int id = resultSet.getInt("appointmentId");
                    String day = resultSet.getString("appointmentDay");
                    String slot = resultSet.getString("appointmentSlot");
                    int counselorId = resultSet.getInt("counselorId");
                    appointments.add(new Appointment(id, day, slot, counselorId, studentId));
                }
            }
            connection.close();
        } 
        catch (SQLException e) {
            e.printStackTrace();
        }
        return appointments;
    }

    public List<Appointment> getAppointmentsByCounselor(int counselorId) {
        List<Appointment> appointments = new ArrayList<>();
        String query = "SELECT * FROM appointments WHERE counselorId = ?";
        try (Connection connection = DBConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, counselorId);
            try (ResultSet resultSet = statement.executeQuery()) {
                while (resultSet.next()) {
                    int id = resultSet.getInt("appointmentId");
                    String day = resultSet.getString("appointmentDay");
                    String slot = resultSet.getString("appointmentSlot");
                    int studentId = resultSet.getInt("studentId");
                    appointments.add(new Appointment(id, day, slot, counselorId, studentId));
                }
            }
            connection.close(); 
        } 
        catch (SQLException e) {
            e.printStackTrace();
        }
        return appointments;
    }

    @Override
    public boolean isSlotBooked(String day, String slot, int counselorId) {
        String query = "SELECT COUNT(*) AS count FROM appointments WHERE appointmentDay = ? AND appointmentSlot = ? AND counselorId = ?";
        try (Connection connection = DBConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, day);
            statement.setString(2, slot);
            statement.setInt(3, counselorId);
            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet.next()) {
                    int count = resultSet.getInt("count");
                    return count > 0;
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }

    public Appointment getAppointmentsById(int appointmentId) {
        Appointment appointment = null;
        String query = "SELECT * FROM appointments WHERE appointmentId = ?";
        try (Connection connection = DBConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, appointmentId);
            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet.next()) {
                    String day = resultSet.getString("appointmentDay");
                    String slot = resultSet.getString("appointmentSlot");
                    int counselorId = resultSet.getInt("counselorId");
                    int studentId = resultSet.getInt("studentId");
                    appointment = new Appointment(appointmentId, day, slot, counselorId, studentId);
                }
            }
            connection.close();
        } 
        catch (SQLException e) {
            e.printStackTrace();
        }
        return appointment;
    }


}
