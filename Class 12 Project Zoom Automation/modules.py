# importing dependencies
import csv
import datetime
import webbrowser

# function to perform read operations
def read_operation(timings_file, tt_file, links_file):

    def read_tt(file):
        reader = csv.reader(open(file))
        result = []
        for row in reader:
            result.append(row[0])
        return(result)
    def read_time(file):
        reader = csv.reader(open(file))
        result = []
        for row in reader:
            result.append(row[0])
        return(result)
    
    def current_time():
        # calculating current time
        minutes_now = datetime.datetime.now().minute
        hours_now = datetime.datetime.now().hour
        time_tuple = hours_now, minutes_now
        time_now = list(time_tuple)
        
        return time_now
        
    def find_block(timings_file,tt_file):
            
        time_tup = current_time()

        minutes_now = time_tup[1]
        hours_now = time_tup[0]

        time_now = hours_now * 100 + minutes_now


        # Defining block timings
        time_dict = read_time(timings_file)
       

        #this function returns the block number
        def find():
            for i in range(len(time_dict)):
                if time_now <= int(time_dict[i]):
                    return i-1

            return -2
        block_num = find()
        tt_list = read_tt(tt_file)
        return block_num,tt_list

    def block_name(timings_file,tt_file):
        tup = find_block(tt_file=tt_file, timings_file=timings_file)
        if tup[0] >=0:
            name_of_block = tup[1][tup[0]]
        else:
            name_of_block = "CT Block"  
        return name_of_block

    def find_link(links_file):
        reader = csv.DictReader(open(links_file))
        result = {}
        for row in reader:
            for column, value in row.items():
                result.setdefault(column, []).append(value)
        clean_result = {}
        for item in result:
            clean_result[item] = result[item][0]
        return clean_result

    def ask_user(timings_file,tt_file,links_file):
        class_names = find_link(links_file)
        x = block_name(timings_file=timings_file, tt_file=tt_file)
        time_tup = current_time()
        minutes_now = time_tup[1]
        hours_now = time_tup[0]
        time = str(hours_now) + ":" + str(minutes_now)
        print("Welcome, The Time is "+ time+". It is Time For "+ x +" Class. Press Enter To continue to "+x+" class or Type the name of the class you want to attend . .")
        user_input = input()
        
        if user_input == "":
            selected_class = x
        else:
            selected_class = user_input.capitalize()
            if selected_class not in class_names:
                print("Given input is in incorrect form. Try Again . . \n")
                return ask_user(timings_file, tt_file, links_file)
        return selected_class

    def open_link(timings_file,tt_file,links_file):
        class_name = ask_user(timings_file, tt_file,links_file)
        class_link = find_link(links_file)

        webbrowser.open(class_link[class_name])
    open_link(timings_file, tt_file, links_file)

def configure(timings_file, tt_file, links_file):

    def meetings_name_configure():
        meeting_list = []
        try:
            no_of_meetings = int(input("How Many Meetings do you have in a day ? : "))
        except :
            input("Enter a valid integer . . (Press Enter To retry)")
            full_configure(timings_file, tt_file, links_file)
        for item in range(no_of_meetings):
            inp = input("Enter proper name of the meeting "+str(item+1)+" : ")
            inp = inp.capitalize()
            list.append(meeting_list, inp)
        return meeting_list

    def full_configure():
        meeting_list = meetings_name_configure()
        print("Enter the time of meetings in the format in 24 hour format \n \n If Time is 1:00PM, write 1300 \n")
        time_list = []
        for item in range(len(meeting_list)):
            inp = input("Enter starting time of "+meeting_list[item]+" meeting : ")
            list.append(time_list, inp)
        with open(timings_file, mode='w',newline="") as file:
            cursor = csv.writer(file)
            for i in range(len(time_list)):
                lst = [time_list[i]]
                cursor.writerow(lst)
        links_dict = {}
        for item in range(len(meeting_list)):
            inp = input("Enter meeting url of "+meeting_list[item]+" meeting : ")
            links_dict[meeting_list[item]] = inp
        def_link = input("Enter meeting url of CT Block (default meeting when there is no meeting) : ")
        with open(links_file, mode='w',newline="") as file:
            cursor = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
            dict_keys = []
            for i in links_dict:
                dict_keys.append(i)
            dict_keys.append("CT Block")
            cursor.writerow(dict_keys)
            dict_values = []
            for i in links_dict:
                dict_values.append(links_dict[i])
            dict_values.append(def_link)
            cursor.writerow(dict_values)
        main_func()

    def start_configure(timings_file, tt_file, links_file):
        print("Entering Configure mode . . \n")
        full_configure(timings_file, tt_file, links_file)
       
    start_configure(timings_file, tt_file, links_file)

def main_func(timings_file,tt_file,links_file):
    print("Welcome to Link Automation App Made By Nikhil Sheoran. Using this app you can automate your online classes or office meetings to start a meeting according to you time table.")
    print()
    print("To Start - Press 1 And Enter")
    print("To Configure - Press 2 and Enter")
    user_input = int(input("Enter your input here : "))
    if user_input == 1:
        read_operation(timings_file, tt_file, links_file)
    elif user_input == 2:
        configure(timings_file, tt_file, links_file)
    else:
        input("Your input Doesn't match any required format. Press Enter To Retry . . .")
        main_func(timings_file, tt_file, links_file)