router parameter style
-----------------------

1. /about/:name -> set route path
2. /about/name? -> has parameter?

ctx.params : look up category / specific data
ctx.query  : select few options among many options.


mongoose
---------------
@ schema : define varible name and type  
@ model  : schema instance  
@ DB     : CRUD using model  



cookies
---------------
An HTTP cookie (web cookie, browser cookie) is a small piece of data that a server sends to the user's web browser. 
The browser may store it and send it back with the next request to the same server. Typically, it's used to tell if two requests came from the same browser — keeping a user logged-in, for example. 
It remembers stateful information for the stateless HTTP protocol.

Cookies are mainly used for three purposes:

1. Session management
Logins, shopping carts, game scores, or anything else the server should remember
2. Personalization
User preferences, themes, and other settings
3. Tracking
Recording and analyzing user behavior


middleware
-----------------------
(ctx, next) =>{}  
Middleware is computer software that provides services that application software can use in addition to the services provided by the operating system. Talked about as "software glue". 
Application software must be flexible, easy to scale, and easy to scale, and there is no need to rebuild a platform between developers of different types to meet these advantages. 
Examples include database systems, electronic communication software, message and query processing software.


checking point in register, login page
-------------------------------------------
Register : 
1. username exist?   
              (if exist : error 409)  
              new user object , set password, serialized(hashed password)
2. schema is valid?  
              if not : syntax error 400
              
Login    :
1. input Id & Password?  
              if not : error 401
2. valid password?  
              if not : error 401
           
