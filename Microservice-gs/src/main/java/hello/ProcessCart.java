package hello;

import java.util.Properties;  
import javax.mail.*;  
import javax.mail.internet.*;
import java.util.*;
  
public class ProcessCart {  
	public static String sendMail(String itemsList, String userEmail) {  
 		String status = "{status: \"SUCCESS\"}";
		final String username = "gstoraonline@gmail.com";
		final String password = "Delish@2";

		Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "587");

		Session session = Session.getInstance(props,
		  new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(username, password);
			}
		  });

		try {
			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress("sales@GSOnline.com"));
			message.setRecipients(Message.RecipientType.TO,
				InternetAddress.parse(userEmail));
			message.setSubject("Gadget Store: Shopping Cart Status");
			message.setText("Your Shopping Cart: \n\t" + itemsList + "\n is submitted successfully.");
			Transport.send(message);

			System.out.println("Done");

		} catch (MessagingException e) {
			status = "{status: \"FAILURE\"}";
			throw new RuntimeException(e);
		}
		return status;
	}
}

		/*
		String host="mail.gmx.com";  
		final String user="niranjan-reddy@gmx.com";//change accordingly  
		final String password="Sarathi@123";//change accordingly  
    
		String to = userId;//change accordingly 
  
   //Get the session object  
		Properties props = new Properties();  
		props.put("mail.smtp.host",host);  
		props.put("mail.smtp.auth", "true");  
     
		Session session = Session.getDefaultInstance(props,  
		new javax.mail.Authenticator() {  
			protected PasswordAuthentication getPasswordAuthentication() {  
				return new PasswordAuthentication(user,password);  
			}  
		});  
  
   //Compose the message  
		try {  
			MimeMessage message = new MimeMessage(session);  
			message.setFrom(new InternetAddress(user));  
			message.addRecipient(Message.RecipientType.TO,new InternetAddress(to));  	
			message.setSubject("Shopping Cart : Gadget Store");  	
			message.setText("Your Shopping Cart: \n\t“ + itemsList + “\n is submitted successfully.");  
	       
	    //send the message  
			Transport.send(message);  
	  
			System.out.println("message sent successfully...");  
   
		} catch (MessagingException e) {
			e.printStackTrace();
		}  
		return status;
	}  
}  */
