package STRT_WJ_025;

public class MutableStringPOC {

	static void modifyString(String s) {
    	s = s+"hacked";
    }
    public static void main(String[] args) throws InterruptedException {

//    	String
    	System.out.println("String - Immutable");
    	String s = "Hello";
    	System.out.println("Befor: "+s+" | Hashcode: "+s.hashCode());
    	s = s.concat("Rushi");
    	System.out.println("After: "+s+" | Hashcode: "+s.hashCode());
    	
//    	StringBuilder
        System.out.println("StringBuilder - Mutable");
        StringBuilder sb = new StringBuilder("Hello");
        System.out.println("Before: "+sb+" | Hashcode: "+sb.hashCode());
        sb.append(" Rushikesh");
        sb.insert(5, " Sonar");
        sb.delete(5, 11);
        System.out.println("After: "+sb+" | Hashcode: "+sb.hashCode());
        
//        StringBuffer
        System.out.println("StringBuffer - Mutable");
        StringBuffer sf = new StringBuffer("Hello");
        System.out.println("Before: "+sf+" | Hashcode: "+sf.hashCode());
        sb.append(" World");
        sb.insert(5, " Java");
        sb.delete(5, 11);
        System.out.println("After: "+sf+" | Hashcode: "+sf.hashCode());
        
//        Performance
        
        System.out.println("Performance");
        
        long startS = System.nanoTime();
        String sper = "";
        for(int i = 0; i< 10000; i++) {
        	sper = sper + "A";
        }
        long endS = System.nanoTime();
        
        
        long startSB = System.nanoTime();
        StringBuilder sbper = new StringBuilder();
        for(int i = 0; i< 10000; i++) {
        	sbper.append("i");
        }
        long endSB = System.nanoTime();
        
        long startSF = System.nanoTime();
        StringBuffer sfper = new StringBuffer();
        for(int i = 0; i< 10000; i++) {
        	sfper.append("i");
        }
        long endSF = System.nanoTime();
        
        System.out.println("String : "+(endS - startS)+ " ns");
        System.out.println("String Builder : "+(endSB - startSB)+ " ns");
        System.out.println("String Buffer : "+(endSF - startSF)+ " ns");
     
        
//        Security
        System.out.println("Security");
        String password = "admin123";
        System.out.println("Before: "+password);
        modifyString(password);
        System.out.println("After: "+password);
        //String is secure because it cantnot be modified.
      
//        Multithread and Thread safety
        System.out.println("Multithread and Thread safety");
        
        StringBuilder sbuild = new StringBuilder();
        
        Thread t1 = new Thread(()->{
        	for(int i= 0; i<1000; i++) {
        		sbuild.append("a");
        	}
        });
        
        Thread t2 = new Thread(()->{
        	for(int i= 0; i<1000; i++) {
        		sbuild.append("b");
        	}
        });
        
        t1.start();
        t2.start();
        t1.join();
        t2.join();
        
        System.out.println("StringBuilder length :"+sbuild.length());
//        data can be inconsistent
        
        StringBuffer sbuff = new StringBuffer();
        
        Thread t3 = new Thread(()->{
        	for(int i= 0; i<1000; i++) {
        		sbuff.append("a");
        	}
        });
        
        Thread t4 = new Thread(()->{
        	for(int i= 0; i<1000; i++) {
        		sbuff.append("b");
        	}
        });
        
        t3.start();
        t4.start();
        t3.join();
        t4.join();
        
        System.out.println("StringBuffer length :"+sbuff.length());
//        data can be inconsistent
        
    }
}

