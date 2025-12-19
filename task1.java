// Online Java Compiler
// Use this editor to write, compile and run your Java code online
import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();
        s=s.toLowerCase().replaceAll("[^a-z]"," ");
        String[] words=s.split(" ");
        for(String word:words){
            if(isPalindrome(word)){
                System.out.println(word);
            }
        }
    }
    public static boolean isPalindrome(String input){
        int left=0;
        int right=input.length()-1;
        while(left<right){
            if(input.charAt(left)!=input.charAt(right)){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}