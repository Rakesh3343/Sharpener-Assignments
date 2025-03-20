s_1 = "the quick brown fox jumps over the lazy dog"
s_2 = "hello world"

al="abcdefghijklmnopqrstuvwxyz"
alphabets=[]
for i in al:
    alphabets.append(i)
# print(alphabets)

s=[]
for i in s_1:
    if i!=" ":
        s.append(i)
# unique_s=list(set(s))
if sorted(list(set(s)))==sorted(list(set(alphabets))):
    print(f"it is pangram")
else:
    print("not a pangram")


# for i in unique_s:
#     if i not in alphabets:
#         print("not a pangram")
#         break
# else:
#     print("pangram")